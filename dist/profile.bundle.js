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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   createUser: () => (/* binding */ createUser),\n/* harmony export */   initDb: () => (/* binding */ initDb),\n/* harmony export */   loginFb: () => (/* binding */ loginFb),\n/* harmony export */   logoutFb: () => (/* binding */ logoutFb),\n/* harmony export */   onAuthStateChangedFb: () => (/* binding */ onAuthStateChangedFb),\n/* harmony export */   updateName: () => (/* binding */ updateName),\n/* harmony export */   updatePasswordFb: () => (/* binding */ updatePasswordFb)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n\r\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n    apiKey: \"AIzaSyC8J8_Bo2YSeM1aTkE3--bQLCaeuGU3hQE\",\r\n    authDomain: \"cfpicks-66e14.firebaseapp.com\",\r\n    projectId: \"cfpicks-66e14\",\r\n    storageBucket: \"cfpicks-66e14.appspot.com\",\r\n    messagingSenderId: \"924459609957\",\r\n    appId: \"1:924459609957:web:c1125a2a8f5147de313b8c\"\r\n};\r\n  \r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\n\r\nconst onAuthStateChangedFb = () => {\r\n    auth.onAuthStateChanged((user) => {\r\n        if (user) {\r\n            console.log('user mon :>> ', user);\r\n            //up();\r\n        } else {\r\n            console.log(\"none\");\r\n            window.location.replace('index.html');\r\n            const currentState = window.history.state;\r\n            window.history.replaceState(currentState, '', window.location.href);\r\n            window.onpopstate = function () {\r\n            window.history.replaceState(currentState, '', window.location.href);\r\n            };\r\n        }\r\n    });\r\n};\r\n\r\nconst updateName = (displayName) => {\r\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updateProfile)(auth.currentUser, {\r\n        displayName: displayName\r\n      }).then(() => {\r\n        console.log('userCredential.user.displayName :>> ', auth.currentUser.displayName);\r\n      }).catch((error) => {\r\n        console.log('error :>> ', error);\r\n      });\r\n};\r\n\r\nconst initDb = (uid,displayName) => {\r\n    const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)();\r\n    (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(db, `users/${uid}/`), {\r\n        \"name\": displayName,\r\n        \"week1\": {}\r\n    });\r\n};\r\n\r\nconst loginFb = (email, password) => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth,email,password)\r\n};\r\n\r\nconst logoutFb = () => {\r\n    sessionStorage.removeItem('siteSelection')\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\r\n};\r\n\r\nconst updatePasswordFb = (newPassword) => {\r\n    const user = auth.currentUser;\r\n    if (user) {\r\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(user,newPassword);\r\n    }\r\n    return Promise.reject(new Error('No user is currently signed in.'));\r\n};\r\n\r\nconst createUser = (email,password) => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(auth,email,password);\r\n}\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNtSDtBQUN2RztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBYTtBQUN6QixhQUFhLHNEQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWE7QUFDakI7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4REFBVztBQUMxQixJQUFJLHNEQUFHLENBQUMsc0RBQUcsY0FBYyxJQUFJO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5RUFBMEI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNEQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZEQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZFQUE4QjtBQUN6QztBQUNBO0FBQzBHO0FBQzFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL2F1dGguanM/OTI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkLCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbk91dCwgdXBkYXRlUGFzc3dvcmQsIHVwZGF0ZVByb2ZpbGUsIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQgeyBnZXREYXRhYmFzZSwgcmVmLCBzZXQgfSBmcm9tICdmaXJlYmFzZS9kYXRhYmFzZSdcclxuXHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lDOEo4X0JvMllTZU0xYVRrRTMtLWJRTENhZXVHVTNoUUVcIixcclxuICAgIGF1dGhEb21haW46IFwiY2ZwaWNrcy02NmUxNC5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJjZnBpY2tzLTY2ZTE0XCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcImNmcGlja3MtNjZlMTQuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjkyNDQ1OTYwOTk1N1wiLFxyXG4gICAgYXBwSWQ6IFwiMTo5MjQ0NTk2MDk5NTc6d2ViOmMxMTI1YTJhOGY1MTQ3ZGUzMTNiOGNcIlxyXG59O1xyXG4gIFxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuXHJcbmNvbnN0IG9uQXV0aFN0YXRlQ2hhbmdlZEZiID0gKCkgPT4ge1xyXG4gICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlciBtb24gOj4+ICcsIHVzZXIpO1xyXG4gICAgICAgICAgICAvL3VwKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub25lXCIpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnaW5kZXguaHRtbCcpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5zdGF0ZTtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGN1cnJlbnRTdGF0ZSwgJycsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShjdXJyZW50U3RhdGUsICcnLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVOYW1lID0gKGRpc3BsYXlOYW1lKSA9PiB7XHJcbiAgICB1cGRhdGVQcm9maWxlKGF1dGguY3VycmVudFVzZXIsIHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWVcclxuICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXJDcmVkZW50aWFsLnVzZXIuZGlzcGxheU5hbWUgOj4+ICcsIGF1dGguY3VycmVudFVzZXIuZGlzcGxheU5hbWUpO1xyXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgOj4+ICcsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBpbml0RGIgPSAodWlkLGRpc3BsYXlOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBkYiA9IGdldERhdGFiYXNlKCk7XHJcbiAgICBzZXQocmVmKGRiLCBgdXNlcnMvJHt1aWR9L2ApLCB7XHJcbiAgICAgICAgXCJuYW1lXCI6IGRpc3BsYXlOYW1lLFxyXG4gICAgICAgIFwid2VlazFcIjoge31cclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbG9naW5GYiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLGVtYWlsLHBhc3N3b3JkKVxyXG59O1xyXG5cclxuY29uc3QgbG9nb3V0RmIgPSAoKSA9PiB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdzaXRlU2VsZWN0aW9uJylcclxuICAgIHJldHVybiBzaWduT3V0KGF1dGgpO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlUGFzc3dvcmRGYiA9IChuZXdQYXNzd29yZCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVQYXNzd29yZCh1c2VyLG5ld1Bhc3N3b3JkKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ05vIHVzZXIgaXMgY3VycmVudGx5IHNpZ25lZCBpbi4nKSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVVc2VyID0gKGVtYWlsLHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsZW1haWwscGFzc3dvcmQpO1xyXG59XHJcblxyXG5leHBvcnQgeyBhdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWRGYiwgbG9naW5GYiwgbG9nb3V0RmIsIHVwZGF0ZVBhc3N3b3JkRmIsIGNyZWF0ZVVzZXIsIHVwZGF0ZU5hbWUsaW5pdERiIH07XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/auth.js\n");

/***/ }),

/***/ "./src/js/profile.js":
/*!***************************!*\
  !*** ./src/js/profile.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\n\r\n\r\n\r\nfunction submit(week, picks){\r\n    const times = document.querySelectorAll('.time');\r\n    const unixNow = Math.floor(new Date().getTime() / 1000);\r\n    console.log('picks :>> ', picks);\r\n    for (let p in picks){\r\n        console.log('p :>> ', p);\r\n        if (picks[p].points == undefined || picks[p].pick == undefined){\r\n            document.getElementById('err_msg').innerText = 'Select both a team and a confidence points for your picks.'\r\n        } \r\n    }\r\n    times.forEach(time => {\r\n        const game = time.parentElement.id;\r\n        if (time.id < unixNow) delete picks[game]\r\n    })\r\n\r\n    for (let game in picks) {\r\n        const info = picks[game];\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}/${week}/${game}`), {\r\n            \"pick\": info[\"pick\"],\r\n            \"points\": String(info[\"points\"])\r\n        });\r\n    }\r\n}\r\n\r\nfunction setup(data) {\r\n    for (let game in data) {\r\n        const gameEl = document.getElementById(game);\r\n        const teams = gameEl.querySelectorAll('.team');\r\n        const boxes = gameEl.parentNode.querySelectorAll('.box');\r\n        \r\n        teams.forEach(team => {\r\n            if (team.textContent == data[game]['pick']) team.style.color = chosenColor;\r\n        })\r\n        boxes.forEach(box => {\r\n            if (box.textContent == data[game]['points']) box.style.background = chosenColor;\r\n        })\r\n    }\r\n}\r\n\r\nasync function fetchData() {\r\n    let picks;\r\n    await new Promise((resolve, reject) => {\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(refer, (snapshot) => {\r\n            const data = snapshot.val();\r\n            picks = data;\r\n            resolve();\r\n        });\r\n    });\r\n\r\n    return picks;\r\n}\r\n\r\nasync function colorWinners(week) {\r\n    console.log('picks :>> ', picks);\r\n    let data = await (0,d3__WEBPACK_IMPORTED_MODULE_1__.json)(\"../data/winners.json\")\r\n    if (data.hasOwnProperty(week)) data = data[week]\r\n    else return;\r\n    const cards = document.querySelectorAll('.clearfix')\r\n    let points = 0;\r\n    cards.forEach(card => {\r\n        const game = card.id;\r\n        const winner = data[game].winner;\r\n        const score = data[game].score;\r\n        if (picks.hasOwnProperty(game)){\r\n            if (picks[game].pick == winner) {\r\n                card.parentElement.style.background = '#c9e782';\r\n                points += parseInt(picks[game].points)\r\n            } else card.parentElement.style.background = 'red';\r\n        }\r\n        \r\n    });\r\n    document.getElementById('selected-week').textContent += ` points: ${points}`\r\n\r\n}\r\n\r\nfunction createCard(data,game,wrapper,gn){\r\n    const outerDiv = document.createElement('div');\r\n    outerDiv.className = 'col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-4';\r\n\r\n    const cardDiv = document.createElement('div');\r\n    cardDiv.className = 'card card-statistics';\r\n\r\n    const cardBodyDiv = document.createElement('div');\r\n    cardBodyDiv.className = 'card-body';\r\n\r\n    const clearfixDiv = document.createElement('div');\r\n    clearfixDiv.className = 'clearfix';\r\n    clearfixDiv.id = game;\r\n\r\n    const timeIcon = document.createElement('i');\r\n    timeIcon.className = 'time';\r\n    timeIcon.id = data.time;\r\n    timeIcon.setAttribute('aria-hidden', 'true');\r\n\r\n    const leftTeamDiv = document.createElement('div');\r\n    leftTeamDiv.className = 'float-left';\r\n\r\n    const leftTeamH4 = document.createElement('h4');\r\n    leftTeamH4.className = 'bold-text team';\r\n    leftTeamH4.id = `g${gn}t1`;\r\n    leftTeamH4.style.cursor = 'pointer';\r\n    leftTeamH4.textContent = data.away;\r\n\r\n    const rightTeamDiv = document.createElement('div');\r\n    rightTeamDiv.className = 'float-right';\r\n\r\n    const rightTeamH4 = document.createElement('h4');\r\n    rightTeamH4.className = 'bold-text team';\r\n    rightTeamH4.id = `g${gn}t2`;\r\n    rightTeamH4.style.cursor = 'pointer';\r\n    rightTeamH4.textContent = data.home;\r\n\r\n    const dateP = document.createElement('p');\r\n    dateP.className = 'text-muted';\r\n    dateP.innerHTML = `<i class=\"fa fa-calendar mr-1\" aria-hidden=\"true\"></i>${data.time}`;\r\n\r\n    \r\n\r\n    leftTeamDiv.appendChild(leftTeamH4);\r\n    rightTeamDiv.appendChild(rightTeamH4);\r\n    clearfixDiv.appendChild(timeIcon);\r\n    clearfixDiv.appendChild(leftTeamDiv);\r\n    clearfixDiv.appendChild(rightTeamDiv);\r\n    cardBodyDiv.appendChild(clearfixDiv);\r\n    cardBodyDiv.appendChild(dateP);\r\n    for (let i = 1; i <= 10; i++) {\r\n        const boxDiv = document.createElement('div');\r\n        boxDiv.className = 'box';\r\n        boxDiv.textContent = i;\r\n        boxDiv.id = i;\r\n        cardBodyDiv.appendChild(boxDiv);\r\n    }\r\n    cardDiv.appendChild(cardBodyDiv);\r\n    outerDiv.appendChild(cardDiv);\r\n    wrapper.appendChild(outerDiv);\r\n}\r\n\r\nfunction initCards(data,week) {\r\n    const wrapper = document.getElementById('card-wrapper');\r\n    while (wrapper.firstChild) wrapper.removeChild(wrapper.firstChild);\r\n    if (data.hasOwnProperty(week)) {\r\n        let gn = 1;\r\n        for (let game in data[week]){\r\n            createCard(data[week][game],game,wrapper,gn);\r\n            gn++\r\n        }\r\n    }\r\n\r\n}\r\n\r\n(0,_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChangedFb)();\r\n\r\n$(document).ready(function () {\r\n    $(\"#header\").load(\"../src/pages/header.html\")\r\n});\r\n\r\nconst uid = localStorage.uid;\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();\r\nlet weekEl = document.getElementById('selected-week');\r\nconst week = weekEl.textContent.replace(' ','').toLocaleLowerCase()\r\nconst refer = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}/${week}`)  \r\nconst chosenColor = 'rgba(209, 119, 17, 0.2)'\r\n\r\nlet picks = await fetchData();\r\nif (picks == null) picks = {};\r\nconst gameData = await (0,d3__WEBPACK_IMPORTED_MODULE_1__.json)('../data/games.json')\r\nlet pointsPicked = [];\r\n\r\nfor (let game in picks) pointsPicked.push(String(picks[game].points))\r\n\r\ninitCards(gameData,week);\r\nsetup(picks);\r\ncolorWinners(week);\r\nconsole.log('pointsPicked out:>> ', pointsPicked);\r\nconst teams = document.querySelectorAll('.team');\r\nconst submitBtn = document.getElementById('submit');\r\nconst points = document.querySelectorAll('.box');\r\n\r\nconst sidebar = document.getElementById('sidebar')\r\nconst weeks = sidebar.querySelectorAll('.nav-link')\r\n\r\nteams.forEach(el => {\r\n    el.addEventListener('click', function() {\r\n        console.log('this :>> ', this);\r\n        console.log('document.getElementById(this.id).parentElement :>> ', document.getElementById(this.id).parentElement);\r\n        const parent = document.getElementById(this.id).parentElement.parentElement;\r\n        console.log('parent :>> ', parent);\r\n        const time = parent.querySelector('.time').id\r\n        const unixNow = Math.floor(new Date().getTime() / 1000);\r\n\r\n        if (unixNow > time) return;\r\n        this.style.color = chosenColor;\r\n\r\n        const children = parent.querySelectorAll(\".team\");\r\n        picks[parent.id] = {\r\n            pick:\"\",\r\n            points: \"\"\r\n        }\r\n        picks[parent.id]['pick'] = this.textContent;\r\n        picks[parent.id]['points'] = null;\r\n\r\n        console.log('children :>> ', children);\r\n        children.forEach(child => {\r\n            console.log('child :>> ', child);\r\n            if (child.textContent != this.textContent) child.style.color = 'black';\r\n        })\r\n    });\r\n});\r\n\r\npoints.forEach(el => {\r\n    el.addEventListener('click', function() {\r\n        console.log('pointsPicked :>> ', pointsPicked);\r\n        if (pointsPicked.includes(this.textContent)) return;\r\n\r\n        this.style.background = chosenColor;\r\n        const parent = this.parentNode;\r\n        const children = parent.querySelectorAll(\".box\");\r\n        const game = parent.querySelector('.clearfix');\r\n        const teams = game.querySelectorAll('.team');\r\n\r\n        let selected;\r\n        teams.forEach(team => {\r\n            if (team.style.color == chosenColor) selected = team.textContent\r\n        })\r\n\r\n        if (picks.hasOwnProperty(game.id)){\r\n            if (picks[game.id].hasOwnProperty('points'))pointsPicked = pointsPicked.filter(item => item !== picks[game.id].points);\r\n        }\r\n\r\n        picks[game.id] = {\r\n            pick:selected,\r\n            points: this.textContent\r\n        }\r\n    \r\n        children.forEach(child => {\r\n            if (child.textContent != this.textContent) child.style.background = 'whitesmoke'; \r\n        });\r\n        pointsPicked.push(String(picks[game.id].points))\r\n    });\r\n});\r\n\r\nsubmitBtn.addEventListener('click',function () {\r\n    submit(week,picks);\r\n});\r\n\r\nweeks.forEach(w => { \r\n    let week = w.innerText.replace(' ','').toLocaleLowerCase()\r\n    w.addEventListener('click', () => {\r\n        weekEl.textContent = w.innerText\r\n        initCards(gameData,week);\r\n        setup(picks);\r\n        colorWinners(week);\r\n    })\r\n})\r\n\r\ndocument.getElementById(\"btnLogout\").addEventListener('click', _auth__WEBPACK_IMPORTED_MODULE_2__.logoutFb);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcHJvZmlsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrRTtBQUNiO0FBQzNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFHLENBQUMsc0RBQUcsY0FBYyxJQUFJLEdBQUcsS0FBSyxHQUFHLEtBQUs7QUFDakQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdDQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsS0FBSztBQUNMLHdFQUF3RSxPQUFPO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixHQUFHO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsR0FBRztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLFVBQVU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxXQUFXLDhEQUFXO0FBQ3RCO0FBQ0E7QUFDQSxjQUFjLHNEQUFHLGNBQWMsSUFBSSxHQUFHLEtBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0NBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0EsK0RBQStELDJDQUFRLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvcHJvZmlsZS5qcz9iMGU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldERhdGFiYXNlLCByZWYsIHNldCwgb25WYWx1ZSB9IGZyb20gJ2ZpcmViYXNlL2RhdGFiYXNlJ1xyXG5pbXBvcnQge29uQXV0aFN0YXRlQ2hhbmdlZEZiLCBsb2dvdXRGYn0gZnJvbSAnLi9hdXRoJ1xyXG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnZDMnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdCh3ZWVrLCBwaWNrcyl7XHJcbiAgICBjb25zdCB0aW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lJyk7XHJcbiAgICBjb25zdCB1bml4Tm93ID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgY29uc29sZS5sb2coJ3BpY2tzIDo+PiAnLCBwaWNrcyk7XHJcbiAgICBmb3IgKGxldCBwIGluIHBpY2tzKXtcclxuICAgICAgICBjb25zb2xlLmxvZygncCA6Pj4gJywgcCk7XHJcbiAgICAgICAgaWYgKHBpY2tzW3BdLnBvaW50cyA9PSB1bmRlZmluZWQgfHwgcGlja3NbcF0ucGljayA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyX21zZycpLmlubmVyVGV4dCA9ICdTZWxlY3QgYm90aCBhIHRlYW0gYW5kIGEgY29uZmlkZW5jZSBwb2ludHMgZm9yIHlvdXIgcGlja3MuJ1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgICB0aW1lcy5mb3JFYWNoKHRpbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdhbWUgPSB0aW1lLnBhcmVudEVsZW1lbnQuaWQ7XHJcbiAgICAgICAgaWYgKHRpbWUuaWQgPCB1bml4Tm93KSBkZWxldGUgcGlja3NbZ2FtZV1cclxuICAgIH0pXHJcblxyXG4gICAgZm9yIChsZXQgZ2FtZSBpbiBwaWNrcykge1xyXG4gICAgICAgIGNvbnN0IGluZm8gPSBwaWNrc1tnYW1lXTtcclxuICAgICAgICBzZXQocmVmKGRiLCBgdXNlcnMvJHt1aWR9LyR7d2Vla30vJHtnYW1lfWApLCB7XHJcbiAgICAgICAgICAgIFwicGlja1wiOiBpbmZvW1wicGlja1wiXSxcclxuICAgICAgICAgICAgXCJwb2ludHNcIjogU3RyaW5nKGluZm9bXCJwb2ludHNcIl0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwKGRhdGEpIHtcclxuICAgIGZvciAobGV0IGdhbWUgaW4gZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGdhbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdhbWUpO1xyXG4gICAgICAgIGNvbnN0IHRlYW1zID0gZ2FtZUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZWFtJyk7XHJcbiAgICAgICAgY29uc3QgYm94ZXMgPSBnYW1lRWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuYm94Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGVhbXMuZm9yRWFjaCh0ZWFtID0+IHtcclxuICAgICAgICAgICAgaWYgKHRlYW0udGV4dENvbnRlbnQgPT0gZGF0YVtnYW1lXVsncGljayddKSB0ZWFtLnN0eWxlLmNvbG9yID0gY2hvc2VuQ29sb3I7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBib3hlcy5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChib3gudGV4dENvbnRlbnQgPT0gZGF0YVtnYW1lXVsncG9pbnRzJ10pIGJveC5zdHlsZS5iYWNrZ3JvdW5kID0gY2hvc2VuQ29sb3I7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgbGV0IHBpY2tzO1xyXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIG9uVmFsdWUocmVmZXIsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgIHBpY2tzID0gZGF0YTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBpY2tzO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb2xvcldpbm5lcnMod2Vlaykge1xyXG4gICAgY29uc29sZS5sb2coJ3BpY2tzIDo+PiAnLCBwaWNrcyk7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL3dpbm5lcnMuanNvblwiKVxyXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkod2VlaykpIGRhdGEgPSBkYXRhW3dlZWtdXHJcbiAgICBlbHNlIHJldHVybjtcclxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsZWFyZml4JylcclxuICAgIGxldCBwb2ludHMgPSAwO1xyXG4gICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICBjb25zdCBnYW1lID0gY2FyZC5pZDtcclxuICAgICAgICBjb25zdCB3aW5uZXIgPSBkYXRhW2dhbWVdLndpbm5lcjtcclxuICAgICAgICBjb25zdCBzY29yZSA9IGRhdGFbZ2FtZV0uc2NvcmU7XHJcbiAgICAgICAgaWYgKHBpY2tzLmhhc093blByb3BlcnR5KGdhbWUpKXtcclxuICAgICAgICAgICAgaWYgKHBpY2tzW2dhbWVdLnBpY2sgPT0gd2lubmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJkLnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICcjYzllNzgyJztcclxuICAgICAgICAgICAgICAgIHBvaW50cyArPSBwYXJzZUludChwaWNrc1tnYW1lXS5wb2ludHMpXHJcbiAgICAgICAgICAgIH0gZWxzZSBjYXJkLnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICdyZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkLXdlZWsnKS50ZXh0Q29udGVudCArPSBgIHBvaW50czogJHtwb2ludHN9YFxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhLGdhbWUsd3JhcHBlcixnbil7XHJcbiAgICBjb25zdCBvdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb3V0ZXJEaXYuY2xhc3NOYW1lID0gJ2NvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS02IG1iLTQnO1xyXG5cclxuICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmREaXYuY2xhc3NOYW1lID0gJ2NhcmQgY2FyZC1zdGF0aXN0aWNzJztcclxuXHJcbiAgICBjb25zdCBjYXJkQm9keURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJvZHlEaXYuY2xhc3NOYW1lID0gJ2NhcmQtYm9keSc7XHJcblxyXG4gICAgY29uc3QgY2xlYXJmaXhEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNsZWFyZml4RGl2LmNsYXNzTmFtZSA9ICdjbGVhcmZpeCc7XHJcbiAgICBjbGVhcmZpeERpdi5pZCA9IGdhbWU7XHJcblxyXG4gICAgY29uc3QgdGltZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICB0aW1lSWNvbi5jbGFzc05hbWUgPSAndGltZSc7XHJcbiAgICB0aW1lSWNvbi5pZCA9IGRhdGEudGltZTtcclxuICAgIHRpbWVJY29uLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG5cclxuICAgIGNvbnN0IGxlZnRUZWFtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZWZ0VGVhbURpdi5jbGFzc05hbWUgPSAnZmxvYXQtbGVmdCc7XHJcblxyXG4gICAgY29uc3QgbGVmdFRlYW1INCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBsZWZ0VGVhbUg0LmNsYXNzTmFtZSA9ICdib2xkLXRleHQgdGVhbSc7XHJcbiAgICBsZWZ0VGVhbUg0LmlkID0gYGcke2dufXQxYDtcclxuICAgIGxlZnRUZWFtSDQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgbGVmdFRlYW1INC50ZXh0Q29udGVudCA9IGRhdGEuYXdheTtcclxuXHJcbiAgICBjb25zdCByaWdodFRlYW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJpZ2h0VGVhbURpdi5jbGFzc05hbWUgPSAnZmxvYXQtcmlnaHQnO1xyXG5cclxuICAgIGNvbnN0IHJpZ2h0VGVhbUg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgIHJpZ2h0VGVhbUg0LmNsYXNzTmFtZSA9ICdib2xkLXRleHQgdGVhbSc7XHJcbiAgICByaWdodFRlYW1INC5pZCA9IGBnJHtnbn10MmA7XHJcbiAgICByaWdodFRlYW1INC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICByaWdodFRlYW1INC50ZXh0Q29udGVudCA9IGRhdGEuaG9tZTtcclxuXHJcbiAgICBjb25zdCBkYXRlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRhdGVQLmNsYXNzTmFtZSA9ICd0ZXh0LW11dGVkJztcclxuICAgIGRhdGVQLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyIG1yLTFcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+JHtkYXRhLnRpbWV9YDtcclxuXHJcbiAgICBcclxuXHJcbiAgICBsZWZ0VGVhbURpdi5hcHBlbmRDaGlsZChsZWZ0VGVhbUg0KTtcclxuICAgIHJpZ2h0VGVhbURpdi5hcHBlbmRDaGlsZChyaWdodFRlYW1INCk7XHJcbiAgICBjbGVhcmZpeERpdi5hcHBlbmRDaGlsZCh0aW1lSWNvbik7XHJcbiAgICBjbGVhcmZpeERpdi5hcHBlbmRDaGlsZChsZWZ0VGVhbURpdik7XHJcbiAgICBjbGVhcmZpeERpdi5hcHBlbmRDaGlsZChyaWdodFRlYW1EaXYpO1xyXG4gICAgY2FyZEJvZHlEaXYuYXBwZW5kQ2hpbGQoY2xlYXJmaXhEaXYpO1xyXG4gICAgY2FyZEJvZHlEaXYuYXBwZW5kQ2hpbGQoZGF0ZVApO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGJveERpdi5jbGFzc05hbWUgPSAnYm94JztcclxuICAgICAgICBib3hEaXYudGV4dENvbnRlbnQgPSBpO1xyXG4gICAgICAgIGJveERpdi5pZCA9IGk7XHJcbiAgICAgICAgY2FyZEJvZHlEaXYuYXBwZW5kQ2hpbGQoYm94RGl2KTtcclxuICAgIH1cclxuICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZEJvZHlEaXYpO1xyXG4gICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQoY2FyZERpdik7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG91dGVyRGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdENhcmRzKGRhdGEsd2Vlaykge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLXdyYXBwZXInKTtcclxuICAgIHdoaWxlICh3cmFwcGVyLmZpcnN0Q2hpbGQpIHdyYXBwZXIucmVtb3ZlQ2hpbGQod3JhcHBlci5maXJzdENoaWxkKTtcclxuICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KHdlZWspKSB7XHJcbiAgICAgICAgbGV0IGduID0gMTtcclxuICAgICAgICBmb3IgKGxldCBnYW1lIGluIGRhdGFbd2Vla10pe1xyXG4gICAgICAgICAgICBjcmVhdGVDYXJkKGRhdGFbd2Vla11bZ2FtZV0sZ2FtZSx3cmFwcGVyLGduKTtcclxuICAgICAgICAgICAgZ24rK1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm9uQXV0aFN0YXRlQ2hhbmdlZEZiKCk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2hlYWRlclwiKS5sb2FkKFwiLi4vc3JjL3BhZ2VzL2hlYWRlci5odG1sXCIpXHJcbn0pO1xyXG5cclxuY29uc3QgdWlkID0gbG9jYWxTdG9yYWdlLnVpZDtcclxuY29uc3QgZGIgPSBnZXREYXRhYmFzZSgpO1xyXG5sZXQgd2Vla0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkLXdlZWsnKTtcclxuY29uc3Qgd2VlayA9IHdlZWtFbC50ZXh0Q29udGVudC5yZXBsYWNlKCcgJywnJykudG9Mb2NhbGVMb3dlckNhc2UoKVxyXG5jb25zdCByZWZlciA9IHJlZihkYiwgYHVzZXJzLyR7dWlkfS8ke3dlZWt9YCkgIFxyXG5jb25zdCBjaG9zZW5Db2xvciA9ICdyZ2JhKDIwOSwgMTE5LCAxNywgMC4yKSdcclxuXHJcbmxldCBwaWNrcyA9IGF3YWl0IGZldGNoRGF0YSgpO1xyXG5pZiAocGlja3MgPT0gbnVsbCkgcGlja3MgPSB7fTtcclxuY29uc3QgZ2FtZURhdGEgPSBhd2FpdCBqc29uKCcuLi9kYXRhL2dhbWVzLmpzb24nKVxyXG5sZXQgcG9pbnRzUGlja2VkID0gW107XHJcblxyXG5mb3IgKGxldCBnYW1lIGluIHBpY2tzKSBwb2ludHNQaWNrZWQucHVzaChTdHJpbmcocGlja3NbZ2FtZV0ucG9pbnRzKSlcclxuXHJcbmluaXRDYXJkcyhnYW1lRGF0YSx3ZWVrKTtcclxuc2V0dXAocGlja3MpO1xyXG5jb2xvcldpbm5lcnMod2Vlayk7XHJcbmNvbnNvbGUubG9nKCdwb2ludHNQaWNrZWQgb3V0Oj4+ICcsIHBvaW50c1BpY2tlZCk7XHJcbmNvbnN0IHRlYW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlYW0nKTtcclxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xyXG5jb25zdCBwb2ludHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm94Jyk7XHJcblxyXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKVxyXG5jb25zdCB3ZWVrcyA9IHNpZGViYXIucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJylcclxuXHJcbnRlYW1zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcyA6Pj4gJywgdGhpcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnBhcmVudEVsZW1lbnQgOj4+ICcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICBjb25zb2xlLmxvZygncGFyZW50IDo+PiAnLCBwYXJlbnQpO1xyXG4gICAgICAgIGNvbnN0IHRpbWUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKS5pZFxyXG4gICAgICAgIGNvbnN0IHVuaXhOb3cgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcblxyXG4gICAgICAgIGlmICh1bml4Tm93ID4gdGltZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3R5bGUuY29sb3IgPSBjaG9zZW5Db2xvcjtcclxuXHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZWFtXCIpO1xyXG4gICAgICAgIHBpY2tzW3BhcmVudC5pZF0gPSB7XHJcbiAgICAgICAgICAgIHBpY2s6XCJcIixcclxuICAgICAgICAgICAgcG9pbnRzOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBpY2tzW3BhcmVudC5pZF1bJ3BpY2snXSA9IHRoaXMudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgcGlja3NbcGFyZW50LmlkXVsncG9pbnRzJ10gPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnY2hpbGRyZW4gOj4+ICcsIGNoaWxkcmVuKTtcclxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIDo+PiAnLCBjaGlsZCk7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZC50ZXh0Q29udGVudCAhPSB0aGlzLnRleHRDb250ZW50KSBjaGlsZC5zdHlsZS5jb2xvciA9ICdibGFjayc7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbnBvaW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3BvaW50c1BpY2tlZCA6Pj4gJywgcG9pbnRzUGlja2VkKTtcclxuICAgICAgICBpZiAocG9pbnRzUGlja2VkLmluY2x1ZGVzKHRoaXMudGV4dENvbnRlbnQpKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9IGNob3NlbkNvbG9yO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJveFwiKTtcclxuICAgICAgICBjb25zdCBnYW1lID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhcmZpeCcpO1xyXG4gICAgICAgIGNvbnN0IHRlYW1zID0gZ2FtZS5xdWVyeVNlbGVjdG9yQWxsKCcudGVhbScpO1xyXG5cclxuICAgICAgICBsZXQgc2VsZWN0ZWQ7XHJcbiAgICAgICAgdGVhbXMuZm9yRWFjaCh0ZWFtID0+IHtcclxuICAgICAgICAgICAgaWYgKHRlYW0uc3R5bGUuY29sb3IgPT0gY2hvc2VuQ29sb3IpIHNlbGVjdGVkID0gdGVhbS50ZXh0Q29udGVudFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChwaWNrcy5oYXNPd25Qcm9wZXJ0eShnYW1lLmlkKSl7XHJcbiAgICAgICAgICAgIGlmIChwaWNrc1tnYW1lLmlkXS5oYXNPd25Qcm9wZXJ0eSgncG9pbnRzJykpcG9pbnRzUGlja2VkID0gcG9pbnRzUGlja2VkLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHBpY2tzW2dhbWUuaWRdLnBvaW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwaWNrc1tnYW1lLmlkXSA9IHtcclxuICAgICAgICAgICAgcGljazpzZWxlY3RlZCxcclxuICAgICAgICAgICAgcG9pbnRzOiB0aGlzLnRleHRDb250ZW50XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZC50ZXh0Q29udGVudCAhPSB0aGlzLnRleHRDb250ZW50KSBjaGlsZC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3doaXRlc21va2UnOyBcclxuICAgICAgICB9KTtcclxuICAgICAgICBwb2ludHNQaWNrZWQucHVzaChTdHJpbmcocGlja3NbZ2FtZS5pZF0ucG9pbnRzKSlcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgc3VibWl0KHdlZWsscGlja3MpO1xyXG59KTtcclxuXHJcbndlZWtzLmZvckVhY2godyA9PiB7IFxyXG4gICAgbGV0IHdlZWsgPSB3LmlubmVyVGV4dC5yZXBsYWNlKCcgJywnJykudG9Mb2NhbGVMb3dlckNhc2UoKVxyXG4gICAgdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB3ZWVrRWwudGV4dENvbnRlbnQgPSB3LmlubmVyVGV4dFxyXG4gICAgICAgIGluaXRDYXJkcyhnYW1lRGF0YSx3ZWVrKTtcclxuICAgICAgICBzZXR1cChwaWNrcyk7XHJcbiAgICAgICAgY29sb3JXaW5uZXJzKHdlZWspO1xyXG4gICAgfSlcclxufSlcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuTG9nb3V0XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9nb3V0RmIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/profile.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-d0574a","vendors-node_modules_d3_src_index_js"], () => (__webpack_require__("./src/js/profile.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;