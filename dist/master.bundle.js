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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   createUser: () => (/* binding */ createUser),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   initDb: () => (/* binding */ initDb),\n/* harmony export */   loginFb: () => (/* binding */ loginFb),\n/* harmony export */   logoutFb: () => (/* binding */ logoutFb),\n/* harmony export */   onAuthStateChanged: () => (/* reexport safe */ firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged),\n/* harmony export */   onAuthStateChangedFb: () => (/* binding */ onAuthStateChangedFb),\n/* harmony export */   updateName: () => (/* binding */ updateName),\n/* harmony export */   updatePasswordFb: () => (/* binding */ updatePasswordFb)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyC8J8_Bo2YSeM1aTkE3--bQLCaeuGU3hQE\",\n    authDomain: \"cfpicks-66e14.firebaseapp.com\",\n    projectId: \"cfpicks-66e14\",\n    storageBucket: \"cfpicks-66e14.appspot.com\",\n    messagingSenderId: \"924459609957\",\n    appId: \"1:924459609957:web:c1125a2a8f5147de313b8c\"\n};\n  \nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)();\n\nconst onAuthStateChangedFb = () => {\n    auth.onAuthStateChanged((user) => {\n        if (user) {\n            console.log('user mon :>> ', user);\n            const currPage = window.location.pathname.split(\"/\").pop();\n            if (currPage == 'index.html'){\n                window.location.href = './profile.html';\n            }\n        } else {\n            const currPage = window.location.pathname.split(\"/\").pop();\n            console.log('currPage :>> ', currPage);\n            if (currPage != 'index.html'){\n                window.location.replace('index.html');\n                const currentState = window.history.state;\n                window.history.replaceState(currentState, '', window.location.href);\n                window.onpopstate = function () {\n                window.history.replaceState(currentState, '', window.location.href);\n                };\n                \n            }\n        }\n    });\n};\n\nconst updateName = (displayName) => {\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updateProfile)(auth.currentUser, {\n        displayName: displayName\n      }).then(() => {\n        console.log('userCredential.user.displayName :>> ', auth.currentUser.displayName);\n      }).catch((error) => {\n        console.log('error :>> ', error);\n      });\n};\n\nconst initDb = (uid,displayName) => {\n    console.log('indb :>> ');\n    (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(db, `users/${uid}/`), {\n        \"name\": displayName,\n        \"week1\": {}\n    });\n};\n\nconst loginFb = (email, password) => {\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth,email,password)\n};\n\nconst logoutFb = () => {\n    sessionStorage.removeItem('siteSelection')\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\n};\n\nconst updatePasswordFb = (newPassword) => {\n    const user = auth.currentUser;\n    if (user) {\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(user,newPassword);\n    }\n    return Promise.reject(new Error('No user is currently signed in.'));\n};\n\nconst createUser = (email,password) => {\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(auth,email,password);\n}\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ21IO0FBQ3ZHOzs7QUFHekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBYTtBQUN6QixhQUFhLHNEQUFPO0FBQ3BCLFdBQVcsOERBQVc7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSw0REFBYTtBQUNqQjtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxzREFBRyxDQUFDLHNEQUFHLGNBQWMsSUFBSTtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsV0FBVyx5RUFBMEI7QUFDckM7O0FBRUE7QUFDQTtBQUNBLFdBQVcsc0RBQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2REFBYztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDZFQUE4QjtBQUN6Qzs7QUFFbUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvYXV0aC5qcz85MjkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkLCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbk91dCwgdXBkYXRlUGFzc3dvcmQsIHVwZGF0ZVByb2ZpbGUsIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IHsgZ2V0RGF0YWJhc2UsIHJlZiwgc2V0IH0gZnJvbSAnZmlyZWJhc2UvZGF0YWJhc2UnXG5cblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeUM4SjhfQm8yWVNlTTFhVGtFMy0tYlFMQ2FldUdVM2hRRVwiLFxuICAgIGF1dGhEb21haW46IFwiY2ZwaWNrcy02NmUxNC5maXJlYmFzZWFwcC5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwiY2ZwaWNrcy02NmUxNFwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiY2ZwaWNrcy02NmUxNC5hcHBzcG90LmNvbVwiLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjkyNDQ1OTYwOTk1N1wiLFxuICAgIGFwcElkOiBcIjE6OTI0NDU5NjA5OTU3OndlYjpjMTEyNWEyYThmNTE0N2RlMzEzYjhjXCJcbn07XG4gIFxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xuY29uc3QgZGIgPSBnZXREYXRhYmFzZSgpO1xuXG5jb25zdCBvbkF1dGhTdGF0ZUNoYW5nZWRGYiA9ICgpID0+IHtcbiAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgbW9uIDo+PiAnLCB1c2VyKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJQYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5wb3AoKTtcbiAgICAgICAgICAgIGlmIChjdXJyUGFnZSA9PSAnaW5kZXguaHRtbCcpe1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vcHJvZmlsZS5odG1sJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJQYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5wb3AoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjdXJyUGFnZSA6Pj4gJywgY3VyclBhZ2UpO1xuICAgICAgICAgICAgaWYgKGN1cnJQYWdlICE9ICdpbmRleC5odG1sJyl7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJ2luZGV4Lmh0bWwnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5zdGF0ZTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoY3VycmVudFN0YXRlLCAnJywgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShjdXJyZW50U3RhdGUsICcnLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuY29uc3QgdXBkYXRlTmFtZSA9IChkaXNwbGF5TmFtZSkgPT4ge1xuICAgIHVwZGF0ZVByb2ZpbGUoYXV0aC5jdXJyZW50VXNlciwge1xuICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWVcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndXNlckNyZWRlbnRpYWwudXNlci5kaXNwbGF5TmFtZSA6Pj4gJywgYXV0aC5jdXJyZW50VXNlci5kaXNwbGF5TmFtZSk7XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIDo+PiAnLCBlcnJvcik7XG4gICAgICB9KTtcbn07XG5cbmNvbnN0IGluaXREYiA9ICh1aWQsZGlzcGxheU5hbWUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaW5kYiA6Pj4gJyk7XG4gICAgc2V0KHJlZihkYiwgYHVzZXJzLyR7dWlkfS9gKSwge1xuICAgICAgICBcIm5hbWVcIjogZGlzcGxheU5hbWUsXG4gICAgICAgIFwid2VlazFcIjoge31cbiAgICB9KTtcbn07XG5cbmNvbnN0IGxvZ2luRmIgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgcmV0dXJuIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsZW1haWwscGFzc3dvcmQpXG59O1xuXG5jb25zdCBsb2dvdXRGYiA9ICgpID0+IHtcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdzaXRlU2VsZWN0aW9uJylcbiAgICByZXR1cm4gc2lnbk91dChhdXRoKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVBhc3N3b3JkRmIgPSAobmV3UGFzc3dvcmQpID0+IHtcbiAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcbiAgICBpZiAodXNlcikge1xuICAgICAgICByZXR1cm4gdXBkYXRlUGFzc3dvcmQodXNlcixuZXdQYXNzd29yZCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ05vIHVzZXIgaXMgY3VycmVudGx5IHNpZ25lZCBpbi4nKSk7XG59O1xuXG5jb25zdCBjcmVhdGVVc2VyID0gKGVtYWlsLHBhc3N3b3JkKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLGVtYWlsLHBhc3N3b3JkKTtcbn1cblxuZXhwb3J0IHsgYXV0aCwgZGIsIG9uQXV0aFN0YXRlQ2hhbmdlZEZiLCBsb2dpbkZiLCBsb2dvdXRGYiwgdXBkYXRlUGFzc3dvcmRGYiwgY3JlYXRlVXNlciwgdXBkYXRlTmFtZSwgaW5pdERiLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/auth.js\n");

/***/ }),

/***/ "./src/js/master.js":
/*!**************************!*\
  !*** ./src/js/master.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\n\n\n\n(0,_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChangedFb)();\n\n$(document).ready(function () {\n    $(\"#header\").load(\"../src/pages/header.html\")\n});\n\nasync function fetchData() {\n    let data;\n    await new Promise((resolve, reject) => {\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users`) , (snapshot) => {\n            data = snapshot.val();\n            resolve();\n        });\n    });\n    return data;\n}\n\n\nfunction initTable(userData,data,week) {\n    let tableBody = document.getElementById('tbody');\n    let winner = {\n        \"points\":0,\n        \"idx\":0\n    }\n    let cnt = 0;\n\n    for (let user in userData) {\n        let points = 0;\n        const weekInfo = userData[user][week];\n        let row = document.createElement('tr')\n        let cell = document.createElement('td');\n        cell.textContent = userData[user]['name']\n        row.append(cell)\n\n        for (let game in weekInfo){\n            const p = weekInfo[game]['pick'];\n            const pnts = weekInfo[game]['points'];\n            let cell = document.createElement('td');\n            cell.textContent = `${p} : ${pnts}`\n            row.append(cell)\n            if (data[week][game][\"winner\"] == p)points += parseInt(pnts)\n        }\n        if (points > winner[\"points\"]){\n            winner[\"points\"] = points;\n            winner['idx'] = cnt\n        }\n        let cellt = document.createElement('td');\n        cellt.textContent = 'tie'\n        row.append(cellt)\n\n        let cellp = document.createElement('td');\n        cellp.textContent = points\n        row.append(cellp)\n\n        tableBody.append(row)\n        cnt++\n    }\n\n    Array.from(tableBody.getElementsByTagName('tr')).forEach((row,idx) =>{\n        if (idx == winner['idx']) row.style.background = '#c9e782';\n    })\n}\n\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();\nconst userData = await fetchData();\nconst data = await (0,d3__WEBPACK_IMPORTED_MODULE_1__.json)('../data//winners.json');\n\nlet weekEl = document.getElementById('selected-week')\nlet week = weekEl.textContent.replace(' ','').toLocaleLowerCase();\n//if (data.hasOwnProperty(week)) initTable(userData,data,week);\n\nconst sidebar = document.getElementById('sidebar')\nconst weeks = sidebar.querySelectorAll('.nav-link')\n\nweeks.forEach(w => { \n    let week = w.innerText.replace(' ','').toLocaleLowerCase()\n    const table = document.getElementById('tbody');\n    w.addEventListener('click', () => {\n        weekEl.textContent = w.innerText\n        while (table.firstChild){\n            table.removeChild(table.firstChild);\n        }\n        //if (data.hasOwnProperty(week)) initTable(userData,data,week);\n    })\n})\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFzdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtFO0FBQ3ZCO0FBQ2pCOztBQUUxQiwyREFBb0I7O0FBRXBCO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQU8sQ0FBQyxzREFBRztBQUNuQjtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxHQUFHLElBQUksS0FBSztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsV0FBVyw4REFBVztBQUN0QjtBQUNBLG1CQUFtQix3Q0FBSTs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvbWFzdGVyLmpzPzEzZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RGF0YWJhc2UsIHJlZiwgc2V0LCBvblZhbHVlIH0gZnJvbSAnZmlyZWJhc2UvZGF0YWJhc2UnXG5pbXBvcnQge29uQXV0aFN0YXRlQ2hhbmdlZEZifSBmcm9tICcuL2F1dGgnXG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnZDMnO1xuXG5vbkF1dGhTdGF0ZUNoYW5nZWRGYigpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJChcIiNoZWFkZXJcIikubG9hZChcIi4uL3NyYy9wYWdlcy9oZWFkZXIuaHRtbFwiKVxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICBsZXQgZGF0YTtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIG9uVmFsdWUocmVmKGRiLCBgdXNlcnNgKSAsIChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbn1cblxuXG5mdW5jdGlvbiBpbml0VGFibGUodXNlckRhdGEsZGF0YSx3ZWVrKSB7XG4gICAgbGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0Ym9keScpO1xuICAgIGxldCB3aW5uZXIgPSB7XG4gICAgICAgIFwicG9pbnRzXCI6MCxcbiAgICAgICAgXCJpZHhcIjowXG4gICAgfVxuICAgIGxldCBjbnQgPSAwO1xuXG4gICAgZm9yIChsZXQgdXNlciBpbiB1c2VyRGF0YSkge1xuICAgICAgICBsZXQgcG9pbnRzID0gMDtcbiAgICAgICAgY29uc3Qgd2Vla0luZm8gPSB1c2VyRGF0YVt1c2VyXVt3ZWVrXTtcbiAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcbiAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gdXNlckRhdGFbdXNlcl1bJ25hbWUnXVxuICAgICAgICByb3cuYXBwZW5kKGNlbGwpXG5cbiAgICAgICAgZm9yIChsZXQgZ2FtZSBpbiB3ZWVrSW5mbyl7XG4gICAgICAgICAgICBjb25zdCBwID0gd2Vla0luZm9bZ2FtZV1bJ3BpY2snXTtcbiAgICAgICAgICAgIGNvbnN0IHBudHMgPSB3ZWVrSW5mb1tnYW1lXVsncG9pbnRzJ107XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gYCR7cH0gOiAke3BudHN9YFxuICAgICAgICAgICAgcm93LmFwcGVuZChjZWxsKVxuICAgICAgICAgICAgaWYgKGRhdGFbd2Vla11bZ2FtZV1bXCJ3aW5uZXJcIl0gPT0gcClwb2ludHMgKz0gcGFyc2VJbnQocG50cylcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9pbnRzID4gd2lubmVyW1wicG9pbnRzXCJdKXtcbiAgICAgICAgICAgIHdpbm5lcltcInBvaW50c1wiXSA9IHBvaW50cztcbiAgICAgICAgICAgIHdpbm5lclsnaWR4J10gPSBjbnRcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2VsbHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBjZWxsdC50ZXh0Q29udGVudCA9ICd0aWUnXG4gICAgICAgIHJvdy5hcHBlbmQoY2VsbHQpXG5cbiAgICAgICAgbGV0IGNlbGxwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgY2VsbHAudGV4dENvbnRlbnQgPSBwb2ludHNcbiAgICAgICAgcm93LmFwcGVuZChjZWxscClcblxuICAgICAgICB0YWJsZUJvZHkuYXBwZW5kKHJvdylcbiAgICAgICAgY250KytcbiAgICB9XG5cbiAgICBBcnJheS5mcm9tKHRhYmxlQm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndHInKSkuZm9yRWFjaCgocm93LGlkeCkgPT57XG4gICAgICAgIGlmIChpZHggPT0gd2lubmVyWydpZHgnXSkgcm93LnN0eWxlLmJhY2tncm91bmQgPSAnI2M5ZTc4Mic7XG4gICAgfSlcbn1cblxuY29uc3QgZGIgPSBnZXREYXRhYmFzZSgpO1xuY29uc3QgdXNlckRhdGEgPSBhd2FpdCBmZXRjaERhdGEoKTtcbmNvbnN0IGRhdGEgPSBhd2FpdCBqc29uKCcuLi9kYXRhLy93aW5uZXJzLmpzb24nKTtcblxubGV0IHdlZWtFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZC13ZWVrJylcbmxldCB3ZWVrID0gd2Vla0VsLnRleHRDb250ZW50LnJlcGxhY2UoJyAnLCcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuLy9pZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSh3ZWVrKSkgaW5pdFRhYmxlKHVzZXJEYXRhLGRhdGEsd2Vlayk7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpXG5jb25zdCB3ZWVrcyA9IHNpZGViYXIucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJylcblxud2Vla3MuZm9yRWFjaCh3ID0+IHsgXG4gICAgbGV0IHdlZWsgPSB3LmlubmVyVGV4dC5yZXBsYWNlKCcgJywnJykudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rib2R5Jyk7XG4gICAgdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgd2Vla0VsLnRleHRDb250ZW50ID0gdy5pbm5lclRleHRcbiAgICAgICAgd2hpbGUgKHRhYmxlLmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgdGFibGUucmVtb3ZlQ2hpbGQodGFibGUuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSh3ZWVrKSkgaW5pdFRhYmxlKHVzZXJEYXRhLGRhdGEsd2Vlayk7XG4gICAgfSlcbn0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/master.js\n");

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