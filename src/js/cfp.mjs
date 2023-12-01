import { getDatabase, ref, set, onValue } from 'firebase/database'
import {onAuthStateChangedFb, logoutFb} from './auth.js'
import { json } from 'd3';

//Elements
const teams = document.querySelectorAll('[team-id]');
const cpMenus = document.querySelectorAll('select[game-id]');
const rankingMenus = document.querySelectorAll('[rank-id]');
const tbInput = document.getElementById('tie-breaker');
const errorMessage = document.getElementById('error-message');
 

//main
const matches = {1:['Oregon','Washington',1701478800],
                2:['OSU','Texas',1701536400],
                3:['Alabama','Georgia',1701550800],
                4:['Florida St','Louisville',1701565200],
                5:['Iowa','Michigan',1701565200],
}

let selected = {1:{'team':null,'cp':null},
                2:{'team':null,'cp':null},
                3:{'team':null,'cp':null},
                4:{'team':null,'cp':null},
                5:{'team':null,'cp':null},
}

let rankings = {
    1:null,
    2:null,
    3:null,
    4:null,
    5:null,
    6:null,
    7:null,
    8:null,
}

onAuthStateChangedFb();
const uid = localStorage.uid;
const db = getDatabase();
const week = 'week14'
let userData = await fetchData(uid,db);
console.log('userData :>> ', userData);

if (userData){
    if (userData.hasOwnProperty(week)) setupUI(userData[week]);
    if (userData.hasOwnProperty("name")) localStorage.displayName = userData["name"]   
}
//


//Listeners
$(document).ready(function () {
    $("#header").load("../src/pages/header.html")
});

document.getElementById('submit-button').addEventListener('click',() => {
    submitData();
});

document.getElementById("logout-button").addEventListener('click', logoutFb);

teams.forEach(team => {
    team.addEventListener('click', () => {
        selectTeam(team);
    })
})

cpMenus.forEach(cpMenu => {
    let original = cpMenu.value;
    cpMenu.addEventListener('change', () => {
        const game = cpMenu.getAttribute('game-id');
        const startTime = matches[game][2];
        const unixNow = Math.floor(new Date().getTime() / 1000);


        if (unixNow > startTime) {
            cpMenu.value = original;
            errorMessage.textContent = 'Game has already started';
            errorMessage.style.color = 'red';
        }else {
            selected[game]['cp'] = cpMenu.value;
            original = cpMenu.value;

        }
    })
    
})

rankingMenus.forEach(menu => {
    menu.addEventListener('change', () => {
        const rank = menu.getAttribute('rank-id');
        rankings[rank] = menu.value
    })
})


//Event Logic
function selectTeam(team){
    const teamName = team.getAttribute('team-id');
    const game = team.getAttribute('game-id');
    const info = matches[game];

    const unixNow = Math.floor(new Date().getTime() / 1000);
    if (unixNow > info[2]) return;

    const othTeamName = info[0] == teamName ? info[1] : info[0]
    const othTeam = document.querySelector(`[team-id="${othTeamName}"]`)

    const isSelected = team.style.opacity == '0.3' ? false : true

    if (isSelected){
        othTeam.style.opacity = '0.3';
    }else {
        team.style.opacity = '1.0';
        othTeam.style.opacity = '0.3';
    }
    selected[game]['team'] = teamName;
}

async function setupUI(data) {
    for (let key in data) {
        if (key.includes('game')) setupGame(data,key);
        else if (key.includes('rank')) setupRank(data,key);
        else if (key == 'tb'){
            tbInput.value = data[key]['pick'];
        }
    }
}

function allowSubmit() {
    if (hasDuplicate(Object.values(rankings))){
        errorMessage.textContent = `You choose a team twice in the rankings`;
        errorMessage.style.color = 'red';
        return false;
    }

    const cpChosen = Object.values(selected).map(obj => obj['cp']);
    if (hasDuplicate(cpChosen)){
        errorMessage.textContent = `You choose the same confidence points for multiple teams`;
        errorMessage.style.color = 'red';
        return false;
    }

    for (let game in selected) {
        const team = selected[game]['team'];
        const cp = selected[game]['cp'];
        
        if (!team && cp){
            errorMessage.textContent = `You chose a confidence level but no team for game ${game}`;
            errorMessage.style.color = 'red';
            return false;
        }
        if (team && !cp){
            errorMessage.textContent = `You chose a team but no confidence level for game ${game}`;
            errorMessage.style.color = 'red';
            return false;
        }
    }

    return true;
}

async function submitData() {
    if (!allowSubmit()) return;
    const tb = tbInput.value;

    try{
        errorMessage.textContent = 'Submitting...';
        errorMessage.style.color = 'black';

        for (let game in selected) {
            const team = selected[game]['team'];
            const cp = selected[game]['cp'];

            try {
                await set(ref(db, `users/${uid}/${week}/game${game}`), {
                  "pick": team,
                  "points": String(cp)
                });
              } catch (error) {
                errorMessage.textContent = error;
                errorMessage.style.color = 'red';
                return;
              }
        }

        for (let rank in rankings) {
            const team = rankings[rank];

            try {
                await set(ref(db, `users/${uid}/${week}/rank${rank}`), {
                  "pick": team,
                });

              } catch (error) {
                errorMessage.textContent = error;
                errorMessage.style.color = 'red';
                return;
              }

        }

        try {
            await set(ref(db, `users/${uid}/${week}/tb`), {
              "pick": tb,
            });

        } catch (error) {
        errorMessage.textContent = error;
        errorMessage.style.color = 'red';
        return;
        }
        
        errorMessage.textContent = 'Submitted!';
        errorMessage.style.color = 'green';
        
    }catch (err) {
        errorMessage.textContent = `FB Err: ${err}`;
        errorMessage.style.color = 'red';
        return;
    }
    
}


//Functions
async function fetchData(uid,db) {
    let res;
    await new Promise((resolve, reject) => {
        onValue(ref(db, `users/${uid}`) , (snapshot) => {
            const data = snapshot.val();
            res = data;
            resolve();
        });
    });
    return res;
}

function hasDuplicate(arr) {
    arr = arr.filter(val => val !== null);
    return new Set(arr).size !== arr.length;
}

function setupGame(data,key) {
    const gameNum = key.replace('game','');
    const info = matches[gameNum];

    if (data[key].hasOwnProperty('pick')){
        const teamName = data[key]['pick'];
        const cp = data[key]['points'];

        selected[gameNum]['team'] = teamName;
        selected[gameNum]['cp'] = cp;


        const othTeamName = info[0] == teamName ? info[1] : info[0];
        const othTeam = document.querySelector(`[team-id="${othTeamName}"]`);
        othTeam.style.opacity = '0.3';

        const cpMenu = document.querySelector(`select[game-id="${gameNum}"]`);
        cpMenu.value = cp;
    }
}

function setupRank(data,key) {
    const rank = key.replace('rank','');
    const team = data[key]['pick'];
    const menu = document.querySelector(`[rank-id="${rank}"]`);

    rankings[rank] = team;
    menu.value = team;
}
