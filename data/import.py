import pandas as pd
from datetime import datetime
import pytz
import json
import re
import urllib.request

# ---- ESPN matching (mirrors src/js/live.js) --------------------------------
ESPN = "https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard"
ALIASES = {
    "ou": "oklahoma", "unc": "northcarolina", "ut": "texas", "uga": "georgia",
    "psu": "pennstate", "osu": "ohiostate", "msu": "michiganstate", "fsu": "floridastate",
    "tamu": "texasaandm", "texasam": "texasaandm", "miss": "olemiss",
    "ncarolina": "northcarolina", "scarolina": "southcarolina", "wvirginia": "westvirginia",
    "tennesse": "tennessee", "orgeon": "oregon",
}

def normalize(name):
    n = str(name or "").lower().strip().replace("&", " and ")
    n = re.sub(r"\bst\.?$", "state", n)
    n = re.sub(r"[^a-z0-9]", "", n)
    return ALIASES.get(n, n)

def espn_events(dates):
    events = []
    for d in sorted(set(dates)):
        with urllib.request.urlopen(f"{ESPN}?dates={d}&groups=80&limit=300", timeout=20) as r:
            events += json.load(r).get("events", [])
    return events

def team_matches(name, competitor):
    t = competitor["team"]
    cands = {normalize(t.get(k)) for k in ("location", "abbreviation", "shortDisplayName", "displayName")}
    return normalize(name) in cands

def find_espn_id(game, events):
    partial = None
    for ev in events:
        comp = ev["competitions"][0]
        home = next(c for c in comp["competitors"] if c["homeAway"] == "home")
        away = next(c for c in comp["competitors"] if c["homeAway"] == "away")
        h, a = team_matches(game["home"], home), team_matches(game["away"], away)
        if h and a:
            return ev["id"]
        if (h or a) and partial is None:
            ev_time = datetime.fromisoformat(ev["date"].replace("Z", "+00:00")).timestamp()
            if abs(ev_time - game["time"]) < 86400:
                partial = ev["id"]
    return partial

cdt = pytz.timezone('America/Chicago')
df = pd.read_excel('data\import.xlsx')

date_format = "%Y-%m-%d %H:%M:%S"
df['time'] = df['date'].apply(lambda x: int(cdt.localize(x).astimezone(pytz.utc).timestamp()))
df['away'] = df['away'].str.title()
df['home'] = df['home'].str.title()

df['game'] = [f'game{idx + 1}' for idx in df.index]

df['humanDate'] = df['date'].apply(lambda x: x.strftime("%b %d %H:%M"))
print(df)
df = df.drop(['date'],axis=1)
#df.drop(['date'],axis=1).to_json('data/imports.json',orient='records')
data = df.to_dict(orient='records')
print(data)
res = {}
for obj in data:
    game = obj['game']
    del obj['game']
    res[game] = obj

tb_time_str = "2026-10-17 11:00:00"
dt_local = cdt.localize(datetime.strptime(tb_time_str, "%Y-%m-%d %H:%M:%S"))
tb_unix = int(dt_local.astimezone(pytz.utc).timestamp())

# Tiebreaker: `game` is the schedule key it refers to; `type` is "margin"
# (team points minus opponent points, needs `team`) or "total" (home + away).
# Leave TB_GAME = None to keep entering the tiebreaker result by hand.
TB_GAME = "game2"
TB_TYPE = "margin"
TB_TEAM = "Texas"

res["tiebreaker"] = {
    "home": "How many points will Texas win by? (Negative for losses by)",
    "time": tb_unix,
    "humanDate": dt_local.strftime("%b %d %H:%M %Z"),
}
if TB_GAME:
    res["tiebreaker"]["game"] = TB_GAME
    res["tiebreaker"]["type"] = TB_TYPE
    if TB_TYPE == "margin":
        res["tiebreaker"]["team"] = TB_TEAM

# Attach ESPN event ids so the live scoreboard matches games exactly.
eastern = pytz.timezone("America/New_York")
try:
    dates = [datetime.fromtimestamp(g["time"], eastern).strftime("%Y%m%d")
             for k, g in res.items() if k != "tiebreaker"]
    events = espn_events(dates)
    for k, g in res.items():
        if k == "tiebreaker":
            continue
        eid = find_espn_id(g, events)
        if eid:
            g["espnId"] = eid
        else:
            print(f"WARNING: no ESPN match for {k}: {g['away']} at {g['home']}")
except Exception as exc:
    print(f"WARNING: ESPN lookup skipped ({exc}); live scores will match by team name")

with open("data/imports.json","w") as f: json.dump(res,f)