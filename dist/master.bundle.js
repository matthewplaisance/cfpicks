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

/***/ "./src/js/master.js":
/*!**************************!*\
  !*** ./src/js/master.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\n\r\n\r\n(0,_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChangedFb)();\r\n\r\n$(document).ready(function () {\r\n    $(\"#header\").load(\"../src/pages/header.html\")\r\n});\r\n\r\nasync function fetchData() {\r\n    let data;\r\n    await new Promise((resolve, reject) => {\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users`) , (snapshot) => {\r\n            data = snapshot.val();\r\n            resolve();\r\n        });\r\n    });\r\n    return data;\r\n}\r\n\r\n\r\nfunction initTable(userData,data,week) {\r\n    let tableBody = document.getElementById('tbody');\r\n    let winner = {\r\n        \"points\":0,\r\n        \"idx\":0\r\n    }\r\n    let cnt = 0;\r\n\r\n    for (let user in userData) {\r\n        let points = 0;\r\n        const weekInfo = userData[user][week];\r\n        let row = document.createElement('tr')\r\n        let cell = document.createElement('td');\r\n        cell.textContent = userData[user]['name']\r\n        row.append(cell)\r\n\r\n        for (let game in weekInfo){\r\n            const p = weekInfo[game]['pick'];\r\n            const pnts = weekInfo[game]['points'];\r\n            let cell = document.createElement('td');\r\n            cell.textContent = `${p} : ${pnts}`\r\n            row.append(cell)\r\n            if (data[week][game][\"winner\"] == p)points += parseInt(pnts)\r\n        }\r\n        if (points > winner[\"points\"]){\r\n            winner[\"points\"] = points;\r\n            winner['idx'] = cnt\r\n        }\r\n        let cellt = document.createElement('td');\r\n        cellt.textContent = 'tie'\r\n        row.append(cellt)\r\n\r\n        let cellp = document.createElement('td');\r\n        cellp.textContent = points\r\n        row.append(cellp)\r\n\r\n        tableBody.append(row)\r\n        cnt++\r\n    }\r\n\r\n    Array.from(tableBody.getElementsByTagName('tr')).forEach((row,idx) =>{\r\n        console.log('idx :>> ', idx);\r\n        console.log('row :>> ', row);\r\n        if (idx == winner['idx']) row.style.background = '#c9e782';\r\n    })\r\n}\r\n\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();\r\nconst userData = await fetchData();\r\nconst data = await (0,d3__WEBPACK_IMPORTED_MODULE_1__.json)('../data//winners.json');\r\nconsole.log('data :>> ', userData);\r\nlet weekEl = document.getElementById('selected-week')\r\nlet week = weekEl.textContent.replace(' ','').toLocaleLowerCase();\r\n//if (data.hasOwnProperty(week)) initTable(userData,data,week);\r\n\r\nconst sidebar = document.getElementById('sidebar')\r\nconst weeks = sidebar.querySelectorAll('.nav-link')\r\n\r\nweeks.forEach(w => { \r\n    let week = w.innerText.replace(' ','').toLocaleLowerCase()\r\n    const table = document.getElementById('tbody');\r\n    w.addEventListener('click', () => {\r\n        weekEl.textContent = w.innerText\r\n        while (table.firstChild){\r\n            table.removeChild(table.firstChild);\r\n        }\r\n        //if (data.hasOwnProperty(week)) initTable(userData,data,week);\r\n    })\r\n})\r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFzdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtFO0FBQ3ZCO0FBQ2pCO0FBQzFCO0FBQ0EsMkRBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQU8sQ0FBQyxzREFBRztBQUNuQjtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsR0FBRyxJQUFJLEtBQUs7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVyw4REFBVztBQUN0QjtBQUNBLG1CQUFtQix3Q0FBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2QtMS8uL3NyYy9qcy9tYXN0ZXIuanM/MTNmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXREYXRhYmFzZSwgcmVmLCBzZXQsIG9uVmFsdWUgfSBmcm9tICdmaXJlYmFzZS9kYXRhYmFzZSdcclxuaW1wb3J0IHtvbkF1dGhTdGF0ZUNoYW5nZWRGYn0gZnJvbSAnLi9hdXRoJ1xyXG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnZDMnO1xyXG5cclxub25BdXRoU3RhdGVDaGFuZ2VkRmIoKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjaGVhZGVyXCIpLmxvYWQoXCIuLi9zcmMvcGFnZXMvaGVhZGVyLmh0bWxcIilcclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICBsZXQgZGF0YTtcclxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBvblZhbHVlKHJlZihkYiwgYHVzZXJzYCkgLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdFRhYmxlKHVzZXJEYXRhLGRhdGEsd2Vlaykge1xyXG4gICAgbGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0Ym9keScpO1xyXG4gICAgbGV0IHdpbm5lciA9IHtcclxuICAgICAgICBcInBvaW50c1wiOjAsXHJcbiAgICAgICAgXCJpZHhcIjowXHJcbiAgICB9XHJcbiAgICBsZXQgY250ID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCB1c2VyIGluIHVzZXJEYXRhKSB7XHJcbiAgICAgICAgbGV0IHBvaW50cyA9IDA7XHJcbiAgICAgICAgY29uc3Qgd2Vla0luZm8gPSB1c2VyRGF0YVt1c2VyXVt3ZWVrXTtcclxuICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxyXG4gICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gdXNlckRhdGFbdXNlcl1bJ25hbWUnXVxyXG4gICAgICAgIHJvdy5hcHBlbmQoY2VsbClcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZ2FtZSBpbiB3ZWVrSW5mbyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSB3ZWVrSW5mb1tnYW1lXVsncGljayddO1xyXG4gICAgICAgICAgICBjb25zdCBwbnRzID0gd2Vla0luZm9bZ2FtZV1bJ3BvaW50cyddO1xyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBgJHtwfSA6ICR7cG50c31gXHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmQoY2VsbClcclxuICAgICAgICAgICAgaWYgKGRhdGFbd2Vla11bZ2FtZV1bXCJ3aW5uZXJcIl0gPT0gcClwb2ludHMgKz0gcGFyc2VJbnQocG50cylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvaW50cyA+IHdpbm5lcltcInBvaW50c1wiXSl7XHJcbiAgICAgICAgICAgIHdpbm5lcltcInBvaW50c1wiXSA9IHBvaW50cztcclxuICAgICAgICAgICAgd2lubmVyWydpZHgnXSA9IGNudFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2VsbHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNlbGx0LnRleHRDb250ZW50ID0gJ3RpZSdcclxuICAgICAgICByb3cuYXBwZW5kKGNlbGx0KVxyXG5cclxuICAgICAgICBsZXQgY2VsbHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNlbGxwLnRleHRDb250ZW50ID0gcG9pbnRzXHJcbiAgICAgICAgcm93LmFwcGVuZChjZWxscClcclxuXHJcbiAgICAgICAgdGFibGVCb2R5LmFwcGVuZChyb3cpXHJcbiAgICAgICAgY250KytcclxuICAgIH1cclxuXHJcbiAgICBBcnJheS5mcm9tKHRhYmxlQm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndHInKSkuZm9yRWFjaCgocm93LGlkeCkgPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lkeCA6Pj4gJywgaWR4KTtcclxuICAgICAgICBjb25zb2xlLmxvZygncm93IDo+PiAnLCByb3cpO1xyXG4gICAgICAgIGlmIChpZHggPT0gd2lubmVyWydpZHgnXSkgcm93LnN0eWxlLmJhY2tncm91bmQgPSAnI2M5ZTc4Mic7XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBkYiA9IGdldERhdGFiYXNlKCk7XHJcbmNvbnN0IHVzZXJEYXRhID0gYXdhaXQgZmV0Y2hEYXRhKCk7XHJcbmNvbnN0IGRhdGEgPSBhd2FpdCBqc29uKCcuLi9kYXRhLy93aW5uZXJzLmpzb24nKTtcclxuY29uc29sZS5sb2coJ2RhdGEgOj4+ICcsIHVzZXJEYXRhKTtcclxubGV0IHdlZWtFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZC13ZWVrJylcclxubGV0IHdlZWsgPSB3ZWVrRWwudGV4dENvbnRlbnQucmVwbGFjZSgnICcsJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbi8vaWYgKGRhdGEuaGFzT3duUHJvcGVydHkod2VlaykpIGluaXRUYWJsZSh1c2VyRGF0YSxkYXRhLHdlZWspO1xyXG5cclxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJylcclxuY29uc3Qgd2Vla3MgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGluaycpXHJcblxyXG53ZWVrcy5mb3JFYWNoKHcgPT4geyBcclxuICAgIGxldCB3ZWVrID0gdy5pbm5lclRleHQucmVwbGFjZSgnICcsJycpLnRvTG9jYWxlTG93ZXJDYXNlKClcclxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rib2R5Jyk7XHJcbiAgICB3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHdlZWtFbC50ZXh0Q29udGVudCA9IHcuaW5uZXJUZXh0XHJcbiAgICAgICAgd2hpbGUgKHRhYmxlLmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgICAgICB0YWJsZS5yZW1vdmVDaGlsZCh0YWJsZS5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9pZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSh3ZWVrKSkgaW5pdFRhYmxlKHVzZXJEYXRhLGRhdGEsd2Vlayk7XHJcbiAgICB9KVxyXG59KVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/master.js\n");

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