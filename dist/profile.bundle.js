/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/auth.js":
/*!************************!*\
  !*** ./src/js/auth.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   loginFb: () => (/* binding */ loginFb),\n/* harmony export */   logoutFb: () => (/* binding */ logoutFb),\n/* harmony export */   onAuthStateChangedFb: () => (/* binding */ onAuthStateChangedFb),\n/* harmony export */   updatePasswordFb: () => (/* binding */ updatePasswordFb)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\n\r\nconst firebaseConfig = {\r\n    apiKey: \"AIzaSyC8J8_Bo2YSeM1aTkE3--bQLCaeuGU3hQE\",\r\n    authDomain: \"cfpicks-66e14.firebaseapp.com\",\r\n    projectId: \"cfpicks-66e14\",\r\n    storageBucket: \"cfpicks-66e14.appspot.com\",\r\n    messagingSenderId: \"924459609957\",\r\n    appId: \"1:924459609957:web:c1125a2a8f5147de313b8c\"\r\n};\r\n  \r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\n\r\n\r\nconst onAuthStateChangedFb = () => {\r\n    auth.onAuthStateChanged((user) => {\r\n        if (user) {\r\n            console.log('user mon :>> ', user);\r\n            //up();\r\n        } else {\r\n            console.log(\"none\");\r\n            window.location.replace('index.html');\r\n            const currentState = window.history.state;\r\n            window.history.replaceState(currentState, '', window.location.href);\r\n            window.onpopstate = function () {\r\n            window.history.replaceState(currentState, '', window.location.href);\r\n            };\r\n        }\r\n    });\r\n};\r\n\r\nconst up = () => {\r\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updateProfile)(auth.currentUser, {\r\n        displayName: ''\r\n      }).then(() => {\r\n        console.log('userCredential.user.displayName :>> ', auth.currentUser.displayName);\r\n      }).catch((error) => {\r\n        console.log('error :>> ', error);\r\n      });\r\n};\r\n\r\nconst loginFb = (email, password) => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth,email,password)\r\n};\r\n\r\nconst logoutFb = () => {\r\n    sessionStorage.removeItem('siteSelection')\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\r\n};\r\n\r\nconst updatePasswordFb = (newPassword) => {\r\n    const user = auth.currentUser;\r\n    if (user) {\r\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(user,newPassword);\r\n    }\r\n    return Promise.reject(new Error('No user is currently signed in.'));\r\n};\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBQ21GO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBYTtBQUN6QixhQUFhLHNEQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBYTtBQUNqQjtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlFQUEwQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0RBQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNkRBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDMkU7QUFDM0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvYXV0aC5qcz85MjkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQsIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLCBzaWduT3V0LCB1cGRhdGVQYXNzd29yZCwgdXBkYXRlUHJvZmlsZSB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5QzhKOF9CbzJZU2VNMWFUa0UzLS1iUUxDYWV1R1UzaFFFXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcImNmcGlja3MtNjZlMTQuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwiY2ZwaWNrcy02NmUxNFwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJjZnBpY2tzLTY2ZTE0LmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5MjQ0NTk2MDk5NTdcIixcclxuICAgIGFwcElkOiBcIjE6OTI0NDU5NjA5OTU3OndlYjpjMTEyNWEyYThmNTE0N2RlMzEzYjhjXCJcclxufTtcclxuICBcclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcblxyXG5cclxuY29uc3Qgb25BdXRoU3RhdGVDaGFuZ2VkRmIgPSAoKSA9PiB7XHJcbiAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyIG1vbiA6Pj4gJywgdXNlcik7XHJcbiAgICAgICAgICAgIC8vdXAoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdpbmRleC5odG1sJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnN0YXRlO1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoY3VycmVudFN0YXRlLCAnJywgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGN1cnJlbnRTdGF0ZSwgJycsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHVwID0gKCkgPT4ge1xyXG4gICAgdXBkYXRlUHJvZmlsZShhdXRoLmN1cnJlbnRVc2VyLCB7XHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICcnXHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VyQ3JlZGVudGlhbC51c2VyLmRpc3BsYXlOYW1lIDo+PiAnLCBhdXRoLmN1cnJlbnRVc2VyLmRpc3BsYXlOYW1lKTtcclxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIDo+PiAnLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbG9naW5GYiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLGVtYWlsLHBhc3N3b3JkKVxyXG59O1xyXG5cclxuY29uc3QgbG9nb3V0RmIgPSAoKSA9PiB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdzaXRlU2VsZWN0aW9uJylcclxuICAgIHJldHVybiBzaWduT3V0KGF1dGgpO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlUGFzc3dvcmRGYiA9IChuZXdQYXNzd29yZCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVQYXNzd29yZCh1c2VyLG5ld1Bhc3N3b3JkKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ05vIHVzZXIgaXMgY3VycmVudGx5IHNpZ25lZCBpbi4nKSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBhdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWRGYiwgbG9naW5GYiwgbG9nb3V0RmIsIHVwZGF0ZVBhc3N3b3JkRmIgfTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/auth.js\n");

/***/ }),

/***/ "./src/js/profile.js":
/*!***************************!*\
  !*** ./src/js/profile.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\n\r\n\r\n\r\nfunction submit(week, picks){\r\n    const times = document.querySelectorAll('.time');\r\n    const unixNow = Math.floor(new Date().getTime() / 1000);\r\n    times.forEach(time => {\r\n        const game = time.parentElement.id;\r\n        if (time.id < unixNow) delete picks[game]\r\n    })\r\n\r\n    for (let game in picks) {\r\n        const info = picks[game];\r\n        console.log('info :>> ', info);\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}/${week}/${game}`), {\r\n            \"pick\": info[\"pick\"],\r\n            \"points\": String(info[\"points\"])\r\n        });\r\n    }\r\n}\r\n\r\nfunction setup(data) {\r\n    for (let game in data) {\r\n        const gameEl = document.getElementById(game);\r\n        const teams = gameEl.querySelectorAll('.team');\r\n        const boxes = gameEl.parentNode.querySelectorAll('.box');\r\n        \r\n        teams.forEach(team => {\r\n            if (team.textContent == data[game]['pick']) team.style.color = chosenColor;\r\n        })\r\n        boxes.forEach(box => {\r\n            if (box.textContent == data[game]['points']) box.style.background = chosenColor;\r\n        })\r\n    }\r\n}\r\n\r\nasync function fetchData() {\r\n    let picks;\r\n    await new Promise((resolve, reject) => {\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(refer, (snapshot) => {\r\n            const data = snapshot.val();\r\n            picks = data;\r\n            resolve();\r\n        });\r\n    });\r\n\r\n    return picks;\r\n}\r\n\r\nasync function colorWinners(week) {\r\n    let data = await (0,d3__WEBPACK_IMPORTED_MODULE_1__.json)(\"../data/winners.json\")\r\n    if (data.hasOwnProperty(week)) data = data[week]\r\n    else return;\r\n    console.log('data :>> ', data);\r\n    const cards = document.querySelectorAll('.clearfix')\r\n    let points = 0;\r\n    cards.forEach(card => {\r\n        const game = card.id;\r\n        const winner = data[game].winner\r\n        const score = data[game].score\r\n        if (picks[game].pick == winner) {\r\n            card.parentElement.style.background = '#c9e782';\r\n            points += parseInt(picks[game].points)\r\n        } else card.parentElement.style.background = 'red';\r\n    })\r\n    document.getElementById('selected-week').textContent += ` points: ${points}`\r\n\r\n}\r\n\r\nfunction createCard(data,game,wrapper){\r\n    console.log('data :>> ', data);\r\n    const outerDiv = document.createElement('div');\r\n    outerDiv.className = 'col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-4';\r\n\r\n    const cardDiv = document.createElement('div');\r\n    cardDiv.className = 'card card-statistics';\r\n\r\n    const cardBodyDiv = document.createElement('div');\r\n    cardBodyDiv.className = 'card-body';\r\n\r\n    const clearfixDiv = document.createElement('div');\r\n    clearfixDiv.className = 'clearfix';\r\n    clearfixDiv.id = game;\r\n\r\n    const timeIcon = document.createElement('i');\r\n    timeIcon.className = 'time';\r\n    timeIcon.id = data.time;\r\n    timeIcon.setAttribute('aria-hidden', 'true');\r\n\r\n    const leftTeamDiv = document.createElement('div');\r\n    leftTeamDiv.className = 'float-left';\r\n\r\n    const leftTeamH4 = document.createElement('h4');\r\n    leftTeamH4.className = 'bold-text team';\r\n    leftTeamH4.id = 'g1t1';\r\n    leftTeamH4.style.cursor = 'pointer';\r\n    leftTeamH4.textContent = data.away;\r\n\r\n    const rightTeamDiv = document.createElement('div');\r\n    rightTeamDiv.className = 'float-right';\r\n\r\n    const rightTeamH4 = document.createElement('h4');\r\n    rightTeamH4.className = 'bold-text team';\r\n    rightTeamH4.id = 'g1t2';\r\n    rightTeamH4.style.cursor = 'pointer';\r\n    rightTeamH4.textContent = data.home;\r\n\r\n    const dateP = document.createElement('p');\r\n    dateP.className = 'text-muted';\r\n    dateP.innerHTML = `<i class=\"fa fa-calendar mr-1\" aria-hidden=\"true\"></i>${data.time}`;\r\n\r\n    \r\n\r\n    leftTeamDiv.appendChild(leftTeamH4);\r\n    rightTeamDiv.appendChild(rightTeamH4);\r\n    clearfixDiv.appendChild(timeIcon);\r\n    clearfixDiv.appendChild(leftTeamDiv);\r\n    clearfixDiv.appendChild(rightTeamDiv);\r\n    cardBodyDiv.appendChild(clearfixDiv);\r\n    cardBodyDiv.appendChild(dateP);\r\n    for (let i = 1; i <= 10; i++) {\r\n        const boxDiv = document.createElement('div');\r\n        boxDiv.className = 'box';\r\n        boxDiv.textContent = i;\r\n        cardBodyDiv.appendChild(boxDiv);\r\n    }\r\n    cardDiv.appendChild(cardBodyDiv);\r\n    outerDiv.appendChild(cardDiv);\r\n    wrapper.appendChild(outerDiv);\r\n}\r\n\r\nfunction initCards(data,week) {\r\n    const wrapper = document.getElementById('card-wrapper');\r\n    console.log('wrapper :>> ', wrapper);\r\n    while (wrapper.firstChild) wrapper.removeChild(wrapper.firstChild);\r\n    if (data.hasOwnProperty(week)) {\r\n        for (let game in data[week]){\r\n            createCard(data[week][game],game,wrapper);\r\n        }\r\n        const submitButton = document.createElement('button');\r\n        submitButton.id = 'submit';\r\n        submitButton.type = 'button';\r\n        submitButton.className = 'form__button';\r\n        submitButton.textContent = 'Submit';\r\n\r\n        const errorMsgP = document.createElement('p');\r\n        errorMsgP.id = 'error_msg';\r\n\r\n        wrapper.appendChild(submitButton);\r\n        wrapper.appendChild(errorMsgP);\r\n\r\n\r\n    }\r\n\r\n}\r\n(0,_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChangedFb)();\r\n\r\n$(document).ready(function () {\r\n    $(\"#header\").load(\"../src/pages/header.html\")\r\n});\r\n\r\nconst uid = localStorage.uid;\r\nconsole.log('uid :>> ', uid);\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();\r\nlet weekEl = document.getElementById('selected-week');\r\nconst week = weekEl.textContent.replace(' ','').toLocaleLowerCase()\r\nconst refer = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}/${week}`)  \r\nconst chosenColor = 'rgba(209, 119, 17, 0.2)'\r\nlet picks = await fetchData();\r\nconst gameData = await (0,d3__WEBPACK_IMPORTED_MODULE_1__.json)('../data/games.json')\r\nconsole.log('picks :>> ', picks);\r\nlet pointsPicked = [];\r\n\r\nfor (let game in picks) pointsPicked.push(String(picks[game].points))\r\nconsole.log('pointsPicked :>> ', pointsPicked);\r\nsetup(picks);\r\ninitCards(gameData,week);\r\ncolorWinners(week);\r\nconst teams = document.querySelectorAll('.team');\r\nconst submitBtn = document.getElementById('submit');\r\nconst points = document.querySelectorAll('.box');\r\n\r\nteams.forEach(el => {\r\n    el.addEventListener('click', function() {\r\n        \r\n\r\n        const parent = document.getElementById(this.id).parentElement.parentElement;\r\n        const time = parent.querySelector('.time').id\r\n        const unixNow = Math.floor(new Date().getTime() / 1000);\r\n        if (unixNow > time) return;\r\n        this.style.color = chosenColor;\r\n\r\n        const children = parent.querySelectorAll(\".team\");\r\n        console.log('parent.id :>> ', parent.id);\r\n        picks[parent.id] = {\r\n            pick:\"\",\r\n            points: \"\"\r\n        }\r\n        picks[parent.id]['pick'] = this.textContent\r\n        picks[parent.id]['points'] = \"10\"\r\n\r\n\r\n        children.forEach(child => {\r\n            if (child.textContent != this.textContent) child.style.color = 'black';\r\n        })\r\n        console.log('picks :>> ', picks);\r\n    });\r\n});\r\n\r\npoints.forEach(el => {\r\n    el.addEventListener('click', function() {\r\n        if (pointsPicked.includes(this.textContent)) return;\r\n        this.style.background = chosenColor;\r\n        const parent = this.parentNode;\r\n        const children = parent.querySelectorAll(\".box\");\r\n        const game = parent.querySelector('.clearfix');\r\n        const teams = game.querySelectorAll('.team');\r\n\r\n        let selected;\r\n        teams.forEach(team => {\r\n            if (team.style.color == chosenColor) selected = team.textContent\r\n        })\r\n        if (picks.hasOwnProperty(game.id)){\r\n            if (picks[game.id].hasOwnProperty('points'))pointsPicked = pointsPicked.filter(item => item !== picks[game.id].points);\r\n        }\r\n        picks[game.id] = {\r\n            pick:selected,\r\n            points: this.textContent\r\n        }\r\n    \r\n        children.forEach(child => {\r\n            if (child.textContent != this.textContent) child.style.background = 'whitesmoke'; \r\n        });\r\n        pointsPicked.push(String(picks[game.id].points))\r\n        console.log('pointsPicked :>> ', pointsPicked);\r\n    });\r\n});\r\n\r\nsubmitBtn.addEventListener('click',function () {\r\n    submit(week,picks);\r\n});\r\n\r\nconst sidebar = document.getElementById('sidebar')\r\nconst weeks = sidebar.querySelectorAll('.nav-link')\r\n\r\nweeks.forEach(w => { \r\n    let week = w.innerText.replace(' ','').toLocaleLowerCase()\r\n    w.addEventListener('click', () => {\r\n        weekEl.textContent = w.innerText\r\n        initCards(gameData,week);\r\n        setup(picks);\r\n        colorWinners(week)//confidence points now showing up\r\n    })\r\n})\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcHJvZmlsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrRTtBQUN2QjtBQUNqQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBRyxDQUFDLHNEQUFHLGNBQWMsSUFBSSxHQUFHLEtBQUssR0FBRyxLQUFLO0FBQ2pEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0NBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEtBQUs7QUFDTCx3RUFBd0UsT0FBTztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxVQUFVO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOERBQVc7QUFDdEI7QUFDQTtBQUNBLGNBQWMsc0RBQUcsY0FBYyxJQUFJLEdBQUcsS0FBSztBQUMzQztBQUNBO0FBQ0EsdUJBQXVCLHdDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL3Byb2ZpbGUuanM/YjBlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXREYXRhYmFzZSwgcmVmLCBzZXQsIG9uVmFsdWUgfSBmcm9tICdmaXJlYmFzZS9kYXRhYmFzZSdcclxuaW1wb3J0IHtvbkF1dGhTdGF0ZUNoYW5nZWRGYn0gZnJvbSAnLi9hdXRoJ1xyXG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnZDMnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdCh3ZWVrLCBwaWNrcyl7XHJcbiAgICBjb25zdCB0aW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lJyk7XHJcbiAgICBjb25zdCB1bml4Tm93ID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgdGltZXMuZm9yRWFjaCh0aW1lID0+IHtcclxuICAgICAgICBjb25zdCBnYW1lID0gdGltZS5wYXJlbnRFbGVtZW50LmlkO1xyXG4gICAgICAgIGlmICh0aW1lLmlkIDwgdW5peE5vdykgZGVsZXRlIHBpY2tzW2dhbWVdXHJcbiAgICB9KVxyXG5cclxuICAgIGZvciAobGV0IGdhbWUgaW4gcGlja3MpIHtcclxuICAgICAgICBjb25zdCBpbmZvID0gcGlja3NbZ2FtZV07XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luZm8gOj4+ICcsIGluZm8pO1xyXG4gICAgICAgIHNldChyZWYoZGIsIGB1c2Vycy8ke3VpZH0vJHt3ZWVrfS8ke2dhbWV9YCksIHtcclxuICAgICAgICAgICAgXCJwaWNrXCI6IGluZm9bXCJwaWNrXCJdLFxyXG4gICAgICAgICAgICBcInBvaW50c1wiOiBTdHJpbmcoaW5mb1tcInBvaW50c1wiXSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXAoZGF0YSkge1xyXG4gICAgZm9yIChsZXQgZ2FtZSBpbiBkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZ2FtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2FtZSk7XHJcbiAgICAgICAgY29uc3QgdGVhbXMgPSBnYW1lRWwucXVlcnlTZWxlY3RvckFsbCgnLnRlYW0nKTtcclxuICAgICAgICBjb25zdCBib3hlcyA9IGdhbWVFbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gnKTtcclxuICAgICAgICBcclxuICAgICAgICB0ZWFtcy5mb3JFYWNoKHRlYW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAodGVhbS50ZXh0Q29udGVudCA9PSBkYXRhW2dhbWVdWydwaWNrJ10pIHRlYW0uc3R5bGUuY29sb3IgPSBjaG9zZW5Db2xvcjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJveGVzLmZvckVhY2goYm94ID0+IHtcclxuICAgICAgICAgICAgaWYgKGJveC50ZXh0Q29udGVudCA9PSBkYXRhW2dhbWVdWydwb2ludHMnXSkgYm94LnN0eWxlLmJhY2tncm91bmQgPSBjaG9zZW5Db2xvcjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICBsZXQgcGlja3M7XHJcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgb25WYWx1ZShyZWZlciwgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgICAgICAgICAgcGlja3MgPSBkYXRhO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcGlja3M7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNvbG9yV2lubmVycyh3ZWVrKSB7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL3dpbm5lcnMuanNvblwiKVxyXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkod2VlaykpIGRhdGEgPSBkYXRhW3dlZWtdXHJcbiAgICBlbHNlIHJldHVybjtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhIDo+PiAnLCBkYXRhKTtcclxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsZWFyZml4JylcclxuICAgIGxldCBwb2ludHMgPSAwO1xyXG4gICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICBjb25zdCBnYW1lID0gY2FyZC5pZDtcclxuICAgICAgICBjb25zdCB3aW5uZXIgPSBkYXRhW2dhbWVdLndpbm5lclxyXG4gICAgICAgIGNvbnN0IHNjb3JlID0gZGF0YVtnYW1lXS5zY29yZVxyXG4gICAgICAgIGlmIChwaWNrc1tnYW1lXS5waWNrID09IHdpbm5lcikge1xyXG4gICAgICAgICAgICBjYXJkLnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICcjYzllNzgyJztcclxuICAgICAgICAgICAgcG9pbnRzICs9IHBhcnNlSW50KHBpY2tzW2dhbWVdLnBvaW50cylcclxuICAgICAgICB9IGVsc2UgY2FyZC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAncmVkJztcclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWQtd2VlaycpLnRleHRDb250ZW50ICs9IGAgcG9pbnRzOiAke3BvaW50c31gXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGRhdGEsZ2FtZSx3cmFwcGVyKXtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhIDo+PiAnLCBkYXRhKTtcclxuICAgIGNvbnN0IG91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBvdXRlckRpdi5jbGFzc05hbWUgPSAnY29sLXhsLTMgY29sLWxnLTMgY29sLW1kLTMgY29sLXNtLTYgbWItNCc7XHJcblxyXG4gICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZERpdi5jbGFzc05hbWUgPSAnY2FyZCBjYXJkLXN0YXRpc3RpY3MnO1xyXG5cclxuICAgIGNvbnN0IGNhcmRCb2R5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQm9keURpdi5jbGFzc05hbWUgPSAnY2FyZC1ib2R5JztcclxuXHJcbiAgICBjb25zdCBjbGVhcmZpeERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2xlYXJmaXhEaXYuY2xhc3NOYW1lID0gJ2NsZWFyZml4JztcclxuICAgIGNsZWFyZml4RGl2LmlkID0gZ2FtZTtcclxuXHJcbiAgICBjb25zdCB0aW1lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIHRpbWVJY29uLmNsYXNzTmFtZSA9ICd0aW1lJztcclxuICAgIHRpbWVJY29uLmlkID0gZGF0YS50aW1lO1xyXG4gICAgdGltZUljb24uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcblxyXG4gICAgY29uc3QgbGVmdFRlYW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxlZnRUZWFtRGl2LmNsYXNzTmFtZSA9ICdmbG9hdC1sZWZ0JztcclxuXHJcbiAgICBjb25zdCBsZWZ0VGVhbUg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgIGxlZnRUZWFtSDQuY2xhc3NOYW1lID0gJ2JvbGQtdGV4dCB0ZWFtJztcclxuICAgIGxlZnRUZWFtSDQuaWQgPSAnZzF0MSc7XHJcbiAgICBsZWZ0VGVhbUg0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgIGxlZnRUZWFtSDQudGV4dENvbnRlbnQgPSBkYXRhLmF3YXk7XHJcblxyXG4gICAgY29uc3QgcmlnaHRUZWFtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByaWdodFRlYW1EaXYuY2xhc3NOYW1lID0gJ2Zsb2F0LXJpZ2h0JztcclxuXHJcbiAgICBjb25zdCByaWdodFRlYW1INCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICByaWdodFRlYW1INC5jbGFzc05hbWUgPSAnYm9sZC10ZXh0IHRlYW0nO1xyXG4gICAgcmlnaHRUZWFtSDQuaWQgPSAnZzF0Mic7XHJcbiAgICByaWdodFRlYW1INC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICByaWdodFRlYW1INC50ZXh0Q29udGVudCA9IGRhdGEuaG9tZTtcclxuXHJcbiAgICBjb25zdCBkYXRlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRhdGVQLmNsYXNzTmFtZSA9ICd0ZXh0LW11dGVkJztcclxuICAgIGRhdGVQLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyIG1yLTFcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+JHtkYXRhLnRpbWV9YDtcclxuXHJcbiAgICBcclxuXHJcbiAgICBsZWZ0VGVhbURpdi5hcHBlbmRDaGlsZChsZWZ0VGVhbUg0KTtcclxuICAgIHJpZ2h0VGVhbURpdi5hcHBlbmRDaGlsZChyaWdodFRlYW1INCk7XHJcbiAgICBjbGVhcmZpeERpdi5hcHBlbmRDaGlsZCh0aW1lSWNvbik7XHJcbiAgICBjbGVhcmZpeERpdi5hcHBlbmRDaGlsZChsZWZ0VGVhbURpdik7XHJcbiAgICBjbGVhcmZpeERpdi5hcHBlbmRDaGlsZChyaWdodFRlYW1EaXYpO1xyXG4gICAgY2FyZEJvZHlEaXYuYXBwZW5kQ2hpbGQoY2xlYXJmaXhEaXYpO1xyXG4gICAgY2FyZEJvZHlEaXYuYXBwZW5kQ2hpbGQoZGF0ZVApO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGJveERpdi5jbGFzc05hbWUgPSAnYm94JztcclxuICAgICAgICBib3hEaXYudGV4dENvbnRlbnQgPSBpO1xyXG4gICAgICAgIGNhcmRCb2R5RGl2LmFwcGVuZENoaWxkKGJveERpdik7XHJcbiAgICB9XHJcbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRCb2R5RGl2KTtcclxuICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGNhcmREaXYpO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChvdXRlckRpdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRDYXJkcyhkYXRhLHdlZWspIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC13cmFwcGVyJyk7XHJcbiAgICBjb25zb2xlLmxvZygnd3JhcHBlciA6Pj4gJywgd3JhcHBlcik7XHJcbiAgICB3aGlsZSAod3JhcHBlci5maXJzdENoaWxkKSB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCk7XHJcbiAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSh3ZWVrKSkge1xyXG4gICAgICAgIGZvciAobGV0IGdhbWUgaW4gZGF0YVt3ZWVrXSl7XHJcbiAgICAgICAgICAgIGNyZWF0ZUNhcmQoZGF0YVt3ZWVrXVtnYW1lXSxnYW1lLHdyYXBwZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBzdWJtaXRCdXR0b24uaWQgPSAnc3VibWl0JztcclxuICAgICAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc05hbWUgPSAnZm9ybV9fYnV0dG9uJztcclxuICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcclxuXHJcbiAgICAgICAgY29uc3QgZXJyb3JNc2dQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGVycm9yTXNnUC5pZCA9ICdlcnJvcl9tc2cnO1xyXG5cclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlcnJvck1zZ1ApO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbm9uQXV0aFN0YXRlQ2hhbmdlZEZiKCk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2hlYWRlclwiKS5sb2FkKFwiLi4vc3JjL3BhZ2VzL2hlYWRlci5odG1sXCIpXHJcbn0pO1xyXG5cclxuY29uc3QgdWlkID0gbG9jYWxTdG9yYWdlLnVpZDtcclxuY29uc29sZS5sb2coJ3VpZCA6Pj4gJywgdWlkKTtcclxuY29uc3QgZGIgPSBnZXREYXRhYmFzZSgpO1xyXG5sZXQgd2Vla0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkLXdlZWsnKTtcclxuY29uc3Qgd2VlayA9IHdlZWtFbC50ZXh0Q29udGVudC5yZXBsYWNlKCcgJywnJykudG9Mb2NhbGVMb3dlckNhc2UoKVxyXG5jb25zdCByZWZlciA9IHJlZihkYiwgYHVzZXJzLyR7dWlkfS8ke3dlZWt9YCkgIFxyXG5jb25zdCBjaG9zZW5Db2xvciA9ICdyZ2JhKDIwOSwgMTE5LCAxNywgMC4yKSdcclxubGV0IHBpY2tzID0gYXdhaXQgZmV0Y2hEYXRhKCk7XHJcbmNvbnN0IGdhbWVEYXRhID0gYXdhaXQganNvbignLi4vZGF0YS9nYW1lcy5qc29uJylcclxuY29uc29sZS5sb2coJ3BpY2tzIDo+PiAnLCBwaWNrcyk7XHJcbmxldCBwb2ludHNQaWNrZWQgPSBbXTtcclxuXHJcbmZvciAobGV0IGdhbWUgaW4gcGlja3MpIHBvaW50c1BpY2tlZC5wdXNoKFN0cmluZyhwaWNrc1tnYW1lXS5wb2ludHMpKVxyXG5jb25zb2xlLmxvZygncG9pbnRzUGlja2VkIDo+PiAnLCBwb2ludHNQaWNrZWQpO1xyXG5zZXR1cChwaWNrcyk7XHJcbmluaXRDYXJkcyhnYW1lRGF0YSx3ZWVrKTtcclxuY29sb3JXaW5uZXJzKHdlZWspO1xyXG5jb25zdCB0ZWFtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZWFtJyk7XHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQnKTtcclxuY29uc3QgcG9pbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJveCcpO1xyXG5cclxudGVhbXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgdGltZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpLmlkXHJcbiAgICAgICAgY29uc3QgdW5peE5vdyA9IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgICAgICBpZiAodW5peE5vdyA+IHRpbWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0eWxlLmNvbG9yID0gY2hvc2VuQ29sb3I7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVhbVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncGFyZW50LmlkIDo+PiAnLCBwYXJlbnQuaWQpO1xyXG4gICAgICAgIHBpY2tzW3BhcmVudC5pZF0gPSB7XHJcbiAgICAgICAgICAgIHBpY2s6XCJcIixcclxuICAgICAgICAgICAgcG9pbnRzOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBpY2tzW3BhcmVudC5pZF1bJ3BpY2snXSA9IHRoaXMudGV4dENvbnRlbnRcclxuICAgICAgICBwaWNrc1twYXJlbnQuaWRdWydwb2ludHMnXSA9IFwiMTBcIlxyXG5cclxuXHJcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZC50ZXh0Q29udGVudCAhPSB0aGlzLnRleHRDb250ZW50KSBjaGlsZC5zdHlsZS5jb2xvciA9ICdibGFjayc7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZygncGlja3MgOj4+ICcsIHBpY2tzKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbnBvaW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHBvaW50c1BpY2tlZC5pbmNsdWRlcyh0aGlzLnRleHRDb250ZW50KSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9IGNob3NlbkNvbG9yO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJveFwiKTtcclxuICAgICAgICBjb25zdCBnYW1lID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhcmZpeCcpO1xyXG4gICAgICAgIGNvbnN0IHRlYW1zID0gZ2FtZS5xdWVyeVNlbGVjdG9yQWxsKCcudGVhbScpO1xyXG5cclxuICAgICAgICBsZXQgc2VsZWN0ZWQ7XHJcbiAgICAgICAgdGVhbXMuZm9yRWFjaCh0ZWFtID0+IHtcclxuICAgICAgICAgICAgaWYgKHRlYW0uc3R5bGUuY29sb3IgPT0gY2hvc2VuQ29sb3IpIHNlbGVjdGVkID0gdGVhbS50ZXh0Q29udGVudFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHBpY2tzLmhhc093blByb3BlcnR5KGdhbWUuaWQpKXtcclxuICAgICAgICAgICAgaWYgKHBpY2tzW2dhbWUuaWRdLmhhc093blByb3BlcnR5KCdwb2ludHMnKSlwb2ludHNQaWNrZWQgPSBwb2ludHNQaWNrZWQuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gcGlja3NbZ2FtZS5pZF0ucG9pbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGlja3NbZ2FtZS5pZF0gPSB7XHJcbiAgICAgICAgICAgIHBpY2s6c2VsZWN0ZWQsXHJcbiAgICAgICAgICAgIHBvaW50czogdGhpcy50ZXh0Q29udGVudFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQudGV4dENvbnRlbnQgIT0gdGhpcy50ZXh0Q29udGVudCkgY2hpbGQuc3R5bGUuYmFja2dyb3VuZCA9ICd3aGl0ZXNtb2tlJzsgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcG9pbnRzUGlja2VkLnB1c2goU3RyaW5nKHBpY2tzW2dhbWUuaWRdLnBvaW50cykpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3BvaW50c1BpY2tlZCA6Pj4gJywgcG9pbnRzUGlja2VkKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgc3VibWl0KHdlZWsscGlja3MpO1xyXG59KTtcclxuXHJcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpXHJcbmNvbnN0IHdlZWtzID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpbmsnKVxyXG5cclxud2Vla3MuZm9yRWFjaCh3ID0+IHsgXHJcbiAgICBsZXQgd2VlayA9IHcuaW5uZXJUZXh0LnJlcGxhY2UoJyAnLCcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpXHJcbiAgICB3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHdlZWtFbC50ZXh0Q29udGVudCA9IHcuaW5uZXJUZXh0XHJcbiAgICAgICAgaW5pdENhcmRzKGdhbWVEYXRhLHdlZWspO1xyXG4gICAgICAgIHNldHVwKHBpY2tzKTtcclxuICAgICAgICBjb2xvcldpbm5lcnMod2VlaykvL2NvbmZpZGVuY2UgcG9pbnRzIG5vdyBzaG93aW5nIHVwXHJcbiAgICB9KVxyXG59KVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/profile.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"profile": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkprod_1"] = self["webpackChunkprod_1"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-17252e","vendors-node_modules_d3_src_index_js-node_modules_firebase_database_dist_esm_index_esm_js"], () => (__webpack_require__("./src/js/profile.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;