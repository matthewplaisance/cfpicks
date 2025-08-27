// index.js
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
  fName,
} from "./ui";

import {
  loginFb,
  updatePasswordFb,
  createUser,
  initDb,
  updateName,
  onAuthStateChangedFb,
  auth,
  watchAuthAndRedirect
} from "./auth";

//watchAuthAndRedirect();

async function initStorage(user, fallbackName) {
  localStorage.setItem("uid", user.uid);
  const dn = user.displayName ?? fallbackName ?? "";
  localStorage.setItem("displayName", dn);
  sessionStorage.setItem("changePwd", "false");
}

async function login() {
  const email = cleanEmail();
  if (email === false) return;
  const password = userPassword.value;
  try {
    const user = await loginFb(email, password);
    initStorage(user);
    showApp();
  } catch (err) {
    showLoginError(err.message ?? String(err));
  }
}

async function signup(repeatPwd) {
  const email = cleanEmail();
  if (email === false) return;

  const password = userPassword.value;
  if (password !== repeatPwd) return showLoginError("Passwords do not match");

  if (!fName.value.trim() || !lName.value.trim()) return showLoginError("Enter name");

  const name = `${fName.value.trim()} ${lName.value.trim()}`;
  try {
    const user = await createUser(email, password);
    await updateName(user, name);
    let res = await initDb(user.uid, name);
    console.log('name :>> ', name);
    console.log('res :>> ', res);
    await initStorage(user, name);
    showApp();
  } catch (err) {
    showLoginError(err.message ?? String(err));
  }
}

async function changePwd() {
  if (newPwd.value !== newPwdRpt.value) return showPwdErr("Passwords do not match");
  try {
    await updatePasswordFb(newPwd.value);
    sessionStorage.setItem("changePwd", "success");
    window.location.href = "./index.html";
  } catch (err) {
    showPwdErr(err.message ?? String(err));
  }
}

function cleanEmail() {
  let username = userName.value.trim();
  if (username.includes(" ") || userPassword.value.includes(" ")) {
    showLoginError("No spaces");
    return false;
  }
  if (!username.endsWith("@cml.com")) username = `${username}@cml.com`;
  return username;
}

function showLogin() {
  sessionStorage.setItem("loginState", "login");
  signUpBtn.style.display = "none";
  btnLogin.style.display = "block";
  toggleSignup.textContent = "Sign Up";
  rptPwdDiv.style.display = "none";
  fnDiv.style.display = "none";
  lnDiv.style.display = "none";
  showLoginForm();
}

function showSignup() {
  sessionStorage.setItem("loginState", "signup");
  signUpBtn.style.display = "block";
  btnLogin.style.display = "none";
  toggleSignup.textContent = "Login";
  rptPwdDiv.style.display = "block";
  fnDiv.style.display = "block";
  lnDiv.style.display = "block";
  showLoginForm();
}

function init() {
  const state = sessionStorage.getItem("changePwd");
  const loginState = sessionStorage.getItem("loginState") ?? "login";

  if (state === "true") {
    formUpdate.style.display = "block";
    form.style.display = "none";
  } else if (state === "success") {
    formUpdate.style.display = "none";
    form.style.display = "block";
    showLoginError("Please login back in with new password");
  } else {
    formUpdate.style.display = "none";
    form.style.display = "block";
  }

  if (loginState === "signup") showSignup();
  else showLogin();

  btnLogin.addEventListener("click", login);
  signUpBtn.addEventListener("click", () => signup(rptPwd.value));
  btnChangePwd.addEventListener("click", changePwd);
  backBtn.addEventListener("click", () => {
    window.location.href = "./profile.html";
    sessionStorage.setItem("changePwd", "false");
  });

  toggleSignup.addEventListener("click", () => {
    if (sessionStorage.getItem("loginState") === "signup") showLogin();
    else showSignup();
  });

  form.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if ((sessionStorage.getItem("loginState") ?? "login") === "signup") signUpBtn.click();
      else btnLogin.click();
    }
  });

  formUpdate.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      btnChangePwd.click();
    }
  });
}

window.onload = function () {
  hidePwdErr();
  hideLoginError();
  init();
};
