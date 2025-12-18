import { getDatabase, ref, set, onValue } from "firebase/database";
import { onAuthStateChangedFb, logoutFb, watchAuthAndRedirect } from "./auth";

watchAuthAndRedirect();

let picks = {};

async function submit(week, picks) {
  const msgEl = document.getElementById("err_msg");

  for (let p in picks) {
    if (picks[p].points == "null" || picks[p].points == null || picks[p].points == undefined) {
      msgEl.innerText = `Select confidence points for ${p}.`;
      msgEl.style.color = "red";
      return;
    }
    if (picks[p].pick == "null" || picks[p].pick == null || picks[p].pick == undefined) {
      msgEl.innerText = `Select winner for ${p}.`;
      msgEl.style.color = "red";
      return;
    }
  }

  try {
    if (navigator.onLine) {
      msgEl.innerText = "Submitting...";
      msgEl.style.color = "black";
      for (let game in picks) {
        const info = picks[game];
        try {
          const timeoutPromise = new Promise((_, reject) =>
            setTimeout(
              () =>
                reject(
                  new Error("Please refresh or try again on other browser/device. devcode: 0000")
                ),
              10000
            )
          );
          await Promise.race([
            set(ref(db, `users/${uid}/${week}/${game}`), {
              pick: info["pick"],
              points: String(info["points"]),
            }),
            timeoutPromise,
          ]);
        } catch (error) {
          msgEl.innerText = String(error);
          msgEl.style.color = "red";
          return;
        }
      }
      msgEl.innerText = "Submitted!";
      msgEl.style.color = "green";
    } else {
      msgEl.innerText = "No internet connection.";
      msgEl.style.color = "red";
    }
  } catch (error) {
    msgEl.innerText = String(error);
    msgEl.style.color = "red";
  }
}

async function fetchData(refer) {
  let res;
  await new Promise((resolve) => {
    onValue(refer, (snapshot) => {
      res = snapshot.val();
      resolve();
    });
  });
  return res;
}

function parseWeekKeyFromHeading() {
  const weekEl = document.getElementById("selected-week");
  return weekEl.textContent.replace(/\s+/g, "").toLowerCase();
}

function getGameNumber(gameId) {
  const m = String(gameId).match(/(\d+)/);
  return m ? Number(m[1]) : Number.MAX_SAFE_INTEGER;
}

function inferRounds(gameMap) {
  const ids = Object.keys(gameMap).filter((k) => k !== "tiebreaker");
  const withRound = ids.some((id) => {
    const g = gameMap[id] || {};
    return g.round !== undefined || g.roundName !== undefined || g.roundIndex !== undefined;
  });

  if (withRound) {
    const groups = new Map();
    for (const id of ids) {
      const g = gameMap[id] || {};
      const rk =
        g.roundIndex !== undefined
          ? String(g.roundIndex)
          : String(g.roundName ?? g.round ?? "1");
      if (!groups.has(rk)) groups.set(rk, []);
      groups.get(rk).push(id);
    }

    const keys = Array.from(groups.keys()).sort((a, b) => {
      const na = Number(a);
      const nb = Number(b);
      const aIsNum = Number.isFinite(na) && String(na) === a;
      const bIsNum = Number.isFinite(nb) && String(nb) === b;
      if (aIsNum && bIsNum) return na - nb;
      if (aIsNum && !bIsNum) return -1;
      if (!aIsNum && bIsNum) return 1;
      return a.localeCompare(b);
    });

    return keys.map((k) => ({
      key: k,
      title: roundTitleFromKey(k, groups.get(k), gameMap),
      gameIds: groups
        .get(k)
        .slice()
        .sort((a, b) => getGameNumber(a) - getGameNumber(b)),
    }));
  }

  return [
    {
      key: "1",
      title: "Bracket",
      gameIds: ids.slice().sort((a, b) => getGameNumber(a) - getGameNumber(b)),
    },
  ];
}

function roundTitleFromKey(key, ids, gameMap) {
  const sample = gameMap[ids[0]] || {};
  if (sample.roundName) return String(sample.roundName);
  if (sample.round) return String(sample.round);
  const k = String(key).toLowerCase();
  if (k.includes("wc") || k.includes("wild")) return "Wild Card";
  if (k.includes("div")) return "Divisional";
  if (k.includes("semi")) return "Semifinals";
  if (k.includes("final") || k.includes("champ")) return "Final";
  return `Round ${key}`;
}

function buildBracket(gameMap, rounds, numConfidencePoints) {
  const bracket = document.getElementById("bracket");
  bracket.innerHTML = "";

  for (const r of rounds) {
    const roundEl = document.createElement("section");
    roundEl.className = "round";

    const h = document.createElement("h4");
    h.className = "round-title";
    h.textContent = r.title;
    roundEl.appendChild(h);

    const list = document.createElement("div");
    list.className = "round-games";

    for (const gameId of r.gameIds) {
      const g = gameMap[gameId] || {};
      list.appendChild(createMatch(gameId, g, numConfidencePoints));
    }

    roundEl.appendChild(list);
    bracket.appendChild(roundEl);
  }

  requestAnimationFrame(() => {
    propagateWinners();
    drawConnectors();
    refreshPointsUI();
  });
}

function createMatch(gameId, g, numConfidencePoints) {
  const match = document.createElement("article");
  match.className = "match";
  match.dataset.gameId = gameId;
  match.dataset.kickoff = g.time ?? "";
  match.id = `m-${gameId}`;

  const header = document.createElement("div");
  header.className = "match-header";

  const title = document.createElement("div");
  title.className = "match-title";
  title.textContent = gameId;

  const meta = document.createElement("div");
  meta.className = "match-meta";
  meta.textContent = g.humanDate ?? "";

  header.appendChild(title);
  header.appendChild(meta);

  const teams = document.createElement("div");
  teams.className = "teams";

  const awayName = g.away ?? g.team1 ?? "TBD";
  const homeName = g.home ?? g.team2 ?? "TBD";

  const awayBtn = document.createElement("button");
  awayBtn.type = "button";
  awayBtn.className = "team-btn";
  awayBtn.dataset.team = awayName;
  awayBtn.textContent = awayName;

  const homeBtn = document.createElement("button");
  homeBtn.type = "button";
  homeBtn.className = "team-btn";
  homeBtn.dataset.team = homeName;
  homeBtn.textContent = homeName;

  teams.appendChild(awayBtn);
  teams.appendChild(homeBtn);

  const pointsWrap = document.createElement("div");
  pointsWrap.className = "points";

  const pointsLabel = document.createElement("div");
  pointsLabel.className = "points-label";
  pointsLabel.textContent = "Confidence";

  const sel = document.createElement("select");
  sel.className = "points-select";
  sel.innerHTML = `<option value="">—</option>`;
  for (let i = 1; i <= numConfidencePoints; i += 1) {
    const opt = document.createElement("option");
    opt.value = String(i);
    opt.textContent = String(i);
    sel.appendChild(opt);
  }

  pointsWrap.appendChild(pointsLabel);
  pointsWrap.appendChild(sel);

  match.appendChild(header);
  match.appendChild(teams);
  match.appendChild(pointsWrap);

  return match;
}

function isLocked(kickoffUnix) {
  const t = Number(kickoffUnix);
  if (!Number.isFinite(t) || t <= 0) return false;
  const now = Math.floor(Date.now() / 1000);
  return now > t;
}

function setError(msg) {
  const msgEl = document.getElementById("err_msg");
  msgEl.innerText = msg || "";
  msgEl.style.color = msg ? "red" : "black";
}

function setPick(gameId, team) {
  const match = document.querySelector(`[data-game-id="${gameId}"]`);
  if (!match) return;

  if (isLocked(match.dataset.kickoff)) {
    setError(`Cannot change pick for ${gameId}, it has already kicked off`);
    return;
  }

  const prevPoints = picks[gameId]?.points ?? null;
  picks[gameId] = { pick: team, points: prevPoints };

  match.querySelectorAll(".team-btn").forEach((btn) => {
    btn.classList.toggle("chosen", btn.dataset.team === team);
  });

  setError("");
  propagateWinners();
  drawConnectors();
}

function setPoints(gameId, pointsValue) {
  const match = document.querySelector(`[data-game-id="${gameId}"]`);
  if (!match) return;

  if (isLocked(match.dataset.kickoff)) {
    setError(`Cannot change points for ${gameId}, it has already kicked off`);
    refreshPointsUI();
    return;
  }

  const newVal = pointsValue === "" ? null : String(pointsValue);

  if (newVal !== null) {
    for (const gid in picks) {
      if (gid === gameId) continue;
      if (String(picks[gid]?.points) === newVal) {
        setError("You cannot repeat confidence points");
        refreshPointsUI();
        return;
      }
    }
  }

  const prevPick = picks[gameId]?.pick ?? null;
  if (!prevPick && newVal === null) {
    delete picks[gameId];
  } else {
    picks[gameId] = { pick: prevPick, points: newVal };
  }

  setError("");
  refreshPointsUI();
}

function refreshPointsUI() {
  const used = new Set();
  for (const gid in picks) {
    const p = picks[gid]?.points;
    if (p !== null && p !== undefined) used.add(String(p));
  }

  document.querySelectorAll(".match").forEach((match) => {
    const gameId = match.dataset.gameId;
    const sel = match.querySelector(".points-select");
    if (!sel) return;

    const mine = picks[gameId]?.points ?? null;
    sel.value = mine === null || mine === undefined ? "" : String(mine);

    Array.from(sel.options).forEach((opt) => {
      if (!opt.value) return;
      if (mine !== null && String(mine) === opt.value) {
        opt.disabled = false;
      } else {
        opt.disabled = used.has(opt.value);
      }
    });
  });
}

function applySavedPicks() {
  for (const gameId in picks) {
    if (gameId === "tb") continue;
    const match = document.querySelector(`[data-game-id="${gameId}"]`);
    if (!match) continue;

    const chosen = picks[gameId]?.pick;
    if (chosen) {
      match.querySelectorAll(".team-btn").forEach((btn) => {
        btn.classList.toggle("chosen", btn.dataset.team === chosen);
      });
    }
  }

  const tbEl = document.getElementById("tb");
  if (tbEl) tbEl.value = picks?.tb?.pick ?? "0";

  refreshPointsUI();
}

function lockPastGames() {
  document.querySelectorAll(".match").forEach((match) => {
    const locked = isLocked(match.dataset.kickoff);
    match.classList.toggle("locked", locked);
    match.querySelectorAll("button, select").forEach((el) => {
      el.disabled = locked;
    });
  });
}

function canPairMap(currIds, nextIds) {
  return nextIds.length > 0 && currIds.length === nextIds.length * 2;
}

function getRoundIds() {
  return Array.from(document.querySelectorAll(".round")).map((roundEl) =>
    Array.from(roundEl.querySelectorAll(".match")).map((m) => m.dataset.gameId)
  );
}

function propagateWinners() {
  const roundIds = getRoundIds();
  for (let r = 0; r < roundIds.length - 1; r += 1) {
    const curr = roundIds[r];
    const next = roundIds[r + 1];
    if (!canPairMap(curr, next)) continue;

    for (let i = 0; i < next.length; i += 1) {
      const g1 = curr[i * 2];
      const g2 = curr[i * 2 + 1];
      const nxt = next[i];

      const w1 = picks[g1]?.pick ?? null;
      const w2 = picks[g2]?.pick ?? null;

      const nextEl = document.querySelector(`[data-game-id="${nxt}"]`);
      if (!nextEl) continue;

      const btns = nextEl.querySelectorAll(".team-btn");
      if (btns.length !== 2) continue;

      if (w1 && shouldAutoReplace(btns[0].dataset.team)) {
        btns[0].dataset.team = w1;
        btns[0].textContent = w1;
      }
      if (w2 && shouldAutoReplace(btns[1].dataset.team)) {
        btns[1].dataset.team = w2;
        btns[1].textContent = w2;
      }

      const chosen = picks[nxt]?.pick ?? null;
      if (chosen) {
        btns.forEach((b) => b.classList.toggle("chosen", b.dataset.team === chosen));
      }
    }
  }
}

function shouldAutoReplace(currentName) {
  if (!currentName) return true;
  const s = String(currentName).trim().toLowerCase();
  return s === "tbd" || s === "unknown" || s.startsWith("winner") || s.startsWith("tba");
}

function drawConnectors() {
  const stage = document.getElementById("bracket-stage");
  const svg = document.getElementById("bracket-lines");
  const bracket = document.getElementById("bracket");
  if (!stage || !svg || !bracket) return;

  const stageRect = stage.getBoundingClientRect();
  const roundEls = Array.from(bracket.querySelectorAll(".round"));
  if (roundEls.length < 2) {
    svg.innerHTML = "";
    return;
  }

  const paths = [];
  const w = Math.max(bracket.scrollWidth, bracket.offsetWidth);
  const h = Math.max(bracket.scrollHeight, bracket.offsetHeight);
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
  svg.setAttribute("width", String(w));
  svg.setAttribute("height", String(h));

  const roundMatches = roundEls.map((r) => Array.from(r.querySelectorAll(".match")));

  for (let r = 0; r < roundMatches.length - 1; r += 1) {
    const curr = roundMatches[r];
    const next = roundMatches[r + 1];
    if (next.length * 2 !== curr.length) continue;

    for (let i = 0; i < next.length; i += 1) {
      const a = curr[i * 2];
      const b = curr[i * 2 + 1];
      const c = next[i];

      const ra = relRect(a, stageRect);
      const rb = relRect(b, stageRect);
      const rc = relRect(c, stageRect);

      const x1 = ra.x + ra.w;
      const y1 = ra.y + ra.h / 2;

      const x2 = rb.x + rb.w;
      const y2 = rb.y + rb.h / 2;

      const x3 = rc.x;
      const y3 = rc.y + rc.h / 2;

      const midX = x1 + (x3 - x1) * 0.5;

      paths.push(pathD(x1, y1, midX, y1, midX, y3, x3, y3));
      paths.push(pathD(x2, y2, midX, y2, midX, y3, x3, y3));
    }
  }

  svg.innerHTML = paths.map((d) => `<path d="${d}" class="bracket-path" />`).join("");
}

function relRect(el, stageRect) {
  const r = el.getBoundingClientRect();
  const x = r.left - stageRect.left;
  const y = r.top - stageRect.top;
  return { x, y, w: r.width, h: r.height };
}

function pathD(x1, y1, x2, y2, x3, y3, x4, y4) {
  const c = 20;
  return `M ${x1} ${y1} C ${x1 + c} ${y1} ${x2 - c} ${y2} ${x2} ${y2} L ${x3} ${y3} C ${x3 - c} ${y3} ${x4 + c} ${y4} ${x4} ${y4}`;
}

const authReady = new Promise((res) => {
  const unsub = onAuthStateChangedFb((user) => {
    unsub();
    res(user);
  });
});

await authReady;

$(document).ready(function () {
  $("#header").load("../src/pages/header.html");
});

const uid = localStorage.uid;
const db = getDatabase();

const week = parseWeekKeyFromHeading();

let userData = await fetchData(ref(db, `users/${uid}`));
const gameData = await fetchData(ref(db, "schedule"));

if (!gameData || !gameData[week]) {
  setError(`No schedule found for "${week}".`);
} else {
  const weekGames = gameData[week];
  const totalKeys = Object.keys(weekGames);
  const hasTb = totalKeys.includes("tiebreaker");
  const numGames = totalKeys.filter((k) => k !== "tiebreaker").length;

  picks = {};
  if (userData) {
    if (userData.hasOwnProperty(week)) picks = userData[week];
    if (userData.hasOwnProperty("name")) localStorage.displayName = userData["name"];
  }

  const rounds = inferRounds(weekGames);
  buildBracket(weekGames, rounds, Math.max(1, numGames));

  if (hasTb) {
    document.getElementById("tiebreaker-wrap").classList.remove("hidden");
  }

  applySavedPicks();
  lockPastGames();

  const bracket = document.getElementById("bracket");

  bracket.addEventListener("click", (e) => {
    const btn = e.target.closest(".team-btn");
    if (!btn) return;
    const match = e.target.closest(".match");
    if (!match) return;
    setPick(match.dataset.gameId, btn.dataset.team);
  });

  bracket.addEventListener("change", (e) => {
    const sel = e.target.closest(".points-select");
    if (!sel) return;
    const match = e.target.closest(".match");
    if (!match) return;
    setPoints(match.dataset.gameId, sel.value);
  });

  window.addEventListener("resize", () => drawConnectors());

  document.getElementById("submit").addEventListener("click", () => {
    const tbel = document.getElementById("tb");
    if (tbel) picks["tb"] = { pick: String(tbel.value ?? "0"), points: 0 };
    submit(week, picks);
  });

  document.getElementById("btnLogout").addEventListener("click", logoutFb);
}
