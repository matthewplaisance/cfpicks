import { getDatabase, ref, set, onValue } from 'firebase/database'
import {onAuthStateChangedFb, logoutFb} from './auth'
import { json } from 'd3';


function submit(week, picks){
    const msgEl = document.getElementById('err_msg')
    const unixNow = Math.floor(new Date().getTime() / 1000);
    console.log('picks :>> ', picks);
    for (let p in picks){
        if (picks[p].points == 'null' || picks[p].points == null || picks[p].points == undefined){
            console.log("null?");
            msgEl.innerText = `Select confidence points for ${p}.`;
            msgEl.style.color = 'red';
            return;
        } 
        if (picks[p].pick == 'null'|| picks[p].pick == null || picks[p].pick == undefined){
            msgEl.innerText = `Select winner for ${p}. `;
            msgEl.style.color = 'red';
            return;
        }
    }
    let deleted = [];
    const times = document.querySelectorAll('.time');
    console.log('times :>> ', times);
    times.forEach(time => {

        const game = time.parentElement.id;
        if (time.id < unixNow) {
            delete picks[game]
            deleted.push(picks[game])
        }
    })
    console.log('deleted :>> ', deleted);
    console.log('picks :>> ', picks);
    try{
        for (let game in picks) {
            const info = picks[game];
            
            set(ref(db, `users/${uid}/${week}/${game}`), {
                "pick": info["pick"],
                "points": String(info["points"])
            });
        }
        set(ref(db, `users/${uid}/name`),localStorage.displayName);
        if (ddd != null & ddd != undefined & ddd != 'null' & ddd != 'undefined'){
            set(ref(db, `users/${uid}/ddd`),ddd);
        }

        msgEl.innerText = 'Success!';
        msgEl.style.color = 'green';
        //if (deleted.length != 0){
        //    const ps = deleted.join(",");
        //    msgEl.innerText += ` But, picks for ${ps} are past kick off time.`
        //}
    }catch (err) {
        msgEl.innerText = `FB Err: ${err}`;
        msgEl.style.color = 'red';
    }
}

function setup(data) {
    for (let game in data) {
        const gameEl = document.getElementById(game);
        const teams = gameEl.querySelectorAll('.team');
        const boxes = gameEl.parentNode.querySelectorAll('.box');
        
        teams.forEach(team => {
            if (team.textContent == data[game]['pick']) team.style.color = chosenColor;
        })
        boxes.forEach(box => {
            if (box.textContent == data[game]['points']) box.style.background = chosenColor;
        })
    }
    if (data.hasOwnProperty('tb')) {
        document.getElementById('tb').value = data['tb'].pick;
    }else document.getElementById('tb').value = 0;
}

async function fetchData() {
    let picks;
    await new Promise((resolve, reject) => {
        onValue(refer, (snapshot) => {
            const data = snapshot.val();
            picks = data;
            resolve();
        });
    });

    return picks;
}

async function colorWinners(week) {
    console.log('picks :>> ', picks);
    let data = await json("../data/winners.json")
    if (data.hasOwnProperty(week)) data = data[week]
    else return;
    const cards = document.querySelectorAll('.clearfix')
    let points = 0;
    cards.forEach(card => {
        const game = card.id;
        const winner = data[game].winner;
        const score = data[game].score;
        if (picks.hasOwnProperty(game)){
            if (picks[game].pick == winner) {
                card.parentElement.style.background = '#c9e782';
                points += parseInt(picks[game].points)
            } else card.parentElement.style.background = 'red';
        }
        
    });
    document.getElementById('selected-week').textContent += ` points: ${points}`

}

function createCard(data,game,wrapper,gn){
    const tb = data.hasOwnProperty("away") ? false : true;
    if (tb){
        console.log('data :>> ', data);
    }
    const outerDiv = document.createElement('div');
    outerDiv.className = 'col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-4';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card card-statistics';

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body';

    const clearfixDiv = document.createElement('div');
    clearfixDiv.className = 'clearfix';
    clearfixDiv.id = game;

    const timeIcon = document.createElement('i');
    timeIcon.className = 'time';
    timeIcon.id = data.time;
    timeIcon.setAttribute('aria-hidden', 'true');

    const leftTeamDiv = document.createElement('div');
    leftTeamDiv.className = 'float-left';

    const leftTeamH4 = document.createElement('h4');
    leftTeamH4.className = 'bold-text team';
    leftTeamH4.id = `g${gn}t1`;
    leftTeamH4.style.cursor = 'pointer';
    leftTeamH4.textContent = data.away;

    const rightTeamDiv = document.createElement('div');
    rightTeamDiv.className = 'float-right';

    const rightTeamH4 = document.createElement('h4');
    rightTeamH4.className = 'bold-text team';
    rightTeamH4.id = `g${gn}t2`;

    if (tb) {
        rightTeamH4.className = 'bold-text';
        rightTeamH4.style.fontSize = 6;
    }
    rightTeamH4.style.cursor = 'pointer';
    rightTeamH4.textContent = data.home;

    const dateP = document.createElement('p');
    dateP.className = 'text-muted';
    dateP.innerHTML = `<i class="fa fa-calendar mr-1" aria-hidden="true"></i>${data.humanDate}`;

    leftTeamDiv.appendChild(leftTeamH4);
    rightTeamDiv.appendChild(rightTeamH4);
    clearfixDiv.appendChild(timeIcon);
    clearfixDiv.appendChild(leftTeamDiv);
    clearfixDiv.appendChild(rightTeamDiv);
    cardBodyDiv.appendChild(clearfixDiv);
    cardBodyDiv.appendChild(dateP);

    if (data.hasOwnProperty("away")){
        for (let i = 1; i <= 12; i++) {
            const boxDiv = document.createElement('div');
            boxDiv.className = 'box';
            boxDiv.textContent = i;
            boxDiv.id = i;
            cardBodyDiv.appendChild(boxDiv);
        }
    }else{
        const tbInput = document.createElement('input');
        tbInput.value = 0;
        tbInput.id = 'tb'
        tbInput.className = "form__input";
        cardBodyDiv.append(tbInput);
    }
    
    
    cardDiv.appendChild(cardBodyDiv);
    outerDiv.appendChild(cardDiv);
    wrapper.appendChild(outerDiv);
}

function initCards(data,week) {
    const wrapper = document.getElementById('card-wrapper');
    while (wrapper.firstChild) wrapper.removeChild(wrapper.firstChild);
    if (data.hasOwnProperty(week)) {
        let gn = 1;
        for (let game in data[week]){
            createCard(data[week][game],game,wrapper,gn);
            gn++
        }
    }

}

onAuthStateChangedFb();

$(document).ready(function () {
    $("#header").load("../src/pages/header.html")
});

const ddd = sessionStorage.ddd;
sessionStorage.ddd = "null";
const uid = localStorage.uid;
const db = getDatabase();
let weekEl = document.getElementById('selected-week');
const week = weekEl.textContent.replace(' ','').toLocaleLowerCase()
const refer = ref(db, `users/${uid}/${week}`)  
const chosenColor = 'green'

let picks = await fetchData();
if (picks == null) picks = {};
const gameData = await json('../data/games.json')
let pointsPicked = [];

for (let game in picks) pointsPicked.push(String(picks[game].points))

initCards(gameData,week);
setup(picks);
//colorWinners(week);
console.log('pointsPicked out:>> ', pointsPicked);
const teams = document.querySelectorAll('.team');
const submitBtn = document.getElementById('submit');
const points = document.querySelectorAll('.box');

const sidebar = document.getElementById('sidebar')
const weeks = sidebar.querySelectorAll('.nav-link')

console.log('picks :>> ', picks);
teams.forEach(el => {
    el.addEventListener('click', function() {
        console.log('this :>> ', this);
        console.log('document.getElementById(this.id).parentElement :>> ', document.getElementById(this.id).parentElement);
        const parent = document.getElementById(this.id).parentElement.parentElement;
        console.log('parent :>> ', parent);
        const time = parent.querySelector('.time').id
        const unixNow = Math.floor(new Date().getTime() / 1000);

        if (unixNow > time) return;
        this.style.color = chosenColor;

        const children = parent.querySelectorAll(".team");
        let selectedpoints = null;
        if (picks.hasOwnProperty(parent.id)){
            selectedpoints = picks[parent.id].points
        }
        picks[parent.id] = {
            pick:this.textContent,
            points: selectedpoints
        }

        console.log('children :>> ', children);
        children.forEach(child => {
            console.log('child :>> ', child);
            if (child.textContent != this.textContent) child.style.color = 'black';
        })
    });
});

points.forEach(el => {
    el.addEventListener('click', function() {
        console.log('pointsPicked :>> ', pointsPicked);
        if (pointsPicked.includes(this.textContent)) return;

        this.style.background = chosenColor;
        const parent = this.parentNode;
        const children = parent.querySelectorAll(".box");
        const game = parent.querySelector('.clearfix');
        const teams = game.querySelectorAll('.team');

        let selected;
        teams.forEach(team => {
            if (team.style.color == chosenColor) selected = team.textContent
        })

        if (picks.hasOwnProperty(game.id)){
            if (picks[game.id].hasOwnProperty('points'))pointsPicked = pointsPicked.filter(item => item !== picks[game.id].points);
        }

        picks[game.id] = {
            pick:selected,
            points: this.textContent
        }
    
        children.forEach(child => {
            if (child.textContent != this.textContent) child.style.background = 'whitesmoke'; 
        });
        pointsPicked.push(String(picks[game.id].points))
        console.log('picks :>> ', picks);
    });
});

submitBtn.addEventListener('click',function () {
    const tbel = document.getElementById('tb')
    console.log('tbel.value :>> ', String(tbel.value));
    picks['tb'] ={
        pick:String(tbel.value),
        points:0
    }
    submit(week,picks);
});

weeks.forEach(w => { 
    let week = w.innerText.replace(' ','').toLocaleLowerCase()
    w.addEventListener('click', () => {
        weekEl.textContent = w.innerText;
        initCards(gameData,week);
        setup(picks);
        colorWinners(week);
    })
})

document.getElementById("btnLogout").addEventListener('click', logoutFb);
