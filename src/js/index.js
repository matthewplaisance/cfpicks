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
  showPwdErr
} from './ui'

import {loginFb, updatePasswordFb } from './auth';

const initStorage = (userCreds) => {
  let initTime = window.innerWidth < 768 ? 31 : 0;
  localStorage.setItem('initTime',initTime);
  if (localStorage.getItem('initScale') == null) localStorage.setItem('initScale','linear');
  localStorage.setItem('uid', userCreds.uid);
  localStorage.setItem('displayName', userCreds.displayName);
  sessionStorage.setItem('region', 'ST');
  sessionStorage.changePwd = false;
};

const login = async () => {
  let cleanUid = userName.value.replace(/\s/g,"");
  const password = userPassword.value;

  if (cleanUid.substring(cleanUid.length - 8) != '@cml.com'){
    cleanUid = `${cleanUid}@cml.com`;
  }

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

const init = () => {
  const state = sessionStorage.changePwd;

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
  }

  btnLogin.addEventListener('click', login);
  btnChangePwd.addEventListener('click',changePwd);
  backBtn.addEventListener('click', () => {
    window.location.href = './profile.html';
    sessionStorage.changePwd = false;
  })
  
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
  })
};

window.onload = function () {
  hidePwdErr();
  hideLoginError();
  init();
}();

