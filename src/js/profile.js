import { getDatabase, ref, set, onValue } from "firebase/database";
import { onAuthStateChangedFb, logoutFb,watchAuthAndRedirect  } from "./auth";
import { json } from "d3";
watchAuthAndRedirect();


async function submit(week, picks) {
  const msgEl = document.getElementById("err_msg");
  const unixNow = Math.floor(new Date().getTime() / 1000);
  for (let p in picks) {
    if (
      picks[p].points == "null" ||
      picks[p].points == null ||
      picks[p].points == undefined
    ) {
      msgEl.innerText = `Select confidence points for ${p}.`;
      msgEl.style.color = "red";
      return;
    }
    if (
      picks[p].pick == "null" ||
      picks[p].pick == null ||
      picks[p].pick == undefined
    ) {
      msgEl.innerText = `Select winner for ${p}. `;
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
                  new Error(
                    "Please refresh or try again on other browser/device. devcode: 0000"
                  )
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
          msgEl.innerText = error;
          msgEl.style.color = "red";
        }
      }
      msgEl.innerText = "Submitted!";
      msgEl.style.color = "green";
    } else {
      msgEl.innerText = "No internet connection.";
      msgEl.style.color = "red";
    }
  } catch (error) {
    msgEl.innerText = error;
    msgEl.style.color = "red";
  }
}

function setup(data) {
  for (let game in data) {
    const gameEl = document.getElementById(game);
    if (!gameEl) continue;
    const teams = gameEl.querySelectorAll(".team");
    const boxes = gameEl.parentNode.querySelectorAll(".box");

    teams.forEach((team) => {
      if (team.textContent == data[game]["pick"])
        team.style.color = chosenColor;
    });
    boxes.forEach((box) => {
      if (box.textContent == data[game]["points"])
        box.style.background = chosenColor;
    });
  }
  let tbel = document.getElementById("tb");
  if (tbel) {
    if (data.hasOwnProperty("tb")) tbel.value = data["tb"].pick;
    else document.getElementById("tb").value = 0;
  }

 
}

async function fetchData(refer) {
  let res;
  await new Promise((resolve, reject) => {
    onValue(refer, (snapshot) => {
      const data = snapshot.val();
      res = data;
      resolve();
    });
  });
  return res;
}

function createCard(data, game, gn) {
  const isTiebreaker = !data?.hasOwnProperty("away");

  const cardDiv = document.createElement("div");
  cardDiv.className = "match-card card card-statistics";

  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.className = "card-body";

  const clearfixDiv = document.createElement("div");
  clearfixDiv.className = "clearfix";
  clearfixDiv.id = game;

  const timeIcon = document.createElement("i");
  timeIcon.className = "time";
  timeIcon.id = data?.time || "0";
  timeIcon.setAttribute("aria-hidden", "true");

  const leftTeamDiv = document.createElement("div");
  leftTeamDiv.className = "float-left";

  const rightTeamDiv = document.createElement("div");
  rightTeamDiv.className = "float-right";

  const leftTeamH4 = document.createElement("h4");
  leftTeamH4.className = isTiebreaker ? "bold-text" : "bold-text team";
  leftTeamH4.id = `g${gn}t1`;
  leftTeamH4.style.cursor = isTiebreaker ? "default" : "pointer";
  leftTeamH4.textContent = isTiebreaker ? "Championship Winner?" : data.away;

  const rightTeamH4 = document.createElement("h4");
  rightTeamH4.className = isTiebreaker ? "bold-text" : "bold-text team";
  rightTeamH4.id = `g${gn}t2`;
  rightTeamH4.style.cursor = isTiebreaker ? "default" : "pointer";
  rightTeamH4.textContent = isTiebreaker ? "" : data.home;

  const dateP = document.createElement("p");
  dateP.className = "text-muted d-flex justify-content-between align-items-center";
  dateP.innerHTML = `
    <span><i class="fa fa-calendar mr-1" aria-hidden="true"></i>${data?.humanDate || ""}</span>
    <span><i class="fa fa-calendar mr-1" aria-hidden="true"></i>${cc[gn - 1] ? cc[gn - 1] : ""}</span>
  `;

  leftTeamDiv.appendChild(leftTeamH4);
  rightTeamDiv.appendChild(rightTeamH4);
  clearfixDiv.appendChild(timeIcon);
  clearfixDiv.appendChild(leftTeamDiv);
  clearfixDiv.appendChild(rightTeamDiv);
  cardBodyDiv.appendChild(clearfixDiv);
  cardBodyDiv.appendChild(dateP);

  if (!isTiebreaker) {
    for (let i = 1; i < NUM_GAMES; i += 1) {
      const boxDiv = document.createElement("div");
      boxDiv.className = "box";
      boxDiv.textContent = i * 2;
      boxDiv.id = i * 2;
      if (pointsPicked.includes(String(i*2))) {
        boxDiv.style.background = pickedPColor;
      }
      cardBodyDiv.appendChild(boxDiv);
    }
  } else {
    const tbInput = document.createElement("input");
    tbInput.placeholder = "Team name...";
    tbInput.id = "tb";
    tbInput.className = "form__input";
    cardBodyDiv.append(tbInput);
  }

  cardDiv.appendChild(cardBodyDiv);
  return cardDiv;
}

function makeCol(title, extraClass = "") {
  const col = document.createElement("div");
  col.className = `bracket-col ${extraClass}`.trim();

  const h = document.createElement("div");
  h.className = "bracket-col-title";
  h.textContent = title;

  const body = document.createElement("div");
  body.className = "bracket-col-body";

  col.appendChild(h);
  col.appendChild(body);
  return { col, body };
}

function placeMatch(bodyEl, topExpr, cardEl) {
  const shell = document.createElement("div");
  shell.className = "match-shell";
  shell.style.top = topExpr;
  shell.appendChild(cardEl);
  bodyEl.appendChild(shell);
  return shell;
}

function initCards(data, week) {
  const wrapper = document.getElementById("card-wrapper");
  wrapper.className = "bracket-stage";
  while (wrapper.firstChild) wrapper.removeChild(wrapper.firstChild);
  if (!data?.hasOwnProperty(week)) return;

  const bracket = document.createElement("div");
  bracket.className = "bracket";

  const c1 = makeCol("First Round", "first-round");
  const c2 = makeCol("Quarterfinals", "quarterfinals");
  const c3 = makeCol("Semifinals", "semifinals");
  const c4 = makeCol("Championship", "final");

  bracket.appendChild(c1.col);
  bracket.appendChild(c2.col);
  bracket.appendChild(c3.col);
  bracket.appendChild(c4.col);
  wrapper.appendChild(bracket);

  let gn = 1;
  const pos4 = (n) => `calc((var(--match-h) + var(--match-gap)) * ${n})`;

  for (let i = 1; i <= 4; i += 1) {
    placeMatch(c1.body, pos4(i - 1), createCard(data[week][`game${i}`], `game${i}`, gn));
    gn++;
  }

  for (let i = 5; i <= 8; i += 1) {
    placeMatch(c2.body, pos4(i - 5), createCard(data[week][`game${i}`], `game${i}`, gn));
    gn++;
  }

  placeMatch(
    c3.body,
    `calc((var(--match-h) / 2) + (var(--match-gap) / 2) + (var(--match-h) + var(--match-gap)) * 0)`,
    createCard(data[week][`game9`], "game9", gn)
  );
  gn++;

  placeMatch(
    c3.body,
     `calc((var(--match-h) / 2) + (var(--match-gap) / 2) + (var(--match-h) + var(--match-gap)) * 2)`,
    createCard(data[week][`game10`], "game10", gn)
  );
  gn++;

  const finalTop = `calc(var(--match-h) + var(--match-gap))`;
  const pairShell = document.createElement("div");
  pairShell.className = "match-shell final-pair";
  pairShell.style.top = finalTop;

  pairShell.appendChild(createCard(data[week][`game11`], "game11", gn));
  gn++;
  pairShell.appendChild(createCard(data[week][`tiebreaker`], "tiebreaker", gn));

  c4.body.appendChild(pairShell);
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

const cc = [
  'First Round',
  'First Round',
  'First Round',
  'First Round',
  'Quaterfinals Orange Bowl',
  'Quaterfinals Rose Bowl',
  'Quaterfinals Sugar Bowl',
  'Quaterfinals Cotton Bowl',
  'Semifinals Peach Bowl',
  'Semifinals Fiesta Bowl',
  'Championship',
]

const uid = localStorage.uid;
console.log("uid :>> ", uid);
const db = getDatabase();
let weekEl = document.getElementById("selected-week");
const week = weekEl.textContent.replace(" ", "").toLocaleLowerCase();

const chosenColor = "#FF8000";
const ccRgb = "rgb(255, 128, 0)";
const pickedPColor = "#9494b8";

let userData = await fetchData(ref(db, `users/${uid}`));
const gameData = await fetchData(ref(db, "schedule"));
const NUM_GAMES = Object.keys(gameData[week]).length;
console.log('gameData :>> ', gameData);
//const gameData = await json("../data/games.json");

let picks = {};

if (userData) {
  if (userData.hasOwnProperty(week)) picks = userData[week];
  if (userData.hasOwnProperty("name"))
    localStorage.displayName = userData["name"];
}
let pointsPicked = [];
//const cfpweek2 = ['game11','tiebreaker']
for (let game in picks) {
    pointsPicked.push(String(picks[game].points))
}

initCards(gameData, week);
setup(picks);
const teams = document.querySelectorAll(".team");
const submitBtn = document.getElementById("submit");
const points = document.querySelectorAll(".box");

teams.forEach((el) => {
  el.addEventListener("click", function () {
    const parent = document.getElementById(this.id).parentElement.parentElement;
    const time = parent.querySelector(".time").id;
    const unixNow = Math.floor(new Date().getTime() / 1000);

    if (unixNow > time) {
      let msgEl = document.getElementById("err_msg");
      msgEl.innerText = `Cannot change pick for ${parent.id}, it has already kickedoff`;
      msgEl.style.color = "red";
      return;
    }
    this.style.color = chosenColor;

    const children = parent.querySelectorAll(".team");
    let selectedpoints = null;
    if (picks.hasOwnProperty(parent.id)) {
      selectedpoints = picks[parent.id].points;
    }
    picks[parent.id] = {
      pick: this.textContent,
      points: selectedpoints,
    };

    children.forEach((child) => {
      if (child.textContent != this.textContent) child.style.color = "black";
    });
  });
});

points.forEach((el) => {
  el.addEventListener("click", function () {
    const parent = this.parentNode;
    const children = parent.querySelectorAll(".box");
    const game = parent.querySelector(".clearfix");
    const teams = game.querySelectorAll(".team");

    const time = parent.querySelector(".time").id;
    const unixNow = Math.floor(new Date().getTime() / 1000);

    if (unixNow > time) {
      let msgEl = document.getElementById("err_msg");
      msgEl.innerText = `Cannot change points for ${game.id}, it has already kickoffed`;
      msgEl.style.color = "red";
      return;
    }

    if (pointsPicked.includes(this.textContent)) {
      if (picks.hasOwnProperty(game.id)) {
        //unpick point
        if (picks[game.id].points == this.textContent) {
          pointsPicked = pointsPicked.filter(
            (item) => item !== picks[game.id].points
          );
          picks[game.id].points = null;
          this.style.background = "whitesmoke";
          if (!picks[game.id].pick) delete picks[game.id];
          document.querySelectorAll(".box").forEach((bx) => {
            if (bx.id == this.id) bx.style.background = "whitesmoke";
          });

          return;
        }
      }
      let msgEl = document.getElementById("err_msg");
      msgEl.innerText = `You cannot repeat confidence points`;
      msgEl.style.color = "red";
      return;
    }
    document.getElementById("err_msg").innerText = "";
    this.style.background = chosenColor;
    let selected = null;

    if (picks.hasOwnProperty(game.id)) {
      if (picks[game.id].hasOwnProperty("points"))
        pointsPicked = pointsPicked.filter(
          (item) => item !== picks[game.id].points
        );
      selected = picks[game.id].pick;
    }

    picks[game.id] = {
      pick: selected,
      points: this.textContent,
    };

    children.forEach((child) => {
      if (child.textContent != this.textContent)
        child.style.background = "whitesmoke";
    });
    pointsPicked.push(String(picks[game.id].points));
    const bxs = document.querySelectorAll(".box");
    bxs.forEach((bx) => {
      if (pointsPicked.includes(bx.id)) {
        if (
          (bx.style.background != ccRgb) &
          (bx.style.background != chosenColor)
        ) {
          bx.style.background = pickedPColor;
        }
      } else {
        bx.style.background = "whitesmoke";
      }
    });
  });
});

submitBtn.addEventListener("click", function () {
  const tbel = document.getElementById("tb");
  picks["tb"] = {
    pick: String(tbel.value),
    points: 0,
  };
  
  submit(week, picks);
});

document.getElementById("btnLogout").addEventListener("click", logoutFb);
