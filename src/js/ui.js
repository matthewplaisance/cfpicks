import { AuthErrorCodes } from 'firebase/auth';

export const userName = document.querySelector('#userEmail');
export const userPassword = document.querySelector('#userPassword');

export const lnDiv = document.querySelector('#lnDiv');
export const fnDiv = document.querySelector('#fnDiv');
export const lName = document.querySelector('#lName');
export const fName = document.querySelector('#fName');

export const btnChangePwd = document.querySelector('#btnChangePwd');
export const newPwd = document.querySelector('#new_pwd');
export const newPwdRpt = document.querySelector('#new_pwd_rpt');
export const backBtn = document.querySelector('#btnBack');



export const btnLogin = document.querySelector('#btnLogin');
export const btnLogout = document.querySelector('#btnLogout');
export const form = document.getElementById('login');
export const formUpdate = document.getElementById('update-pwd');


export const divLoginError = document.querySelector('#divLoginError');
export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage');

export const divPwdError = document.querySelector('#divPwdError');
export const pwdErr = document.querySelector('#pwdErr');

export const signUpBtn = document.querySelector('#btnSignup');
export const toggleSignup = document.querySelector('#showSignup');

export const rptPwdDiv = document.querySelector('#rptPwdDiv');
export const rptPwd = document.querySelector('#userPasswordRpt');

export const showLoginForm = () => {
  const currPage = window.location.pathname.split("/").pop();
  if (currPage != 'index.html'){
    window.location.href = './index.html';
    
  }
}

export const showApp = () => {
  const currPage = window.location.pathname.split("/").pop();
  if (currPage == 'index.html'){
    window.location.href = './master.html';
  }
  }

export const hideLoginError = () => {
  divLoginError.style.display = 'none'
  lblLoginErrorMessage.innerHTML = ''
}

export const showLoginError = (error) => {
  console.log('error :>> ', error);
  console.log('error.code :>> ', error.code);
  divLoginError.style.display = 'block'    
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    lblLoginErrorMessage.innerHTML = `Wrong password`
  }
  else if (sessionStorage.changePwd == "success") {
    lblLoginErrorMessage.innerHTML = error;      
  }else if (error.code == AuthErrorCodes.INVALID_EMAIL) {
    lblLoginErrorMessage.innerHTML = `Enter generic username like yourname123, no @ signs.`;  
  }else {
    lblLoginErrorMessage.innerHTML = `Error: ${error}`;      
  }
}

export const showPwdErr = (error) => {
  divPwdError.style.display = 'block'    
  pwdErr.innerHTML = `Error: ${error}`      
}

export const hidePwdErr = () => {
  divPwdError.style.display = 'none';
  pwdErr.innerHTML = '';
}

export const setActive = (view, time) => {
  let elems = document.querySelectorAll(".active");
  [].forEach.call(elems, (el) => {
    el.classList.remove("active");
  });
  document.getElementById(view).className += "active";
  document.getElementById(time).className += "active";
};

export const setActiveTime = (time) => {
  let elems = document.querySelectorAll(".active");
  [].forEach.call(elems, (el) => {
    if (el.id.includes("Days")) {
      el.classList.remove("active");
    }
  });
  document.getElementById(time).className += "active";
};

export const setActiveView = (view) => {
  let elems = document.querySelectorAll(".active");
  [].forEach.call(elems, (el) => {
    if (!el.id.includes("Days")) {
      el.classList.remove("active");
    }
  });
  document.getElementById(view).className += "active";
};

export const toggleInitTime = () => {
  const currInit = localStorage.getItem('initTime');
  if (currInit == 0) {
    $('#init_time').text('30 Days')
    localStorage.setItem('initTime',31)
  }else {
    $('#init_time').text('Inception')
    localStorage.setItem('initTime',0)
  };
};

export const toggleInitScale = () => {
  const currScale = localStorage.getItem('initScale');
  if (currScale == 'linear') {
    $('#init_scale').text('Logarithmic')
    localStorage.setItem('initScale','logarithmic')
  }else {
    $('#init_scale').text('Linear')
    localStorage.setItem('initScale','linear')
  };
};

export const checkActive = (element) => {
  let flag = false;
  let elems = document.querySelectorAll(".active");
  [].forEach.call(elems, (el) => {
    if (el.id == element) flag = true;
  });
  return flag;
};

var bMobile =   // will be true if running on a mobile device
  navigator.userAgent.indexOf( "Mobile" ) !== -1 || 
  navigator.userAgent.indexOf( "iPhone" ) !== -1 || 
  navigator.userAgent.indexOf( "Android" ) !== -1 || 
  navigator.userAgent.indexOf( "Windows Phone" ) !== -1 ;