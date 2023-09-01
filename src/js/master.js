import { getDatabase, ref, onValue } from 'firebase/database'
import {onAuthStateChangedFb} from './auth'
import { json } from 'd3';

onAuthStateChangedFb();

$(document).ready(function () {
    $("#header").load("../src/pages/header.html")
});

async function fetchData(refer) {
    let data;
    await new Promise((resolve, reject) => {
        onValue(refer , (snapshot) => {
            data = snapshot.val();
            resolve();
        });
    });
    return data;
}


function initTable(userData,dataWinners,dataGames,week) {
    let unixNow = Math.floor(new Date().getTime() / 1000);
    let tableBody = document.getElementById('tbody');
    let winner = {
        "points":0,
        "user":[],
        'tb':0
    };
    let cnt = 0;

    for (let user in userData) {
        if (user == "IWBJNJ2Zd2OEIndMcKgXpRfRF3C3") continue;

        let points = 0;
        const weekInfo = userData[user][week];
        let row = document.createElement('tr')
        let cell = document.createElement('td');
        cell.textContent = userData[user]['name']
        cell.id = user
        row.append(cell)
        //for (let game in weekInfo){
        //    console.log('game :>> ', game);
        //    const p = weekInfo[game]['pick'];
        //    const pnts = weekInfo[game]['points'];
        //    let cell = document.createElement('td');
        //    cell.textContent = `${p} : ${pnts}`
        //    row.append(cell)
        //    //if (data[week][game]["winner"] == p)points += parseInt(pnts)
        //}
        //week1 handler
        for (let i = 1; i < 13; i++){
            let cell = document.createElement('td');
            cell.id = week1Map[i]
            row.append(cell)
        }

       
        for (const [idx, game] of Object.entries(week1Map)) {
            if (weekInfo.hasOwnProperty(game)){
                const info = weekInfo[game]
                if (dataGames[game].time < unixNow) row.cells[idx].textContent = `${info["pick"]}: ${info["points"]}`;
                if (dataWinners.hasOwnProperty(game)) {
                    if (dataWinners[game] == info.pick) {
                        row.cells[idx].style.background = colorW;
                        points += parseInt(info.points);
                    }
                }
            }else {
                if (dataGames[game].time < unixNow) row.cells[idx].textContent = 'No pick'
            }
            
        }

        if (points > winner["points"]){
            winner["points"] = points;
            winner.user = [user];
            winner.tb = weekInfo['tb'].pick;
        }else if (points == winner.points){
            const tbr = dataWinners.tb;
            if (tbr){
                const currDiff = Math.abs(tbr - weekInfo['tb'].pick);
                const winnerDiff = Math.abs(tbr - winner.tb);
                if (currDiff < winnerDiff){
                    winner["points"] = points;
                    winner.user = [user];
                    winner.tb = weekInfo['tb'].pick;
                }else if (currDiff == winnerDiff) winner.user.push(user)
            }else winner.user.push(user)
        }

        let cellt = document.createElement('td');
        if (weekInfo.hasOwnProperty('tb')) {
            if (dataGames['tiebreaker'].time < unixNow) cellt.textContent = weekInfo['tb'].pick;
        }
        row.append(cellt)

        let cellp = document.createElement('td');
        cellp.textContent = points;
        row.append(cellp);

        tableBody.append(row);
        cnt++
    }
    for (let w of winner.user) document.getElementById(w).style.background = colorW;
    const userRow = document.getElementById(uid);
    if (userRow) userRow.style.fontWeight = 600;
}

function displayTBR(data) {
    if (data) {
        const tbr = data.tb
        if (tbr){
            let tbr_th = document.getElementById('tb_res');
            tbr_th.textContent = tbr;
            tbr_th.style.background = colorW;
        }
    }
}

const week1Map = {
    11:"game1",
    12:"game2",
    1:"game3",
    2:"game4",
    3:"game5",
    4:"game6",
    5:"game7",
    6:"game8",
    7:"game9",
    8:"game10",
    9:"game11",
    10:"game12"
}

const uid = localStorage.uid;
console.log('uid :>> ', uid);
const colorW = '#C0FF00'
const db = getDatabase();
let userData = await fetchData(ref(db, `users`));
let winnerData = await fetchData(ref(db, `results`));
const dataGames = await json('../data/games.json');

let weekEl = document.getElementById('selected-week');
let week = weekEl.textContent.replace(' ','').toLocaleLowerCase();

if (dataGames) {
    initTable(userData,winnerData[week],dataGames[week],week);
    displayTBR(winnerData[week]);
}

const sidebar = document.getElementById('sidebar')
const weeks = sidebar.querySelectorAll('.nav-link')

weeks.forEach(w => { 
    let week = w.innerText.replace(' ','').toLocaleLowerCase()
    const table = document.getElementById('tbody');
    w.addEventListener('click', () => {
        weekEl.textContent = w.innerText
        while (table.firstChild){
            table.removeChild(table.firstChild);
        }
        //if (data.hasOwnProperty(week)) initTable(userData,data,week);
    })
})

