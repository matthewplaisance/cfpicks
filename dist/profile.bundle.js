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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   createUser: () => (/* binding */ createUser),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   initDb: () => (/* binding */ initDb),\n/* harmony export */   loginFb: () => (/* binding */ loginFb),\n/* harmony export */   logoutFb: () => (/* binding */ logoutFb),\n/* harmony export */   onAuthStateChanged: () => (/* reexport safe */ firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged),\n/* harmony export */   onAuthStateChangedFb: () => (/* binding */ onAuthStateChangedFb),\n/* harmony export */   updateName: () => (/* binding */ updateName),\n/* harmony export */   updatePasswordFb: () => (/* binding */ updatePasswordFb)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n\r\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n    apiKey: \"AIzaSyC8J8_Bo2YSeM1aTkE3--bQLCaeuGU3hQE\",\r\n    authDomain: \"cfpicks-66e14.firebaseapp.com\",\r\n    projectId: \"cfpicks-66e14\",\r\n    storageBucket: \"cfpicks-66e14.appspot.com\",\r\n    messagingSenderId: \"924459609957\",\r\n    appId: \"1:924459609957:web:c1125a2a8f5147de313b8c\"\r\n};\r\n  \r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)();\r\n\r\nconst onAuthStateChangedFb = () => {\r\n    auth.onAuthStateChanged((user) => {\r\n        if (user) {\r\n            console.log('user mon :>> ', user);\r\n            const currPage = window.location.pathname.split(\"/\").pop();\r\n            if (currPage == 'index.html'){\r\n                window.location.href = './profile.html';\r\n            }\r\n        } else {\r\n            const currPage = window.location.pathname.split(\"/\").pop();\r\n            console.log('currPage :>> ', currPage);\r\n            if (currPage != 'index.html'){\r\n                window.location.replace('index.html');\r\n                const currentState = window.history.state;\r\n                window.history.replaceState(currentState, '', window.location.href);\r\n                window.onpopstate = function () {\r\n                window.history.replaceState(currentState, '', window.location.href);\r\n                };\r\n                \r\n            }\r\n        }\r\n    });\r\n};\r\n\r\nconst updateName = (displayName) => {\r\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updateProfile)(auth.currentUser, {\r\n        displayName: displayName\r\n      }).then(() => {\r\n        console.log('userCredential.user.displayName :>> ', auth.currentUser.displayName);\r\n      }).catch((error) => {\r\n        console.log('error :>> ', error);\r\n      });\r\n};\r\n\r\nconst initDb = (uid,displayName) => {\r\n    console.log('indb :>> ');\r\n    (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(db, `users/${uid}/`), {\r\n        \"name\": displayName,\r\n        \"week1\": {}\r\n    });\r\n};\r\n\r\nconst loginFb = (email, password) => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth,email,password)\r\n};\r\n\r\nconst logoutFb = () => {\r\n    sessionStorage.removeItem('siteSelection')\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\r\n};\r\n\r\nconst updatePasswordFb = (newPassword) => {\r\n    const user = auth.currentUser;\r\n    if (user) {\r\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(user,newPassword);\r\n    }\r\n    return Promise.reject(new Error('No user is currently signed in.'));\r\n};\r\n\r\nconst createUser = (email,password) => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(auth,email,password);\r\n}\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ21IO0FBQ3ZHO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFhO0FBQ3pCLGFBQWEsc0RBQU87QUFDcEIsV0FBVyw4REFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWE7QUFDakI7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFHLENBQUMsc0RBQUcsY0FBYyxJQUFJO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5RUFBMEI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNEQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZEQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZFQUE4QjtBQUN6QztBQUNBO0FBQ21JO0FBQ25JIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL2F1dGguanM/OTI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkLCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbk91dCwgdXBkYXRlUGFzc3dvcmQsIHVwZGF0ZVByb2ZpbGUsIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQgeyBnZXREYXRhYmFzZSwgcmVmLCBzZXQgfSBmcm9tICdmaXJlYmFzZS9kYXRhYmFzZSdcclxuXHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lDOEo4X0JvMllTZU0xYVRrRTMtLWJRTENhZXVHVTNoUUVcIixcclxuICAgIGF1dGhEb21haW46IFwiY2ZwaWNrcy02NmUxNC5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJjZnBpY2tzLTY2ZTE0XCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcImNmcGlja3MtNjZlMTQuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjkyNDQ1OTYwOTk1N1wiLFxyXG4gICAgYXBwSWQ6IFwiMTo5MjQ0NTk2MDk5NTc6d2ViOmMxMTI1YTJhOGY1MTQ3ZGUzMTNiOGNcIlxyXG59O1xyXG4gIFxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuY29uc3QgZGIgPSBnZXREYXRhYmFzZSgpO1xyXG5cclxuY29uc3Qgb25BdXRoU3RhdGVDaGFuZ2VkRmIgPSAoKSA9PiB7XHJcbiAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyIG1vbiA6Pj4gJywgdXNlcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJQYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5wb3AoKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJQYWdlID09ICdpbmRleC5odG1sJyl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuL3Byb2ZpbGUuaHRtbCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyUGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikucG9wKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjdXJyUGFnZSA6Pj4gJywgY3VyclBhZ2UpO1xyXG4gICAgICAgICAgICBpZiAoY3VyclBhZ2UgIT0gJ2luZGV4Lmh0bWwnKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdpbmRleC5odG1sJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5zdGF0ZTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShjdXJyZW50U3RhdGUsICcnLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShjdXJyZW50U3RhdGUsICcnLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZU5hbWUgPSAoZGlzcGxheU5hbWUpID0+IHtcclxuICAgIHVwZGF0ZVByb2ZpbGUoYXV0aC5jdXJyZW50VXNlciwge1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZVxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygndXNlckNyZWRlbnRpYWwudXNlci5kaXNwbGF5TmFtZSA6Pj4gJywgYXV0aC5jdXJyZW50VXNlci5kaXNwbGF5TmFtZSk7XHJcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciA6Pj4gJywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGluaXREYiA9ICh1aWQsZGlzcGxheU5hbWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdpbmRiIDo+PiAnKTtcclxuICAgIHNldChyZWYoZGIsIGB1c2Vycy8ke3VpZH0vYCksIHtcclxuICAgICAgICBcIm5hbWVcIjogZGlzcGxheU5hbWUsXHJcbiAgICAgICAgXCJ3ZWVrMVwiOiB7fVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBsb2dpbkZiID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsZW1haWwscGFzc3dvcmQpXHJcbn07XHJcblxyXG5jb25zdCBsb2dvdXRGYiA9ICgpID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3NpdGVTZWxlY3Rpb24nKVxyXG4gICAgcmV0dXJuIHNpZ25PdXQoYXV0aCk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVQYXNzd29yZEZiID0gKG5ld1Bhc3N3b3JkKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZVBhc3N3b3JkKHVzZXIsbmV3UGFzc3dvcmQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignTm8gdXNlciBpcyBjdXJyZW50bHkgc2lnbmVkIGluLicpKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVVzZXIgPSAoZW1haWwscGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCxlbWFpbCxwYXNzd29yZCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGF1dGgsIGRiLCBvbkF1dGhTdGF0ZUNoYW5nZWRGYiwgbG9naW5GYiwgbG9nb3V0RmIsIHVwZGF0ZVBhc3N3b3JkRmIsIGNyZWF0ZVVzZXIsIHVwZGF0ZU5hbWUsIGluaXREYiwgb25BdXRoU3RhdGVDaGFuZ2VkIH07XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/auth.js\n");

/***/ }),

/***/ "./src/js/profile.js":
/*!***************************!*\
  !*** ./src/js/profile.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\n\r\n\r\n\r\nfunction submit(week, picks){\r\n    const msgEl = document.getElementById('err_msg')\r\n    const unixNow = Math.floor(new Date().getTime() / 1000);\r\n    for (let p in picks){\r\n        if (picks[p].points == 'null' || picks[p].points == null || picks[p].points == undefined){\r\n            msgEl.innerText = `Select confidence points for ${p}.`;\r\n            msgEl.style.color = 'red';\r\n            return;\r\n        } \r\n        if (picks[p].pick == 'null'|| picks[p].pick == null || picks[p].pick == undefined){\r\n            msgEl.innerText = `Select winner for ${p}. `;\r\n            msgEl.style.color = 'red';\r\n            return;\r\n        }\r\n    }\r\n    let deleted = [];\r\n    const times = document.querySelectorAll('.time');\r\n\r\n    times.forEach(time => {\r\n\r\n        const game = time.parentElement.id;\r\n        if (time.id < unixNow) {\r\n            delete picks[game]\r\n            deleted.push(picks[game])\r\n        }\r\n    })\r\n\r\n    try{\r\n        for (let game in picks) {\r\n            const info = picks[game];\r\n            \r\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}/${week}/${game}`), {\r\n                \"pick\": info[\"pick\"],\r\n                \"points\": String(info[\"points\"])\r\n            });\r\n        }\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}/name`),localStorage.displayName);\r\n        if (ddd != null & ddd != undefined & ddd != 'null' & ddd != 'undefined'){\r\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}/ddd`),ddd);\r\n        }\r\n\r\n        msgEl.innerText = 'Success!';\r\n        msgEl.style.color = 'green';\r\n        //if (deleted.length != 0){\r\n        //    const ps = deleted.join(\",\");\r\n        //    msgEl.innerText += ` But, picks for ${ps} are past kick off time.`\r\n        //}\r\n    }catch (err) {\r\n        msgEl.innerText = `FB Err: ${err}`;\r\n        msgEl.style.color = 'red';\r\n    }\r\n}\r\n\r\nfunction setup(data) {\r\n    for (let game in data) {\r\n        const gameEl = document.getElementById(game);\r\n        const teams = gameEl.querySelectorAll('.team');\r\n        const boxes = gameEl.parentNode.querySelectorAll('.box');\r\n        \r\n        teams.forEach(team => {\r\n            if (team.textContent == data[game]['pick']) team.style.color = chosenColor;\r\n        })\r\n        boxes.forEach(box => {\r\n            if (box.textContent == data[game]['points']) box.style.background = chosenColor;\r\n        })\r\n    }\r\n    if (data.hasOwnProperty('tb')) {\r\n        document.getElementById('tb').value = data['tb'].pick;\r\n    }else document.getElementById('tb').value = 0;\r\n}\r\n\r\nasync function fetchData() {\r\n    let picks;\r\n    await new Promise((resolve, reject) => {\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(refer, (snapshot) => {\r\n            const data = snapshot.val();\r\n            picks = data;\r\n            resolve();\r\n        });\r\n    });\r\n\r\n    return picks;\r\n}\r\n\r\nasync function colorWinners(week) {\r\n    let data = await (0,d3__WEBPACK_IMPORTED_MODULE_1__.json)(\"../data/winners.json\")\r\n    if (data.hasOwnProperty(week)) data = data[week]\r\n    else return;\r\n    const cards = document.querySelectorAll('.clearfix')\r\n    let points = 0;\r\n    cards.forEach(card => {\r\n        const game = card.id;\r\n        const winner = data[game].winner;\r\n        const score = data[game].score;\r\n        if (picks.hasOwnProperty(game)){\r\n            if (picks[game].pick == winner) {\r\n                card.parentElement.style.background = '#c9e782';\r\n                points += parseInt(picks[game].points)\r\n            } else card.parentElement.style.background = 'red';\r\n        }\r\n        \r\n    });\r\n    document.getElementById('selected-week').textContent += ` points: ${points}`\r\n\r\n}\r\n\r\nfunction createCard(data,game,wrapper,gn){\r\n    const tb = data.hasOwnProperty(\"away\") ? false : true;\r\n\r\n    const outerDiv = document.createElement('div');\r\n    outerDiv.className = 'col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-4';\r\n\r\n    const cardDiv = document.createElement('div');\r\n    cardDiv.className = 'card card-statistics';\r\n\r\n    const cardBodyDiv = document.createElement('div');\r\n    cardBodyDiv.className = 'card-body';\r\n\r\n    const clearfixDiv = document.createElement('div');\r\n    clearfixDiv.className = 'clearfix';\r\n    clearfixDiv.id = game;\r\n\r\n    const timeIcon = document.createElement('i');\r\n    timeIcon.className = 'time';\r\n    timeIcon.id = data.time;\r\n    timeIcon.setAttribute('aria-hidden', 'true');\r\n\r\n    const leftTeamDiv = document.createElement('div');\r\n    leftTeamDiv.className = 'float-left';\r\n\r\n    const leftTeamH4 = document.createElement('h4');\r\n    leftTeamH4.className = 'bold-text team';\r\n    leftTeamH4.id = `g${gn}t1`;\r\n    leftTeamH4.style.cursor = 'pointer';\r\n    leftTeamH4.textContent = data.away;\r\n\r\n    const rightTeamDiv = document.createElement('div');\r\n    rightTeamDiv.className = 'float-right';\r\n\r\n    const rightTeamH4 = document.createElement('h4');\r\n    rightTeamH4.className = 'bold-text team';\r\n    rightTeamH4.id = `g${gn}t2`;\r\n\r\n    if (tb) {\r\n        rightTeamH4.className = 'bold-text';\r\n        rightTeamH4.style.fontSize = 6;\r\n    }\r\n    rightTeamH4.style.cursor = 'pointer';\r\n    rightTeamH4.textContent = data.home;\r\n\r\n    const dateP = document.createElement('p');\r\n    dateP.className = 'text-muted';\r\n    dateP.innerHTML = `<i class=\"fa fa-calendar mr-1\" aria-hidden=\"true\"></i>${data.humanDate}`;\r\n\r\n    leftTeamDiv.appendChild(leftTeamH4);\r\n    rightTeamDiv.appendChild(rightTeamH4);\r\n    clearfixDiv.appendChild(timeIcon);\r\n    clearfixDiv.appendChild(leftTeamDiv);\r\n    clearfixDiv.appendChild(rightTeamDiv);\r\n    cardBodyDiv.appendChild(clearfixDiv);\r\n    cardBodyDiv.appendChild(dateP);\r\n\r\n    if (data.hasOwnProperty(\"away\")){\r\n        for (let i = 1; i <= 12; i++) {\r\n            const boxDiv = document.createElement('div');\r\n            boxDiv.className = 'box';\r\n            boxDiv.textContent = i;\r\n            boxDiv.id = i;\r\n            cardBodyDiv.appendChild(boxDiv);\r\n        }\r\n    }else{\r\n        const tbInput = document.createElement('input');\r\n        tbInput.value = 0;\r\n        tbInput.id = 'tb'\r\n        tbInput.className = \"form__input\";\r\n        cardBodyDiv.append(tbInput);\r\n    }\r\n    \r\n    \r\n    cardDiv.appendChild(cardBodyDiv);\r\n    outerDiv.appendChild(cardDiv);\r\n    wrapper.appendChild(outerDiv);\r\n}\r\n\r\nfunction initCards(data,week) {\r\n    const wrapper = document.getElementById('card-wrapper');\r\n    while (wrapper.firstChild) wrapper.removeChild(wrapper.firstChild);\r\n    if (data.hasOwnProperty(week)) {\r\n        let gn = 1;\r\n        for (let game in data[week]){\r\n            createCard(data[week][game],game,wrapper,gn);\r\n            gn++\r\n        }\r\n    }\r\n\r\n}\r\n\r\n(0,_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChangedFb)();\r\n\r\n$(document).ready(function () {\r\n    $(\"#header\").load(\"../src/pages/header.html\")\r\n});\r\n\r\nconst ddd = sessionStorage.ddd;\r\nsessionStorage.ddd = \"null\";\r\nconst uid = localStorage.uid;\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();\r\nlet weekEl = document.getElementById('selected-week');\r\nconst week = weekEl.textContent.replace(' ','').toLocaleLowerCase()\r\nconst refer = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}/${week}`)  \r\nconst chosenColor = 'green'\r\n\r\nlet picks = await fetchData();\r\nif (picks == null) picks = {};\r\nconst gameData = await (0,d3__WEBPACK_IMPORTED_MODULE_1__.json)('../data/games.json')\r\nlet pointsPicked = [];\r\n\r\nfor (let game in picks) pointsPicked.push(String(picks[game].points))\r\n\r\ninitCards(gameData,week);\r\nsetup(picks);\r\n//colorWinners(week);\r\nconst teams = document.querySelectorAll('.team');\r\nconst submitBtn = document.getElementById('submit');\r\nconst points = document.querySelectorAll('.box');\r\n\r\nconst sidebar = document.getElementById('sidebar')\r\nconst weeks = sidebar.querySelectorAll('.nav-link')\r\n\r\nteams.forEach(el => {\r\n    el.addEventListener('click', function() {\r\n        const parent = document.getElementById(this.id).parentElement.parentElement;\r\n        const time = parent.querySelector('.time').id\r\n        const unixNow = Math.floor(new Date().getTime() / 1000);\r\n\r\n        if (unixNow > time) return;\r\n        this.style.color = chosenColor;\r\n\r\n        const children = parent.querySelectorAll(\".team\");\r\n        let selectedpoints = null;\r\n        if (picks.hasOwnProperty(parent.id)){\r\n            selectedpoints = picks[parent.id].points\r\n        }\r\n        picks[parent.id] = {\r\n            pick:this.textContent,\r\n            points: selectedpoints\r\n        }\r\n\r\n        children.forEach(child => {\r\n            if (child.textContent != this.textContent) child.style.color = 'black';\r\n        })\r\n    });\r\n});\r\n\r\npoints.forEach(el => {\r\n    el.addEventListener('click', function() {\r\n        if (pointsPicked.includes(this.textContent)) {\r\n            let msgEl = document.getElementById('err_msg')\r\n            msgEl.innerText = `You cannot repeat confidence points`;\r\n            msgEl.style.color = 'red';\r\n            return;\r\n        }\r\n        document.getElementById('err_msg').innerText = '';\r\n        this.style.background = chosenColor;\r\n        const parent = this.parentNode;\r\n        const children = parent.querySelectorAll(\".box\");\r\n        const game = parent.querySelector('.clearfix');\r\n        const teams = game.querySelectorAll('.team');\r\n\r\n        let selected;\r\n        teams.forEach(team => {\r\n            if (team.style.color == chosenColor) selected = team.textContent\r\n        })\r\n\r\n        if (picks.hasOwnProperty(game.id)){\r\n            if (picks[game.id].hasOwnProperty('points'))pointsPicked = pointsPicked.filter(item => item !== picks[game.id].points);\r\n        }\r\n\r\n        picks[game.id] = {\r\n            pick:selected,\r\n            points: this.textContent\r\n        }\r\n    \r\n        children.forEach(child => {\r\n            if (child.textContent != this.textContent) child.style.background = 'whitesmoke'; \r\n        });\r\n        pointsPicked.push(String(picks[game.id].points))\r\n    });\r\n});\r\n\r\nsubmitBtn.addEventListener('click',function () {\r\n    const tbel = document.getElementById('tb')\r\n    picks['tb'] ={\r\n        pick:String(tbel.value),\r\n        points:0\r\n    }\r\n    submit(week,picks);\r\n});\r\n\r\nweeks.forEach(w => { \r\n    let week = w.innerText.replace(' ','').toLocaleLowerCase()\r\n    w.addEventListener('click', () => {\r\n        weekEl.textContent = w.innerText;\r\n        initCards(gameData,week);\r\n        setup(picks);\r\n        colorWinners(week);\r\n    })\r\n})\r\n\r\ndocument.getElementById(\"btnLogout\").addEventListener('click', _auth__WEBPACK_IMPORTED_MODULE_2__.logoutFb);\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBLCtEQUErRCwyQ0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2QtMS8uL3NyYy9qcy9wcm9maWxlLmpzP2IwZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RGF0YWJhc2UsIHJlZiwgc2V0LCBvblZhbHVlIH0gZnJvbSAnZmlyZWJhc2UvZGF0YWJhc2UnXHJcbmltcG9ydCB7b25BdXRoU3RhdGVDaGFuZ2VkRmIsIGxvZ291dEZifSBmcm9tICcuL2F1dGgnXHJcbmltcG9ydCB7IGpzb24gfSBmcm9tICdkMyc7XHJcblxyXG5cclxuZnVuY3Rpb24gc3VibWl0KHdlZWssIHBpY2tzKXtcclxuICAgIGNvbnN0IG1zZ0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycl9tc2cnKVxyXG4gICAgY29uc3QgdW5peE5vdyA9IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgIGZvciAobGV0IHAgaW4gcGlja3Mpe1xyXG4gICAgICAgIGlmIChwaWNrc1twXS5wb2ludHMgPT0gJ251bGwnIHx8IHBpY2tzW3BdLnBvaW50cyA9PSBudWxsIHx8IHBpY2tzW3BdLnBvaW50cyA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBtc2dFbC5pbm5lclRleHQgPSBgU2VsZWN0IGNvbmZpZGVuY2UgcG9pbnRzIGZvciAke3B9LmA7XHJcbiAgICAgICAgICAgIG1zZ0VsLnN0eWxlLmNvbG9yID0gJ3JlZCc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmIChwaWNrc1twXS5waWNrID09ICdudWxsJ3x8IHBpY2tzW3BdLnBpY2sgPT0gbnVsbCB8fCBwaWNrc1twXS5waWNrID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIG1zZ0VsLmlubmVyVGV4dCA9IGBTZWxlY3Qgd2lubmVyIGZvciAke3B9LiBgO1xyXG4gICAgICAgICAgICBtc2dFbC5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGRlbGV0ZWQgPSBbXTtcclxuICAgIGNvbnN0IHRpbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbWUnKTtcclxuXHJcbiAgICB0aW1lcy5mb3JFYWNoKHRpbWUgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBnYW1lID0gdGltZS5wYXJlbnRFbGVtZW50LmlkO1xyXG4gICAgICAgIGlmICh0aW1lLmlkIDwgdW5peE5vdykge1xyXG4gICAgICAgICAgICBkZWxldGUgcGlja3NbZ2FtZV1cclxuICAgICAgICAgICAgZGVsZXRlZC5wdXNoKHBpY2tzW2dhbWVdKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGZvciAobGV0IGdhbWUgaW4gcGlja3MpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5mbyA9IHBpY2tzW2dhbWVdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0KHJlZihkYiwgYHVzZXJzLyR7dWlkfS8ke3dlZWt9LyR7Z2FtZX1gKSwge1xyXG4gICAgICAgICAgICAgICAgXCJwaWNrXCI6IGluZm9bXCJwaWNrXCJdLFxyXG4gICAgICAgICAgICAgICAgXCJwb2ludHNcIjogU3RyaW5nKGluZm9bXCJwb2ludHNcIl0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXQocmVmKGRiLCBgdXNlcnMvJHt1aWR9L25hbWVgKSxsb2NhbFN0b3JhZ2UuZGlzcGxheU5hbWUpO1xyXG4gICAgICAgIGlmIChkZGQgIT0gbnVsbCAmIGRkZCAhPSB1bmRlZmluZWQgJiBkZGQgIT0gJ251bGwnICYgZGRkICE9ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgc2V0KHJlZihkYiwgYHVzZXJzLyR7dWlkfS9kZGRgKSxkZGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbXNnRWwuaW5uZXJUZXh0ID0gJ1N1Y2Nlc3MhJztcclxuICAgICAgICBtc2dFbC5zdHlsZS5jb2xvciA9ICdncmVlbic7XHJcbiAgICAgICAgLy9pZiAoZGVsZXRlZC5sZW5ndGggIT0gMCl7XHJcbiAgICAgICAgLy8gICAgY29uc3QgcHMgPSBkZWxldGVkLmpvaW4oXCIsXCIpO1xyXG4gICAgICAgIC8vICAgIG1zZ0VsLmlubmVyVGV4dCArPSBgIEJ1dCwgcGlja3MgZm9yICR7cHN9IGFyZSBwYXN0IGtpY2sgb2ZmIHRpbWUuYFxyXG4gICAgICAgIC8vfVxyXG4gICAgfWNhdGNoIChlcnIpIHtcclxuICAgICAgICBtc2dFbC5pbm5lclRleHQgPSBgRkIgRXJyOiAke2Vycn1gO1xyXG4gICAgICAgIG1zZ0VsLnN0eWxlLmNvbG9yID0gJ3JlZCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwKGRhdGEpIHtcclxuICAgIGZvciAobGV0IGdhbWUgaW4gZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGdhbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdhbWUpO1xyXG4gICAgICAgIGNvbnN0IHRlYW1zID0gZ2FtZUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZWFtJyk7XHJcbiAgICAgICAgY29uc3QgYm94ZXMgPSBnYW1lRWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuYm94Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGVhbXMuZm9yRWFjaCh0ZWFtID0+IHtcclxuICAgICAgICAgICAgaWYgKHRlYW0udGV4dENvbnRlbnQgPT0gZGF0YVtnYW1lXVsncGljayddKSB0ZWFtLnN0eWxlLmNvbG9yID0gY2hvc2VuQ29sb3I7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBib3hlcy5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChib3gudGV4dENvbnRlbnQgPT0gZGF0YVtnYW1lXVsncG9pbnRzJ10pIGJveC5zdHlsZS5iYWNrZ3JvdW5kID0gY2hvc2VuQ29sb3I7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCd0YicpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RiJykudmFsdWUgPSBkYXRhWyd0YiddLnBpY2s7XHJcbiAgICB9ZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGInKS52YWx1ZSA9IDA7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgIGxldCBwaWNrcztcclxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBvblZhbHVlKHJlZmVyLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAgICAgICBwaWNrcyA9IGRhdGE7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwaWNrcztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY29sb3JXaW5uZXJzKHdlZWspIHtcclxuICAgIGxldCBkYXRhID0gYXdhaXQganNvbihcIi4uL2RhdGEvd2lubmVycy5qc29uXCIpXHJcbiAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSh3ZWVrKSkgZGF0YSA9IGRhdGFbd2Vla11cclxuICAgIGVsc2UgcmV0dXJuO1xyXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xlYXJmaXgnKVxyXG4gICAgbGV0IHBvaW50cyA9IDA7XHJcbiAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdhbWUgPSBjYXJkLmlkO1xyXG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGRhdGFbZ2FtZV0ud2lubmVyO1xyXG4gICAgICAgIGNvbnN0IHNjb3JlID0gZGF0YVtnYW1lXS5zY29yZTtcclxuICAgICAgICBpZiAocGlja3MuaGFzT3duUHJvcGVydHkoZ2FtZSkpe1xyXG4gICAgICAgICAgICBpZiAocGlja3NbZ2FtZV0ucGljayA9PSB3aW5uZXIpIHtcclxuICAgICAgICAgICAgICAgIGNhcmQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNjOWU3ODInO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRzICs9IHBhcnNlSW50KHBpY2tzW2dhbWVdLnBvaW50cylcclxuICAgICAgICAgICAgfSBlbHNlIGNhcmQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWQtd2VlaycpLnRleHRDb250ZW50ICs9IGAgcG9pbnRzOiAke3BvaW50c31gXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGRhdGEsZ2FtZSx3cmFwcGVyLGduKXtcclxuICAgIGNvbnN0IHRiID0gZGF0YS5oYXNPd25Qcm9wZXJ0eShcImF3YXlcIikgPyBmYWxzZSA6IHRydWU7XHJcblxyXG4gICAgY29uc3Qgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG91dGVyRGl2LmNsYXNzTmFtZSA9ICdjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tNiBtYi00JztcclxuXHJcbiAgICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkRGl2LmNsYXNzTmFtZSA9ICdjYXJkIGNhcmQtc3RhdGlzdGljcyc7XHJcblxyXG4gICAgY29uc3QgY2FyZEJvZHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRCb2R5RGl2LmNsYXNzTmFtZSA9ICdjYXJkLWJvZHknO1xyXG5cclxuICAgIGNvbnN0IGNsZWFyZml4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjbGVhcmZpeERpdi5jbGFzc05hbWUgPSAnY2xlYXJmaXgnO1xyXG4gICAgY2xlYXJmaXhEaXYuaWQgPSBnYW1lO1xyXG5cclxuICAgIGNvbnN0IHRpbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgdGltZUljb24uY2xhc3NOYW1lID0gJ3RpbWUnO1xyXG4gICAgdGltZUljb24uaWQgPSBkYXRhLnRpbWU7XHJcbiAgICB0aW1lSWNvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuXHJcbiAgICBjb25zdCBsZWZ0VGVhbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGVmdFRlYW1EaXYuY2xhc3NOYW1lID0gJ2Zsb2F0LWxlZnQnO1xyXG5cclxuICAgIGNvbnN0IGxlZnRUZWFtSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgbGVmdFRlYW1INC5jbGFzc05hbWUgPSAnYm9sZC10ZXh0IHRlYW0nO1xyXG4gICAgbGVmdFRlYW1INC5pZCA9IGBnJHtnbn10MWA7XHJcbiAgICBsZWZ0VGVhbUg0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgIGxlZnRUZWFtSDQudGV4dENvbnRlbnQgPSBkYXRhLmF3YXk7XHJcblxyXG4gICAgY29uc3QgcmlnaHRUZWFtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByaWdodFRlYW1EaXYuY2xhc3NOYW1lID0gJ2Zsb2F0LXJpZ2h0JztcclxuXHJcbiAgICBjb25zdCByaWdodFRlYW1INCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICByaWdodFRlYW1INC5jbGFzc05hbWUgPSAnYm9sZC10ZXh0IHRlYW0nO1xyXG4gICAgcmlnaHRUZWFtSDQuaWQgPSBgZyR7Z259dDJgO1xyXG5cclxuICAgIGlmICh0Yikge1xyXG4gICAgICAgIHJpZ2h0VGVhbUg0LmNsYXNzTmFtZSA9ICdib2xkLXRleHQnO1xyXG4gICAgICAgIHJpZ2h0VGVhbUg0LnN0eWxlLmZvbnRTaXplID0gNjtcclxuICAgIH1cclxuICAgIHJpZ2h0VGVhbUg0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgIHJpZ2h0VGVhbUg0LnRleHRDb250ZW50ID0gZGF0YS5ob21lO1xyXG5cclxuICAgIGNvbnN0IGRhdGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZGF0ZVAuY2xhc3NOYW1lID0gJ3RleHQtbXV0ZWQnO1xyXG4gICAgZGF0ZVAuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXIgbXItMVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4ke2RhdGEuaHVtYW5EYXRlfWA7XHJcblxyXG4gICAgbGVmdFRlYW1EaXYuYXBwZW5kQ2hpbGQobGVmdFRlYW1INCk7XHJcbiAgICByaWdodFRlYW1EaXYuYXBwZW5kQ2hpbGQocmlnaHRUZWFtSDQpO1xyXG4gICAgY2xlYXJmaXhEaXYuYXBwZW5kQ2hpbGQodGltZUljb24pO1xyXG4gICAgY2xlYXJmaXhEaXYuYXBwZW5kQ2hpbGQobGVmdFRlYW1EaXYpO1xyXG4gICAgY2xlYXJmaXhEaXYuYXBwZW5kQ2hpbGQocmlnaHRUZWFtRGl2KTtcclxuICAgIGNhcmRCb2R5RGl2LmFwcGVuZENoaWxkKGNsZWFyZml4RGl2KTtcclxuICAgIGNhcmRCb2R5RGl2LmFwcGVuZENoaWxkKGRhdGVQKTtcclxuXHJcbiAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImF3YXlcIikpe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGJveERpdi5jbGFzc05hbWUgPSAnYm94JztcclxuICAgICAgICAgICAgYm94RGl2LnRleHRDb250ZW50ID0gaTtcclxuICAgICAgICAgICAgYm94RGl2LmlkID0gaTtcclxuICAgICAgICAgICAgY2FyZEJvZHlEaXYuYXBwZW5kQ2hpbGQoYm94RGl2KTtcclxuICAgICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCB0YklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0YklucHV0LnZhbHVlID0gMDtcclxuICAgICAgICB0YklucHV0LmlkID0gJ3RiJ1xyXG4gICAgICAgIHRiSW5wdXQuY2xhc3NOYW1lID0gXCJmb3JtX19pbnB1dFwiO1xyXG4gICAgICAgIGNhcmRCb2R5RGl2LmFwcGVuZCh0YklucHV0KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRCb2R5RGl2KTtcclxuICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGNhcmREaXYpO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChvdXRlckRpdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRDYXJkcyhkYXRhLHdlZWspIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC13cmFwcGVyJyk7XHJcbiAgICB3aGlsZSAod3JhcHBlci5maXJzdENoaWxkKSB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCk7XHJcbiAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSh3ZWVrKSkge1xyXG4gICAgICAgIGxldCBnbiA9IDE7XHJcbiAgICAgICAgZm9yIChsZXQgZ2FtZSBpbiBkYXRhW3dlZWtdKXtcclxuICAgICAgICAgICAgY3JlYXRlQ2FyZChkYXRhW3dlZWtdW2dhbWVdLGdhbWUsd3JhcHBlcixnbik7XHJcbiAgICAgICAgICAgIGduKytcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5vbkF1dGhTdGF0ZUNoYW5nZWRGYigpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIiNoZWFkZXJcIikubG9hZChcIi4uL3NyYy9wYWdlcy9oZWFkZXIuaHRtbFwiKVxyXG59KTtcclxuXHJcbmNvbnN0IGRkZCA9IHNlc3Npb25TdG9yYWdlLmRkZDtcclxuc2Vzc2lvblN0b3JhZ2UuZGRkID0gXCJudWxsXCI7XHJcbmNvbnN0IHVpZCA9IGxvY2FsU3RvcmFnZS51aWQ7XHJcbmNvbnN0IGRiID0gZ2V0RGF0YWJhc2UoKTtcclxubGV0IHdlZWtFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZC13ZWVrJyk7XHJcbmNvbnN0IHdlZWsgPSB3ZWVrRWwudGV4dENvbnRlbnQucmVwbGFjZSgnICcsJycpLnRvTG9jYWxlTG93ZXJDYXNlKClcclxuY29uc3QgcmVmZXIgPSByZWYoZGIsIGB1c2Vycy8ke3VpZH0vJHt3ZWVrfWApICBcclxuY29uc3QgY2hvc2VuQ29sb3IgPSAnZ3JlZW4nXHJcblxyXG5sZXQgcGlja3MgPSBhd2FpdCBmZXRjaERhdGEoKTtcclxuaWYgKHBpY2tzID09IG51bGwpIHBpY2tzID0ge307XHJcbmNvbnN0IGdhbWVEYXRhID0gYXdhaXQganNvbignLi4vZGF0YS9nYW1lcy5qc29uJylcclxubGV0IHBvaW50c1BpY2tlZCA9IFtdO1xyXG5cclxuZm9yIChsZXQgZ2FtZSBpbiBwaWNrcykgcG9pbnRzUGlja2VkLnB1c2goU3RyaW5nKHBpY2tzW2dhbWVdLnBvaW50cykpXHJcblxyXG5pbml0Q2FyZHMoZ2FtZURhdGEsd2Vlayk7XHJcbnNldHVwKHBpY2tzKTtcclxuLy9jb2xvcldpbm5lcnMod2Vlayk7XHJcbmNvbnN0IHRlYW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlYW0nKTtcclxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xyXG5jb25zdCBwb2ludHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm94Jyk7XHJcblxyXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKVxyXG5jb25zdCB3ZWVrcyA9IHNpZGViYXIucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJylcclxuXHJcbnRlYW1zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgdGltZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpLmlkXHJcbiAgICAgICAgY29uc3QgdW5peE5vdyA9IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgaWYgKHVuaXhOb3cgPiB0aW1lKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdHlsZS5jb2xvciA9IGNob3NlbkNvbG9yO1xyXG5cclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlYW1cIik7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkcG9pbnRzID0gbnVsbDtcclxuICAgICAgICBpZiAocGlja3MuaGFzT3duUHJvcGVydHkocGFyZW50LmlkKSl7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkcG9pbnRzID0gcGlja3NbcGFyZW50LmlkXS5wb2ludHNcclxuICAgICAgICB9XHJcbiAgICAgICAgcGlja3NbcGFyZW50LmlkXSA9IHtcclxuICAgICAgICAgICAgcGljazp0aGlzLnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICBwb2ludHM6IHNlbGVjdGVkcG9pbnRzXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLnRleHRDb250ZW50ICE9IHRoaXMudGV4dENvbnRlbnQpIGNoaWxkLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxucG9pbnRzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAocG9pbnRzUGlja2VkLmluY2x1ZGVzKHRoaXMudGV4dENvbnRlbnQpKSB7XHJcbiAgICAgICAgICAgIGxldCBtc2dFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJfbXNnJylcclxuICAgICAgICAgICAgbXNnRWwuaW5uZXJUZXh0ID0gYFlvdSBjYW5ub3QgcmVwZWF0IGNvbmZpZGVuY2UgcG9pbnRzYDtcclxuICAgICAgICAgICAgbXNnRWwuc3R5bGUuY29sb3IgPSAncmVkJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyX21zZycpLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9IGNob3NlbkNvbG9yO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJveFwiKTtcclxuICAgICAgICBjb25zdCBnYW1lID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhcmZpeCcpO1xyXG4gICAgICAgIGNvbnN0IHRlYW1zID0gZ2FtZS5xdWVyeVNlbGVjdG9yQWxsKCcudGVhbScpO1xyXG5cclxuICAgICAgICBsZXQgc2VsZWN0ZWQ7XHJcbiAgICAgICAgdGVhbXMuZm9yRWFjaCh0ZWFtID0+IHtcclxuICAgICAgICAgICAgaWYgKHRlYW0uc3R5bGUuY29sb3IgPT0gY2hvc2VuQ29sb3IpIHNlbGVjdGVkID0gdGVhbS50ZXh0Q29udGVudFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChwaWNrcy5oYXNPd25Qcm9wZXJ0eShnYW1lLmlkKSl7XHJcbiAgICAgICAgICAgIGlmIChwaWNrc1tnYW1lLmlkXS5oYXNPd25Qcm9wZXJ0eSgncG9pbnRzJykpcG9pbnRzUGlja2VkID0gcG9pbnRzUGlja2VkLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHBpY2tzW2dhbWUuaWRdLnBvaW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwaWNrc1tnYW1lLmlkXSA9IHtcclxuICAgICAgICAgICAgcGljazpzZWxlY3RlZCxcclxuICAgICAgICAgICAgcG9pbnRzOiB0aGlzLnRleHRDb250ZW50XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZC50ZXh0Q29udGVudCAhPSB0aGlzLnRleHRDb250ZW50KSBjaGlsZC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3doaXRlc21va2UnOyBcclxuICAgICAgICB9KTtcclxuICAgICAgICBwb2ludHNQaWNrZWQucHVzaChTdHJpbmcocGlja3NbZ2FtZS5pZF0ucG9pbnRzKSlcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdGJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YicpXHJcbiAgICBwaWNrc1sndGInXSA9e1xyXG4gICAgICAgIHBpY2s6U3RyaW5nKHRiZWwudmFsdWUpLFxyXG4gICAgICAgIHBvaW50czowXHJcbiAgICB9XHJcbiAgICBzdWJtaXQod2VlayxwaWNrcyk7XHJcbn0pO1xyXG5cclxud2Vla3MuZm9yRWFjaCh3ID0+IHsgXHJcbiAgICBsZXQgd2VlayA9IHcuaW5uZXJUZXh0LnJlcGxhY2UoJyAnLCcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpXHJcbiAgICB3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHdlZWtFbC50ZXh0Q29udGVudCA9IHcuaW5uZXJUZXh0O1xyXG4gICAgICAgIGluaXRDYXJkcyhnYW1lRGF0YSx3ZWVrKTtcclxuICAgICAgICBzZXR1cChwaWNrcyk7XHJcbiAgICAgICAgY29sb3JXaW5uZXJzKHdlZWspO1xyXG4gICAgfSlcclxufSlcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuTG9nb3V0XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9nb3V0RmIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/profile.js\n");

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