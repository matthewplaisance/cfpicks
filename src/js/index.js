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
  rptPwdDiv
} from './ui'

import {loginFb, updatePasswordFb, createUser, initDb, updateName } from './auth';

const initStorage = (userCreds) => {
  localStorage.uid = userCreds.uid;
  localStorage.displayName = userCreds.displayName.split('_').join(' ');
  sessionStorage.changePwd = false;
};

const login = async () => {
  let cleanUid = cleanEmail();
  const password = userPassword.value;


  loginFb(cleanUid,password).then((userCredential) => {
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
console.log('rptPwd :>> ', rptPwd);

  let cleanUid = cleanEmail();
  const password = userPassword.value;
  if (password !== repeatPwd){
    showLoginError("Passwords do not match");
    return;
  }
  createUser(cleanUid,password)
  .then(userCreds => {
    const name = cleanUid.slice(0,-8).split('_').join(' ');
    updateName(cleanUid.slice(0,-8));
    initDb(userCreds.user.uid,name);
    initStorage(userCreds);
  })
  .catch(err =>  showLoginError(err))
}

const changePwd = async () => {
  if (newPwd.value !== newPwdRpt.value){
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
  if (username.slice(-1,username.length) == " "){
    showLoginError('No trailing spaces');
    return;
  }

  let cleanUid = username.replace(/\s/g,"_");
  if (cleanUid.substring(cleanUid.length - 8) != '@cml.com'){
    cleanUid = `${cleanUid}@cml.com`;
  }
  return cleanUid;
};

const init = () => {
  const state = sessionStorage.changePwd;
  console.log('rptPwd :>> ', rptPwd);

  if (state == "true"){
    formUpdate.style.display = 'block';
    form.style.display = 'none';
  }else if (state == "success"){
    formUpdate.style.display = 'none';
    form.style.display = 'block';
    showLoginError("Please login back in with new password");
  }else {
    formUpdate.style.display = 'none';
    form.style.display = 'block';
  };

  btnLogin.addEventListener('click', login);
  signUpBtn.addEventListener('click',function() {
    signup(rptPwd.value)
  });
  btnChangePwd.addEventListener('click',changePwd);
  backBtn.addEventListener('click', () => {
    window.location.href = './profile.html';
    sessionStorage.changePwd = false;
  });

  toggleSignup.addEventListener('click', () => {
    let signupState = toggleSignup.textContent;
    console.log('signupState :>> ', signupState);
    if (signupState == 'Sign Up'){
      console.log('in');
      signUpBtn.style.display = 'block';
      btnLogin.style.display = 'none';
      toggleSignup.textContent = 'Login';
      rptPwdDiv.style.display = 'block';
    }else {
      signUpBtn.style.display = 'none';
      btnLogin.style.display = 'block';
      toggleSignup.textContent = 'Sign Up';
      rptPwdDiv.style.display = 'none';

    }
  });
  
  form.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      btnLogin.click();
    }
  });
  
  formUpdate.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
      event.preventDefault();
      btnChangePwd.click();
      
    }
  });
};

window.onload = function () {
  hidePwdErr();
  hideLoginError();
  init();
}();

