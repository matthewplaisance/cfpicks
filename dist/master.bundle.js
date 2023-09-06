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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   createUser: () => (/* binding */ createUser),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   initDb: () => (/* binding */ initDb),\n/* harmony export */   loginFb: () => (/* binding */ loginFb),\n/* harmony export */   logoutFb: () => (/* binding */ logoutFb),\n/* harmony export */   onAuthStateChanged: () => (/* reexport safe */ firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged),\n/* harmony export */   onAuthStateChangedFb: () => (/* binding */ onAuthStateChangedFb),\n/* harmony export */   updateName: () => (/* binding */ updateName),\n/* harmony export */   updatePasswordFb: () => (/* binding */ updatePasswordFb)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n\r\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n    apiKey: \"AIzaSyC8J8_Bo2YSeM1aTkE3--bQLCaeuGU3hQE\",\r\n    authDomain: \"cfpicks-66e14.firebaseapp.com\",\r\n    projectId: \"cfpicks-66e14\",\r\n    storageBucket: \"cfpicks-66e14.appspot.com\",\r\n    messagingSenderId: \"924459609957\",\r\n    appId: \"1:924459609957:web:c1125a2a8f5147de313b8c\"\r\n};\r\n  \r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)();\r\n\r\nconst onAuthStateChangedFb = () => {\r\n    auth.onAuthStateChanged((user) => {\r\n        if (user) {\r\n            console.log('user mon :>> ', user);\r\n            localStorage.uid = user.uid;\r\n            const currPage = window.location.pathname.split(\"/\").pop();\r\n            if (currPage == 'index.html'){\r\n                window.location.href = './profile.html';\r\n            }\r\n        } else {\r\n            const currPage = window.location.pathname.split(\"/\").pop();\r\n            console.log('currPage :>> ', currPage);\r\n            if (currPage != 'index.html'){\r\n                window.location.replace('index.html');\r\n                const currentState = window.history.state;\r\n                window.history.replaceState(currentState, '', window.location.href);\r\n                window.onpopstate = function () {\r\n                window.history.replaceState(currentState, '', window.location.href);\r\n                };\r\n                \r\n            }\r\n        }\r\n    });\r\n};\r\n\r\nconst updateName = (displayName) => {\r\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updateProfile)(auth.currentUser, {\r\n        displayName: displayName\r\n      }).then(() => {\r\n        console.log('userCredential.user.displayName :>> ', auth.currentUser.displayName);\r\n      }).catch((error) => {\r\n        console.log('error :>> ', error);\r\n      });\r\n};\r\n\r\nconst initDb = (uid,displayName) => {\r\n    console.log('indb :>> ');\r\n    (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(db, `users/${uid}/`), {\r\n        \"name\": displayName,\r\n        \"week1\": {}\r\n    });\r\n};\r\n\r\nconst loginFb = (email, password) => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth,email,password)\r\n};\r\n\r\nconst logoutFb = () => {\r\n    sessionStorage.removeItem('siteSelection')\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\r\n};\r\n\r\nconst updatePasswordFb = (newPassword) => {\r\n    const user = auth.currentUser;\r\n    if (user) {\r\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(user,newPassword);\r\n    }\r\n    return Promise.reject(new Error('No user is currently signed in.'));\r\n};\r\n\r\nconst createUser = (email,password) => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(auth,email,password);\r\n}\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ21IO0FBQ3ZHO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFhO0FBQ3pCLGFBQWEsc0RBQU87QUFDcEIsV0FBVyw4REFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBYTtBQUNqQjtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQUcsQ0FBQyxzREFBRyxjQUFjLElBQUk7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlFQUEwQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0RBQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNkRBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNkVBQThCO0FBQ3pDO0FBQ0E7QUFDbUk7QUFDbkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvYXV0aC5qcz85MjkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQsIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLCBzaWduT3V0LCB1cGRhdGVQYXNzd29yZCwgdXBkYXRlUHJvZmlsZSwgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCB7IGdldERhdGFiYXNlLCByZWYsIHNldCB9IGZyb20gJ2ZpcmViYXNlL2RhdGFiYXNlJ1xyXG5cclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUM4SjhfQm8yWVNlTTFhVGtFMy0tYlFMQ2FldUdVM2hRRVwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJjZnBpY2tzLTY2ZTE0LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcImNmcGlja3MtNjZlMTRcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiY2ZwaWNrcy02NmUxNC5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTI0NDU5NjA5OTU3XCIsXHJcbiAgICBhcHBJZDogXCIxOjkyNDQ1OTYwOTk1Nzp3ZWI6YzExMjVhMmE4ZjUxNDdkZTMxM2I4Y1wiXHJcbn07XHJcbiAgXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG5jb25zdCBkYiA9IGdldERhdGFiYXNlKCk7XHJcblxyXG5jb25zdCBvbkF1dGhTdGF0ZUNoYW5nZWRGYiA9ICgpID0+IHtcclxuICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgbW9uIDo+PiAnLCB1c2VyKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnVpZCA9IHVzZXIudWlkO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyUGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikucG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyUGFnZSA9PSAnaW5kZXguaHRtbCcpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi9wcm9maWxlLmh0bWwnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY3VyclBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLnBvcCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY3VyclBhZ2UgOj4+ICcsIGN1cnJQYWdlKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJQYWdlICE9ICdpbmRleC5odG1sJyl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnaW5kZXguaHRtbCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gd2luZG93Lmhpc3Rvcnkuc3RhdGU7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoY3VycmVudFN0YXRlLCAnJywgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoY3VycmVudFN0YXRlLCAnJywgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVOYW1lID0gKGRpc3BsYXlOYW1lKSA9PiB7XHJcbiAgICB1cGRhdGVQcm9maWxlKGF1dGguY3VycmVudFVzZXIsIHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWVcclxuICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXJDcmVkZW50aWFsLnVzZXIuZGlzcGxheU5hbWUgOj4+ICcsIGF1dGguY3VycmVudFVzZXIuZGlzcGxheU5hbWUpO1xyXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgOj4+ICcsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBpbml0RGIgPSAodWlkLGRpc3BsYXlOYW1lKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaW5kYiA6Pj4gJyk7XHJcbiAgICBzZXQocmVmKGRiLCBgdXNlcnMvJHt1aWR9L2ApLCB7XHJcbiAgICAgICAgXCJuYW1lXCI6IGRpc3BsYXlOYW1lLFxyXG4gICAgICAgIFwid2VlazFcIjoge31cclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbG9naW5GYiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLGVtYWlsLHBhc3N3b3JkKVxyXG59O1xyXG5cclxuY29uc3QgbG9nb3V0RmIgPSAoKSA9PiB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdzaXRlU2VsZWN0aW9uJylcclxuICAgIHJldHVybiBzaWduT3V0KGF1dGgpO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlUGFzc3dvcmRGYiA9IChuZXdQYXNzd29yZCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVQYXNzd29yZCh1c2VyLG5ld1Bhc3N3b3JkKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ05vIHVzZXIgaXMgY3VycmVudGx5IHNpZ25lZCBpbi4nKSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVVc2VyID0gKGVtYWlsLHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsZW1haWwscGFzc3dvcmQpO1xyXG59XHJcblxyXG5leHBvcnQgeyBhdXRoLCBkYiwgb25BdXRoU3RhdGVDaGFuZ2VkRmIsIGxvZ2luRmIsIGxvZ291dEZiLCB1cGRhdGVQYXNzd29yZEZiLCBjcmVhdGVVc2VyLCB1cGRhdGVOYW1lLCBpbml0RGIsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9O1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/auth.js\n");

/***/ }),

/***/ "./src/js/master.js":
/*!**************************!*\
  !*** ./src/js/master.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\n\r\n\r\n(0,_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChangedFb)();\r\n\r\n$(document).ready(function () {\r\n    $(\"#header\").load(\"../src/pages/header.html\")\r\n});\r\n\r\nasync function fetchData(refer) {\r\n    let data;\r\n    await new Promise((resolve, reject) => {\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(refer , (snapshot) => {\r\n            data = snapshot.val();\r\n            resolve();\r\n        });\r\n    });\r\n    return data;\r\n}\r\n\r\n\r\nfunction initTable(userData,dataWinners,dataGames,week) {\r\n    let unixNow = Math.floor(new Date().getTime() / 1000);\r\n    let tableBody = document.getElementById('tbody');\r\n    let winner = {\r\n        \"points\":0,\r\n        \"user\":[],\r\n        'tb':0\r\n    };\r\n    let cnt = 0;\r\n\r\n    for (let user in userData) {\r\n        if (user == \"IWBJNJ2Zd2OEIndMcKgXpRfRF3C3\") continue;\r\n\r\n        let points = 0;\r\n        const weekInfo = userData[user][week];\r\n        let row = document.createElement('tr')\r\n        let cell = document.createElement('td');\r\n        cell.textContent = userData[user]['name']\r\n        cell.id = user\r\n        row.append(cell)\r\n        //for (let game in weekInfo){\r\n        //    console.log('game :>> ', game);\r\n        //    const p = weekInfo[game]['pick'];\r\n        //    const pnts = weekInfo[game]['points'];\r\n        //    let cell = document.createElement('td');\r\n        //    cell.textContent = `${p} : ${pnts}`\r\n        //    row.append(cell)\r\n        //    //if (data[week][game][\"winner\"] == p)points += parseInt(pnts)\r\n        //}\r\n        //week1 handler\r\n        for (let i = 1; i < 13; i++){\r\n            let cell = document.createElement('td');\r\n            cell.id = week1Map[i]\r\n            row.append(cell)\r\n        }\r\n\r\n       \r\n        for (const [idx, game] of Object.entries(week1Map)) {\r\n            if (weekInfo.hasOwnProperty(game)){\r\n                const info = weekInfo[game]\r\n                if (dataGames[game].time < unixNow) row.cells[idx].textContent = `${info[\"pick\"]}: ${info[\"points\"]}`;\r\n                if (dataWinners.hasOwnProperty(game)) {\r\n                    if (dataWinners[game] == info.pick) {\r\n                        row.cells[idx].style.background = colorW;\r\n                        points += parseInt(info.points);\r\n                    }\r\n                }\r\n            }else {\r\n                if (dataGames[game].time < unixNow) row.cells[idx].textContent = 'No pick'\r\n            }\r\n            \r\n        }\r\n\r\n        if (points > winner[\"points\"]){\r\n            winner[\"points\"] = points;\r\n            winner.user = [user];\r\n            winner.tb = weekInfo['tb'].pick;\r\n        }else if (points == winner.points){\r\n            const tbr = dataWinners.tb;\r\n            if (tbr){\r\n                const currDiff = Math.abs(tbr - weekInfo['tb'].pick);\r\n                const winnerDiff = Math.abs(tbr - winner.tb);\r\n                if (currDiff < winnerDiff){\r\n                    winner[\"points\"] = points;\r\n                    winner.user = [user];\r\n                    winner.tb = weekInfo['tb'].pick;\r\n                }else if (currDiff == winnerDiff) winner.user.push(user)\r\n            }else winner.user.push(user)\r\n        }\r\n\r\n        let cellt = document.createElement('td');\r\n        if (weekInfo.hasOwnProperty('tb')) {\r\n            if (dataGames['tiebreaker'].time < unixNow) cellt.textContent = weekInfo['tb'].pick;\r\n        }\r\n        row.append(cellt)\r\n\r\n        let cellp = document.createElement('td');\r\n        cellp.textContent = points;\r\n        row.append(cellp);\r\n\r\n        tableBody.append(row);\r\n        cnt++\r\n    }\r\n    for (let w of winner.user) document.getElementById(w).style.background = colorW;\r\n    const userRow = document.getElementById(uid);\r\n    if (userRow) userRow.style.fontWeight = 600;\r\n}\r\n\r\nfunction displayTBR(data) {\r\n    if (data) {\r\n        const tbr = data.tb\r\n        if (tbr){\r\n            let tbr_th = document.getElementById('tb_res');\r\n            tbr_th.textContent = tbr;\r\n            tbr_th.style.background = colorW;\r\n        }\r\n    }\r\n}\r\n\r\nconst week1Map = {\r\n    11:\"game1\",\r\n    12:\"game2\",\r\n    1:\"game3\",\r\n    2:\"game4\",\r\n    3:\"game5\",\r\n    4:\"game6\",\r\n    5:\"game7\",\r\n    6:\"game8\",\r\n    7:\"game9\",\r\n    8:\"game10\",\r\n    9:\"game11\",\r\n    10:\"game12\"\r\n}\r\n\r\nconst uid = localStorage.uid;\r\nconsole.log('uid :>> ', uid);\r\nconst colorW = '#C0FF00'\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();\r\nlet userData = await fetchData((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users`));\r\nlet winnerData = await fetchData((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `results`));\r\nconst dataGames = await (0,d3__WEBPACK_IMPORTED_MODULE_1__.json)('../data/gamesTest.json');\r\n\r\nlet weekEl = document.getElementById('selected-week');\r\nlet week = weekEl.textContent.replace(' ','').toLocaleLowerCase();\r\n\r\nif (dataGames) {\r\n    initTable(userData,winnerData[week],dataGames[week],week);\r\n    displayTBR(winnerData[week]);\r\n}\r\n\r\nconst sidebar = document.getElementById('sidebar')\r\nconst weeks = sidebar.querySelectorAll('.nav-link')\r\n\r\nweeks.forEach(w => { \r\n    let week = w.innerText.replace(' ','').toLocaleLowerCase()\r\n    const table = document.getElementById('tbody');\r\n    w.addEventListener('click', () => {\r\n        weekEl.textContent = w.innerText\r\n        while (table.firstChild){\r\n            table.removeChild(table.firstChild);\r\n        }\r\n        //if (data.hasOwnProperty(week)) initTable(userData,data,week);\r\n    })\r\n})\r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFzdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZEO0FBQ2xCO0FBQ2pCO0FBQzFCO0FBQ0EsMkRBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQU87QUFDZjtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEdBQUcsSUFBSSxLQUFLO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLGFBQWEsSUFBSSxlQUFlO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhEQUFXO0FBQ3RCLCtCQUErQixzREFBRztBQUNsQyxpQ0FBaUMsc0RBQUc7QUFDcEMsd0JBQXdCLHdDQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvbWFzdGVyLmpzPzEzZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RGF0YWJhc2UsIHJlZiwgb25WYWx1ZSB9IGZyb20gJ2ZpcmViYXNlL2RhdGFiYXNlJ1xyXG5pbXBvcnQge29uQXV0aFN0YXRlQ2hhbmdlZEZifSBmcm9tICcuL2F1dGgnXHJcbmltcG9ydCB7IGpzb24gfSBmcm9tICdkMyc7XHJcblxyXG5vbkF1dGhTdGF0ZUNoYW5nZWRGYigpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIiNoZWFkZXJcIikubG9hZChcIi4uL3NyYy9wYWdlcy9oZWFkZXIuaHRtbFwiKVxyXG59KTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShyZWZlcikge1xyXG4gICAgbGV0IGRhdGE7XHJcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgb25WYWx1ZShyZWZlciAsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBkYXRhID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0VGFibGUodXNlckRhdGEsZGF0YVdpbm5lcnMsZGF0YUdhbWVzLHdlZWspIHtcclxuICAgIGxldCB1bml4Tm93ID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgbGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0Ym9keScpO1xyXG4gICAgbGV0IHdpbm5lciA9IHtcclxuICAgICAgICBcInBvaW50c1wiOjAsXHJcbiAgICAgICAgXCJ1c2VyXCI6W10sXHJcbiAgICAgICAgJ3RiJzowXHJcbiAgICB9O1xyXG4gICAgbGV0IGNudCA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgdXNlciBpbiB1c2VyRGF0YSkge1xyXG4gICAgICAgIGlmICh1c2VyID09IFwiSVdCSk5KMlpkMk9FSW5kTWNLZ1hwUmZSRjNDM1wiKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgbGV0IHBvaW50cyA9IDA7XHJcbiAgICAgICAgY29uc3Qgd2Vla0luZm8gPSB1c2VyRGF0YVt1c2VyXVt3ZWVrXTtcclxuICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxyXG4gICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gdXNlckRhdGFbdXNlcl1bJ25hbWUnXVxyXG4gICAgICAgIGNlbGwuaWQgPSB1c2VyXHJcbiAgICAgICAgcm93LmFwcGVuZChjZWxsKVxyXG4gICAgICAgIC8vZm9yIChsZXQgZ2FtZSBpbiB3ZWVrSW5mbyl7XHJcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2coJ2dhbWUgOj4+ICcsIGdhbWUpO1xyXG4gICAgICAgIC8vICAgIGNvbnN0IHAgPSB3ZWVrSW5mb1tnYW1lXVsncGljayddO1xyXG4gICAgICAgIC8vICAgIGNvbnN0IHBudHMgPSB3ZWVrSW5mb1tnYW1lXVsncG9pbnRzJ107XHJcbiAgICAgICAgLy8gICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIC8vICAgIGNlbGwudGV4dENvbnRlbnQgPSBgJHtwfSA6ICR7cG50c31gXHJcbiAgICAgICAgLy8gICAgcm93LmFwcGVuZChjZWxsKVxyXG4gICAgICAgIC8vICAgIC8vaWYgKGRhdGFbd2Vla11bZ2FtZV1bXCJ3aW5uZXJcIl0gPT0gcClwb2ludHMgKz0gcGFyc2VJbnQocG50cylcclxuICAgICAgICAvL31cclxuICAgICAgICAvL3dlZWsxIGhhbmRsZXJcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgIGNlbGwuaWQgPSB3ZWVrMU1hcFtpXVxyXG4gICAgICAgICAgICByb3cuYXBwZW5kKGNlbGwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIGZvciAoY29uc3QgW2lkeCwgZ2FtZV0gb2YgT2JqZWN0LmVudHJpZXMod2VlazFNYXApKSB7XHJcbiAgICAgICAgICAgIGlmICh3ZWVrSW5mby5oYXNPd25Qcm9wZXJ0eShnYW1lKSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gd2Vla0luZm9bZ2FtZV1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhR2FtZXNbZ2FtZV0udGltZSA8IHVuaXhOb3cpIHJvdy5jZWxsc1tpZHhdLnRleHRDb250ZW50ID0gYCR7aW5mb1tcInBpY2tcIl19OiAke2luZm9bXCJwb2ludHNcIl19YDtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhV2lubmVycy5oYXNPd25Qcm9wZXJ0eShnYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhV2lubmVyc1tnYW1lXSA9PSBpbmZvLnBpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93LmNlbGxzW2lkeF0uc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yVztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzICs9IHBhcnNlSW50KGluZm8ucG9pbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhR2FtZXNbZ2FtZV0udGltZSA8IHVuaXhOb3cpIHJvdy5jZWxsc1tpZHhdLnRleHRDb250ZW50ID0gJ05vIHBpY2snXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocG9pbnRzID4gd2lubmVyW1wicG9pbnRzXCJdKXtcclxuICAgICAgICAgICAgd2lubmVyW1wicG9pbnRzXCJdID0gcG9pbnRzO1xyXG4gICAgICAgICAgICB3aW5uZXIudXNlciA9IFt1c2VyXTtcclxuICAgICAgICAgICAgd2lubmVyLnRiID0gd2Vla0luZm9bJ3RiJ10ucGljaztcclxuICAgICAgICB9ZWxzZSBpZiAocG9pbnRzID09IHdpbm5lci5wb2ludHMpe1xyXG4gICAgICAgICAgICBjb25zdCB0YnIgPSBkYXRhV2lubmVycy50YjtcclxuICAgICAgICAgICAgaWYgKHRicil7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyRGlmZiA9IE1hdGguYWJzKHRiciAtIHdlZWtJbmZvWyd0YiddLnBpY2spO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lubmVyRGlmZiA9IE1hdGguYWJzKHRiciAtIHdpbm5lci50Yik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyckRpZmYgPCB3aW5uZXJEaWZmKXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5uZXJbXCJwb2ludHNcIl0gPSBwb2ludHM7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lubmVyLnVzZXIgPSBbdXNlcl07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lubmVyLnRiID0gd2Vla0luZm9bJ3RiJ10ucGljaztcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmIChjdXJyRGlmZiA9PSB3aW5uZXJEaWZmKSB3aW5uZXIudXNlci5wdXNoKHVzZXIpXHJcbiAgICAgICAgICAgIH1lbHNlIHdpbm5lci51c2VyLnB1c2godXNlcilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjZWxsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgaWYgKHdlZWtJbmZvLmhhc093blByb3BlcnR5KCd0YicpKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhR2FtZXNbJ3RpZWJyZWFrZXInXS50aW1lIDwgdW5peE5vdykgY2VsbHQudGV4dENvbnRlbnQgPSB3ZWVrSW5mb1sndGInXS5waWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByb3cuYXBwZW5kKGNlbGx0KVxyXG5cclxuICAgICAgICBsZXQgY2VsbHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNlbGxwLnRleHRDb250ZW50ID0gcG9pbnRzO1xyXG4gICAgICAgIHJvdy5hcHBlbmQoY2VsbHApO1xyXG5cclxuICAgICAgICB0YWJsZUJvZHkuYXBwZW5kKHJvdyk7XHJcbiAgICAgICAgY250KytcclxuICAgIH1cclxuICAgIGZvciAobGV0IHcgb2Ygd2lubmVyLnVzZXIpIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHcpLnN0eWxlLmJhY2tncm91bmQgPSBjb2xvclc7XHJcbiAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodWlkKTtcclxuICAgIGlmICh1c2VyUm93KSB1c2VyUm93LnN0eWxlLmZvbnRXZWlnaHQgPSA2MDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUQlIoZGF0YSkge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBjb25zdCB0YnIgPSBkYXRhLnRiXHJcbiAgICAgICAgaWYgKHRicil7XHJcbiAgICAgICAgICAgIGxldCB0YnJfdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGJfcmVzJyk7XHJcbiAgICAgICAgICAgIHRicl90aC50ZXh0Q29udGVudCA9IHRicjtcclxuICAgICAgICAgICAgdGJyX3RoLnN0eWxlLmJhY2tncm91bmQgPSBjb2xvclc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB3ZWVrMU1hcCA9IHtcclxuICAgIDExOlwiZ2FtZTFcIixcclxuICAgIDEyOlwiZ2FtZTJcIixcclxuICAgIDE6XCJnYW1lM1wiLFxyXG4gICAgMjpcImdhbWU0XCIsXHJcbiAgICAzOlwiZ2FtZTVcIixcclxuICAgIDQ6XCJnYW1lNlwiLFxyXG4gICAgNTpcImdhbWU3XCIsXHJcbiAgICA2OlwiZ2FtZThcIixcclxuICAgIDc6XCJnYW1lOVwiLFxyXG4gICAgODpcImdhbWUxMFwiLFxyXG4gICAgOTpcImdhbWUxMVwiLFxyXG4gICAgMTA6XCJnYW1lMTJcIlxyXG59XHJcblxyXG5jb25zdCB1aWQgPSBsb2NhbFN0b3JhZ2UudWlkO1xyXG5jb25zb2xlLmxvZygndWlkIDo+PiAnLCB1aWQpO1xyXG5jb25zdCBjb2xvclcgPSAnI0MwRkYwMCdcclxuY29uc3QgZGIgPSBnZXREYXRhYmFzZSgpO1xyXG5sZXQgdXNlckRhdGEgPSBhd2FpdCBmZXRjaERhdGEocmVmKGRiLCBgdXNlcnNgKSk7XHJcbmxldCB3aW5uZXJEYXRhID0gYXdhaXQgZmV0Y2hEYXRhKHJlZihkYiwgYHJlc3VsdHNgKSk7XHJcbmNvbnN0IGRhdGFHYW1lcyA9IGF3YWl0IGpzb24oJy4uL2RhdGEvZ2FtZXNUZXN0Lmpzb24nKTtcclxuXHJcbmxldCB3ZWVrRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWQtd2VlaycpO1xyXG5sZXQgd2VlayA9IHdlZWtFbC50ZXh0Q29udGVudC5yZXBsYWNlKCcgJywnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuXHJcbmlmIChkYXRhR2FtZXMpIHtcclxuICAgIGluaXRUYWJsZSh1c2VyRGF0YSx3aW5uZXJEYXRhW3dlZWtdLGRhdGFHYW1lc1t3ZWVrXSx3ZWVrKTtcclxuICAgIGRpc3BsYXlUQlIod2lubmVyRGF0YVt3ZWVrXSk7XHJcbn1cclxuXHJcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpXHJcbmNvbnN0IHdlZWtzID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpbmsnKVxyXG5cclxud2Vla3MuZm9yRWFjaCh3ID0+IHsgXHJcbiAgICBsZXQgd2VlayA9IHcuaW5uZXJUZXh0LnJlcGxhY2UoJyAnLCcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpXHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0Ym9keScpO1xyXG4gICAgdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB3ZWVrRWwudGV4dENvbnRlbnQgPSB3LmlubmVyVGV4dFxyXG4gICAgICAgIHdoaWxlICh0YWJsZS5maXJzdENoaWxkKXtcclxuICAgICAgICAgICAgdGFibGUucmVtb3ZlQ2hpbGQodGFibGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vaWYgKGRhdGEuaGFzT3duUHJvcGVydHkod2VlaykpIGluaXRUYWJsZSh1c2VyRGF0YSxkYXRhLHdlZWspO1xyXG4gICAgfSlcclxufSlcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/master.js\n");

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
/******/ 			"master": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-d0574a","vendors-node_modules_d3_src_index_js"], () => (__webpack_require__("./src/js/master.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;