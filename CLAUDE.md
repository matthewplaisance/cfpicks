# cfpicks – weekly handoff

College football pick'em site. Static front end (webpack bundles in `dist/`) backed by
Firebase Realtime Database. Each week the admin loads a new slate of games, the site
shows them on the picks page (`profile.html`) and the results grid (`master.html`), and
`src/js/live.js` pulls live scores from ESPN to fill in winners and the tiebreaker.

## Weekly update checklist

Run from the repo root. Week N below means the new week (week 8 was loaded on 2026-10-21).

1. **Spreadsheet** – the user edits `data/import.xlsx` by hand. Columns: `date`
   (Central time, naive), `away`, `home`. One row per game, in display order.
   Type acronyms in ALL CAPS (LSU, BYU, OU, USC, UCF); the importer keeps 1–4 letter
   all-caps words as-is and title-cases everything else.

2. **Tiebreaker** – edit the constants near the bottom of `data/import.py`:
   - `tb_time_str` = kickoff of the tiebreaker game, Central, `"YYYY-MM-DD HH:MM:SS"`.
   - `TB_GAME` = the schedule key of that game. Keys are `game1..gameN` in spreadsheet
     row order, so row index 9 (0-based) is `game10`. Print the sheet to confirm.
   - `TB_TYPE` = `"margin"` (team points minus opponent) or `"total"` (home + away).
   - `TB_TEAM` = team name for margin type, exactly as it appears in the sheet.
   - The `"home"` string in `res["tiebreaker"]` is the question shown to users; update
     its wording if the team or type changes.
   - Set `TB_GAME = None` to go back to entering the tiebreaker result by hand.

3. **Run the import**
   ```
   python data/import.py
   ```
   Writes `data/imports.json`: `{ game1: {...}, ..., tiebreaker: {...} }` with unix
   `time`, `humanDate`, and an `espnId` per game. Watch for
   `WARNING: no ESPN match for ...`; fix the team spelling in the sheet or add an alias
   to `ALIASES` in `import.py` (mirror it in `src/js/live.js`). Verify with:
   ```
   python -c "import json; d=json.load(open('data/imports.json')); print(d['tiebreaker']); print([k for k,v in d.items() if k!='tiebreaker' and 'espnId' not in v])"
   ```
   The last list should be empty.

4. **Load into Firebase** – the contents of `data/imports.json` go into the database at
   `schedule/weekN`. There is no script for this step in the repo; the user does it
   (Firebase console import or paste). Confirm with the user before assuming it is done.

5. **Bump the week in the pages** (the user often does this before asking):
   - `src/pages/master.html`: the hidden first `<option>` in `#weekSelect` and a new
     visible `<option value="weekN">Week N</option>` at the end of the list.
   - `src/pages/profile.html`: the `<h3 id="selected-week">Week N</h3>` heading.
     `profile.js` reads this text to decide which `schedule/weekN` to load.

6. **Rebuild** so `dist/` picks up the page changes:
   ```
   npx webpack
   ```
   `dist/` is committed; the site serves from it.

7. **Commit** when the user asks. Convention is a short message like `week8`.
   Typical files: `data/import.py`, `data/import.xlsx`, `data/imports.json`,
   `src/pages/master.html`, `src/pages/profile.html`, `dist/master.html`,
   `dist/profile.html` (plus any `dist/*.bundle.mjs` that changed).

## Data model (Firebase RTDB)

- `schedule/weekN/gameK` – `{ away, home, time, humanDate, espnId }`
- `schedule/weekN/tiebreaker` – `{ home (question text), time, humanDate, game, type, team }`
- `users/<uid>/weekN/gameK` – `{ pick, points }`; `users/<uid>/weekN/tb` – `{ pick }`
- `results/weekN/gameK` – winning team name; `results/weekN/tb` – tiebreaker number
- `admins/<uid>: true` – lets that session write ESPN finals into `results`
  (see `data/rules.json`).

## Gotchas

- `import.py` runs from the repo root; paths are relative (`data/import.xlsx`).
- Times: spreadsheet is Central; `time` in JSON is UTC unix seconds; ESPN dates are
  looked up by Eastern calendar day.
- Team names must match between the sheet, the picks users save, and ESPN
  (`location` / `abbreviation` / `shortDisplayName` / `displayName`). The `normalize`
  function and `ALIASES` map exist in both `data/import.py` and `src/js/live.js`; keep
  them in sync.
- `master.js` `currentWeek()` falls back to `"Week 13"` when the select is on `default`;
  harmless but do not remove.
- `data/games.json`, `src/py/html.py`, `reset_league.py`, `fb.py` are older one-off
  tools (prior seasons, league reset) and are not part of the weekly flow.
