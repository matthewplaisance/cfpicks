import { getDatabase, ref, set, onValue } from 'firebase/database'
import {onAuthStateChangedFb} from './auth'
import { json } from 'd3';

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


function initTable(userData,data,week) {
    let tableBody = document.getElementById('tbody');
    let winner = {
        "points":0,
        "idx":0
    }
    let cnt = 0;

    for (let user in userData) {
        let points = 0;
        const weekInfo = userData[user][week];
        let row = document.createElement('tr')
        let cell = document.createElement('td');
        cell.textContent = userData[user]['name']
        row.append(cell)

        for (let game in weekInfo){
            const p = weekInfo[game]['pick'];
            const pnts = weekInfo[game]['points'];
            let cell = document.createElement('td');
            cell.textContent = `${p} : ${pnts}`
            row.append(cell)
            if (data[week][game]["winner"] == p)points += parseInt(pnts)
        }
        if (points > winner["points"]){
            winner["points"] = points;
            winner['idx'] = cnt
        }
        let cellt = document.createElement('td');
        cellt.textContent = 'tie'
        row.append(cellt)

        let cellp = document.createElement('td');
        cellp.textContent = points
        row.append(cellp)

        tableBody.append(row)
        cnt++
    }

    Array.from(tableBody.getElementsByTagName('tr')).forEach((row,idx) =>{
        if (idx == winner['idx']) row.style.background = '#c9e782';
    })
}

const db = getDatabase();
const userData = await fetchData();
const data = await json('../data//winners.json');

let weekEl = document.getElementById('selected-week')
let week = weekEl.textContent.replace(' ','').toLocaleLowerCase();
//if (data.hasOwnProperty(week)) initTable(userData,data,week);

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

