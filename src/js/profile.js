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

function createCard(data, game, wrapper, gn) {
  const tb = data.hasOwnProperty("away") ? false : true;
  const outerDiv = document.createElement("div");
  outerDiv.className = "col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-4";

  const cardDiv = document.createElement("div");
  cardDiv.className = "card card-statistics";

  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.className = "card-body";

  const clearfixDiv = document.createElement("div");
  clearfixDiv.className = "clearfix";
  clearfixDiv.id = game;

  const timeIcon = document.createElement("i");
  timeIcon.className = "time";
  timeIcon.id = data.time;
  timeIcon.setAttribute("aria-hidden", "true");

  const leftTeamDiv = document.createElement("div");
  leftTeamDiv.className = "float-left";

  const leftTeamH4 = document.createElement("h4");
  leftTeamH4.className = "bold-text team";
  leftTeamH4.id = `g${gn}t1`;
  leftTeamH4.style.cursor = "pointer";
  leftTeamH4.textContent = data.away;

  const rightTeamDiv = document.createElement("div");
  rightTeamDiv.className = "float-right";

  const rightTeamH4 = document.createElement("h4");
  rightTeamH4.className = "bold-text team";
  rightTeamH4.id = `g${gn}t2`;

  if (tb) {
    rightTeamH4.className = "bold-text";
    rightTeamH4.style.fontSize = 6;
  }
  rightTeamH4.style.cursor = "pointer";
  rightTeamH4.textContent = data.home;

  const dateP = document.createElement("p");
  dateP.className = "text-muted";
  dateP.innerHTML = `<i class="fa fa-calendar mr-1" aria-hidden="true"></i>${data.humanDate}`;

  leftTeamDiv.appendChild(leftTeamH4);
  rightTeamDiv.appendChild(rightTeamH4);
  clearfixDiv.appendChild(timeIcon);
  clearfixDiv.appendChild(leftTeamDiv);
  clearfixDiv.appendChild(rightTeamDiv);
  cardBodyDiv.appendChild(clearfixDiv);
  cardBodyDiv.appendChild(dateP);
  if (data.hasOwnProperty("away")) {
    for (let i = 1; i <= NUM_GAMES; i += 1) {
      const boxDiv = document.createElement("div");
      boxDiv.className = "box";
      boxDiv.textContent = i;
      boxDiv.id = i;
      if (pointsPicked.includes(String(i))) {
        boxDiv.style.background = pickedPColor;
      }
      cardBodyDiv.appendChild(boxDiv);
    }
  } else {
    const tbInput = document.createElement("input");
    tbInput.value = 0;
    tbInput.id = `tb`;
    tbInput.className = "form__input";
    cardBodyDiv.append(tbInput);
  }

  cardDiv.appendChild(cardBodyDiv);
  outerDiv.appendChild(cardDiv);
  wrapper.appendChild(outerDiv);
}

function initCards(data, week) {
  const wrapper = document.getElementById("card-wrapper");
  while (wrapper.firstChild) wrapper.removeChild(wrapper.firstChild);
  if (data.hasOwnProperty(week)) {
    let gn = 1;
    for (let game in data[week]) {
      createCard(data[week][game], game, wrapper, gn);
      gn++;
    }
  }
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
