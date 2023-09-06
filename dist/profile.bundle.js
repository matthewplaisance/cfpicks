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

/***/ "./src/js/profile.js":
/*!***************************!*\
  !*** ./src/js/profile.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\n\r\n\r\n\r\nfunction submit(week, picks){\r\n    const msgEl = document.getElementById('err_msg')\r\n    const unixNow = Math.floor(new Date().getTime() / 1000);\r\n    console.log('picks :>> ', picks);\r\n    for (let p in picks){\r\n        if (picks[p].points == 'null' || picks[p].points == null || picks[p].points == undefined){\r\n            msgEl.innerText = `Select confidence points for ${p}.`;\r\n            msgEl.style.color = 'red';\r\n            return;\r\n        } \r\n        if (picks[p].pick == 'null'|| picks[p].pick == null || picks[p].pick == undefined){\r\n            msgEl.innerText = `Select winner for ${p}. `;\r\n            msgEl.style.color = 'red';\r\n            return;\r\n        }\r\n    }\r\n    let deleted = [];\r\n    const times = document.querySelectorAll('.time');\r\n\r\n    times.forEach(time => {\r\n        const game = time.parentElement.id;\r\n        if (time.id < unixNow) {\r\n            delete picks[game]\r\n            deleted.push(picks[game])\r\n        }\r\n    })\r\n\r\n    try{\r\n        for (let game in picks) {\r\n            const info = picks[game];\r\n            \r\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}/${week}/${game}`), {\r\n                \"pick\": info[\"pick\"],\r\n                \"points\": String(info[\"points\"])\r\n            });\r\n        }\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}/name`),localStorage.displayName);\r\n\r\n        msgEl.innerText = 'Submitted!';\r\n        msgEl.style.color = 'green';\r\n        //if (deleted.length != 0){\r\n        //    const ps = deleted.join(\",\");\r\n        //    msgEl.innerText += ` But, picks for ${ps} are past kick off time.`\r\n        //}\r\n    }catch (err) {\r\n        msgEl.innerText = `FB Err: ${err}`;\r\n        msgEl.style.color = 'red';\r\n    }\r\n}\r\n\r\nfunction setup(data) {\r\n    for (let game in data) {\r\n        const gameEl = document.getElementById(game);\r\n        if (!gameEl) continue;\r\n        const teams = gameEl.querySelectorAll('.team');\r\n        const boxes = gameEl.parentNode.querySelectorAll('.box');\r\n        \r\n        teams.forEach(team => {\r\n            if (team.textContent == data[game]['pick']) team.style.color = chosenColor;\r\n        })\r\n        boxes.forEach(box => {\r\n            if (box.textContent == data[game]['points']) box.style.background = chosenColor;\r\n        })\r\n    }\r\n    let ttbel = document.getElementById('tb');\r\n    if (ttbel){\r\n        if (data.hasOwnProperty('tb')) ttbel.value = data['tb'].pick;\r\n        else document.getElementById('tb').value = 0;\r\n    }\r\n    \r\n}\r\n\r\nasync function fetchData() {\r\n    let picks;\r\n    await new Promise((resolve, reject) => {\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(refer, (snapshot) => {\r\n            const data = snapshot.val();\r\n            picks = data;\r\n            resolve();\r\n        });\r\n    });\r\n\r\n    return picks;\r\n}\r\n\r\nfunction createCard(data,game,wrapper,gn){\r\n    const tb = data.hasOwnProperty(\"away\") ? false : true;\r\n\r\n    const outerDiv = document.createElement('div');\r\n    outerDiv.className = 'col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-4';\r\n\r\n    const cardDiv = document.createElement('div');\r\n    cardDiv.className = 'card card-statistics';\r\n\r\n    const cardBodyDiv = document.createElement('div');\r\n    cardBodyDiv.className = 'card-body';\r\n\r\n    const clearfixDiv = document.createElement('div');\r\n    clearfixDiv.className = 'clearfix';\r\n    clearfixDiv.id = game;\r\n\r\n    const timeIcon = document.createElement('i');\r\n    timeIcon.className = 'time';\r\n    timeIcon.id = data.time;\r\n    timeIcon.setAttribute('aria-hidden', 'true');\r\n\r\n    const leftTeamDiv = document.createElement('div');\r\n    leftTeamDiv.className = 'float-left';\r\n\r\n    const leftTeamH4 = document.createElement('h4');\r\n    leftTeamH4.className = 'bold-text team';\r\n    leftTeamH4.id = `g${gn}t1`;\r\n    leftTeamH4.style.cursor = 'pointer';\r\n    leftTeamH4.textContent = data.away;\r\n\r\n    const rightTeamDiv = document.createElement('div');\r\n    rightTeamDiv.className = 'float-right';\r\n\r\n    const rightTeamH4 = document.createElement('h4');\r\n    rightTeamH4.className = 'bold-text team';\r\n    rightTeamH4.id = `g${gn}t2`;\r\n\r\n    if (tb) {\r\n        rightTeamH4.className = 'bold-text';\r\n        rightTeamH4.style.fontSize = 6;\r\n    }\r\n    rightTeamH4.style.cursor = 'pointer';\r\n    rightTeamH4.textContent = data.home;\r\n\r\n    const dateP = document.createElement('p');\r\n    dateP.className = 'text-muted';\r\n    dateP.innerHTML = `<i class=\"fa fa-calendar mr-1\" aria-hidden=\"true\"></i>${data.humanDate}`;\r\n\r\n    leftTeamDiv.appendChild(leftTeamH4);\r\n    rightTeamDiv.appendChild(rightTeamH4);\r\n    clearfixDiv.appendChild(timeIcon);\r\n    clearfixDiv.appendChild(leftTeamDiv);\r\n    clearfixDiv.appendChild(rightTeamDiv);\r\n    cardBodyDiv.appendChild(clearfixDiv);\r\n    cardBodyDiv.appendChild(dateP);\r\n    if (data.hasOwnProperty(\"away\")){\r\n        for (let i = 1; i <= 12; i++) {\r\n            const boxDiv = document.createElement('div');\r\n            boxDiv.className = 'box';\r\n            boxDiv.textContent = i;\r\n            boxDiv.id = i;\r\n            if (pointsPicked.includes(String(i))) {\r\n                boxDiv.style.background = pickedPColor;\r\n            };\r\n            cardBodyDiv.appendChild(boxDiv);\r\n        }\r\n    }else{\r\n        const tbInput = document.createElement('input');\r\n        tbInput.value = 0;\r\n        tbInput.id = 'tb'\r\n        tbInput.className = \"form__input\";\r\n        cardBodyDiv.append(tbInput);\r\n    }\r\n    \r\n    \r\n    cardDiv.appendChild(cardBodyDiv);\r\n    outerDiv.appendChild(cardDiv);\r\n    wrapper.appendChild(outerDiv);\r\n}\r\n\r\nfunction initCards(data,week) {\r\n    const wrapper = document.getElementById('card-wrapper');\r\n    while (wrapper.firstChild) wrapper.removeChild(wrapper.firstChild);\r\n    if (data.hasOwnProperty(week)) {\r\n        let gn = 1;\r\n        for (let game in data[week]){\r\n            createCard(data[week][game],game,wrapper,gn);\r\n            gn++\r\n        }\r\n    }\r\n\r\n}\r\n\r\n(0,_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChangedFb)();\r\n\r\n$(document).ready(function () {\r\n    $(\"#header\").load(\"../src/pages/header.html\")\r\n});\r\n\r\nconst uid = localStorage.uid;\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();\r\nlet weekEl = document.getElementById('selected-week');\r\nconst week = weekEl.textContent.replace(' ','').toLocaleLowerCase()\r\nconst refer = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}`)  \r\nconst chosenColor = '#FF8000'\r\nconst ccRgb = 'rgb(255, 128, 0)'\r\nconst pickedPColor = \"#9494b8\";\r\n\r\n\r\nlet userData = await fetchData();\r\nconsole.log('userData :>> ', userData);\r\nlet picks = {};\r\nif (userData){\r\n    if (userData.hasOwnProperty(week)) picks = userData[week];\r\n    if (userData.hasOwnProperty(\"name\")) localStorage.displayName = userData[\"name\"]   \r\n}\r\n\r\nconst gameData = await (0,d3__WEBPACK_IMPORTED_MODULE_1__.json)('../data/games.json')\r\nlet pointsPicked = [];\r\nfor (let game in picks) pointsPicked.push(String(picks[game].points))\r\n\r\ninitCards(gameData,week);\r\nsetup(picks);\r\nconst teams = document.querySelectorAll('.team');\r\nconst submitBtn = document.getElementById('submit');\r\nconst points = document.querySelectorAll('.box');\r\n\r\n\r\nteams.forEach(el => {\r\n    el.addEventListener('click', function() {\r\n        const parent = document.getElementById(this.id).parentElement.parentElement;\r\n        const time = parent.querySelector('.time').id\r\n        const unixNow = Math.floor(new Date().getTime() / 1000);\r\n\r\n        if (unixNow > time) {\r\n            let msgEl = document.getElementById('err_msg')\r\n            msgEl.innerText = `Cannot change pick for ${parent.id}, it has already kickoffed`;\r\n            msgEl.style.color = 'red';\r\n            return;\r\n        };\r\n        this.style.color = chosenColor;\r\n\r\n        const children = parent.querySelectorAll(\".team\");\r\n        let selectedpoints = null;\r\n        if (picks.hasOwnProperty(parent.id)){\r\n            selectedpoints = picks[parent.id].points\r\n        }\r\n        picks[parent.id] = {\r\n            pick:this.textContent,\r\n            points: selectedpoints\r\n        }\r\n\r\n        children.forEach(child => {\r\n            if (child.textContent != this.textContent) child.style.color = 'black';\r\n        })\r\n    });\r\n});\r\n\r\npoints.forEach(el => {\r\n    el.addEventListener('click', function() {\r\n        const parent = this.parentNode;\r\n        const children = parent.querySelectorAll(\".box\");\r\n        const game = parent.querySelector('.clearfix');\r\n        const teams = game.querySelectorAll('.team');\r\n\r\n        const time = parent.querySelector('.time').id\r\n        const unixNow = Math.floor(new Date().getTime() / 1000);\r\n\r\n        if (unixNow > time) {\r\n            let msgEl = document.getElementById('err_msg')\r\n            msgEl.innerText = `Cannot change points for ${game.id}, it has already kickoffed`;\r\n            msgEl.style.color = 'red';\r\n            return;\r\n        };\r\n\r\n        if (pointsPicked.includes(this.textContent)) {\r\n            if (picks.hasOwnProperty(game.id)){\r\n                if (picks[game.id].points == this.textContent){\r\n                    pointsPicked = pointsPicked.filter(item => item !== picks[game.id].points);\r\n                    picks[game.id].points = null;\r\n                    this.style.background = 'whitesmoke';\r\n                    if (!picks[game.id].pick) delete picks[game.id]\r\n                    document.querySelectorAll('.box').forEach(bx => {\r\n                        if (bx.id == this.id) bx.style.background = 'whitesmoke';\r\n                    })\r\n\r\n                    return;\r\n                }\r\n\r\n            }\r\n            let msgEl = document.getElementById('err_msg')\r\n            msgEl.innerText = `You cannot repeat confidence points`;\r\n            msgEl.style.color = 'red';\r\n            return;\r\n        }\r\n        document.getElementById('err_msg').innerText = '';\r\n        this.style.background = chosenColor;\r\n        let selected = null;\r\n        \r\n        if (picks.hasOwnProperty(game.id)){\r\n            if (picks[game.id].hasOwnProperty('points'))pointsPicked = pointsPicked.filter(item => item !== picks[game.id].points);\r\n            selected = picks[game.id].pick\r\n        }\r\n\r\n        picks[game.id] = {\r\n            pick:selected,\r\n            points: this.textContent\r\n        }\r\n    \r\n        children.forEach(child => {\r\n            if (child.textContent != this.textContent) child.style.background = 'whitesmoke';\r\n        });\r\n        pointsPicked.push(String(picks[game.id].points))\r\n        const bxs = document.querySelectorAll('.box');\r\n        bxs.forEach(bx => {\r\n            if (pointsPicked.includes(bx.id) ) {\r\n                if (bx.style.background != ccRgb & bx.style.background != chosenColor){\r\n                    bx.style.background = pickedPColor;\r\n                }\r\n            }else{\r\n                bx.style.background = 'whitesmoke';\r\n            };\r\n        })\r\n    });\r\n});\r\n\r\nsubmitBtn.addEventListener('click',function () {\r\n    const tbel = document.getElementById('tb')\r\n    picks['tb'] ={\r\n        pick:String(tbel.value),\r\n        points:0\r\n    }\r\n    submit(week,picks);\r\n});\r\n\r\ndocument.getElementById(\"btnLogout\").addEventListener('click', _auth__WEBPACK_IMPORTED_MODULE_2__.logoutFb);\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsK0RBQStELDJDQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL3Byb2ZpbGUuanM/YjBlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXREYXRhYmFzZSwgcmVmLCBzZXQsIG9uVmFsdWUgfSBmcm9tICdmaXJlYmFzZS9kYXRhYmFzZSdcclxuaW1wb3J0IHtvbkF1dGhTdGF0ZUNoYW5nZWRGYiwgbG9nb3V0RmJ9IGZyb20gJy4vYXV0aCdcclxuaW1wb3J0IHsganNvbiB9IGZyb20gJ2QzJztcclxuXHJcblxyXG5mdW5jdGlvbiBzdWJtaXQod2VlaywgcGlja3Mpe1xyXG4gICAgY29uc3QgbXNnRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyX21zZycpXHJcbiAgICBjb25zdCB1bml4Tm93ID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgY29uc29sZS5sb2coJ3BpY2tzIDo+PiAnLCBwaWNrcyk7XHJcbiAgICBmb3IgKGxldCBwIGluIHBpY2tzKXtcclxuICAgICAgICBpZiAocGlja3NbcF0ucG9pbnRzID09ICdudWxsJyB8fCBwaWNrc1twXS5wb2ludHMgPT0gbnVsbCB8fCBwaWNrc1twXS5wb2ludHMgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgbXNnRWwuaW5uZXJUZXh0ID0gYFNlbGVjdCBjb25maWRlbmNlIHBvaW50cyBmb3IgJHtwfS5gO1xyXG4gICAgICAgICAgICBtc2dFbC5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAocGlja3NbcF0ucGljayA9PSAnbnVsbCd8fCBwaWNrc1twXS5waWNrID09IG51bGwgfHwgcGlja3NbcF0ucGljayA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBtc2dFbC5pbm5lclRleHQgPSBgU2VsZWN0IHdpbm5lciBmb3IgJHtwfS4gYDtcclxuICAgICAgICAgICAgbXNnRWwuc3R5bGUuY29sb3IgPSAncmVkJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBkZWxldGVkID0gW107XHJcbiAgICBjb25zdCB0aW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lJyk7XHJcblxyXG4gICAgdGltZXMuZm9yRWFjaCh0aW1lID0+IHtcclxuICAgICAgICBjb25zdCBnYW1lID0gdGltZS5wYXJlbnRFbGVtZW50LmlkO1xyXG4gICAgICAgIGlmICh0aW1lLmlkIDwgdW5peE5vdykge1xyXG4gICAgICAgICAgICBkZWxldGUgcGlja3NbZ2FtZV1cclxuICAgICAgICAgICAgZGVsZXRlZC5wdXNoKHBpY2tzW2dhbWVdKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGZvciAobGV0IGdhbWUgaW4gcGlja3MpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5mbyA9IHBpY2tzW2dhbWVdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0KHJlZihkYiwgYHVzZXJzLyR7dWlkfS8ke3dlZWt9LyR7Z2FtZX1gKSwge1xyXG4gICAgICAgICAgICAgICAgXCJwaWNrXCI6IGluZm9bXCJwaWNrXCJdLFxyXG4gICAgICAgICAgICAgICAgXCJwb2ludHNcIjogU3RyaW5nKGluZm9bXCJwb2ludHNcIl0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXQocmVmKGRiLCBgdXNlcnMvJHt1aWR9L25hbWVgKSxsb2NhbFN0b3JhZ2UuZGlzcGxheU5hbWUpO1xyXG5cclxuICAgICAgICBtc2dFbC5pbm5lclRleHQgPSAnU3VibWl0dGVkISc7XHJcbiAgICAgICAgbXNnRWwuc3R5bGUuY29sb3IgPSAnZ3JlZW4nO1xyXG4gICAgICAgIC8vaWYgKGRlbGV0ZWQubGVuZ3RoICE9IDApe1xyXG4gICAgICAgIC8vICAgIGNvbnN0IHBzID0gZGVsZXRlZC5qb2luKFwiLFwiKTtcclxuICAgICAgICAvLyAgICBtc2dFbC5pbm5lclRleHQgKz0gYCBCdXQsIHBpY2tzIGZvciAke3BzfSBhcmUgcGFzdCBraWNrIG9mZiB0aW1lLmBcclxuICAgICAgICAvL31cclxuICAgIH1jYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgbXNnRWwuaW5uZXJUZXh0ID0gYEZCIEVycjogJHtlcnJ9YDtcclxuICAgICAgICBtc2dFbC5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cChkYXRhKSB7XHJcbiAgICBmb3IgKGxldCBnYW1lIGluIGRhdGEpIHtcclxuICAgICAgICBjb25zdCBnYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnYW1lKTtcclxuICAgICAgICBpZiAoIWdhbWVFbCkgY29udGludWU7XHJcbiAgICAgICAgY29uc3QgdGVhbXMgPSBnYW1lRWwucXVlcnlTZWxlY3RvckFsbCgnLnRlYW0nKTtcclxuICAgICAgICBjb25zdCBib3hlcyA9IGdhbWVFbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gnKTtcclxuICAgICAgICBcclxuICAgICAgICB0ZWFtcy5mb3JFYWNoKHRlYW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAodGVhbS50ZXh0Q29udGVudCA9PSBkYXRhW2dhbWVdWydwaWNrJ10pIHRlYW0uc3R5bGUuY29sb3IgPSBjaG9zZW5Db2xvcjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJveGVzLmZvckVhY2goYm94ID0+IHtcclxuICAgICAgICAgICAgaWYgKGJveC50ZXh0Q29udGVudCA9PSBkYXRhW2dhbWVdWydwb2ludHMnXSkgYm94LnN0eWxlLmJhY2tncm91bmQgPSBjaG9zZW5Db2xvcjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbGV0IHR0YmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RiJyk7XHJcbiAgICBpZiAodHRiZWwpe1xyXG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCd0YicpKSB0dGJlbC52YWx1ZSA9IGRhdGFbJ3RiJ10ucGljaztcclxuICAgICAgICBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YicpLnZhbHVlID0gMDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICBsZXQgcGlja3M7XHJcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgb25WYWx1ZShyZWZlciwgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgICAgICAgICAgcGlja3MgPSBkYXRhO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcGlja3M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoZGF0YSxnYW1lLHdyYXBwZXIsZ24pe1xyXG4gICAgY29uc3QgdGIgPSBkYXRhLmhhc093blByb3BlcnR5KFwiYXdheVwiKSA/IGZhbHNlIDogdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBvdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb3V0ZXJEaXYuY2xhc3NOYW1lID0gJ2NvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS02IG1iLTQnO1xyXG5cclxuICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmREaXYuY2xhc3NOYW1lID0gJ2NhcmQgY2FyZC1zdGF0aXN0aWNzJztcclxuXHJcbiAgICBjb25zdCBjYXJkQm9keURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJvZHlEaXYuY2xhc3NOYW1lID0gJ2NhcmQtYm9keSc7XHJcblxyXG4gICAgY29uc3QgY2xlYXJmaXhEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNsZWFyZml4RGl2LmNsYXNzTmFtZSA9ICdjbGVhcmZpeCc7XHJcbiAgICBjbGVhcmZpeERpdi5pZCA9IGdhbWU7XHJcblxyXG4gICAgY29uc3QgdGltZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICB0aW1lSWNvbi5jbGFzc05hbWUgPSAndGltZSc7XHJcbiAgICB0aW1lSWNvbi5pZCA9IGRhdGEudGltZTtcclxuICAgIHRpbWVJY29uLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG5cclxuICAgIGNvbnN0IGxlZnRUZWFtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZWZ0VGVhbURpdi5jbGFzc05hbWUgPSAnZmxvYXQtbGVmdCc7XHJcblxyXG4gICAgY29uc3QgbGVmdFRlYW1INCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBsZWZ0VGVhbUg0LmNsYXNzTmFtZSA9ICdib2xkLXRleHQgdGVhbSc7XHJcbiAgICBsZWZ0VGVhbUg0LmlkID0gYGcke2dufXQxYDtcclxuICAgIGxlZnRUZWFtSDQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgbGVmdFRlYW1INC50ZXh0Q29udGVudCA9IGRhdGEuYXdheTtcclxuXHJcbiAgICBjb25zdCByaWdodFRlYW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJpZ2h0VGVhbURpdi5jbGFzc05hbWUgPSAnZmxvYXQtcmlnaHQnO1xyXG5cclxuICAgIGNvbnN0IHJpZ2h0VGVhbUg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgIHJpZ2h0VGVhbUg0LmNsYXNzTmFtZSA9ICdib2xkLXRleHQgdGVhbSc7XHJcbiAgICByaWdodFRlYW1INC5pZCA9IGBnJHtnbn10MmA7XHJcblxyXG4gICAgaWYgKHRiKSB7XHJcbiAgICAgICAgcmlnaHRUZWFtSDQuY2xhc3NOYW1lID0gJ2JvbGQtdGV4dCc7XHJcbiAgICAgICAgcmlnaHRUZWFtSDQuc3R5bGUuZm9udFNpemUgPSA2O1xyXG4gICAgfVxyXG4gICAgcmlnaHRUZWFtSDQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgcmlnaHRUZWFtSDQudGV4dENvbnRlbnQgPSBkYXRhLmhvbWU7XHJcblxyXG4gICAgY29uc3QgZGF0ZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkYXRlUC5jbGFzc05hbWUgPSAndGV4dC1tdXRlZCc7XHJcbiAgICBkYXRlUC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhciBtci0xXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiR7ZGF0YS5odW1hbkRhdGV9YDtcclxuXHJcbiAgICBsZWZ0VGVhbURpdi5hcHBlbmRDaGlsZChsZWZ0VGVhbUg0KTtcclxuICAgIHJpZ2h0VGVhbURpdi5hcHBlbmRDaGlsZChyaWdodFRlYW1INCk7XHJcbiAgICBjbGVhcmZpeERpdi5hcHBlbmRDaGlsZCh0aW1lSWNvbik7XHJcbiAgICBjbGVhcmZpeERpdi5hcHBlbmRDaGlsZChsZWZ0VGVhbURpdik7XHJcbiAgICBjbGVhcmZpeERpdi5hcHBlbmRDaGlsZChyaWdodFRlYW1EaXYpO1xyXG4gICAgY2FyZEJvZHlEaXYuYXBwZW5kQ2hpbGQoY2xlYXJmaXhEaXYpO1xyXG4gICAgY2FyZEJvZHlEaXYuYXBwZW5kQ2hpbGQoZGF0ZVApO1xyXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJhd2F5XCIpKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBib3hEaXYuY2xhc3NOYW1lID0gJ2JveCc7XHJcbiAgICAgICAgICAgIGJveERpdi50ZXh0Q29udGVudCA9IGk7XHJcbiAgICAgICAgICAgIGJveERpdi5pZCA9IGk7XHJcbiAgICAgICAgICAgIGlmIChwb2ludHNQaWNrZWQuaW5jbHVkZXMoU3RyaW5nKGkpKSkge1xyXG4gICAgICAgICAgICAgICAgYm94RGl2LnN0eWxlLmJhY2tncm91bmQgPSBwaWNrZWRQQ29sb3I7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhcmRCb2R5RGl2LmFwcGVuZENoaWxkKGJveERpdik7XHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgdGJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGJJbnB1dC52YWx1ZSA9IDA7XHJcbiAgICAgICAgdGJJbnB1dC5pZCA9ICd0YidcclxuICAgICAgICB0YklucHV0LmNsYXNzTmFtZSA9IFwiZm9ybV9faW5wdXRcIjtcclxuICAgICAgICBjYXJkQm9keURpdi5hcHBlbmQodGJJbnB1dCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkQm9keURpdik7XHJcbiAgICBvdXRlckRpdi5hcHBlbmRDaGlsZChjYXJkRGl2KTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQob3V0ZXJEaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0Q2FyZHMoZGF0YSx3ZWVrKSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtd3JhcHBlcicpO1xyXG4gICAgd2hpbGUgKHdyYXBwZXIuZmlyc3RDaGlsZCkgd3JhcHBlci5yZW1vdmVDaGlsZCh3cmFwcGVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkod2VlaykpIHtcclxuICAgICAgICBsZXQgZ24gPSAxO1xyXG4gICAgICAgIGZvciAobGV0IGdhbWUgaW4gZGF0YVt3ZWVrXSl7XHJcbiAgICAgICAgICAgIGNyZWF0ZUNhcmQoZGF0YVt3ZWVrXVtnYW1lXSxnYW1lLHdyYXBwZXIsZ24pO1xyXG4gICAgICAgICAgICBnbisrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxub25BdXRoU3RhdGVDaGFuZ2VkRmIoKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjaGVhZGVyXCIpLmxvYWQoXCIuLi9zcmMvcGFnZXMvaGVhZGVyLmh0bWxcIilcclxufSk7XHJcblxyXG5jb25zdCB1aWQgPSBsb2NhbFN0b3JhZ2UudWlkO1xyXG5jb25zdCBkYiA9IGdldERhdGFiYXNlKCk7XHJcbmxldCB3ZWVrRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWQtd2VlaycpO1xyXG5jb25zdCB3ZWVrID0gd2Vla0VsLnRleHRDb250ZW50LnJlcGxhY2UoJyAnLCcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpXHJcbmNvbnN0IHJlZmVyID0gcmVmKGRiLCBgdXNlcnMvJHt1aWR9YCkgIFxyXG5jb25zdCBjaG9zZW5Db2xvciA9ICcjRkY4MDAwJ1xyXG5jb25zdCBjY1JnYiA9ICdyZ2IoMjU1LCAxMjgsIDApJ1xyXG5jb25zdCBwaWNrZWRQQ29sb3IgPSBcIiM5NDk0YjhcIjtcclxuXHJcblxyXG5sZXQgdXNlckRhdGEgPSBhd2FpdCBmZXRjaERhdGEoKTtcclxuY29uc29sZS5sb2coJ3VzZXJEYXRhIDo+PiAnLCB1c2VyRGF0YSk7XHJcbmxldCBwaWNrcyA9IHt9O1xyXG5pZiAodXNlckRhdGEpe1xyXG4gICAgaWYgKHVzZXJEYXRhLmhhc093blByb3BlcnR5KHdlZWspKSBwaWNrcyA9IHVzZXJEYXRhW3dlZWtdO1xyXG4gICAgaWYgKHVzZXJEYXRhLmhhc093blByb3BlcnR5KFwibmFtZVwiKSkgbG9jYWxTdG9yYWdlLmRpc3BsYXlOYW1lID0gdXNlckRhdGFbXCJuYW1lXCJdICAgXHJcbn1cclxuXHJcbmNvbnN0IGdhbWVEYXRhID0gYXdhaXQganNvbignLi4vZGF0YS9nYW1lcy5qc29uJylcclxubGV0IHBvaW50c1BpY2tlZCA9IFtdO1xyXG5mb3IgKGxldCBnYW1lIGluIHBpY2tzKSBwb2ludHNQaWNrZWQucHVzaChTdHJpbmcocGlja3NbZ2FtZV0ucG9pbnRzKSlcclxuXHJcbmluaXRDYXJkcyhnYW1lRGF0YSx3ZWVrKTtcclxuc2V0dXAocGlja3MpO1xyXG5jb25zdCB0ZWFtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZWFtJyk7XHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQnKTtcclxuY29uc3QgcG9pbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJveCcpO1xyXG5cclxuXHJcbnRlYW1zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgdGltZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpLmlkXHJcbiAgICAgICAgY29uc3QgdW5peE5vdyA9IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgaWYgKHVuaXhOb3cgPiB0aW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBtc2dFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJfbXNnJylcclxuICAgICAgICAgICAgbXNnRWwuaW5uZXJUZXh0ID0gYENhbm5vdCBjaGFuZ2UgcGljayBmb3IgJHtwYXJlbnQuaWR9LCBpdCBoYXMgYWxyZWFkeSBraWNrb2ZmZWRgO1xyXG4gICAgICAgICAgICBtc2dFbC5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0eWxlLmNvbG9yID0gY2hvc2VuQ29sb3I7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVhbVwiKTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRwb2ludHMgPSBudWxsO1xyXG4gICAgICAgIGlmIChwaWNrcy5oYXNPd25Qcm9wZXJ0eShwYXJlbnQuaWQpKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWRwb2ludHMgPSBwaWNrc1twYXJlbnQuaWRdLnBvaW50c1xyXG4gICAgICAgIH1cclxuICAgICAgICBwaWNrc1twYXJlbnQuaWRdID0ge1xyXG4gICAgICAgICAgICBwaWNrOnRoaXMudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgIHBvaW50czogc2VsZWN0ZWRwb2ludHNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQudGV4dENvbnRlbnQgIT0gdGhpcy50ZXh0Q29udGVudCkgY2hpbGQuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5wb2ludHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJveFwiKTtcclxuICAgICAgICBjb25zdCBnYW1lID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhcmZpeCcpO1xyXG4gICAgICAgIGNvbnN0IHRlYW1zID0gZ2FtZS5xdWVyeVNlbGVjdG9yQWxsKCcudGVhbScpO1xyXG5cclxuICAgICAgICBjb25zdCB0aW1lID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lJykuaWRcclxuICAgICAgICBjb25zdCB1bml4Tm93ID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG5cclxuICAgICAgICBpZiAodW5peE5vdyA+IHRpbWUpIHtcclxuICAgICAgICAgICAgbGV0IG1zZ0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycl9tc2cnKVxyXG4gICAgICAgICAgICBtc2dFbC5pbm5lclRleHQgPSBgQ2Fubm90IGNoYW5nZSBwb2ludHMgZm9yICR7Z2FtZS5pZH0sIGl0IGhhcyBhbHJlYWR5IGtpY2tvZmZlZGA7XHJcbiAgICAgICAgICAgIG1zZ0VsLnN0eWxlLmNvbG9yID0gJ3JlZCc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAocG9pbnRzUGlja2VkLmluY2x1ZGVzKHRoaXMudGV4dENvbnRlbnQpKSB7XHJcbiAgICAgICAgICAgIGlmIChwaWNrcy5oYXNPd25Qcm9wZXJ0eShnYW1lLmlkKSl7XHJcbiAgICAgICAgICAgICAgICBpZiAocGlja3NbZ2FtZS5pZF0ucG9pbnRzID09IHRoaXMudGV4dENvbnRlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50c1BpY2tlZCA9IHBvaW50c1BpY2tlZC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBwaWNrc1tnYW1lLmlkXS5wb2ludHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBpY2tzW2dhbWUuaWRdLnBvaW50cyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJ3doaXRlc21va2UnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcGlja3NbZ2FtZS5pZF0ucGljaykgZGVsZXRlIHBpY2tzW2dhbWUuaWRdXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJveCcpLmZvckVhY2goYnggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnguaWQgPT0gdGhpcy5pZCkgYnguc3R5bGUuYmFja2dyb3VuZCA9ICd3aGl0ZXNtb2tlJztcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBtc2dFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJfbXNnJylcclxuICAgICAgICAgICAgbXNnRWwuaW5uZXJUZXh0ID0gYFlvdSBjYW5ub3QgcmVwZWF0IGNvbmZpZGVuY2UgcG9pbnRzYDtcclxuICAgICAgICAgICAgbXNnRWwuc3R5bGUuY29sb3IgPSAncmVkJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyX21zZycpLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9IGNob3NlbkNvbG9yO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZCA9IG51bGw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHBpY2tzLmhhc093blByb3BlcnR5KGdhbWUuaWQpKXtcclxuICAgICAgICAgICAgaWYgKHBpY2tzW2dhbWUuaWRdLmhhc093blByb3BlcnR5KCdwb2ludHMnKSlwb2ludHNQaWNrZWQgPSBwb2ludHNQaWNrZWQuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gcGlja3NbZ2FtZS5pZF0ucG9pbnRzKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWQgPSBwaWNrc1tnYW1lLmlkXS5waWNrXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwaWNrc1tnYW1lLmlkXSA9IHtcclxuICAgICAgICAgICAgcGljazpzZWxlY3RlZCxcclxuICAgICAgICAgICAgcG9pbnRzOiB0aGlzLnRleHRDb250ZW50XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZC50ZXh0Q29udGVudCAhPSB0aGlzLnRleHRDb250ZW50KSBjaGlsZC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3doaXRlc21va2UnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBvaW50c1BpY2tlZC5wdXNoKFN0cmluZyhwaWNrc1tnYW1lLmlkXS5wb2ludHMpKVxyXG4gICAgICAgIGNvbnN0IGJ4cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gnKTtcclxuICAgICAgICBieHMuZm9yRWFjaChieCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwb2ludHNQaWNrZWQuaW5jbHVkZXMoYnguaWQpICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ4LnN0eWxlLmJhY2tncm91bmQgIT0gY2NSZ2IgJiBieC5zdHlsZS5iYWNrZ3JvdW5kICE9IGNob3NlbkNvbG9yKXtcclxuICAgICAgICAgICAgICAgICAgICBieC5zdHlsZS5iYWNrZ3JvdW5kID0gcGlja2VkUENvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGJ4LnN0eWxlLmJhY2tncm91bmQgPSAnd2hpdGVzbW9rZSc7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdGJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YicpXHJcbiAgICBwaWNrc1sndGInXSA9e1xyXG4gICAgICAgIHBpY2s6U3RyaW5nKHRiZWwudmFsdWUpLFxyXG4gICAgICAgIHBvaW50czowXHJcbiAgICB9XHJcbiAgICBzdWJtaXQod2VlayxwaWNrcyk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5Mb2dvdXRcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2dvdXRGYik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/profile.js\n");

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