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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n// entry point \r\n\r\n\r\n\r\n\r\nconst initStorage = (userCreds) => {\r\n  let initTime = window.innerWidth < 768 ? 31 : 0;\r\n  localStorage.setItem('initTime',initTime);\r\n  if (localStorage.getItem('initScale') == null) localStorage.setItem('initScale','linear');\r\n  localStorage.setItem('uid', userCreds.uid);\r\n  localStorage.setItem('displayName', userCreds.displayName);\r\n  sessionStorage.setItem('region', 'ST');\r\n  sessionStorage.changePwd = false;\r\n};\r\n\r\nconst login = async () => {\r\n  let cleanUid = _ui__WEBPACK_IMPORTED_MODULE_0__.userName.value.replace(/\\s/g,\"\");\r\n  const password = _ui__WEBPACK_IMPORTED_MODULE_0__.userPassword.value;\r\n\r\n  if (cleanUid.substring(cleanUid.length - 8) != '@cml.com'){\r\n    cleanUid = `${cleanUid}@cml.com`;\r\n  }\r\n\r\n  (0,_auth__WEBPACK_IMPORTED_MODULE_1__.loginFb)(cleanUid,password).then((userCredential) => {\r\n    console.log('userCredential :>> ', userCredential);\r\n    initStorage(userCredential.user);\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.showApp)();\r\n    debugger;\r\n  }).catch((err) => {\r\n    console.log('err :>> ', err);\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.showLoginError)(err);\r\n  })\r\n};\r\n\r\nconst changePwd = async () => {\r\n  if (_ui__WEBPACK_IMPORTED_MODULE_0__.newPwd.value !== _ui__WEBPACK_IMPORTED_MODULE_0__.newPwdRpt.value){\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.showPwdErr)('Passwords do not match');\r\n    return;\r\n  }\r\n  (0,_auth__WEBPACK_IMPORTED_MODULE_1__.updatePasswordFb)(_ui__WEBPACK_IMPORTED_MODULE_0__.newPwd.value).then(() => {\r\n    sessionStorage.changePwd = \"success\";\r\n    window.location.href = './index.html'\r\n  }).catch((err) => {\r\n    console.log('err :>> ', err);\r\n  });\r\n};\r\n\r\nconst init = () => {\r\n  const state = sessionStorage.changePwd;\r\n\r\n  if (state == \"true\"){\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.formUpdate.style.display = 'block';\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.form.style.display = 'none';\r\n  }else if (state == \"success\"){\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.formUpdate.style.display = 'none';\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.form.style.display = 'block';\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.showLoginError)(\"Please login back in with new password\");\r\n  }else {\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.formUpdate.style.display = 'none';\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.form.style.display = 'block';\r\n  }\r\n\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.btnLogin.addEventListener('click', login);\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.btnChangePwd.addEventListener('click',changePwd);\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.backBtn.addEventListener('click', () => {\r\n    window.location.href = './profile.html';\r\n    sessionStorage.changePwd = false;\r\n  })\r\n  \r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.form.addEventListener(\"keydown\", function(event) {\r\n    if (event.key === \"Enter\") {\r\n      event.preventDefault();\r\n      _ui__WEBPACK_IMPORTED_MODULE_0__.btnLogin.click();\r\n    }\r\n  });\r\n  \r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.formUpdate.addEventListener(\"keydown\", function(event) {\r\n    if (event.key == \"Enter\") {\r\n      event.preventDefault();\r\n      _ui__WEBPACK_IMPORTED_MODULE_0__.btnChangePwd.click();\r\n      \r\n    }\r\n  })\r\n};\r\n\r\nwindow.onload = function () {\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.hidePwdErr)();\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.hideLoginError)();\r\n  init();\r\n}();\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFpQmE7QUFDYjtBQUNrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUNBQVE7QUFDekIsbUJBQW1CLDZDQUFZO0FBQy9CO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0EsRUFBRSw4Q0FBTztBQUNUO0FBQ0E7QUFDQSxJQUFJLDRDQUFPO0FBQ1g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxJQUFJLG1EQUFjO0FBQ2xCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVDQUFNLFdBQVcsMENBQVM7QUFDaEMsSUFBSSwrQ0FBVTtBQUNkO0FBQ0E7QUFDQSxFQUFFLHVEQUFnQixDQUFDLHVDQUFNO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyQ0FBVTtBQUNkLElBQUkscUNBQUk7QUFDUixHQUFHO0FBQ0gsSUFBSSwyQ0FBVTtBQUNkLElBQUkscUNBQUk7QUFDUixJQUFJLG1EQUFjO0FBQ2xCLEdBQUc7QUFDSCxJQUFJLDJDQUFVO0FBQ2QsSUFBSSxxQ0FBSTtBQUNSO0FBQ0E7QUFDQSxFQUFFLHlDQUFRO0FBQ1YsRUFBRSw2Q0FBWTtBQUNkLEVBQUUsd0NBQU87QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSxxQ0FBSTtBQUNOO0FBQ0E7QUFDQSxNQUFNLHlDQUFRO0FBQ2Q7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLDJDQUFVO0FBQ1o7QUFDQTtBQUNBLE1BQU0sNkNBQVk7QUFDbEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtDQUFVO0FBQ1osRUFBRSxtREFBYztBQUNoQjtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2QtMS8uL3NyYy9qcy9pbmRleC5qcz83YmE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVudHJ5IHBvaW50IFxyXG5pbXBvcnQge1xyXG4gIHVzZXJOYW1lLFxyXG4gIHVzZXJQYXNzd29yZCxcclxuICBidG5Mb2dpbixcclxuICBmb3JtLFxyXG4gIGZvcm1VcGRhdGUsXHJcbiAgbmV3UHdkLFxyXG4gIG5ld1B3ZFJwdCxcclxuICBidG5DaGFuZ2VQd2QsXHJcbiAgYmFja0J0bixcclxuICBzaG93TG9naW5FcnJvcixcclxuICBzaG93QXBwLFxyXG4gIHNob3dMb2dpbkZvcm0sXHJcbiAgaGlkZVB3ZEVycixcclxuICBoaWRlTG9naW5FcnJvcixcclxuICBzaG93UHdkRXJyXHJcbn0gZnJvbSAnLi91aSdcclxuXHJcbmltcG9ydCB7bG9naW5GYiwgdXBkYXRlUGFzc3dvcmRGYiB9IGZyb20gJy4vYXV0aCc7XHJcblxyXG5jb25zdCBpbml0U3RvcmFnZSA9ICh1c2VyQ3JlZHMpID0+IHtcclxuICBsZXQgaW5pdFRpbWUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCA/IDMxIDogMDtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5pdFRpbWUnLGluaXRUaW1lKTtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luaXRTY2FsZScpID09IG51bGwpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbml0U2NhbGUnLCdsaW5lYXInKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndWlkJywgdXNlckNyZWRzLnVpZCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rpc3BsYXlOYW1lJywgdXNlckNyZWRzLmRpc3BsYXlOYW1lKTtcclxuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZWdpb24nLCAnU1QnKTtcclxuICBzZXNzaW9uU3RvcmFnZS5jaGFuZ2VQd2QgPSBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IGxvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gIGxldCBjbGVhblVpZCA9IHVzZXJOYW1lLnZhbHVlLnJlcGxhY2UoL1xccy9nLFwiXCIpO1xyXG4gIGNvbnN0IHBhc3N3b3JkID0gdXNlclBhc3N3b3JkLnZhbHVlO1xyXG5cclxuICBpZiAoY2xlYW5VaWQuc3Vic3RyaW5nKGNsZWFuVWlkLmxlbmd0aCAtIDgpICE9ICdAY21sLmNvbScpe1xyXG4gICAgY2xlYW5VaWQgPSBgJHtjbGVhblVpZH1AY21sLmNvbWA7XHJcbiAgfVxyXG5cclxuICBsb2dpbkZiKGNsZWFuVWlkLHBhc3N3b3JkKS50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3VzZXJDcmVkZW50aWFsIDo+PiAnLCB1c2VyQ3JlZGVudGlhbCk7XHJcbiAgICBpbml0U3RvcmFnZSh1c2VyQ3JlZGVudGlhbC51c2VyKTtcclxuICAgIHNob3dBcHAoKTtcclxuICAgIGRlYnVnZ2VyO1xyXG4gIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdlcnIgOj4+ICcsIGVycik7XHJcbiAgICBzaG93TG9naW5FcnJvcihlcnIpO1xyXG4gIH0pXHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VQd2QgPSBhc3luYyAoKSA9PiB7XHJcbiAgaWYgKG5ld1B3ZC52YWx1ZSAhPT0gbmV3UHdkUnB0LnZhbHVlKXtcclxuICAgIHNob3dQd2RFcnIoJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdXBkYXRlUGFzc3dvcmRGYihuZXdQd2QudmFsdWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UuY2hhbmdlUHdkID0gXCJzdWNjZXNzXCI7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuL2luZGV4Lmh0bWwnXHJcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2VyciA6Pj4gJywgZXJyKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3RhdGUgPSBzZXNzaW9uU3RvcmFnZS5jaGFuZ2VQd2Q7XHJcblxyXG4gIGlmIChzdGF0ZSA9PSBcInRydWVcIil7XHJcbiAgICBmb3JtVXBkYXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1lbHNlIGlmIChzdGF0ZSA9PSBcInN1Y2Nlc3NcIil7XHJcbiAgICBmb3JtVXBkYXRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgc2hvd0xvZ2luRXJyb3IoXCJQbGVhc2UgbG9naW4gYmFjayBpbiB3aXRoIG5ldyBwYXNzd29yZFwiKTtcclxuICB9ZWxzZSB7XHJcbiAgICBmb3JtVXBkYXRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgYnRuTG9naW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2dpbik7XHJcbiAgYnRuQ2hhbmdlUHdkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjaGFuZ2VQd2QpO1xyXG4gIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuL3Byb2ZpbGUuaHRtbCc7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5jaGFuZ2VQd2QgPSBmYWxzZTtcclxuICB9KVxyXG4gIFxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBidG5Mb2dpbi5jbGljaygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIGZvcm1VcGRhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5rZXkgPT0gXCJFbnRlclwiKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGJ0bkNoYW5nZVB3ZC5jbGljaygpO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9KVxyXG59O1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICBoaWRlUHdkRXJyKCk7XHJcbiAgaGlkZUxvZ2luRXJyb3IoKTtcclxuICBpbml0KCk7XHJcbn0oKTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   backBtn: () => (/* binding */ backBtn),\n/* harmony export */   btnChangePwd: () => (/* binding */ btnChangePwd),\n/* harmony export */   btnLogin: () => (/* binding */ btnLogin),\n/* harmony export */   btnLogout: () => (/* binding */ btnLogout),\n/* harmony export */   checkActive: () => (/* binding */ checkActive),\n/* harmony export */   divLoginError: () => (/* binding */ divLoginError),\n/* harmony export */   divPwdError: () => (/* binding */ divPwdError),\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   formUpdate: () => (/* binding */ formUpdate),\n/* harmony export */   hideLoginError: () => (/* binding */ hideLoginError),\n/* harmony export */   hidePwdErr: () => (/* binding */ hidePwdErr),\n/* harmony export */   lblLoginErrorMessage: () => (/* binding */ lblLoginErrorMessage),\n/* harmony export */   newPwd: () => (/* binding */ newPwd),\n/* harmony export */   newPwdRpt: () => (/* binding */ newPwdRpt),\n/* harmony export */   pwdErr: () => (/* binding */ pwdErr),\n/* harmony export */   setActive: () => (/* binding */ setActive),\n/* harmony export */   setActiveTime: () => (/* binding */ setActiveTime),\n/* harmony export */   setActiveView: () => (/* binding */ setActiveView),\n/* harmony export */   showApp: () => (/* binding */ showApp),\n/* harmony export */   showLoginError: () => (/* binding */ showLoginError),\n/* harmony export */   showLoginForm: () => (/* binding */ showLoginForm),\n/* harmony export */   showPwdErr: () => (/* binding */ showPwdErr),\n/* harmony export */   toggleInitScale: () => (/* binding */ toggleInitScale),\n/* harmony export */   toggleInitTime: () => (/* binding */ toggleInitTime),\n/* harmony export */   userName: () => (/* binding */ userName),\n/* harmony export */   userPassword: () => (/* binding */ userPassword)\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\nconst userName = document.querySelector('#userEmail');\r\nconst userPassword = document.querySelector('#userPassword');\r\n\r\nconst btnChangePwd = document.querySelector('#btnChangePwd');\r\nconst newPwd = document.querySelector('#new_pwd');\r\nconst newPwdRpt = document.querySelector('#new_pwd_rpt');\r\nconst backBtn = document.querySelector('#btnBack');\r\n\r\n\r\n\r\nconst btnLogin = document.querySelector('#btnLogin');\r\nconst btnLogout = document.querySelector('#btnLogout');\r\nconst form = document.getElementById('login');\r\nconst formUpdate = document.getElementById('update-pwd');\r\n\r\n\r\nconst divLoginError = document.querySelector('#divLoginError');\r\nconst lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage');\r\n\r\nconst divPwdError = document.querySelector('#divPwdError');\r\nconst pwdErr = document.querySelector('#pwdErr');\r\n\r\nconst showLoginForm = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  if (currPage != 'index.html'){\r\n    window.location.href = './index.html';\r\n    \r\n  }\r\n}\r\n\r\nconst showApp = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  if (currPage == 'index.html'){\r\n    window.location.href = './profile.html';\r\n  }\r\n  }\r\n\r\nconst hideLoginError = () => {\r\n  divLoginError.style.display = 'none'\r\n  lblLoginErrorMessage.innerHTML = ''\r\n}\r\n\r\nconst showLoginError = (error) => {\r\n  divLoginError.style.display = 'block'    \r\n  if (error.code == firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthErrorCodes.INVALID_PASSWORD) {\r\n    lblLoginErrorMessage.innerHTML = `Wrong password`\r\n  }\r\n  else if (sessionStorage.changePwd == \"success\") {\r\n    lblLoginErrorMessage.innerHTML = error;      \r\n  }else {\r\n    lblLoginErrorMessage.innerHTML = `Error: ${error}`;      \r\n\r\n  }\r\n}\r\n\r\nconst showPwdErr = (error) => {\r\n  divPwdError.style.display = 'block'    \r\n  pwdErr.innerHTML = `Error: ${error}`      \r\n}\r\n\r\nconst hidePwdErr = () => {\r\n  divPwdError.style.display = 'none';\r\n  pwdErr.innerHTML = '';\r\n}\r\n\r\nconst setActive = (view, time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    el.classList.remove(\"active\");\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveTime = (time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveView = (view) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (!el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n};\r\n\r\nconst toggleInitTime = () => {\r\n  const currInit = localStorage.getItem('initTime');\r\n  if (currInit == 0) {\r\n    $('#init_time').text('30 Days')\r\n    localStorage.setItem('initTime',31)\r\n  }else {\r\n    $('#init_time').text('Inception')\r\n    localStorage.setItem('initTime',0)\r\n  };\r\n};\r\n\r\nconst toggleInitScale = () => {\r\n  const currScale = localStorage.getItem('initScale');\r\n  if (currScale == 'linear') {\r\n    $('#init_scale').text('Logarithmic')\r\n    localStorage.setItem('initScale','logarithmic')\r\n  }else {\r\n    $('#init_scale').text('Linear')\r\n    localStorage.setItem('initScale','linear')\r\n  };\r\n};\r\n\r\nconst checkActive = (element) => {\r\n  let flag = false;\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id == element) flag = true;\r\n  });\r\n  return flag;\r\n};\r\n\r\nvar bMobile =   // will be true if running on a mobile device\r\n  navigator.userAgent.indexOf( \"Mobile\" ) !== -1 || \r\n  navigator.userAgent.indexOf( \"iPhone\" ) !== -1 || \r\n  navigator.userAgent.indexOf( \"Android\" ) !== -1 || \r\n  navigator.userAgent.indexOf( \"Windows Phone\" ) !== -1 ;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdWkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQy9DO0FBQ087QUFDQTtBQUNQO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7QUFDTztBQUNBO0FBQ1A7QUFDTztBQUNBO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLG9CQUFvQix5REFBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCwrQ0FBK0MsTUFBTTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSwrQkFBK0IsTUFBTTtBQUNyQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvdWkuanM/YWFmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoRXJyb3JDb2RlcyB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJFbWFpbCcpO1xyXG5leHBvcnQgY29uc3QgdXNlclBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJQYXNzd29yZCcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ0bkNoYW5nZVB3ZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5DaGFuZ2VQd2QnKTtcclxuZXhwb3J0IGNvbnN0IG5ld1B3ZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdfcHdkJyk7XHJcbmV4cG9ydCBjb25zdCBuZXdQd2RScHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3X3B3ZF9ycHQnKTtcclxuZXhwb3J0IGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuQmFjaycpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYnRuTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuTG9naW4nKTtcclxuZXhwb3J0IGNvbnN0IGJ0bkxvZ291dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5Mb2dvdXQnKTtcclxuZXhwb3J0IGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4nKTtcclxuZXhwb3J0IGNvbnN0IGZvcm1VcGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLXB3ZCcpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkaXZMb2dpbkVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpdkxvZ2luRXJyb3InKTtcclxuZXhwb3J0IGNvbnN0IGxibExvZ2luRXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xibExvZ2luRXJyb3JNZXNzYWdlJyk7XHJcblxyXG5leHBvcnQgY29uc3QgZGl2UHdkRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGl2UHdkRXJyb3InKTtcclxuZXhwb3J0IGNvbnN0IHB3ZEVyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwd2RFcnInKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaG93TG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJQYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5wb3AoKTtcclxuICBpZiAoY3VyclBhZ2UgIT0gJ2luZGV4Lmh0bWwnKXtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vaW5kZXguaHRtbCc7XHJcbiAgICBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaG93QXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJQYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5wb3AoKTtcclxuICBpZiAoY3VyclBhZ2UgPT0gJ2luZGV4Lmh0bWwnKXtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vcHJvZmlsZS5odG1sJztcclxuICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGNvbnN0IGhpZGVMb2dpbkVycm9yID0gKCkgPT4ge1xyXG4gIGRpdkxvZ2luRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gIGxibExvZ2luRXJyb3JNZXNzYWdlLmlubmVySFRNTCA9ICcnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaG93TG9naW5FcnJvciA9IChlcnJvcikgPT4ge1xyXG4gIGRpdkxvZ2luRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jaycgICAgXHJcbiAgaWYgKGVycm9yLmNvZGUgPT0gQXV0aEVycm9yQ29kZXMuSU5WQUxJRF9QQVNTV09SRCkge1xyXG4gICAgbGJsTG9naW5FcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gYFdyb25nIHBhc3N3b3JkYFxyXG4gIH1cclxuICBlbHNlIGlmIChzZXNzaW9uU3RvcmFnZS5jaGFuZ2VQd2QgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgIGxibExvZ2luRXJyb3JNZXNzYWdlLmlubmVySFRNTCA9IGVycm9yOyAgICAgIFxyXG4gIH1lbHNlIHtcclxuICAgIGxibExvZ2luRXJyb3JNZXNzYWdlLmlubmVySFRNTCA9IGBFcnJvcjogJHtlcnJvcn1gOyAgICAgIFxyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaG93UHdkRXJyID0gKGVycm9yKSA9PiB7XHJcbiAgZGl2UHdkRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jaycgICAgXHJcbiAgcHdkRXJyLmlubmVySFRNTCA9IGBFcnJvcjogJHtlcnJvcn1gICAgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoaWRlUHdkRXJyID0gKCkgPT4ge1xyXG4gIGRpdlB3ZEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgcHdkRXJyLmlubmVySFRNTCA9ICcnO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QWN0aXZlID0gKHZpZXcsIHRpbWUpID0+IHtcclxuICBsZXQgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjdGl2ZVwiKTtcclxuICBbXS5mb3JFYWNoLmNhbGwoZWxlbXMsIChlbCkgPT4ge1xyXG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICB9KTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2aWV3KS5jbGFzc05hbWUgKz0gXCJhY3RpdmVcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aW1lKS5jbGFzc05hbWUgKz0gXCJhY3RpdmVcIjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBY3RpdmVUaW1lID0gKHRpbWUpID0+IHtcclxuICBsZXQgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjdGl2ZVwiKTtcclxuICBbXS5mb3JFYWNoLmNhbGwoZWxlbXMsIChlbCkgPT4ge1xyXG4gICAgaWYgKGVsLmlkLmluY2x1ZGVzKFwiRGF5c1wiKSkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRpbWUpLmNsYXNzTmFtZSArPSBcImFjdGl2ZVwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEFjdGl2ZVZpZXcgPSAodmlldykgPT4ge1xyXG4gIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpO1xyXG4gIFtdLmZvckVhY2guY2FsbChlbGVtcywgKGVsKSA9PiB7XHJcbiAgICBpZiAoIWVsLmlkLmluY2x1ZGVzKFwiRGF5c1wiKSkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZpZXcpLmNsYXNzTmFtZSArPSBcImFjdGl2ZVwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZUluaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJJbml0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luaXRUaW1lJyk7XHJcbiAgaWYgKGN1cnJJbml0ID09IDApIHtcclxuICAgICQoJyNpbml0X3RpbWUnKS50ZXh0KCczMCBEYXlzJylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbml0VGltZScsMzEpXHJcbiAgfWVsc2Uge1xyXG4gICAgJCgnI2luaXRfdGltZScpLnRleHQoJ0luY2VwdGlvbicpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5pdFRpbWUnLDApXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVJbml0U2NhbGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgY3VyclNjYWxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luaXRTY2FsZScpO1xyXG4gIGlmIChjdXJyU2NhbGUgPT0gJ2xpbmVhcicpIHtcclxuICAgICQoJyNpbml0X3NjYWxlJykudGV4dCgnTG9nYXJpdGhtaWMnKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luaXRTY2FsZScsJ2xvZ2FyaXRobWljJylcclxuICB9ZWxzZSB7XHJcbiAgICAkKCcjaW5pdF9zY2FsZScpLnRleHQoJ0xpbmVhcicpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5pdFNjYWxlJywnbGluZWFyJylcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrQWN0aXZlID0gKGVsZW1lbnQpID0+IHtcclxuICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpO1xyXG4gIFtdLmZvckVhY2guY2FsbChlbGVtcywgKGVsKSA9PiB7XHJcbiAgICBpZiAoZWwuaWQgPT0gZWxlbWVudCkgZmxhZyA9IHRydWU7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGZsYWc7XHJcbn07XHJcblxyXG52YXIgYk1vYmlsZSA9ICAgLy8gd2lsbCBiZSB0cnVlIGlmIHJ1bm5pbmcgb24gYSBtb2JpbGUgZGV2aWNlXHJcbiAgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCBcIk1vYmlsZVwiICkgIT09IC0xIHx8IFxyXG4gIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZiggXCJpUGhvbmVcIiApICE9PSAtMSB8fCBcclxuICBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoIFwiQW5kcm9pZFwiICkgIT09IC0xIHx8IFxyXG4gIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZiggXCJXaW5kb3dzIFBob25lXCIgKSAhPT0gLTEgOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/ui.js\n");

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
/******/ 			"main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-17252e"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;