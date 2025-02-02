import { getDatabase, ref, onValue } from 'firebase/database'
import {onAuthStateChangedFb} from './auth'
import { json, scalePoint, select } from 'd3';

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
    th(dataGames);
    let unixNow = Math.floor(new Date().getTime() / 1000);
    let tableBody = document.getElementById('tbody');
    let winner = {
        "points":0,
        "user":[],
        'tb':0
    };
    let cnt = 0;
    let tableArray = [];
    for (let user in userData) {
        if (user == "IWBJNJ2Zd2OEIndMcKgXpRfRF3C3") continue;
        let points = 0;
        let pp = 0;
        let weekInfo = userData[user][week];
        if (!weekInfo) weekInfo = {};
        let rowArray = []
        let row = document.createElement('tr')
        row.append(cell(user,userData[user]['name'],'td',true))

        let cellp = cell(`${user}_points`,points)
        let cpp = cell(`${user}_ppoints`,points)
        row.append(cellp);
        row.append(cpp);

        for (let i = 1; i < Object.keys(dataGames).length + 1; i++) row.append(cell(posmap[i]));  
        //if (week == 'week14'){
        //    for (let i = 1;i<9;i++)row.append(cell(`rank${i}`))
        //}
        for (const [idx, game] of Object.entries(posmap)) {
            const rank = `rank${idx-5}`
            const iRow = parseInt(idx) + 2;
            if (weekInfo.hasOwnProperty(game)){
                const info = weekInfo[game];
                if (info){
                    if (info.hasOwnProperty("pick")){
                        if (dataGames[game].time < unixNow) row.cells[iRow].textContent = `${info["pick"]}: ${info["points"]}`;
                        if (dataWinners[game] == "" || dataWinners[game] == info.pick || !dataWinners[game])pp += parseInt(info.points);
                    }

                    if (dataWinners.hasOwnProperty(game)) {
                        if (dataWinners[game] == info.pick) {
                            row.cells[iRow].style.background = colorW;
                            points += parseInt(info.points);
                        }
                    }
                }
            }else if (weekInfo.hasOwnProperty(rank)){
                const info = weekInfo[rank];
                const p = 9 - (idx-5)
                if (info.hasOwnProperty("pick")){
                    if (1701478800 < unixNow) row.cells[iRow].textContent = info['pick'];
                }
                if (dataWinners.hasOwnProperty(rank)) {
                    if (dataWinners[rank] == info.pick) {
                        row.cells[iRow].style.background = colorW;
                        points += 2;
                    }
                }
                if (dataWinners[rank] == "" || dataWinners[rank] == info.pick)pp += 2;
            }
            
        }

        if (points > winner["points"]){
            winner["points"] = points;
            winner.user = [user];
            winner.tb = weekInfo['tb'].pick;
        }else if (points == winner.points){
            if (dataWinners.hasOwnProperty('tb')){
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
            
        }

        let cellt = document.createElement('td');
        if (weekInfo.hasOwnProperty('tb')) {
            if (dataGames['tiebreaker'].time < unixNow) cellt.textContent = weekInfo['tb'].pick;
        }
        row.append(cellt)
        cellp.textContent = points;
        cpp.textContent = pp;
        tableBody.append(row);
        cnt++
    }
    if (winner.points != 0) for (let w of winner.user) document.getElementById(w).style.color = '#FCCB00';
    const userRow = document.getElementById(uid);
    if (userRow) userRow.style.fontWeight = 600;
    if (winner.points == 0) reOrderTable()
    else reOrderTable(false,1)
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

function displaySeason(data){
    const rowGames = document.getElementById('rowGames');
    const rowDates = document.getElementById('rowDates');
    while (rowGames.firstChild) rowGames.removeChild(rowGames.firstChild);
    while (rowDates.firstChild) rowDates.removeChild(rowDates.firstChild);
    rowGames.append(holder());

    const c = document.createElement('th')
    c.textContent = 'Season Points'
    rowGames.append(c)
    let tableBody = document.getElementById('tbody');
    const podium = ['#FCCB00','#D4D8DC','#B1860F']
    let cnt = 0;
    Object.entries(data).forEach(([idx, user]) => {
        let row = document.createElement('tr');
        //let spaces = 30 - user['name'].length;
        //let txt = `${user['name']}${'-'.repeat(spaces)}${user['points']}`;
        let nameCell = cell(user, user['name']);
        let pointsCell = cell(user, user['points']);
        nameCell.style.color = `color:${podium[idx]};`; 
        pointsCell.style.cssText = 'width: 100px;'; 
        nameCell.style.cssText = 'width: 100px;'; 


        row.append(nameCell);
        row.append(pointsCell);

        if (cnt % 2 == 1) {
            row.style.backgroundColor = "#f0f0f0"; // Light grey for odd rows
        } else {
            row.style.backgroundColor = ""; // Default for even rows
        }
        tableBody.append(row);
        cnt++
    })
}

function th(data){
    const rowGames = document.getElementById('rowGames');
    const rowDates = document.getElementById('rowDates');
    while (rowGames.firstChild) rowGames.removeChild(rowGames.firstChild);
    while (rowDates.firstChild) rowDates.removeChild(rowDates.firstChild);

    rowGames.append(holder());//appending html el removes el from prev loc
    rowDates.append(holder());
    rowDates.append(holder());
    rowDates.append(holder());


    const cellp = document.createElement('th')
    cellp.textContent = 'Current Points'
    const c = document.createElement('th')
    c.textContent = 'Potential Points'
    rowGames.append(cellp)
    rowGames.append(c)
    

    for (const [idx, game] of Object.entries(posmap)) {
        if (data.hasOwnProperty(game)){
            let cell = document.createElement('th');
            cell.textContent = `${data[game]['away']} at ${data[game]['home']}`;
            
            rowGames.append(cell);
            let celld = document.createElement('td');
            celld.style.color = '#1fc4ed';
            celld.textContent = data[game]['humanDate'];
            rowDates.append(celld);
        }
    }
    //if (week == 'week14'){
    //    for (let i = 1; i < 9;i++){
    //        let cell = document.createElement('th');
    //        cell.textContent = i;
    //        if (i == 1) cell.textContent = "Rankings: 1"
    //        cell.style.fontWeight = 'bold;'
    //        rowGames.append(cell);
    //    }
    //}
    const tbc = document.createElement('th');
    tbc.style.color = '#1991EB';
    tbc.textContent = data['tiebreaker']['a']['home'];
    const tbcell = document.createElement('td');
    tbcell.id = 'tb_res';

    rowGames.append(tbc);
    rowDates.append(tbcell);
}

const holder = () => {
    const b = document.createElement('th');
    b.textContent = 'holder';
    b.style.color = 'white';
    return b
}

const cell = (id,textContent=null,type='td',sticky=false) => {
    
    const cell = document.createElement(type);
    cell.id = id;
    cell.textContent = textContent;
    if (sticky) {
        cell.classList.add('sticky-column');
        cell.style.backgroundColor = '#f7faf8';
    }

    return cell
}

function calcSeason(userData,results){
    let res = {}
    for (let user in userData){
        res[user] = {'name':userData[user]['name'],'points':0};
        for (let week in userData[user]){
            const weekData = userData[user][week] 
            if (typeof weekData == 'object' && weekData !== null){
                for (let game in weekData){
                    if (weekData[game].pick == results[week][game]){
                        res[user].points += parseInt(weekData[game].points)
                    }
                }
            }
        }
    }
    const dataArray = Object.entries(res).map(([key, value]) => ({ key, ...value }));

    dataArray.sort((a, b) => b.points - a.points);

    const sortedData = {};
    dataArray.forEach((item) => {
        sortedData[item.key] = item;
    });
    console.log('sortedData :>> ', sortedData);
}

function reOrderTable(alp=true,cellIdx=0) {
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
    12:"game12",
    13:"game13",
    14:"game14",
    15:"game15",
}

const uid = localStorage.uid;
const colorW = '#C0FF00'
const db = getDatabase();
let userData = await fetchData(ref(db, `users`));
let winnerData = await fetchData(ref(db, `results`));
const dataGames = await json('../data/games.json');
const seasonData = await json('../data/season.json');
let weekEl = document.getElementById('weekSelect');
let w = weekEl.value
let week = weekEl.value.replace(' ','').toLocaleLowerCase();
calcSeason(userData,winnerData)

if (dataGames) {
    initTable(userData,winnerData[week],dataGames[week],week);
    displayTBR(winnerData[week]);
}

select("#weekSelect").on("change", () => {
    let week = document.getElementById('weekSelect').value
    if (week == 'default') week = "Week 13";
    week = week.replace(' ','').toLocaleLowerCase()
    const table = document.getElementById('tbody');
    
    while (table.firstChild){
        table.removeChild(table.firstChild);
    }
    if (Object.keys(dataGames).includes(week)){
        initTable(userData,winnerData[week],dataGames[week],week);
        displayTBR(winnerData[week]);
    }
    if (week == "season") displaySeason(seasonData);
});
