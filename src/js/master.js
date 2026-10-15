import { getDatabase, ref, onValue, get, update } from "firebase/database";
import { onAuthStateChangedFb } from "./auth";
import { startLivePolling } from "./live";
import { json, scalePoint, select } from "d3";

const reportError = (msg) => {
  const el = document.getElementById("liveStatus");
  if (el) {
    el.textContent = `Page error: ${msg}`;
    el.style.color = "#dc2626";
  }
};
window.addEventListener("error", (e) => reportError(e.message));
window.addEventListener("unhandledrejection", (e) =>
  reportError(e.reason?.message ?? String(e.reason))
);

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

async function fetchData(refer) {
  const snapshot = await get(refer);
  return snapshot.val();
}

function initTable(userData, dataWinners, dataGames, week) {
  th(dataGames);
  let unixNow = Math.floor(new Date().getTime() / 1000);
  let tableBody = document.getElementById("tbody");
  let winner = {
    points: 0,
    user: [],
    tb: 0,
  };
  let cnt = 0;
  let tableArray = [];
  for (let user in userData) {
    if (user == "IWBJNJ2Zd2OEIndMcKgXpRfRF3C3") continue;
    let points = 0;
    let pp = 0;
    const ppSet = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]);
    let weekInfo = userData[user][week];
    if (!weekInfo) weekInfo = {};
    let rowArray = [];
    let row = document.createElement("tr");
    row.append(cell(user, userData[user]["name"], "td", true));

    let cellp = cell(`${user}_points`, points);
    let cpp = cell(`${user}_ppoints`, points);
    row.append(cellp);
    row.append(cpp);
    for (let i = 1; i < Object.keys(dataGames).length + 1; i++)
      row.append(cell(posmap[i]));
    //if (week == 'week14'){
    //    for (let i = 1;i<9;i++)row.append(cell(`rank${i}`))
    //}
    for (const [idx, game] of Object.entries(posmap)) {
      const rank = `rank${idx - 5}`;
      const iRow = parseInt(idx) + 2;
      if (weekInfo.hasOwnProperty(game)) {
        const info = weekInfo[game];
        if (info) {
          if (info.hasOwnProperty("pick")) {
            if (dataGames[game].time < unixNow)
              row.cells[
                iRow
              ].textContent = `${info["pick"]}: ${info["points"]}`;
          }
          if (
            week != "cfp" &&
            (dataWinners[game] == "" ||
              dataWinners[game] == info.pick ||
              !dataWinners[game])
          )
            pp += parseInt(info.points);

          if (dataWinners.hasOwnProperty(game)) {
            if (dataWinners[game] == info.pick) {
              row.cells[iRow].style.background = colorW;
              points += parseInt(info.points);
            }
          }
        }
       
      } else if (weekInfo.hasOwnProperty(rank)) {
        const info = weekInfo[rank];
        const p = 9 - (idx - 5);
        if (info.hasOwnProperty("pick")) {
          if (1701478800 < unixNow) row.cells[iRow].textContent = info["pick"];
        }
        if (dataWinners.hasOwnProperty(rank)) {
          if (dataWinners[rank] == info.pick) {
            row.cells[iRow].style.background = colorW;
            points += 2;
          }
        }
        if (dataWinners[rank] == "" || dataWinners[rank] == info.pick) pp += 2;
      }
       if (
          dataGames[game]?.time < unixNow &&
          (dataWinners[game] != weekInfo[game]?.pick || !weekInfo[game]?.pick)
        ) {
          const v = weekInfo?.[game]?.points ?? (ppSet.size ? Math.min(...ppSet) : null);
            if (v != null) ppSet.delete(parseInt(v, 10));
        }
    }

    if (points > winner["points"]) {
      winner["points"] = points;
      winner.user = [user];
      winner.tb = weekInfo["tb"]?.pick;
    } else if (points == winner.points) {
      if (dataWinners.hasOwnProperty("tb")) {
        const tbr = dataWinners.tb;
        if (tbr) {
          const currDiff = Math.abs(tbr - weekInfo["tb"]?.pick);
          const winnerDiff = Math.abs(tbr - winner.tb);
          if (currDiff < winnerDiff) {
            winner["points"] = points;
            winner.user = [user];
            winner.tb = weekInfo["tb"]?.pick;
          } else if (currDiff == winnerDiff) winner.user.push(user);
        } else winner.user.push(user);
      }
    }

    let cellt = document.createElement("td");
    if (weekInfo.hasOwnProperty("tb")) {
      if (dataGames["tiebreaker"].time < unixNow)
        cellt.textContent = weekInfo["tb"].pick;
    }
    row.append(cellt);
    cellp.textContent = points;
    if (week == "cfp") pp = [...ppSet].reduce((a, v) => a + Number(v), 0);
    cpp.textContent = pp;
    tableBody.append(row);
    cnt++;
  }
  if (winner.points != 0)
    for (let w of winner.user)
      document.getElementById(w).style.color = "#d97706";
  if (winner.points == 0) reOrderTable();
  else reOrderTable(false, 1);
  highlightMe();
}

// Make the signed-in user's row stand out. The name cell's id is the uid.
function highlightMe() {
  if (!uid) return;
  const nameCell = document.getElementById(uid);
  if (!nameCell) return;
  nameCell.style.backgroundColor = "#fef3c7";
  nameCell.style.fontWeight = "700";
  nameCell.style.boxShadow = "inset 4px 0 0 #d97706";
  const row = nameCell.parentElement;
  if (row) {
    row.style.backgroundColor = "#fffbeb";
    row.style.fontWeight = "600";
  }
}

function displayTBR(data) {
  if (data) {
    const tbr = data.tb;
    if (tbr) {
      let tbr_th = document.getElementById("tb_res");
      tbr_th.textContent = tbr;
      tbr_th.style.background = colorW;
    }
  }
}

function displaySeason(data) {
  const rowGames = document.getElementById("rowGames");
  const rowDates = document.getElementById("rowDates");
  while (rowGames.firstChild) rowGames.removeChild(rowGames.firstChild);
  while (rowDates.firstChild) rowDates.removeChild(rowDates.firstChild);
  rowGames.append(holder());

  const c = document.createElement("th");
  c.textContent = "Season Points";
  rowGames.append(c);
  let tableBody = document.getElementById("tbody");
  const podium = ["#FCCB00", "#D4D8DC", "#B1860F"];
  let cnt = 0;
  Object.entries(data).forEach(([idx, user]) => {
    let row = document.createElement("tr");
    //let spaces = 30 - user['name'].length;
    //let txt = `${user['name']}${'-'.repeat(spaces)}${user['points']}`;
    let nameCell = cell(user.key, user["name"], "td", true);
    let pointsCell = cell(`${user.key}_season`, user["points"]);
    nameCell.style.color = `color:${podium[idx]};`;
    pointsCell.style.cssText = "width: 100px;";
    nameCell.style.cssText = "width: 100px;";

    row.append(nameCell);
    row.append(pointsCell);

    if (cnt % 2 == 1) {
      row.style.backgroundColor = "#f0f0f0"; // Light grey for odd rows
    } else {
      row.style.backgroundColor = ""; // Default for even rows
    }
    tableBody.append(row);
    cnt++;
  });
  highlightMe();
}

function th(data) {
  const rowGames = document.getElementById("rowGames");
  const rowDates = document.getElementById("rowDates");
  while (rowGames.firstChild) rowGames.removeChild(rowGames.firstChild);
  while (rowDates.firstChild) rowDates.removeChild(rowDates.firstChild);

  rowGames.append(holder()); //appending html el removes el from prev loc
  rowDates.append(holder());
  rowDates.append(holder());
  rowDates.append(holder());

  const cellp = document.createElement("th");
  cellp.textContent = "Current Points";
  const c = document.createElement("th");
  c.textContent = "Potential Points";
  rowGames.append(cellp);
  rowGames.append(c);

  for (const [idx, game] of Object.entries(posmap)) {
    if (data.hasOwnProperty(game)) {
      let cell = document.createElement("th");
      cell.textContent = `${data[game]["away"]} at ${data[game]["home"]}`;

      rowGames.append(cell);
      let celld = document.createElement("td");
      celld.id = `date_${game}`;
      celld.style.color = "#64748b";
      celld.textContent = data[game]["humanDate"];
      rowDates.append(celld);
    }
  }

  const tbc = document.createElement("th");
  tbc.textContent = `TB: ${data["tiebreaker"]["home"]}`;
  const tbcell = document.createElement("td");
  tbcell.id = "tb_res";

  rowGames.append(tbc);
  rowDates.append(tbcell);
}

const holder = () => {
  const b = document.createElement("th");
  b.textContent = "holder";
  b.style.color = "transparent";
  return b;
};

const cell = (id, textContent = null, type = "td", sticky = false) => {
  const cell = document.createElement(type);
  cell.id = id;
  cell.textContent = textContent;
  if (sticky) {
    cell.classList.add("sticky-column");
    cell.style.backgroundColor = "#f7faf8";
  }

  return cell;
};

function calcSeason(userData, results) {
  let res = {};
  for (let user in userData) {
    res[user] = { name: userData[user]["name"], points: 0 };
    for (let week in userData[user]) {
      const weekData = userData[user][week];
      if (typeof weekData == "object" && weekData !== null) {
        const weekResults = results?.[week] ?? {};
        for (let game in weekData) {
          const pick = weekData[game]?.pick;
          if (pick && pick == weekResults[game]) {
            res[user].points += parseInt(weekData[game].points) || 0;
          }
        }
      }
    }
  }
  const dataArray = Object.entries(res).map(([key, value]) => ({
    key,
    ...value,
  }));

  dataArray.sort((a, b) => b.points - a.points);

  const sortedData = {};
  dataArray.forEach((item) => {
    sortedData[item.key] = item;
  });
  return sortedData;
}

function reOrderTable(alp = true, cellIdx = 0) {
  let table = document.querySelector("tbody");
  let rows = Array.from(table.rows);
  rows.sort((rowA, rowB) => {
    let cellA = rowA.cells[cellIdx].textContent.trim();
    let cellB = rowB.cells[cellIdx].textContent.trim();

    if (alp) return cellA.localeCompare(cellB);
    else return parseFloat(cellB) - parseFloat(cellA);
  });

  rows.forEach((row, index) => {
    if (index % 2 === 1) {
      row.style.backgroundColor = "#f0f0f0"; // Light grey for odd rows
    } else {
      row.style.backgroundColor = ""; // Default for even rows
    }
    table.appendChild(row);
  });
}

const posmap = {
  1: "game1",
  2: "game2",
  3: "game3",
  4: "game4",
  5: "game5",
  6: "game6",
  7: "game7",
  8: "game8",
  9: "game9",
  10: "game10",
  11: "game11",
  12: "game12",
  13: "game13",
  14: "game14",
  15: "game15",
};

const uid = localStorage.uid;
const colorW = "#c6efce";
const colorLive = "#dc2626";
const db = getDatabase();
let userData = await fetchData(ref(db, `users`));
let winnerData = (await fetchData(ref(db, `results`))) ?? {};
const dataGames = await fetchData(ref(db, "schedule"));
let seasonData = calcSeason(userData, winnerData);

// Admin sessions persist ESPN finals into /results. Grant with
// admins/<uid>: true in the database (see data/rules.json).
let isAdmin = false;
try {
  if (uid) isAdmin = (await get(ref(db, `admins/${uid}`))).val() === true;
} catch (_) {
  isAdmin = false;
}

// ---- live scores -----------------------------------------------------------
let live = { week: null, games: {}, tb: null, fetchedAt: 0 };
let stopPolling = () => {};
const written = new Set(); // "week/game" keys already pushed this session
const statusEl = document.getElementById("liveStatus");

function currentWeek() {
  let w = document.getElementById("weekSelect").value;
  if (w == "default") w = "Week 13";
  return w.replace(" ", "").toLocaleLowerCase();
}

// Database results win; ESPN finals fill in whatever the database lacks.
function mergedWinners(week) {
  const merged = { ...(winnerData[week] ?? {}) };
  if (live.week !== week) return merged;
  for (const [game, l] of Object.entries(live.games))
    if (l.winner && !merged[game]) merged[game] = l.winner;
  if (live.tb != null && !merged.tb) merged.tb = String(live.tb);
  return merged;
}

function applyLiveScores(week) {
  if (live.week !== week) return;
  const schedule = dataGames?.[week] ?? {};
  for (const [game, l] of Object.entries(live.games)) {
    const cellEl = document.getElementById(`date_${game}`);
    if (!cellEl) continue;
    if (l.state === "pre") {
      cellEl.textContent = schedule[game]?.humanDate ?? "";
      cellEl.style.color = "#64748b";
    } else {
      const score = `${l.awayAbbr} ${l.awayScore} - ${l.homeAbbr} ${l.homeScore}`;
      cellEl.textContent = l.completed ? `Final: ${score}` : `${score} (${l.detail})`;
      cellEl.style.color = l.completed ? "#334155" : colorLive;
      cellEl.style.fontWeight = l.completed ? "500" : "600";
    }
  }
}

function setStatus(text, isError = false) {
  if (!statusEl) return;
  statusEl.textContent = text;
  statusEl.style.color = isError ? colorLive : "#64748b";
}

function render() {
  try {
    renderInner();
  } catch (err) {
    reportError(err.message ?? String(err));
    console.error(err);
  }
}

function renderInner() {
  const week = currentWeek();
  const table = document.getElementById("tbody");
  while (table.firstChild) table.removeChild(table.firstChild);
  if (week == "season") {
    displaySeason(seasonData);
    return;
  }
  if (!dataGames || !Object.keys(dataGames).includes(week)) return;
  const merged = mergedWinners(week);
  initTable(userData, merged, dataGames[week], week);
  displayTBR(merged);
  applyLiveScores(week);
}

async function persistFinals(week) {
  if (!isAdmin || live.week !== week) return;
  const existing = winnerData[week] ?? {};
  const updates = {};
  for (const [game, l] of Object.entries(live.games)) {
    const key = `${week}/${game}`;
    if (l.winner && !existing[game] && !written.has(key)) {
      updates[game] = l.winner;
      written.add(key);
    }
  }
  if (live.tb != null && !existing.tb && !written.has(`${week}/tb`)) {
    updates.tb = String(live.tb);
    written.add(`${week}/tb`);
  }
  if (!Object.keys(updates).length) return;
  try {
    await update(ref(db, `results/${week}`), updates);
  } catch (err) {
    for (const k of Object.keys(updates)) written.delete(`${week}/${k}`);
    setStatus(`Could not save results: ${err.message ?? err}`, true);
  }
}

function watchWeek(week) {
  stopPolling();
  live = { week, games: {}, tb: null, fetchedAt: 0 };
  if (week == "season" || !dataGames?.[week]) {
    setStatus("");
    return;
  }
  setStatus("Live scores: waiting for kickoff");
  stopPolling = startLivePolling(dataGames[week], {
    onUpdate: (result) => {
      live = { week, ...result };
      render();
      const t = new Date(result.fetchedAt).toLocaleTimeString();
      const n = Object.keys(result.games).length;
      setStatus(
        `Live scores via ESPN: ${n} game${n == 1 ? "" : "s"} matched, updated ${t}` +
          (isAdmin ? " (saving finals as admin)" : "")
      );
      persistFinals(week);
    },
    onError: (err) => setStatus(`Live scores unavailable: ${err.message ?? err}`, true),
  });
}

// Re-render whenever results change in the database (admin edits, auto-saves).
onValue(ref(db, "results"), (snapshot) => {
  winnerData = snapshot.val() ?? {};
  seasonData = calcSeason(userData, winnerData);
  render();
});

if (dataGames) {
  render();
  watchWeek(currentWeek());
}

select("#weekSelect").on("change", () => {
  render();
  watchWeek(currentWeek());
});
