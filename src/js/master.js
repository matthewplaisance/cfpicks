import { getDatabase, ref, set, onValue } from 'firebase/database'
import {onAuthStateChangedFb} from './auth'
import { color, json, partition } from 'd3';

onAuthStateChangedFb();

$(document).ready(function () {
    $("#header").load("../src/pages/header.html")
});

async function fetchData() {
    let data;
    await new Promise((resolve, reject) => {
        onValue(ref(db, `users`) , (snapshot) => {
            data = snapshot.val();
            resolve();
        });
    });
    return data;
}

function initTable(userData,dataWinners,dataGames,week) {
    let unixNow = Math.floor(new Date().getTime() / 1000);
    console.log('dataGames :>> ', dataGames);
    let tableBody = document.getElementById('tbody');
    let winner = {
        "points":0,
        "user":[],
        'tb':0
    };
    console.log('winner :>> ', winner);
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
                    if (dataWinners[game].winner == info.pick) {
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
            if (dataWinners.hasOwnProperty('tb')){
                const currDiff = Math.abs(dataWinners['tb'] - weekInfo['tb'].pick);
                const winnerDiff = Math.abs(dataWinners['tb'] - winner.tb);
                if (currDiff < winnerDiff){
                    winner["points"] = points;
                    winner.user = [user];
                    winner.tb = weekInfo['tb'].pick;
                }else if (currDiff == winnerDiff) winner.user.push(user)
            }
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
    //for (let w of winner.user) document.getElementById(w).style.background = colorW;
    const userRow = document.getElementById(uid);
    if (userRow) {
        userRow.style.fontWeight = 600;
        localStorage.displayName = userRow.textContent
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
let userData = await fetchData();
const dataWinners = await json('../data//winners.json');
const dataGames = await json('../data/games.json');
console.log('userData :>> ', userData);

//for (let key in userData){
//if (key !== '7QSsNsOFhDaOlYC5Cdp0syqGHye2') delete userData[key]
//}

console.log('userData :>> ', userData);
let weekEl = document.getElementById('selected-week')
let week = weekEl.textContent.replace(' ','').toLocaleLowerCase();
if (dataGames.hasOwnProperty(week)) initTable(userData,dataWinners[week],dataGames[week],week);

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

