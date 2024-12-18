/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   createUser: () => (/* binding */ createUser),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   initDb: () => (/* binding */ initDb),\n/* harmony export */   loginFb: () => (/* binding */ loginFb),\n/* harmony export */   logoutFb: () => (/* binding */ logoutFb),\n/* harmony export */   onAuthStateChanged: () => (/* reexport safe */ firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged),\n/* harmony export */   onAuthStateChangedFb: () => (/* binding */ onAuthStateChangedFb),\n/* harmony export */   updateName: () => (/* binding */ updateName),\n/* harmony export */   updatePasswordFb: () => (/* binding */ updatePasswordFb)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n\r\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n    apiKey: \"AIzaSyC8J8_Bo2YSeM1aTkE3--bQLCaeuGU3hQE\",\r\n    authDomain: \"cfpicks-66e14.firebaseapp.com\",\r\n    projectId: \"cfpicks-66e14\",\r\n    storageBucket: \"cfpicks-66e14.appspot.com\",\r\n    messagingSenderId: \"924459609957\",\r\n    appId: \"1:924459609957:web:c1125a2a8f5147de313b8c\"\r\n};\r\n  \r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)();\r\n\r\nconst onAuthStateChangedFb = () => {\r\n    auth.onAuthStateChanged((user) => {\r\n        if (user) {\r\n            console.log('user mon :>> ', user);\r\n            localStorage.uid = user.uid;\r\n            const currPage = window.location.pathname.split(\"/\").pop();\r\n            if (currPage == 'index.html'){\r\n                window.location.href = './profile.html';\r\n            }\r\n        } else {\r\n            const currPage = window.location.pathname.split(\"/\").pop();\r\n            console.log('currPage :>> ', currPage);\r\n            if (currPage != 'index.html'){\r\n                window.location.replace('index.html');\r\n                const currentState = window.history.state;\r\n                window.history.replaceState(currentState, '', window.location.href);\r\n                window.onpopstate = function () {\r\n                window.history.replaceState(currentState, '', window.location.href);\r\n                };\r\n                \r\n            }\r\n        }\r\n    });\r\n};\r\n\r\nconst updateName = (displayName) => {\r\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updateProfile)(auth.currentUser, {\r\n        displayName: displayName\r\n      }).then(() => {\r\n        console.log('userCredential.user.displayName :>> ', auth.currentUser.displayName);\r\n      }).catch((error) => {\r\n        console.log('error :>> ', error);\r\n      });\r\n};\r\n\r\nconst initDb = (uid,displayName) => {\r\n    console.log('indb :>> ');\r\n    (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(db, `users/${uid}/`), {\r\n        \"name\": displayName,\r\n        \"week1\": {}\r\n    });\r\n};\r\n\r\nconst loginFb = (email, password) => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth,email,password)\r\n};\r\n\r\nconst logoutFb = () => {\r\n    sessionStorage.removeItem('siteSelection')\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\r\n};\r\n\r\nconst updatePasswordFb = (newPassword) => {\r\n    const user = auth.currentUser;\r\n    if (user) {\r\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(user,newPassword);\r\n    }\r\n    return Promise.reject(new Error('No user is currently signed in.'));\r\n};\r\n\r\nconst createUser = (email,password) => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(auth,email,password);\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://prod-1/./src/js/auth.js?");

/***/ }),

/***/ "./src/js/cfp.mjs":
/*!************************!*\
  !*** ./src/js/cfp.mjs ***!
  \************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.js */ \"./src/js/auth.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\n\r\n\r\n//Elements\r\nconst teams = document.querySelectorAll('[team-id]');\r\nconst cpMenus = document.querySelectorAll('select[game-id]');\r\nconst rankingMenus = document.querySelectorAll('[rank-id]');\r\nconst tbInput = document.getElementById('tie-breaker');\r\nconst errorMessage = document.getElementById('error-message');\r\n \r\n\r\n//main\r\nconst matches = {1:['Oregon','Washington',1701478800],\r\n                2:['OSU','Texas',1701536400],\r\n                3:['Alabama','Georgia',1701550800],\r\n                4:['Florida St','Louisville',1701565200],\r\n                5:['Iowa','Michigan',1701565200],\r\n}\r\n\r\nlet selected = {1:{'team':null,'cp':null},\r\n                2:{'team':null,'cp':null},\r\n                3:{'team':null,'cp':null},\r\n                4:{'team':null,'cp':null},\r\n                5:{'team':null,'cp':null},\r\n}\r\n\r\nlet rankings = {\r\n    1:null,\r\n    2:null,\r\n    3:null,\r\n    4:null,\r\n    5:null,\r\n    6:null,\r\n    7:null,\r\n    8:null,\r\n}\r\n\r\n;(0,_auth_js__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChangedFb)();\r\nconst uid = localStorage.uid;\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();\r\nconst week = 'week14'\r\nlet userData = await fetchData(uid,db);\r\nconsole.log('userData :>> ', userData);\r\n\r\nif (userData){\r\n    if (userData.hasOwnProperty(week)) setupUI(userData[week]);\r\n    if (userData.hasOwnProperty(\"name\")) localStorage.displayName = userData[\"name\"]   \r\n}\r\n//\r\n\r\n\r\n//Listeners\r\n$(document).ready(function () {\r\n    $(\"#header\").load(\"../src/pages/header.html\")\r\n});\r\n\r\ndocument.getElementById('submit-button').addEventListener('click',() => {\r\n    submitData();\r\n});\r\n\r\ndocument.getElementById(\"logout-button\").addEventListener('click', _auth_js__WEBPACK_IMPORTED_MODULE_2__.logoutFb);\r\n\r\nteams.forEach(team => {\r\n    team.addEventListener('click', () => {\r\n        selectTeam(team);\r\n    })\r\n})\r\n\r\ncpMenus.forEach(cpMenu => {\r\n    let original = cpMenu.value;\r\n    cpMenu.addEventListener('change', () => {\r\n        const game = cpMenu.getAttribute('game-id');\r\n        const startTime = matches[game][2];\r\n        const unixNow = Math.floor(new Date().getTime() / 1000);\r\n\r\n\r\n        if (unixNow > startTime) {\r\n            cpMenu.value = original;\r\n            errorMessage.textContent = 'Game has already started';\r\n            errorMessage.style.color = 'red';\r\n        }else {\r\n            selected[game]['cp'] = cpMenu.value;\r\n            original = cpMenu.value;\r\n\r\n        }\r\n    })\r\n    \r\n})\r\n\r\nrankingMenus.forEach(menu => {\r\n    menu.addEventListener('change', () => {\r\n        const rank = menu.getAttribute('rank-id');\r\n        rankings[rank] = menu.value\r\n    })\r\n})\r\n\r\n\r\n//Event Logic\r\nfunction selectTeam(team){\r\n    const teamName = team.getAttribute('team-id');\r\n    const game = team.getAttribute('game-id');\r\n    const info = matches[game];\r\n\r\n    const unixNow = Math.floor(new Date().getTime() / 1000);\r\n    if (unixNow > info[2]) return;\r\n\r\n    const othTeamName = info[0] == teamName ? info[1] : info[0]\r\n    const othTeam = document.querySelector(`[team-id=\"${othTeamName}\"]`)\r\n\r\n    const isSelected = team.style.opacity == '0.3' ? false : true\r\n\r\n    if (isSelected){\r\n        othTeam.style.opacity = '0.3';\r\n    }else {\r\n        team.style.opacity = '1.0';\r\n        othTeam.style.opacity = '0.3';\r\n    }\r\n    selected[game]['team'] = teamName;\r\n}\r\n\r\nasync function setupUI(data) {\r\n    for (let key in data) {\r\n        if (key.includes('game')) setupGame(data,key);\r\n        else if (key.includes('rank')) setupRank(data,key);\r\n        else if (key == 'tb'){\r\n            tbInput.value = data[key]['pick'];\r\n        }\r\n    }\r\n}\r\n\r\nfunction allowSubmit() {\r\n    if (hasDuplicate(Object.values(rankings))){\r\n        errorMessage.textContent = `You choose a team twice in the rankings`;\r\n        errorMessage.style.color = 'red';\r\n        return false;\r\n    }\r\n\r\n    const cpChosen = Object.values(selected).map(obj => obj['cp']);\r\n    if (hasDuplicate(cpChosen)){\r\n        errorMessage.textContent = `You choose the same confidence points for multiple teams`;\r\n        errorMessage.style.color = 'red';\r\n        return false;\r\n    }\r\n\r\n    for (let game in selected) {\r\n        const team = selected[game]['team'];\r\n        const cp = selected[game]['cp'];\r\n        \r\n        if (!team && cp){\r\n            errorMessage.textContent = `You chose a confidence level but no team for game ${game}`;\r\n            errorMessage.style.color = 'red';\r\n            return false;\r\n        }\r\n        if (team && !cp){\r\n            errorMessage.textContent = `You chose a team but no confidence level for game ${game}`;\r\n            errorMessage.style.color = 'red';\r\n            return false;\r\n        }\r\n    }\r\n\r\n    return true;\r\n}\r\n\r\nasync function submitData() {\r\n    if (!allowSubmit()) return;\r\n    const tb = tbInput.value;\r\n\r\n    try{\r\n        errorMessage.textContent = 'Submitting...';\r\n        errorMessage.style.color = 'black';\r\n\r\n        for (let game in selected) {\r\n            const team = selected[game]['team'];\r\n            const cp = selected[game]['cp'];\r\n\r\n            try {\r\n                await (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}/${week}/game${game}`), {\r\n                  \"pick\": team,\r\n                  \"points\": String(cp)\r\n                });\r\n              } catch (error) {\r\n                errorMessage.textContent = error;\r\n                errorMessage.style.color = 'red';\r\n                return;\r\n              }\r\n        }\r\n\r\n        for (let rank in rankings) {\r\n            const team = rankings[rank];\r\n\r\n            try {\r\n                await (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}/${week}/rank${rank}`), {\r\n                  \"pick\": team,\r\n                });\r\n\r\n              } catch (error) {\r\n                errorMessage.textContent = error;\r\n                errorMessage.style.color = 'red';\r\n                return;\r\n              }\r\n\r\n        }\r\n\r\n        try {\r\n            await (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}/${week}/tb`), {\r\n              \"pick\": tb,\r\n            });\r\n\r\n        } catch (error) {\r\n        errorMessage.textContent = error;\r\n        errorMessage.style.color = 'red';\r\n        return;\r\n        }\r\n        \r\n        errorMessage.textContent = 'Submitted!';\r\n        errorMessage.style.color = 'green';\r\n        \r\n    }catch (err) {\r\n        errorMessage.textContent = `FB Err: ${err}`;\r\n        errorMessage.style.color = 'red';\r\n        return;\r\n    }\r\n    \r\n}\r\n\r\n\r\n//Functions\r\nasync function fetchData(uid,db) {\r\n    let res;\r\n    await new Promise((resolve, reject) => {\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, `users/${uid}`) , (snapshot) => {\r\n            const data = snapshot.val();\r\n            res = data;\r\n            resolve();\r\n        });\r\n    });\r\n    return res;\r\n}\r\n\r\nfunction hasDuplicate(arr) {\r\n    arr = arr.filter(val => val !== null);\r\n    return new Set(arr).size !== arr.length;\r\n}\r\n\r\nfunction setupGame(data,key) {\r\n    const gameNum = key.replace('game','');\r\n    const info = matches[gameNum];\r\n\r\n    if (data[key].hasOwnProperty('pick')){\r\n        const teamName = data[key]['pick'];\r\n        const cp = data[key]['points'];\r\n\r\n        selected[gameNum]['team'] = teamName;\r\n        selected[gameNum]['cp'] = cp;\r\n\r\n\r\n        const othTeamName = info[0] == teamName ? info[1] : info[0];\r\n        const othTeam = document.querySelector(`[team-id=\"${othTeamName}\"]`);\r\n        othTeam.style.opacity = '0.3';\r\n\r\n        const cpMenu = document.querySelector(`select[game-id=\"${gameNum}\"]`);\r\n        cpMenu.value = cp;\r\n    }\r\n}\r\n\r\nfunction setupRank(data,key) {\r\n    const rank = key.replace('rank','');\r\n    const team = data[key]['pick'];\r\n    const menu = document.querySelector(`[rank-id=\"${rank}\"]`);\r\n\r\n    rankings[rank] = team;\r\n    menu.value = team;\r\n}\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://prod-1/./src/js/cfp.mjs?");

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
/******/ 			"cfp": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-d0574a","vendors-node_modules_d3_src_index_js"], () => (__webpack_require__("./src/js/cfp.mjs")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;