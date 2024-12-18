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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n// entry point \r\n\r\n\r\n\r\n\r\nconst initStorage = (userCreds, name,pwd) => {  \r\n  localStorage.uid = userCreds.uid;\r\n  localStorage.displayName = userCreds.displayName == null ? name : userCreds.displayName\r\n  sessionStorage.changePwd = false;\r\n  sessionStorage.ddd = pwd\r\n};\r\n\r\nconst login = async () => {\r\n  let cleanUid = cleanEmail();\r\n  const password = _ui__WEBPACK_IMPORTED_MODULE_0__.userPassword.value;\r\n\r\n  (0,_auth__WEBPACK_IMPORTED_MODULE_1__.loginFb)(cleanUid, password).then((userCredential) => {\r\n    console.log('userCredential :>> ', userCredential);\r\n    initStorage(userCredential.user);\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.showApp)();\r\n    debugger;\r\n  }).catch((err) => {\r\n    console.log('err :>> ', err);\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.showLoginError)(err);\r\n  })\r\n};\r\n\r\nconst signup = async (repeatPwd) => {\r\n  let cleanUid = cleanEmail();\r\n  console.log('cleanUid :>> ', cleanUid);\r\n  if (cleanUid === false) return;\r\n\r\n  const password = _ui__WEBPACK_IMPORTED_MODULE_0__.userPassword.value;\r\n  if (password !== repeatPwd) {\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.showLoginError)(\"Passwords do not match\");\r\n    return;\r\n  }\r\n\r\n  if (_ui__WEBPACK_IMPORTED_MODULE_0__.fName.value == \"\" & _ui__WEBPACK_IMPORTED_MODULE_0__.lName.value == \"\") {\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.showLoginError)(\"Enter name\")\r\n    return;\r\n  }\r\n  let name = `${_ui__WEBPACK_IMPORTED_MODULE_0__.fName.value} ${_ui__WEBPACK_IMPORTED_MODULE_0__.lName.value} `;\r\n  console.log('name :>> ', name);\r\n  (0,_auth__WEBPACK_IMPORTED_MODULE_1__.createUser)(cleanUid, password)\r\n    .then(userCreds => {\r\n      (0,_auth__WEBPACK_IMPORTED_MODULE_1__.updateName)(name);\r\n      initStorage(userCreds.user, name, password);\r\n      (0,_auth__WEBPACK_IMPORTED_MODULE_1__.initDb)(userCreds.user.uid,name);\r\n      (0,_ui__WEBPACK_IMPORTED_MODULE_0__.showApp)();\r\n    })\r\n    .catch(err => (0,_ui__WEBPACK_IMPORTED_MODULE_0__.showLoginError)(err))\r\n};\r\n\r\nconst changePwd = async () => {\r\n  if (_ui__WEBPACK_IMPORTED_MODULE_0__.newPwd.value !== _ui__WEBPACK_IMPORTED_MODULE_0__.newPwdRpt.value) {\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.showPwdErr)('Passwords do not match');\r\n    return;\r\n  }\r\n  (0,_auth__WEBPACK_IMPORTED_MODULE_1__.updatePasswordFb)(_ui__WEBPACK_IMPORTED_MODULE_0__.newPwd.value).then(() => {\r\n    sessionStorage.changePwd = \"success\";\r\n    window.location.href = './index.html'\r\n  }).catch((err) => {\r\n    console.log('err :>> ', err);\r\n  });\r\n};\r\n\r\nconst cleanEmail = () => {\r\n  let username = _ui__WEBPACK_IMPORTED_MODULE_0__.userName.value;\r\n  if (username.includes(\" \") || _ui__WEBPACK_IMPORTED_MODULE_0__.userPassword.value.includes(\" \")) {\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.showLoginError)('No spaces');\r\n    return false;\r\n  }\r\n\r\n  if (username.substring(username.length - 8) != '@cml.com') {\r\n    username = `${username}@cml.com`;\r\n  }\r\n  return username;\r\n};\r\n\r\nfunction showLogin () {\r\n    sessionStorage.loginState = 'login';\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.signUpBtn.style.display = 'none';\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.btnLogin.style.display = 'block';\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.toggleSignup.textContent = 'Sign Up';\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.rptPwdDiv.style.display = 'none';\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.fnDiv.style.display = 'none';\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.lnDiv.style.display = 'none';\r\n};\r\n\r\nfunction showSignup () {\r\n  sessionStorage.loginState = 'signup';\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.signUpBtn.style.display = 'block';\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.btnLogin.style.display = 'none';\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.toggleSignup.textContent = 'Login';\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.rptPwdDiv.style.display = 'block';\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.fnDiv.style.display = 'block';\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.lnDiv.style.display = 'block';\r\n};\r\n\r\nconst init = () => {\r\n  const state = sessionStorage.changePwd;\r\n  const loginState = sessionStorage.loginState == undefined ? \"login\" : sessionStorage.loginState;\r\n  console.log('loginState :>> ', loginState);\r\n\r\n  if (state == \"true\") {\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.formUpdate.style.display = 'block';\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.form.style.display = 'none';\r\n  } else if (state == \"success\") {\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.formUpdate.style.display = 'none';\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.form.style.display = 'block';\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.showLoginError)(\"Please login back in with new password\");\r\n  } else {\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.formUpdate.style.display = 'none';\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.form.style.display = 'block';\r\n  };\r\n\r\n  if (loginState == 'signup'){\r\n     showSignup();\r\n  } else {\r\n     showLogin();\r\n  }\r\n\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.btnLogin.addEventListener('click', login);\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.signUpBtn.addEventListener('click', function () {\r\n    signup(_ui__WEBPACK_IMPORTED_MODULE_0__.rptPwd.value)\r\n  });\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.btnChangePwd.addEventListener('click', changePwd);\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.backBtn.addEventListener('click', () => {\r\n    window.location.href = './profile.html';\r\n    sessionStorage.changePwd = false;\r\n  });\r\n\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.toggleSignup.addEventListener('click', () => {\r\n    if (sessionStorage.loginState == 'signup'){\r\n      sessionStorage.loginState = 'login';\r\n      showLogin();\r\n    }else {\r\n      sessionStorage.loginState = 'signup';\r\n      showSignup();\r\n    }\r\n  });\r\n\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.form.addEventListener(\"keydown\", function (event) {\r\n    if (event.key === \"Enter\") {\r\n      console.log('enter');\r\n      event.preventDefault();\r\n      console.log('sessionStorage.loginState :>> ', sessionStorage.loginState);\r\n      if (sessionStorage.loginState =='signup' || sessionStorage.loginState == undefined){\r\n        _ui__WEBPACK_IMPORTED_MODULE_0__.signUpBtn.click();\r\n      }else {\r\n        _ui__WEBPACK_IMPORTED_MODULE_0__.btnLogin.click();\r\n      }\r\n    }\r\n  });\r\n\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.formUpdate.addEventListener(\"keydown\", function (event) {\r\n    if (event.key == \"Enter\") {\r\n      event.preventDefault();\r\n      _ui__WEBPACK_IMPORTED_MODULE_0__.btnChangePwd.click();\r\n    }\r\n  });\r\n};\r\n\r\nwindow.onload = function () {\r\n  (0,_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChangedFb)();\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.hidePwdErr)();\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.hideLoginError)();\r\n  init();\r\n}();\r\n\r\n\n\n//# sourceURL=webpack://prod-1/./src/js/index.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   backBtn: () => (/* binding */ backBtn),\n/* harmony export */   btnChangePwd: () => (/* binding */ btnChangePwd),\n/* harmony export */   btnLogin: () => (/* binding */ btnLogin),\n/* harmony export */   btnLogout: () => (/* binding */ btnLogout),\n/* harmony export */   checkActive: () => (/* binding */ checkActive),\n/* harmony export */   divLoginError: () => (/* binding */ divLoginError),\n/* harmony export */   divPwdError: () => (/* binding */ divPwdError),\n/* harmony export */   fName: () => (/* binding */ fName),\n/* harmony export */   fnDiv: () => (/* binding */ fnDiv),\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   formUpdate: () => (/* binding */ formUpdate),\n/* harmony export */   hideLoginError: () => (/* binding */ hideLoginError),\n/* harmony export */   hidePwdErr: () => (/* binding */ hidePwdErr),\n/* harmony export */   lName: () => (/* binding */ lName),\n/* harmony export */   lblLoginErrorMessage: () => (/* binding */ lblLoginErrorMessage),\n/* harmony export */   lnDiv: () => (/* binding */ lnDiv),\n/* harmony export */   newPwd: () => (/* binding */ newPwd),\n/* harmony export */   newPwdRpt: () => (/* binding */ newPwdRpt),\n/* harmony export */   pwdErr: () => (/* binding */ pwdErr),\n/* harmony export */   rptPwd: () => (/* binding */ rptPwd),\n/* harmony export */   rptPwdDiv: () => (/* binding */ rptPwdDiv),\n/* harmony export */   setActive: () => (/* binding */ setActive),\n/* harmony export */   setActiveTime: () => (/* binding */ setActiveTime),\n/* harmony export */   setActiveView: () => (/* binding */ setActiveView),\n/* harmony export */   showApp: () => (/* binding */ showApp),\n/* harmony export */   showLoginError: () => (/* binding */ showLoginError),\n/* harmony export */   showLoginForm: () => (/* binding */ showLoginForm),\n/* harmony export */   showPwdErr: () => (/* binding */ showPwdErr),\n/* harmony export */   signUpBtn: () => (/* binding */ signUpBtn),\n/* harmony export */   toggleInitScale: () => (/* binding */ toggleInitScale),\n/* harmony export */   toggleInitTime: () => (/* binding */ toggleInitTime),\n/* harmony export */   toggleSignup: () => (/* binding */ toggleSignup),\n/* harmony export */   userName: () => (/* binding */ userName),\n/* harmony export */   userPassword: () => (/* binding */ userPassword)\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\nconst userName = document.querySelector('#userEmail');\r\nconst userPassword = document.querySelector('#userPassword');\r\n\r\nconst lnDiv = document.querySelector('#lnDiv');\r\nconst fnDiv = document.querySelector('#fnDiv');\r\nconst lName = document.querySelector('#lName');\r\nconst fName = document.querySelector('#fName');\r\n\r\nconst btnChangePwd = document.querySelector('#btnChangePwd');\r\nconst newPwd = document.querySelector('#new_pwd');\r\nconst newPwdRpt = document.querySelector('#new_pwd_rpt');\r\nconst backBtn = document.querySelector('#btnBack');\r\n\r\n\r\n\r\nconst btnLogin = document.querySelector('#btnLogin');\r\nconst btnLogout = document.querySelector('#btnLogout');\r\nconst form = document.getElementById('login');\r\nconst formUpdate = document.getElementById('update-pwd');\r\n\r\n\r\nconst divLoginError = document.querySelector('#divLoginError');\r\nconst lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage');\r\n\r\nconst divPwdError = document.querySelector('#divPwdError');\r\nconst pwdErr = document.querySelector('#pwdErr');\r\n\r\nconst signUpBtn = document.querySelector('#btnSignup');\r\nconst toggleSignup = document.querySelector('#showSignup');\r\n\r\nconst rptPwdDiv = document.querySelector('#rptPwdDiv');\r\nconst rptPwd = document.querySelector('#userPasswordRpt');\r\n\r\nconst showLoginForm = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  if (currPage != 'index.html'){\r\n    window.location.href = './index.html';\r\n    \r\n  }\r\n}\r\n\r\nconst showApp = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  if (currPage == 'index.html'){\r\n    window.location.href = './profile.html';\r\n  }\r\n  }\r\n\r\nconst hideLoginError = () => {\r\n  divLoginError.style.display = 'none'\r\n  lblLoginErrorMessage.innerHTML = ''\r\n}\r\n\r\nconst showLoginError = (error) => {\r\n  console.log('error :>> ', error);\r\n  console.log('error.code :>> ', error.code);\r\n  divLoginError.style.display = 'block'    \r\n  if (error.code == firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthErrorCodes.INVALID_PASSWORD) {\r\n    lblLoginErrorMessage.innerHTML = `Wrong password`\r\n  }\r\n  else if (sessionStorage.changePwd == \"success\") {\r\n    lblLoginErrorMessage.innerHTML = error;      \r\n  }else if (error.code == firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthErrorCodes.INVALID_EMAIL) {\r\n    lblLoginErrorMessage.innerHTML = `Enter generic username like yourname123, no @ signs.`;  \r\n  }else {\r\n    lblLoginErrorMessage.innerHTML = `Error: ${error}`;      \r\n  }\r\n}\r\n\r\nconst showPwdErr = (error) => {\r\n  divPwdError.style.display = 'block'    \r\n  pwdErr.innerHTML = `Error: ${error}`      \r\n}\r\n\r\nconst hidePwdErr = () => {\r\n  divPwdError.style.display = 'none';\r\n  pwdErr.innerHTML = '';\r\n}\r\n\r\nconst setActive = (view, time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    el.classList.remove(\"active\");\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveTime = (time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveView = (view) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (!el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n};\r\n\r\nconst toggleInitTime = () => {\r\n  const currInit = localStorage.getItem('initTime');\r\n  if (currInit == 0) {\r\n    $('#init_time').text('30 Days')\r\n    localStorage.setItem('initTime',31)\r\n  }else {\r\n    $('#init_time').text('Inception')\r\n    localStorage.setItem('initTime',0)\r\n  };\r\n};\r\n\r\nconst toggleInitScale = () => {\r\n  const currScale = localStorage.getItem('initScale');\r\n  if (currScale == 'linear') {\r\n    $('#init_scale').text('Logarithmic')\r\n    localStorage.setItem('initScale','logarithmic')\r\n  }else {\r\n    $('#init_scale').text('Linear')\r\n    localStorage.setItem('initScale','linear')\r\n  };\r\n};\r\n\r\nconst checkActive = (element) => {\r\n  let flag = false;\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id == element) flag = true;\r\n  });\r\n  return flag;\r\n};\r\n\r\nvar bMobile =   // will be true if running on a mobile device\r\n  navigator.userAgent.indexOf( \"Mobile\" ) !== -1 || \r\n  navigator.userAgent.indexOf( \"iPhone\" ) !== -1 || \r\n  navigator.userAgent.indexOf( \"Android\" ) !== -1 || \r\n  navigator.userAgent.indexOf( \"Windows Phone\" ) !== -1 ;\n\n//# sourceURL=webpack://prod-1/./src/js/ui.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-d0574a"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;