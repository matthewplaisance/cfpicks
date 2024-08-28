// entry point 
import {
  userName,
  userPassword,
  btnLogin,
  form,
  formUpdate,
  newPwd,
  newPwdRpt,
  btnChangePwd,
  backBtn,
  showLoginError,
  showApp,
  showLoginForm,
  hidePwdErr,
  hideLoginError,
  showPwdErr,
  toggleSignup,
  signUpBtn,
  rptPwd,
  rptPwdDiv,
  lnDiv,
  fnDiv,
  lName,
  fName
} from './ui'

import { loginFb, updatePasswordFb, createUser, initDb, updateName, onAuthStateChangedFb, auth } from './auth';

const initStorage = (userCreds, name,pwd) => {  
  localStorage.uid = userCreds.uid;
  localStorage.displayName = userCreds.displayName == null ? name : userCreds.displayName
  sessionStorage.changePwd = false;
  sessionStorage.ddd = pwd
};

const login = async () => {
  let cleanUid = cleanEmail();
  const password = userPassword.value;

  loginFb(cleanUid, password).then((userCredential) => {
    console.log('userCredential :>> ', userCredential);
    initStorage(userCredential.user);
    showApp();
    debugger;
  }).catch((err) => {
    console.log('err :>> ', err);
    showLoginError(err);
  })
};

const signup = async (repeatPwd) => {
  let cleanUid = cleanEmail();
  console.log('cleanUid :>> ', cleanUid);
  if (cleanUid === false) return;

  const password = userPassword.value;
  if (password !== repeatPwd) {
    showLoginError("Passwords do not match");
    return;
  }

  if (fName.value == "" & lName.value == "") {
    showLoginError("Enter name")
    return;
  }
  let name = `${fName.value} ${lName.value} `;
  console.log('name :>> ', name);
  createUser(cleanUid, password)
    .then(userCreds => {
      updateName(name);
      initStorage(userCreds.user, name, password);
      initDb(userCreds.user.uid,name);
      showApp();
    })
    .catch(err => showLoginError(err))
};

const changePwd = async () => {
  if (newPwd.value !== newPwdRpt.value) {
    showPwdErr('Passwords do not match');
    return;
  }
  updatePasswordFb(newPwd.value).then(() => {
    sessionStorage.changePwd = "success";
    window.location.href = './index.html'
  }).catch((err) => {
    console.log('err :>> ', err);
  });
};

const cleanEmail = () => {
  let username = userName.value;
  if (username.includes(" ") || userPassword.value.includes(" ")) {
    showLoginError('No spaces');
    return false;
  }

  if (username.substring(username.length - 8) != '@cml.com') {
    username = `${username}@cml.com`;
  }
  return username;
};

function showLogin () {
    sessionStorage.loginState = 'login';
    signUpBtn.style.display = 'none';
    btnLogin.style.display = 'block';
    toggleSignup.textContent = 'Sign Up';
    rptPwdDiv.style.display = 'none';
    fnDiv.style.display = 'none';
    lnDiv.style.display = 'none';
};

function showSignup () {
  sessionStorage.loginState = 'signup';
  signUpBtn.style.display = 'block';
  btnLogin.style.display = 'none';
  toggleSignup.textContent = 'Login';
  rptPwdDiv.style.display = 'block';
  fnDiv.style.display = 'block';
  lnDiv.style.display = 'block';
};

const init = () => {
  const state = sessionStorage.changePwd;
  const loginState = sessionStorage.loginState == undefined ? "login" : sessionStorage.loginState;
  console.log('loginState :>> ', loginState);

  if (state == "true") {
    formUpdate.style.display = 'block';
    form.style.display = 'none';
  } else if (state == "success") {
    formUpdate.style.display = 'none';
    form.style.display = 'block';
    showLoginError("Please login back in with new password");
  } else {
    formUpdate.style.display = 'none';
    form.style.display = 'block';
  };

  if (loginState == 'signup'){
     showSignup();
  } else {
     showLogin();
  }

  btnLogin.addEventListener('click', login);
  signUpBtn.addEventListener('click', function () {
    signup(rptPwd.value)
  });
  btnChangePwd.addEventListener('click', changePwd);
  backBtn.addEventListener('click', () => {
    window.location.href = './profile.html';
    sessionStorage.changePwd = false;
  });

  toggleSignup.addEventListener('click', () => {
    if (sessionStorage.loginState == 'signup'){
      sessionStorage.loginState = 'login';
      showLogin();
    }else {
      sessionStorage.loginState = 'signup';
      showSignup();
    }
  });

  form.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      console.log('enter');
      event.preventDefault();
      console.log('sessionStorage.loginState :>> ', sessionStorage.loginState);
      if (sessionStorage.loginState =='signup' || sessionStorage.loginState == undefined){
        signUpBtn.click();
      }else {
        btnLogin.click();
      }
    }
  });

  formUpdate.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
      event.preventDefault();
      btnChangePwd.click();
    }
  });
};

window.onload = function () {
  onAuthStateChangedFb();
  hidePwdErr();
  hideLoginError();
  init();
}();

