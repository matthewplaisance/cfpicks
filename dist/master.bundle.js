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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\n\r\n\r\n(0,_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChangedFb)();\r\n\r\n$(document).ready(function () {\r\n    $(\"#header\").load(\"../src/pages/header.html\")\r\n});\r\n\r\nasync function fetchData() {\r\n    let data;\r\n    await new Promise((resolve, reject) => {\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users`) , (snapshot) => {\r\n            data = snapshot.val();\r\n            resolve();\r\n        });\r\n    });\r\n    return data;\r\n}\r\n\r\nfunction initTable(userData,dataWinners,dataGames,week) {\r\n    let unixNow = Math.floor(new Date().getTime() / 1000);\r\n    console.log('dataGames :>> ', dataGames);\r\n    let tableBody = document.getElementById('tbody');\r\n    let winner = {\r\n        \"points\":0,\r\n        \"user\":[],\r\n        'tb':0\r\n    };\r\n    console.log('winner :>> ', winner);\r\n    let cnt = 0;\r\n\r\n    for (let user in userData) {\r\n        if (user == \"IWBJNJ2Zd2OEIndMcKgXpRfRF3C3\") continue;\r\n        let points = 0;\r\n        const weekInfo = userData[user][week];\r\n        let row = document.createElement('tr')\r\n        let cell = document.createElement('td');\r\n        cell.textContent = userData[user]['name']\r\n        cell.id = user\r\n        row.append(cell)\r\n\r\n        //for (let game in weekInfo){\r\n        //    console.log('game :>> ', game);\r\n        //    const p = weekInfo[game]['pick'];\r\n        //    const pnts = weekInfo[game]['points'];\r\n        //    let cell = document.createElement('td');\r\n        //    cell.textContent = `${p} : ${pnts}`\r\n        //    row.append(cell)\r\n        //    //if (data[week][game][\"winner\"] == p)points += parseInt(pnts)\r\n        //}\r\n        //week1 handler\r\n        for (let i = 1; i < 13; i++){\r\n            let cell = document.createElement('td');\r\n            cell.id = week1Map[i]\r\n            row.append(cell)\r\n        }\r\n\r\n       \r\n        for (const [idx, game] of Object.entries(week1Map)) {\r\n            if (weekInfo.hasOwnProperty(game)){\r\n                const info = weekInfo[game]\r\n                \r\n                if (dataGames[game].time < unixNow) row.cells[idx].textContent = `${info[\"pick\"]}: ${info[\"points\"]}`;\r\n                if (dataWinners.hasOwnProperty(game)) {\r\n                    if (dataWinners[game].winner == info.pick) {\r\n                        row.cells[idx].style.background = colorW;\r\n                        points += parseInt(info.points);\r\n                    }\r\n                }\r\n            }else {\r\n                if (dataGames[game].time < unixNow) row.cells[idx].textContent = 'No pick'\r\n            }\r\n            \r\n        }\r\n\r\n        if (points > winner[\"points\"]){\r\n            winner[\"points\"] = points;\r\n            winner.user = [user];\r\n            winner.tb = weekInfo['tb'].pick;\r\n        }else if (points == winner.points){\r\n            if (dataWinners.hasOwnProperty('tb')){\r\n                const currDiff = Math.abs(dataWinners['tb'] - weekInfo['tb'].pick);\r\n                const winnerDiff = Math.abs(dataWinners['tb'] - winner.tb);\r\n                if (currDiff < winnerDiff){\r\n                    winner[\"points\"] = points;\r\n                    winner.user = [user];\r\n                    winner.tb = weekInfo['tb'].pick;\r\n                }else if (currDiff == winnerDiff) winner.user.push(user)\r\n            }\r\n        }\r\n\r\n        let cellt = document.createElement('td');\r\n        if (weekInfo.hasOwnProperty('tb')) {\r\n            if (dataGames['tiebreaker'].time < unixNow) cellt.textContent = weekInfo['tb'].pick;\r\n        }\r\n        row.append(cellt)\r\n\r\n        let cellp = document.createElement('td');\r\n        cellp.textContent = points;\r\n        row.append(cellp);\r\n\r\n        tableBody.append(row);\r\n        cnt++\r\n    }\r\n    //for (let w of winner.user) document.getElementById(w).style.background = colorW;\r\n    const userRow = document.getElementById(uid);\r\n    if (userRow) userRow.style.fontWeight = 600;\r\n}\r\n\r\nconst week1Map = {\r\n    11:\"game1\",\r\n    12:\"game2\",\r\n    1:\"game3\",\r\n    2:\"game4\",\r\n    3:\"game5\",\r\n    4:\"game6\",\r\n    5:\"game7\",\r\n    6:\"game8\",\r\n    7:\"game9\",\r\n    8:\"game10\",\r\n    9:\"game11\",\r\n    10:\"game12\"\r\n}\r\n\r\nconst uid = localStorage.uid;\r\nconsole.log('uid :>> ', uid);\r\nconst colorW = '#C0FF00'\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();\r\nlet userData = await fetchData();\r\nconst dataWinners = await (0,d3__WEBPACK_IMPORTED_MODULE_1__.json)('../data//winners.json');\r\nconst dataGames = await (0,d3__WEBPACK_IMPORTED_MODULE_1__.json)('../data/games.json');\r\nconsole.log('userData :>> ', userData);\r\n\r\n//for (let key in userData){\r\n//if (key !== '7QSsNsOFhDaOlYC5Cdp0syqGHye2') delete userData[key]\r\n//}\r\n\r\nconsole.log('userData :>> ', userData);\r\nlet weekEl = document.getElementById('selected-week')\r\nlet week = weekEl.textContent.replace(' ','').toLocaleLowerCase();\r\nif (dataGames.hasOwnProperty(week)) initTable(userData,dataWinners[week],dataGames[week],week);\r\n\r\nconst sidebar = document.getElementById('sidebar')\r\nconst weeks = sidebar.querySelectorAll('.nav-link')\r\n\r\nweeks.forEach(w => { \r\n    let week = w.innerText.replace(' ','').toLocaleLowerCase()\r\n    const table = document.getElementById('tbody');\r\n    w.addEventListener('click', () => {\r\n        weekEl.textContent = w.innerText\r\n        while (table.firstChild){\r\n            table.removeChild(table.firstChild);\r\n        }\r\n        //if (data.hasOwnProperty(week)) initTable(userData,data,week);\r\n    })\r\n})\r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFzdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtFO0FBQ3ZCO0FBQ0M7QUFDNUM7QUFDQSwyREFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBTyxDQUFDLHNEQUFHO0FBQ25CO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxHQUFHLElBQUksS0FBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLGFBQWEsSUFBSSxlQUFlO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4REFBVztBQUN0QjtBQUNBLDBCQUEwQix3Q0FBSTtBQUM5Qix3QkFBd0Isd0NBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvbWFzdGVyLmpzPzEzZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RGF0YWJhc2UsIHJlZiwgc2V0LCBvblZhbHVlIH0gZnJvbSAnZmlyZWJhc2UvZGF0YWJhc2UnXHJcbmltcG9ydCB7b25BdXRoU3RhdGVDaGFuZ2VkRmJ9IGZyb20gJy4vYXV0aCdcclxuaW1wb3J0IHsgY29sb3IsIGpzb24sIHBhcnRpdGlvbiB9IGZyb20gJ2QzJztcclxuXHJcbm9uQXV0aFN0YXRlQ2hhbmdlZEZiKCk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2hlYWRlclwiKS5sb2FkKFwiLi4vc3JjL3BhZ2VzL2hlYWRlci5odG1sXCIpXHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgbGV0IGRhdGE7XHJcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgb25WYWx1ZShyZWYoZGIsIGB1c2Vyc2ApICwgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFRhYmxlKHVzZXJEYXRhLGRhdGFXaW5uZXJzLGRhdGFHYW1lcyx3ZWVrKSB7XHJcbiAgICBsZXQgdW5peE5vdyA9IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhR2FtZXMgOj4+ICcsIGRhdGFHYW1lcyk7XHJcbiAgICBsZXQgdGFibGVCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rib2R5Jyk7XHJcbiAgICBsZXQgd2lubmVyID0ge1xyXG4gICAgICAgIFwicG9pbnRzXCI6MCxcclxuICAgICAgICBcInVzZXJcIjpbXSxcclxuICAgICAgICAndGInOjBcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZygnd2lubmVyIDo+PiAnLCB3aW5uZXIpO1xyXG4gICAgbGV0IGNudCA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgdXNlciBpbiB1c2VyRGF0YSkge1xyXG4gICAgICAgIGlmICh1c2VyID09IFwiSVdCSk5KMlpkMk9FSW5kTWNLZ1hwUmZSRjNDM1wiKSBjb250aW51ZTtcclxuICAgICAgICBsZXQgcG9pbnRzID0gMDtcclxuICAgICAgICBjb25zdCB3ZWVrSW5mbyA9IHVzZXJEYXRhW3VzZXJdW3dlZWtdO1xyXG4gICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXHJcbiAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSB1c2VyRGF0YVt1c2VyXVsnbmFtZSddXHJcbiAgICAgICAgY2VsbC5pZCA9IHVzZXJcclxuICAgICAgICByb3cuYXBwZW5kKGNlbGwpXHJcblxyXG4gICAgICAgIC8vZm9yIChsZXQgZ2FtZSBpbiB3ZWVrSW5mbyl7XHJcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2coJ2dhbWUgOj4+ICcsIGdhbWUpO1xyXG4gICAgICAgIC8vICAgIGNvbnN0IHAgPSB3ZWVrSW5mb1tnYW1lXVsncGljayddO1xyXG4gICAgICAgIC8vICAgIGNvbnN0IHBudHMgPSB3ZWVrSW5mb1tnYW1lXVsncG9pbnRzJ107XHJcbiAgICAgICAgLy8gICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIC8vICAgIGNlbGwudGV4dENvbnRlbnQgPSBgJHtwfSA6ICR7cG50c31gXHJcbiAgICAgICAgLy8gICAgcm93LmFwcGVuZChjZWxsKVxyXG4gICAgICAgIC8vICAgIC8vaWYgKGRhdGFbd2Vla11bZ2FtZV1bXCJ3aW5uZXJcIl0gPT0gcClwb2ludHMgKz0gcGFyc2VJbnQocG50cylcclxuICAgICAgICAvL31cclxuICAgICAgICAvL3dlZWsxIGhhbmRsZXJcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgIGNlbGwuaWQgPSB3ZWVrMU1hcFtpXVxyXG4gICAgICAgICAgICByb3cuYXBwZW5kKGNlbGwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIGZvciAoY29uc3QgW2lkeCwgZ2FtZV0gb2YgT2JqZWN0LmVudHJpZXMod2VlazFNYXApKSB7XHJcbiAgICAgICAgICAgIGlmICh3ZWVrSW5mby5oYXNPd25Qcm9wZXJ0eShnYW1lKSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gd2Vla0luZm9bZ2FtZV1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFHYW1lc1tnYW1lXS50aW1lIDwgdW5peE5vdykgcm93LmNlbGxzW2lkeF0udGV4dENvbnRlbnQgPSBgJHtpbmZvW1wicGlja1wiXX06ICR7aW5mb1tcInBvaW50c1wiXX1gO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFXaW5uZXJzLmhhc093blByb3BlcnR5KGdhbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFXaW5uZXJzW2dhbWVdLndpbm5lciA9PSBpbmZvLnBpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93LmNlbGxzW2lkeF0uc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yVztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzICs9IHBhcnNlSW50KGluZm8ucG9pbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhR2FtZXNbZ2FtZV0udGltZSA8IHVuaXhOb3cpIHJvdy5jZWxsc1tpZHhdLnRleHRDb250ZW50ID0gJ05vIHBpY2snXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocG9pbnRzID4gd2lubmVyW1wicG9pbnRzXCJdKXtcclxuICAgICAgICAgICAgd2lubmVyW1wicG9pbnRzXCJdID0gcG9pbnRzO1xyXG4gICAgICAgICAgICB3aW5uZXIudXNlciA9IFt1c2VyXTtcclxuICAgICAgICAgICAgd2lubmVyLnRiID0gd2Vla0luZm9bJ3RiJ10ucGljaztcclxuICAgICAgICB9ZWxzZSBpZiAocG9pbnRzID09IHdpbm5lci5wb2ludHMpe1xyXG4gICAgICAgICAgICBpZiAoZGF0YVdpbm5lcnMuaGFzT3duUHJvcGVydHkoJ3RiJykpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyckRpZmYgPSBNYXRoLmFicyhkYXRhV2lubmVyc1sndGInXSAtIHdlZWtJbmZvWyd0YiddLnBpY2spO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lubmVyRGlmZiA9IE1hdGguYWJzKGRhdGFXaW5uZXJzWyd0YiddIC0gd2lubmVyLnRiKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyRGlmZiA8IHdpbm5lckRpZmYpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbm5lcltcInBvaW50c1wiXSA9IHBvaW50cztcclxuICAgICAgICAgICAgICAgICAgICB3aW5uZXIudXNlciA9IFt1c2VyXTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5uZXIudGIgPSB3ZWVrSW5mb1sndGInXS5waWNrO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYgKGN1cnJEaWZmID09IHdpbm5lckRpZmYpIHdpbm5lci51c2VyLnB1c2godXNlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNlbGx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBpZiAod2Vla0luZm8uaGFzT3duUHJvcGVydHkoJ3RiJykpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGFHYW1lc1sndGllYnJlYWtlciddLnRpbWUgPCB1bml4Tm93KSBjZWxsdC50ZXh0Q29udGVudCA9IHdlZWtJbmZvWyd0YiddLnBpY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvdy5hcHBlbmQoY2VsbHQpXHJcblxyXG4gICAgICAgIGxldCBjZWxscCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgY2VsbHAudGV4dENvbnRlbnQgPSBwb2ludHM7XHJcbiAgICAgICAgcm93LmFwcGVuZChjZWxscCk7XHJcblxyXG4gICAgICAgIHRhYmxlQm9keS5hcHBlbmQocm93KTtcclxuICAgICAgICBjbnQrK1xyXG4gICAgfVxyXG4gICAgLy9mb3IgKGxldCB3IG9mIHdpbm5lci51c2VyKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3KS5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3JXO1xyXG4gICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVpZCk7XHJcbiAgICBpZiAodXNlclJvdykgdXNlclJvdy5zdHlsZS5mb250V2VpZ2h0ID0gNjAwO1xyXG59XHJcblxyXG5jb25zdCB3ZWVrMU1hcCA9IHtcclxuICAgIDExOlwiZ2FtZTFcIixcclxuICAgIDEyOlwiZ2FtZTJcIixcclxuICAgIDE6XCJnYW1lM1wiLFxyXG4gICAgMjpcImdhbWU0XCIsXHJcbiAgICAzOlwiZ2FtZTVcIixcclxuICAgIDQ6XCJnYW1lNlwiLFxyXG4gICAgNTpcImdhbWU3XCIsXHJcbiAgICA2OlwiZ2FtZThcIixcclxuICAgIDc6XCJnYW1lOVwiLFxyXG4gICAgODpcImdhbWUxMFwiLFxyXG4gICAgOTpcImdhbWUxMVwiLFxyXG4gICAgMTA6XCJnYW1lMTJcIlxyXG59XHJcblxyXG5jb25zdCB1aWQgPSBsb2NhbFN0b3JhZ2UudWlkO1xyXG5jb25zb2xlLmxvZygndWlkIDo+PiAnLCB1aWQpO1xyXG5jb25zdCBjb2xvclcgPSAnI0MwRkYwMCdcclxuY29uc3QgZGIgPSBnZXREYXRhYmFzZSgpO1xyXG5sZXQgdXNlckRhdGEgPSBhd2FpdCBmZXRjaERhdGEoKTtcclxuY29uc3QgZGF0YVdpbm5lcnMgPSBhd2FpdCBqc29uKCcuLi9kYXRhLy93aW5uZXJzLmpzb24nKTtcclxuY29uc3QgZGF0YUdhbWVzID0gYXdhaXQganNvbignLi4vZGF0YS9nYW1lcy5qc29uJyk7XHJcbmNvbnNvbGUubG9nKCd1c2VyRGF0YSA6Pj4gJywgdXNlckRhdGEpO1xyXG5cclxuLy9mb3IgKGxldCBrZXkgaW4gdXNlckRhdGEpe1xyXG4vL2lmIChrZXkgIT09ICc3UVNzTnNPRmhEYU9sWUM1Q2RwMHN5cUdIeWUyJykgZGVsZXRlIHVzZXJEYXRhW2tleV1cclxuLy99XHJcblxyXG5jb25zb2xlLmxvZygndXNlckRhdGEgOj4+ICcsIHVzZXJEYXRhKTtcclxubGV0IHdlZWtFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZC13ZWVrJylcclxubGV0IHdlZWsgPSB3ZWVrRWwudGV4dENvbnRlbnQucmVwbGFjZSgnICcsJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbmlmIChkYXRhR2FtZXMuaGFzT3duUHJvcGVydHkod2VlaykpIGluaXRUYWJsZSh1c2VyRGF0YSxkYXRhV2lubmVyc1t3ZWVrXSxkYXRhR2FtZXNbd2Vla10sd2Vlayk7XHJcblxyXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKVxyXG5jb25zdCB3ZWVrcyA9IHNpZGViYXIucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJylcclxuXHJcbndlZWtzLmZvckVhY2godyA9PiB7IFxyXG4gICAgbGV0IHdlZWsgPSB3LmlubmVyVGV4dC5yZXBsYWNlKCcgJywnJykudG9Mb2NhbGVMb3dlckNhc2UoKVxyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGJvZHknKTtcclxuICAgIHcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgd2Vla0VsLnRleHRDb250ZW50ID0gdy5pbm5lclRleHRcclxuICAgICAgICB3aGlsZSAodGFibGUuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgICAgIHRhYmxlLnJlbW92ZUNoaWxkKHRhYmxlLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmIChkYXRhLmhhc093blByb3BlcnR5KHdlZWspKSBpbml0VGFibGUodXNlckRhdGEsZGF0YSx3ZWVrKTtcclxuICAgIH0pXHJcbn0pXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/master.js\n");

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