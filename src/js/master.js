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
        let weekInfo = userData[user][week];
        if (!weekInfo) weekInfo = {};

        let row = document.createElement('tr')
        let cell = document.createElement('td');
        cell.textContent = userData[user]['name']
        cell.id = user
        row.append(cell)
        let cellp = document.createElement('td');
        cellp.textContent = points;
        cellp.id = `${user}_points`
        row.append(cellp);
       
        for (let i = 1; i < 13; i++){
            let cell = document.createElement('td');
            cell.id = week1Map[i]
            row.append(cell)
        }

        for (const [idx, game] of Object.entries(week1Map)) {
            if (weekInfo.hasOwnProperty(game)){
                const info = weekInfo[game]
                console.log('game :>> ', game);
                console.log('info :>> ', info);
                if (dataGames[game].time < unixNow) row.cells[parseInt(idx) + 1].textContent = `${info["pick"]}: ${info["points"]}`;
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
        cellp.textContent = points;
        tableBody.append(row);
        cnt++
    }
    if (winner.points != 0) for (let w of winner.user) document.getElementById(w).style.background = colorW;
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
    1:"game1",
    2:"game2",
    3:"game3",
    4:"game4",
    5:"game5",
    6:"game6",
    7:"game7",
    8:"game8",
    9:"game9",
    10:"game10",
    11:"game11",
    12:"game12"
}

const uid = localStorage.uid;
console.log('uid :>> ', uid);
const colorW = '#C0FF00'
const db = getDatabase();
let userData = await fetchData(ref(db, `users`));
let winnerData = await fetchData(ref(db, `results`));
const dataGames = await json('../data/games.json');

let weekEl = document.getElementById('selected-week');
let week = 'week2'

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
        if (week == 'week2'){
            initTable(userData,winnerData[week],dataGames[week],week);
            displayTBR(winnerData[week]);
        }
    })
})

