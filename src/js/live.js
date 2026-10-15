// live.js — live college football scores from ESPN's public scoreboard,
// matched to the pool schedule stored in Firebase.
//
// Each schedule game is { away, home, time (unix seconds), humanDate, espnId? }.
// Picks and results store the exact `away` / `home` strings, so every winner
// this module reports is one of those strings, never an ESPN name.

const ESPN_SCOREBOARD =
  "https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard";

// Pool shorthand -> ESPN location (after normalisation). Extend as needed.
const ALIASES = {
  ou: "oklahoma",
  unc: "northcarolina",
  usc: "usc",
  ut: "texas",
  uga: "georgia",
  psu: "pennstate",
  osu: "ohiostate",
  msu: "michiganstate",
  fsu: "floridastate",
  tamu: "texasaandm",
  aandm: "texasaandm",
  texasam: "texasaandm",
  olemiss: "olemiss",
  miss: "olemiss",
  ncarolina: "northcarolina",
  scarolina: "southcarolina",
  wvirginia: "westvirginia",
  tennesse: "tennessee",
  orgeon: "oregon",
};

export function normalizeName(name) {
  if (!name) return "";
  let n = String(name).toLowerCase().trim();
  n = n.replace(/&/g, " and ");
  n = n.replace(/\bst\.?$/, "state"); // "Ohio St" -> "Ohio State"
  n = n.replace(/\bst\.?\s/, "state "); // "St Louis" style, rare
  n = n.replace(/[^a-z0-9]/g, "");
  return ALIASES[n] ?? n;
}

function teamCandidates(team) {
  const t = team?.team ?? team ?? {};
  return new Set(
    [t.location, t.abbreviation, t.shortDisplayName, t.displayName]
      .filter(Boolean)
      .map(normalizeName)
  );
}

function teamMatches(scheduleName, competitor) {
  return teamCandidates(competitor).has(normalizeName(scheduleName));
}

// ESPN's `dates` parameter is a single YYYYMMDD in US Eastern time.
function espnDate(unixSeconds) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date(unixSeconds * 1000));
  const get = (type) => parts.find((p) => p.type === type).value;
  return `${get("year")}${get("month")}${get("day")}`;
}

function scheduleGames(weekSchedule) {
  return Object.entries(weekSchedule ?? {}).filter(
    ([key, g]) => key !== "tiebreaker" && g && g.away && g.home
  );
}

async function fetchEvents(dates) {
  const results = await Promise.all(
    [...dates].map(async (d) => {
      const url = `${ESPN_SCOREBOARD}?dates=${d}&groups=80&limit=300`;
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error(`ESPN ${res.status} for ${d}`);
      const json = await res.json();
      return json.events ?? [];
    })
  );
  return results.flat();
}

function findEvent(game, events) {
  if (game.espnId) {
    const byId = events.find((e) => String(e.id) === String(game.espnId));
    if (byId) return byId;
  }
  let partial = null;
  for (const ev of events) {
    const comp = ev.competitions?.[0];
    if (!comp) continue;
    const home = comp.competitors.find((c) => c.homeAway === "home");
    const away = comp.competitors.find((c) => c.homeAway === "away");
    if (!home || !away) continue;
    const h = teamMatches(game.home, home);
    const a = teamMatches(game.away, away);
    if (h && a) return ev;
    // One side matched (typo in the pool name, e.g. "Orgeon"): accept if the
    // kickoff is within a day. A team only plays once a week.
    if ((h || a) && !partial) {
      const evTime = Date.parse(ev.date) / 1000;
      if (Math.abs(evTime - Number(game.time)) < 86400) partial = ev;
    }
  }
  return partial;
}

function summarizeEvent(game, ev) {
  const comp = ev.competitions[0];
  const home = comp.competitors.find((c) => c.homeAway === "home");
  const away = comp.competitors.find((c) => c.homeAway === "away");
  const type = comp.status?.type ?? {};
  const homeScore = Number(home.score ?? 0);
  const awayScore = Number(away.score ?? 0);
  const completed = Boolean(type.completed);
  let winner = null;
  if (completed && homeScore !== awayScore)
    winner = homeScore > awayScore ? game.home : game.away;
  return {
    espnId: ev.id,
    state: type.state ?? "pre", // pre | in | post
    completed,
    detail: type.shortDetail ?? type.description ?? "",
    homeScore,
    awayScore,
    homeAbbr: home.team?.abbreviation ?? game.home,
    awayAbbr: away.team?.abbreviation ?? game.away,
    winner,
  };
}

// Tiebreaker config lives on schedule.tiebreaker:
//   { game: "game2", type: "total" }                  -> home + away points
//   { game: "game2", type: "margin", team: "Texas" }  -> team points - opponent points
function computeTiebreaker(weekSchedule, live) {
  const tb = weekSchedule?.tiebreaker;
  if (!tb || !tb.game) return null;
  const game = weekSchedule[tb.game];
  const l = live[tb.game];
  if (!game || !l || !l.completed) return null;
  if (tb.type === "margin") {
    const team = normalizeName(tb.team ?? game.home);
    const teamIsHome = normalizeName(game.home) === team;
    return teamIsHome ? l.homeScore - l.awayScore : l.awayScore - l.homeScore;
  }
  return l.homeScore + l.awayScore;
}

// One fetch: returns { games: { game1: summary, ... }, tb, fetchedAt }.
export async function fetchLiveScores(weekSchedule) {
  const games = scheduleGames(weekSchedule);
  if (!games.length) return { games: {}, tb: null, fetchedAt: Date.now() };
  const dates = new Set(games.map(([, g]) => espnDate(Number(g.time))));
  const events = await fetchEvents(dates);
  const live = {};
  for (const [key, game] of games) {
    const ev = findEvent(game, events);
    if (ev) live[key] = summarizeEvent(game, ev);
  }
  return { games: live, tb: computeTiebreaker(weekSchedule, live), fetchedAt: Date.now() };
}

// Poll ESPN for a week's games. Calls onUpdate(result) after every successful
// fetch and onError(err) on failure. Stops itself once every game is final.
// Returns a stop() function.
export function startLivePolling(weekSchedule, { onUpdate, onError, intervalMs = 60000 } = {}) {
  const games = scheduleGames(weekSchedule);
  if (!games.length) return () => {};
  const firstKickoff = Math.min(...games.map(([, g]) => Number(g.time)));
  let timer = null;
  let stopped = false;
  let inFlight = false;

  const tick = async () => {
    if (stopped || inFlight) return;
    if (document.hidden) return;
    if (Date.now() / 1000 < firstKickoff - 600) return; // nothing to see yet
    inFlight = true;
    try {
      const result = await fetchLiveScores(weekSchedule);
      if (stopped) return;
      onUpdate?.(result);
      const matched = Object.values(result.games);
      const allFinal =
        matched.length === games.length && matched.every((g) => g.completed);
      if (allFinal) stop();
    } catch (err) {
      onError?.(err);
    } finally {
      inFlight = false;
    }
  };

  const stop = () => {
    stopped = true;
    if (timer) clearInterval(timer);
    document.removeEventListener("visibilitychange", onVisible);
  };
  const onVisible = () => {
    if (!document.hidden) tick();
  };

  document.addEventListener("visibilitychange", onVisible);
  timer = setInterval(tick, intervalMs);
  tick();
  return stop;
}
