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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\n\r\n\r\n\r\nfunction submit(week, picks){\r\n    const msgEl = document.getElementById('err_msg')\r\n    const unixNow = Math.floor(new Date().getTime() / 1000);\r\n    console.log('picks :>> ', picks);\r\n    for (let p in picks){\r\n        if (picks[p].points == 'null' || picks[p].points == null || picks[p].points == undefined){\r\n            console.log(\"null?\");\r\n            msgEl.innerText = `Select confidence points for ${p}.`;\r\n            msgEl.style.color = 'red';\r\n            return;\r\n        } \r\n        if (picks[p].pick == 'null'|| picks[p].pick == null || picks[p].pick == undefined){\r\n            msgEl.innerText = `Select winner for ${p}. `;\r\n            msgEl.style.color = 'red';\r\n            return;\r\n        }\r\n    }\r\n    let deleted = [];\r\n    const times = document.querySelectorAll('.time');\r\n    console.log('times :>> ', times);\r\n    times.forEach(time => {\r\n\r\n        const game = time.parentElement.id;\r\n        if (time.id < unixNow) {\r\n            delete picks[game]\r\n            deleted.push(picks[game])\r\n        }\r\n    })\r\n    console.log('deleted :>> ', deleted);\r\n    console.log('picks :>> ', picks);\r\n    try{\r\n        for (let game in picks) {\r\n            const info = picks[game];\r\n            \r\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}/${week}/${game}`), {\r\n                \"pick\": info[\"pick\"],\r\n                \"points\": String(info[\"points\"])\r\n            });\r\n        }\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}/name`),localStorage.displayName);\r\n        if (ddd != null & ddd != undefined & ddd != 'null' & ddd != 'undefined'){\r\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}/ddd`),ddd);\r\n        }\r\n\r\n        msgEl.innerText = 'Success!';\r\n        msgEl.style.color = 'green';\r\n        //if (deleted.length != 0){\r\n        //    const ps = deleted.join(\",\");\r\n        //    msgEl.innerText += ` But, picks for ${ps} are past kick off time.`\r\n        //}\r\n    }catch (err) {\r\n        msgEl.innerText = `FB Err: ${err}`;\r\n        msgEl.style.color = 'red';\r\n    }\r\n}\r\n\r\nfunction setup(data) {\r\n    for (let game in data) {\r\n        const gameEl = document.getElementById(game);\r\n        const teams = gameEl.querySelectorAll('.team');\r\n        const boxes = gameEl.parentNode.querySelectorAll('.box');\r\n        \r\n        teams.forEach(team => {\r\n            if (team.textContent == data[game]['pick']) team.style.color = chosenColor;\r\n        })\r\n        boxes.forEach(box => {\r\n            if (box.textContent == data[game]['points']) box.style.background = chosenColor;\r\n        })\r\n    }\r\n    if (data.hasOwnProperty('tb')) {\r\n        document.getElementById('tb').value = data['tb'].pick;\r\n    }else document.getElementById('tb').value = 0;\r\n}\r\n\r\nasync function fetchData() {\r\n    let picks;\r\n    await new Promise((resolve, reject) => {\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(refer, (snapshot) => {\r\n            const data = snapshot.val();\r\n            picks = data;\r\n            resolve();\r\n        });\r\n    });\r\n\r\n    return picks;\r\n}\r\n\r\nasync function colorWinners(week) {\r\n    console.log('picks :>> ', picks);\r\n    let data = await (0,d3__WEBPACK_IMPORTED_MODULE_1__.json)(\"../data/winners.json\")\r\n    if (data.hasOwnProperty(week)) data = data[week]\r\n    else return;\r\n    const cards = document.querySelectorAll('.clearfix')\r\n    let points = 0;\r\n    cards.forEach(card => {\r\n        const game = card.id;\r\n        const winner = data[game].winner;\r\n        const score = data[game].score;\r\n        if (picks.hasOwnProperty(game)){\r\n            if (picks[game].pick == winner) {\r\n                card.parentElement.style.background = '#c9e782';\r\n                points += parseInt(picks[game].points)\r\n            } else card.parentElement.style.background = 'red';\r\n        }\r\n        \r\n    });\r\n    document.getElementById('selected-week').textContent += ` points: ${points}`\r\n\r\n}\r\n\r\nfunction createCard(data,game,wrapper,gn){\r\n    const tb = data.hasOwnProperty(\"away\") ? false : true;\r\n    if (tb){\r\n        console.log('data :>> ', data);\r\n    }\r\n    const outerDiv = document.createElement('div');\r\n    outerDiv.className = 'col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-4';\r\n\r\n    const cardDiv = document.createElement('div');\r\n    cardDiv.className = 'card card-statistics';\r\n\r\n    const cardBodyDiv = document.createElement('div');\r\n    cardBodyDiv.className = 'card-body';\r\n\r\n    const clearfixDiv = document.createElement('div');\r\n    clearfixDiv.className = 'clearfix';\r\n    clearfixDiv.id = game;\r\n\r\n    const timeIcon = document.createElement('i');\r\n    timeIcon.className = 'time';\r\n    timeIcon.id = data.time;\r\n    timeIcon.setAttribute('aria-hidden', 'true');\r\n\r\n    const leftTeamDiv = document.createElement('div');\r\n    leftTeamDiv.className = 'float-left';\r\n\r\n    const leftTeamH4 = document.createElement('h4');\r\n    leftTeamH4.className = 'bold-text team';\r\n    leftTeamH4.id = `g${gn}t1`;\r\n    leftTeamH4.style.cursor = 'pointer';\r\n    leftTeamH4.textContent = data.away;\r\n\r\n    const rightTeamDiv = document.createElement('div');\r\n    rightTeamDiv.className = 'float-right';\r\n\r\n    const rightTeamH4 = document.createElement('h4');\r\n    rightTeamH4.className = 'bold-text team';\r\n    rightTeamH4.id = `g${gn}t2`;\r\n\r\n    if (tb) {\r\n        rightTeamH4.className = 'bold-text';\r\n        rightTeamH4.style.fontSize = 6;\r\n    }\r\n    rightTeamH4.style.cursor = 'pointer';\r\n    rightTeamH4.textContent = data.home;\r\n\r\n    const dateP = document.createElement('p');\r\n    dateP.className = 'text-muted';\r\n    dateP.innerHTML = `<i class=\"fa fa-calendar mr-1\" aria-hidden=\"true\"></i>${data.humanDate}`;\r\n\r\n    leftTeamDiv.appendChild(leftTeamH4);\r\n    rightTeamDiv.appendChild(rightTeamH4);\r\n    clearfixDiv.appendChild(timeIcon);\r\n    clearfixDiv.appendChild(leftTeamDiv);\r\n    clearfixDiv.appendChild(rightTeamDiv);\r\n    cardBodyDiv.appendChild(clearfixDiv);\r\n    cardBodyDiv.appendChild(dateP);\r\n\r\n    if (data.hasOwnProperty(\"away\")){\r\n        for (let i = 1; i <= 12; i++) {\r\n            const boxDiv = document.createElement('div');\r\n            boxDiv.className = 'box';\r\n            boxDiv.textContent = i;\r\n            boxDiv.id = i;\r\n            cardBodyDiv.appendChild(boxDiv);\r\n        }\r\n    }else{\r\n        const tbInput = document.createElement('input');\r\n        tbInput.value = 0;\r\n        tbInput.id = 'tb'\r\n        tbInput.className = \"form__input\";\r\n        cardBodyDiv.append(tbInput);\r\n    }\r\n    \r\n    \r\n    cardDiv.appendChild(cardBodyDiv);\r\n    outerDiv.appendChild(cardDiv);\r\n    wrapper.appendChild(outerDiv);\r\n}\r\n\r\nfunction initCards(data,week) {\r\n    const wrapper = document.getElementById('card-wrapper');\r\n    while (wrapper.firstChild) wrapper.removeChild(wrapper.firstChild);\r\n    if (data.hasOwnProperty(week)) {\r\n        let gn = 1;\r\n        for (let game in data[week]){\r\n            createCard(data[week][game],game,wrapper,gn);\r\n            gn++\r\n        }\r\n    }\r\n\r\n}\r\n\r\n(0,_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChangedFb)();\r\n\r\n$(document).ready(function () {\r\n    $(\"#header\").load(\"../src/pages/header.html\")\r\n});\r\n\r\nconst ddd = sessionStorage.ddd;\r\nsessionStorage.ddd = \"null\";\r\nconst uid = localStorage.uid;\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();\r\nlet weekEl = document.getElementById('selected-week');\r\nconst week = weekEl.textContent.replace(' ','').toLocaleLowerCase()\r\nconst refer = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}/${week}`)  \r\nconst chosenColor = 'green'\r\n\r\nlet picks = await fetchData();\r\nif (picks == null) picks = {};\r\nconst gameData = await (0,d3__WEBPACK_IMPORTED_MODULE_1__.json)('../data/games.json')\r\nlet pointsPicked = [];\r\n\r\nfor (let game in picks) pointsPicked.push(String(picks[game].points))\r\n\r\ninitCards(gameData,week);\r\nsetup(picks);\r\n//colorWinners(week);\r\nconsole.log('pointsPicked out:>> ', pointsPicked);\r\nconst teams = document.querySelectorAll('.team');\r\nconst submitBtn = document.getElementById('submit');\r\nconst points = document.querySelectorAll('.box');\r\n\r\nconst sidebar = document.getElementById('sidebar')\r\nconst weeks = sidebar.querySelectorAll('.nav-link')\r\n\r\nconsole.log('picks :>> ', picks);\r\nteams.forEach(el => {\r\n    el.addEventListener('click', function() {\r\n        console.log('this :>> ', this);\r\n        console.log('document.getElementById(this.id).parentElement :>> ', document.getElementById(this.id).parentElement);\r\n        const parent = document.getElementById(this.id).parentElement.parentElement;\r\n        console.log('parent :>> ', parent);\r\n        const time = parent.querySelector('.time').id\r\n        const unixNow = Math.floor(new Date().getTime() / 1000);\r\n\r\n        if (unixNow > time) return;\r\n        this.style.color = chosenColor;\r\n\r\n        const children = parent.querySelectorAll(\".team\");\r\n        let selectedpoints = null;\r\n        if (picks.hasOwnProperty(parent.id)){\r\n            selectedpoints = picks[parent.id].points\r\n        }\r\n        picks[parent.id] = {\r\n            pick:this.textContent,\r\n            points: selectedpoints\r\n        }\r\n\r\n        console.log('children :>> ', children);\r\n        children.forEach(child => {\r\n            console.log('child :>> ', child);\r\n            if (child.textContent != this.textContent) child.style.color = 'black';\r\n        })\r\n    });\r\n});\r\n\r\npoints.forEach(el => {\r\n    el.addEventListener('click', function() {\r\n        console.log('pointsPicked :>> ', pointsPicked);\r\n        if (pointsPicked.includes(this.textContent)) return;\r\n\r\n        this.style.background = chosenColor;\r\n        const parent = this.parentNode;\r\n        const children = parent.querySelectorAll(\".box\");\r\n        const game = parent.querySelector('.clearfix');\r\n        const teams = game.querySelectorAll('.team');\r\n\r\n        let selected;\r\n        teams.forEach(team => {\r\n            if (team.style.color == chosenColor) selected = team.textContent\r\n        })\r\n\r\n        if (picks.hasOwnProperty(game.id)){\r\n            if (picks[game.id].hasOwnProperty('points'))pointsPicked = pointsPicked.filter(item => item !== picks[game.id].points);\r\n        }\r\n\r\n        picks[game.id] = {\r\n            pick:selected,\r\n            points: this.textContent\r\n        }\r\n    \r\n        children.forEach(child => {\r\n            if (child.textContent != this.textContent) child.style.background = 'whitesmoke'; \r\n        });\r\n        pointsPicked.push(String(picks[game.id].points))\r\n        console.log('picks :>> ', picks);\r\n    });\r\n});\r\n\r\nsubmitBtn.addEventListener('click',function () {\r\n    const tbel = document.getElementById('tb')\r\n    console.log('tbel.value :>> ', String(tbel.value));\r\n    picks['tb'] ={\r\n        pick:String(tbel.value),\r\n        points:0\r\n    }\r\n    submit(week,picks);\r\n});\r\n\r\nweeks.forEach(w => { \r\n    let week = w.innerText.replace(' ','').toLocaleLowerCase()\r\n    w.addEventListener('click', () => {\r\n        weekEl.textContent = w.innerText;\r\n        initCards(gameData,week);\r\n        setup(picks);\r\n        colorWinners(week);\r\n    })\r\n})\r\n\r\ndocument.getElementById(\"btnLogout\").addEventListener('click', _auth__WEBPACK_IMPORTED_MODULE_2__.logoutFb);\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNULEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQSwrREFBK0QsMkNBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvcHJvZmlsZS5qcz9iMGU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldERhdGFiYXNlLCByZWYsIHNldCwgb25WYWx1ZSB9IGZyb20gJ2ZpcmViYXNlL2RhdGFiYXNlJ1xyXG5pbXBvcnQge29uQXV0aFN0YXRlQ2hhbmdlZEZiLCBsb2dvdXRGYn0gZnJvbSAnLi9hdXRoJ1xyXG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnZDMnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdCh3ZWVrLCBwaWNrcyl7XHJcbiAgICBjb25zdCBtc2dFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJfbXNnJylcclxuICAgIGNvbnN0IHVuaXhOb3cgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICBjb25zb2xlLmxvZygncGlja3MgOj4+ICcsIHBpY2tzKTtcclxuICAgIGZvciAobGV0IHAgaW4gcGlja3Mpe1xyXG4gICAgICAgIGlmIChwaWNrc1twXS5wb2ludHMgPT0gJ251bGwnIHx8IHBpY2tzW3BdLnBvaW50cyA9PSBudWxsIHx8IHBpY2tzW3BdLnBvaW50cyA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm51bGw/XCIpO1xyXG4gICAgICAgICAgICBtc2dFbC5pbm5lclRleHQgPSBgU2VsZWN0IGNvbmZpZGVuY2UgcG9pbnRzIGZvciAke3B9LmA7XHJcbiAgICAgICAgICAgIG1zZ0VsLnN0eWxlLmNvbG9yID0gJ3JlZCc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmIChwaWNrc1twXS5waWNrID09ICdudWxsJ3x8IHBpY2tzW3BdLnBpY2sgPT0gbnVsbCB8fCBwaWNrc1twXS5waWNrID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIG1zZ0VsLmlubmVyVGV4dCA9IGBTZWxlY3Qgd2lubmVyIGZvciAke3B9LiBgO1xyXG4gICAgICAgICAgICBtc2dFbC5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGRlbGV0ZWQgPSBbXTtcclxuICAgIGNvbnN0IHRpbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbWUnKTtcclxuICAgIGNvbnNvbGUubG9nKCd0aW1lcyA6Pj4gJywgdGltZXMpO1xyXG4gICAgdGltZXMuZm9yRWFjaCh0aW1lID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZ2FtZSA9IHRpbWUucGFyZW50RWxlbWVudC5pZDtcclxuICAgICAgICBpZiAodGltZS5pZCA8IHVuaXhOb3cpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHBpY2tzW2dhbWVdXHJcbiAgICAgICAgICAgIGRlbGV0ZWQucHVzaChwaWNrc1tnYW1lXSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coJ2RlbGV0ZWQgOj4+ICcsIGRlbGV0ZWQpO1xyXG4gICAgY29uc29sZS5sb2coJ3BpY2tzIDo+PiAnLCBwaWNrcyk7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgZm9yIChsZXQgZ2FtZSBpbiBwaWNrcykge1xyXG4gICAgICAgICAgICBjb25zdCBpbmZvID0gcGlja3NbZ2FtZV07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXQocmVmKGRiLCBgdXNlcnMvJHt1aWR9LyR7d2Vla30vJHtnYW1lfWApLCB7XHJcbiAgICAgICAgICAgICAgICBcInBpY2tcIjogaW5mb1tcInBpY2tcIl0sXHJcbiAgICAgICAgICAgICAgICBcInBvaW50c1wiOiBTdHJpbmcoaW5mb1tcInBvaW50c1wiXSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldChyZWYoZGIsIGB1c2Vycy8ke3VpZH0vbmFtZWApLGxvY2FsU3RvcmFnZS5kaXNwbGF5TmFtZSk7XHJcbiAgICAgICAgaWYgKGRkZCAhPSBudWxsICYgZGRkICE9IHVuZGVmaW5lZCAmIGRkZCAhPSAnbnVsbCcgJiBkZGQgIT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICBzZXQocmVmKGRiLCBgdXNlcnMvJHt1aWR9L2RkZGApLGRkZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtc2dFbC5pbm5lclRleHQgPSAnU3VjY2VzcyEnO1xyXG4gICAgICAgIG1zZ0VsLnN0eWxlLmNvbG9yID0gJ2dyZWVuJztcclxuICAgICAgICAvL2lmIChkZWxldGVkLmxlbmd0aCAhPSAwKXtcclxuICAgICAgICAvLyAgICBjb25zdCBwcyA9IGRlbGV0ZWQuam9pbihcIixcIik7XHJcbiAgICAgICAgLy8gICAgbXNnRWwuaW5uZXJUZXh0ICs9IGAgQnV0LCBwaWNrcyBmb3IgJHtwc30gYXJlIHBhc3Qga2ljayBvZmYgdGltZS5gXHJcbiAgICAgICAgLy99XHJcbiAgICB9Y2F0Y2ggKGVycikge1xyXG4gICAgICAgIG1zZ0VsLmlubmVyVGV4dCA9IGBGQiBFcnI6ICR7ZXJyfWA7XHJcbiAgICAgICAgbXNnRWwuc3R5bGUuY29sb3IgPSAncmVkJztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXAoZGF0YSkge1xyXG4gICAgZm9yIChsZXQgZ2FtZSBpbiBkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZ2FtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2FtZSk7XHJcbiAgICAgICAgY29uc3QgdGVhbXMgPSBnYW1lRWwucXVlcnlTZWxlY3RvckFsbCgnLnRlYW0nKTtcclxuICAgICAgICBjb25zdCBib3hlcyA9IGdhbWVFbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gnKTtcclxuICAgICAgICBcclxuICAgICAgICB0ZWFtcy5mb3JFYWNoKHRlYW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAodGVhbS50ZXh0Q29udGVudCA9PSBkYXRhW2dhbWVdWydwaWNrJ10pIHRlYW0uc3R5bGUuY29sb3IgPSBjaG9zZW5Db2xvcjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJveGVzLmZvckVhY2goYm94ID0+IHtcclxuICAgICAgICAgICAgaWYgKGJveC50ZXh0Q29udGVudCA9PSBkYXRhW2dhbWVdWydwb2ludHMnXSkgYm94LnN0eWxlLmJhY2tncm91bmQgPSBjaG9zZW5Db2xvcjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3RiJykpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGInKS52YWx1ZSA9IGRhdGFbJ3RiJ10ucGljaztcclxuICAgIH1lbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YicpLnZhbHVlID0gMDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgbGV0IHBpY2tzO1xyXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIG9uVmFsdWUocmVmZXIsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgIHBpY2tzID0gZGF0YTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBpY2tzO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb2xvcldpbm5lcnMod2Vlaykge1xyXG4gICAgY29uc29sZS5sb2coJ3BpY2tzIDo+PiAnLCBwaWNrcyk7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL3dpbm5lcnMuanNvblwiKVxyXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkod2VlaykpIGRhdGEgPSBkYXRhW3dlZWtdXHJcbiAgICBlbHNlIHJldHVybjtcclxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsZWFyZml4JylcclxuICAgIGxldCBwb2ludHMgPSAwO1xyXG4gICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICBjb25zdCBnYW1lID0gY2FyZC5pZDtcclxuICAgICAgICBjb25zdCB3aW5uZXIgPSBkYXRhW2dhbWVdLndpbm5lcjtcclxuICAgICAgICBjb25zdCBzY29yZSA9IGRhdGFbZ2FtZV0uc2NvcmU7XHJcbiAgICAgICAgaWYgKHBpY2tzLmhhc093blByb3BlcnR5KGdhbWUpKXtcclxuICAgICAgICAgICAgaWYgKHBpY2tzW2dhbWVdLnBpY2sgPT0gd2lubmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJkLnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICcjYzllNzgyJztcclxuICAgICAgICAgICAgICAgIHBvaW50cyArPSBwYXJzZUludChwaWNrc1tnYW1lXS5wb2ludHMpXHJcbiAgICAgICAgICAgIH0gZWxzZSBjYXJkLnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICdyZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkLXdlZWsnKS50ZXh0Q29udGVudCArPSBgIHBvaW50czogJHtwb2ludHN9YFxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhLGdhbWUsd3JhcHBlcixnbil7XHJcbiAgICBjb25zdCB0YiA9IGRhdGEuaGFzT3duUHJvcGVydHkoXCJhd2F5XCIpID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgaWYgKHRiKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGF0YSA6Pj4gJywgZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb3V0ZXJEaXYuY2xhc3NOYW1lID0gJ2NvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS02IG1iLTQnO1xyXG5cclxuICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmREaXYuY2xhc3NOYW1lID0gJ2NhcmQgY2FyZC1zdGF0aXN0aWNzJztcclxuXHJcbiAgICBjb25zdCBjYXJkQm9keURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJvZHlEaXYuY2xhc3NOYW1lID0gJ2NhcmQtYm9keSc7XHJcblxyXG4gICAgY29uc3QgY2xlYXJmaXhEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNsZWFyZml4RGl2LmNsYXNzTmFtZSA9ICdjbGVhcmZpeCc7XHJcbiAgICBjbGVhcmZpeERpdi5pZCA9IGdhbWU7XHJcblxyXG4gICAgY29uc3QgdGltZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICB0aW1lSWNvbi5jbGFzc05hbWUgPSAndGltZSc7XHJcbiAgICB0aW1lSWNvbi5pZCA9IGRhdGEudGltZTtcclxuICAgIHRpbWVJY29uLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG5cclxuICAgIGNvbnN0IGxlZnRUZWFtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZWZ0VGVhbURpdi5jbGFzc05hbWUgPSAnZmxvYXQtbGVmdCc7XHJcblxyXG4gICAgY29uc3QgbGVmdFRlYW1INCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBsZWZ0VGVhbUg0LmNsYXNzTmFtZSA9ICdib2xkLXRleHQgdGVhbSc7XHJcbiAgICBsZWZ0VGVhbUg0LmlkID0gYGcke2dufXQxYDtcclxuICAgIGxlZnRUZWFtSDQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgbGVmdFRlYW1INC50ZXh0Q29udGVudCA9IGRhdGEuYXdheTtcclxuXHJcbiAgICBjb25zdCByaWdodFRlYW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJpZ2h0VGVhbURpdi5jbGFzc05hbWUgPSAnZmxvYXQtcmlnaHQnO1xyXG5cclxuICAgIGNvbnN0IHJpZ2h0VGVhbUg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgIHJpZ2h0VGVhbUg0LmNsYXNzTmFtZSA9ICdib2xkLXRleHQgdGVhbSc7XHJcbiAgICByaWdodFRlYW1INC5pZCA9IGBnJHtnbn10MmA7XHJcblxyXG4gICAgaWYgKHRiKSB7XHJcbiAgICAgICAgcmlnaHRUZWFtSDQuY2xhc3NOYW1lID0gJ2JvbGQtdGV4dCc7XHJcbiAgICAgICAgcmlnaHRUZWFtSDQuc3R5bGUuZm9udFNpemUgPSA2O1xyXG4gICAgfVxyXG4gICAgcmlnaHRUZWFtSDQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgcmlnaHRUZWFtSDQudGV4dENvbnRlbnQgPSBkYXRhLmhvbWU7XHJcblxyXG4gICAgY29uc3QgZGF0ZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkYXRlUC5jbGFzc05hbWUgPSAndGV4dC1tdXRlZCc7XHJcbiAgICBkYXRlUC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhciBtci0xXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiR7ZGF0YS5odW1hbkRhdGV9YDtcclxuXHJcbiAgICBsZWZ0VGVhbURpdi5hcHBlbmRDaGlsZChsZWZ0VGVhbUg0KTtcclxuICAgIHJpZ2h0VGVhbURpdi5hcHBlbmRDaGlsZChyaWdodFRlYW1INCk7XHJcbiAgICBjbGVhcmZpeERpdi5hcHBlbmRDaGlsZCh0aW1lSWNvbik7XHJcbiAgICBjbGVhcmZpeERpdi5hcHBlbmRDaGlsZChsZWZ0VGVhbURpdik7XHJcbiAgICBjbGVhcmZpeERpdi5hcHBlbmRDaGlsZChyaWdodFRlYW1EaXYpO1xyXG4gICAgY2FyZEJvZHlEaXYuYXBwZW5kQ2hpbGQoY2xlYXJmaXhEaXYpO1xyXG4gICAgY2FyZEJvZHlEaXYuYXBwZW5kQ2hpbGQoZGF0ZVApO1xyXG5cclxuICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiYXdheVwiKSl7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYm94RGl2LmNsYXNzTmFtZSA9ICdib3gnO1xyXG4gICAgICAgICAgICBib3hEaXYudGV4dENvbnRlbnQgPSBpO1xyXG4gICAgICAgICAgICBib3hEaXYuaWQgPSBpO1xyXG4gICAgICAgICAgICBjYXJkQm9keURpdi5hcHBlbmRDaGlsZChib3hEaXYpO1xyXG4gICAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IHRiSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRiSW5wdXQudmFsdWUgPSAwO1xyXG4gICAgICAgIHRiSW5wdXQuaWQgPSAndGInXHJcbiAgICAgICAgdGJJbnB1dC5jbGFzc05hbWUgPSBcImZvcm1fX2lucHV0XCI7XHJcbiAgICAgICAgY2FyZEJvZHlEaXYuYXBwZW5kKHRiSW5wdXQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZEJvZHlEaXYpO1xyXG4gICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQoY2FyZERpdik7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG91dGVyRGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdENhcmRzKGRhdGEsd2Vlaykge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLXdyYXBwZXInKTtcclxuICAgIHdoaWxlICh3cmFwcGVyLmZpcnN0Q2hpbGQpIHdyYXBwZXIucmVtb3ZlQ2hpbGQod3JhcHBlci5maXJzdENoaWxkKTtcclxuICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KHdlZWspKSB7XHJcbiAgICAgICAgbGV0IGduID0gMTtcclxuICAgICAgICBmb3IgKGxldCBnYW1lIGluIGRhdGFbd2Vla10pe1xyXG4gICAgICAgICAgICBjcmVhdGVDYXJkKGRhdGFbd2Vla11bZ2FtZV0sZ2FtZSx3cmFwcGVyLGduKTtcclxuICAgICAgICAgICAgZ24rK1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm9uQXV0aFN0YXRlQ2hhbmdlZEZiKCk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2hlYWRlclwiKS5sb2FkKFwiLi4vc3JjL3BhZ2VzL2hlYWRlci5odG1sXCIpXHJcbn0pO1xyXG5cclxuY29uc3QgZGRkID0gc2Vzc2lvblN0b3JhZ2UuZGRkO1xyXG5zZXNzaW9uU3RvcmFnZS5kZGQgPSBcIm51bGxcIjtcclxuY29uc3QgdWlkID0gbG9jYWxTdG9yYWdlLnVpZDtcclxuY29uc3QgZGIgPSBnZXREYXRhYmFzZSgpO1xyXG5sZXQgd2Vla0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkLXdlZWsnKTtcclxuY29uc3Qgd2VlayA9IHdlZWtFbC50ZXh0Q29udGVudC5yZXBsYWNlKCcgJywnJykudG9Mb2NhbGVMb3dlckNhc2UoKVxyXG5jb25zdCByZWZlciA9IHJlZihkYiwgYHVzZXJzLyR7dWlkfS8ke3dlZWt9YCkgIFxyXG5jb25zdCBjaG9zZW5Db2xvciA9ICdncmVlbidcclxuXHJcbmxldCBwaWNrcyA9IGF3YWl0IGZldGNoRGF0YSgpO1xyXG5pZiAocGlja3MgPT0gbnVsbCkgcGlja3MgPSB7fTtcclxuY29uc3QgZ2FtZURhdGEgPSBhd2FpdCBqc29uKCcuLi9kYXRhL2dhbWVzLmpzb24nKVxyXG5sZXQgcG9pbnRzUGlja2VkID0gW107XHJcblxyXG5mb3IgKGxldCBnYW1lIGluIHBpY2tzKSBwb2ludHNQaWNrZWQucHVzaChTdHJpbmcocGlja3NbZ2FtZV0ucG9pbnRzKSlcclxuXHJcbmluaXRDYXJkcyhnYW1lRGF0YSx3ZWVrKTtcclxuc2V0dXAocGlja3MpO1xyXG4vL2NvbG9yV2lubmVycyh3ZWVrKTtcclxuY29uc29sZS5sb2coJ3BvaW50c1BpY2tlZCBvdXQ6Pj4gJywgcG9pbnRzUGlja2VkKTtcclxuY29uc3QgdGVhbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVhbScpO1xyXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Jyk7XHJcbmNvbnN0IHBvaW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gnKTtcclxuXHJcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpXHJcbmNvbnN0IHdlZWtzID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpbmsnKVxyXG5cclxuY29uc29sZS5sb2coJ3BpY2tzIDo+PiAnLCBwaWNrcyk7XHJcbnRlYW1zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcyA6Pj4gJywgdGhpcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnBhcmVudEVsZW1lbnQgOj4+ICcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICBjb25zb2xlLmxvZygncGFyZW50IDo+PiAnLCBwYXJlbnQpO1xyXG4gICAgICAgIGNvbnN0IHRpbWUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKS5pZFxyXG4gICAgICAgIGNvbnN0IHVuaXhOb3cgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcblxyXG4gICAgICAgIGlmICh1bml4Tm93ID4gdGltZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3R5bGUuY29sb3IgPSBjaG9zZW5Db2xvcjtcclxuXHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZWFtXCIpO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZHBvaW50cyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHBpY2tzLmhhc093blByb3BlcnR5KHBhcmVudC5pZCkpe1xyXG4gICAgICAgICAgICBzZWxlY3RlZHBvaW50cyA9IHBpY2tzW3BhcmVudC5pZF0ucG9pbnRzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBpY2tzW3BhcmVudC5pZF0gPSB7XHJcbiAgICAgICAgICAgIHBpY2s6dGhpcy50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgcG9pbnRzOiBzZWxlY3RlZHBvaW50c1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkcmVuIDo+PiAnLCBjaGlsZHJlbik7XHJcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCA6Pj4gJywgY2hpbGQpO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQudGV4dENvbnRlbnQgIT0gdGhpcy50ZXh0Q29udGVudCkgY2hpbGQuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5wb2ludHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwb2ludHNQaWNrZWQgOj4+ICcsIHBvaW50c1BpY2tlZCk7XHJcbiAgICAgICAgaWYgKHBvaW50c1BpY2tlZC5pbmNsdWRlcyh0aGlzLnRleHRDb250ZW50KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmQgPSBjaG9zZW5Db2xvcjtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib3hcIik7XHJcbiAgICAgICAgY29uc3QgZ2FtZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXJmaXgnKTtcclxuICAgICAgICBjb25zdCB0ZWFtcyA9IGdhbWUucXVlcnlTZWxlY3RvckFsbCgnLnRlYW0nKTtcclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdGVkO1xyXG4gICAgICAgIHRlYW1zLmZvckVhY2godGVhbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0ZWFtLnN0eWxlLmNvbG9yID09IGNob3NlbkNvbG9yKSBzZWxlY3RlZCA9IHRlYW0udGV4dENvbnRlbnRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAocGlja3MuaGFzT3duUHJvcGVydHkoZ2FtZS5pZCkpe1xyXG4gICAgICAgICAgICBpZiAocGlja3NbZ2FtZS5pZF0uaGFzT3duUHJvcGVydHkoJ3BvaW50cycpKXBvaW50c1BpY2tlZCA9IHBvaW50c1BpY2tlZC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBwaWNrc1tnYW1lLmlkXS5wb2ludHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGlja3NbZ2FtZS5pZF0gPSB7XHJcbiAgICAgICAgICAgIHBpY2s6c2VsZWN0ZWQsXHJcbiAgICAgICAgICAgIHBvaW50czogdGhpcy50ZXh0Q29udGVudFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQudGV4dENvbnRlbnQgIT0gdGhpcy50ZXh0Q29udGVudCkgY2hpbGQuc3R5bGUuYmFja2dyb3VuZCA9ICd3aGl0ZXNtb2tlJzsgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcG9pbnRzUGlja2VkLnB1c2goU3RyaW5nKHBpY2tzW2dhbWUuaWRdLnBvaW50cykpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3BpY2tzIDo+PiAnLCBwaWNrcyk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHRiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGInKVxyXG4gICAgY29uc29sZS5sb2coJ3RiZWwudmFsdWUgOj4+ICcsIFN0cmluZyh0YmVsLnZhbHVlKSk7XHJcbiAgICBwaWNrc1sndGInXSA9e1xyXG4gICAgICAgIHBpY2s6U3RyaW5nKHRiZWwudmFsdWUpLFxyXG4gICAgICAgIHBvaW50czowXHJcbiAgICB9XHJcbiAgICBzdWJtaXQod2VlayxwaWNrcyk7XHJcbn0pO1xyXG5cclxud2Vla3MuZm9yRWFjaCh3ID0+IHsgXHJcbiAgICBsZXQgd2VlayA9IHcuaW5uZXJUZXh0LnJlcGxhY2UoJyAnLCcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpXHJcbiAgICB3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHdlZWtFbC50ZXh0Q29udGVudCA9IHcuaW5uZXJUZXh0O1xyXG4gICAgICAgIGluaXRDYXJkcyhnYW1lRGF0YSx3ZWVrKTtcclxuICAgICAgICBzZXR1cChwaWNrcyk7XHJcbiAgICAgICAgY29sb3JXaW5uZXJzKHdlZWspO1xyXG4gICAgfSlcclxufSlcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuTG9nb3V0XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9nb3V0RmIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/profile.js\n");

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