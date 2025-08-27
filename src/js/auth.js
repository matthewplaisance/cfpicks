// auth.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile,
  createUserWithEmailAndPassword,
  reload,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC8J8_Bo2YSeM1aTkE3--bQLCaeuGU3hQE",
  authDomain: "cfpicks-66e14.firebaseapp.com",
  projectId: "cfpicks-66e14",
  databaseURL: "https://cfpicks-66e14-default-rtdb.firebaseio.com",
  storageBucket: "cfpicks-66e14.appspot.com",
  messagingSenderId: "924459609957",
  appId: "1:924459609957:web:c1125a2a8f5147de313b8c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export function onAuthStateChangedFb(handler) {
  return onAuthStateChanged(auth, handler);
}


export async function updateName(user, displayName) {
  await updateProfile(user, { displayName });
  await reload(user);
  return user.displayName;
}

export async function initDb(uid, displayName) {
  await set(ref(db, `users/${uid}`), { name: displayName, week1: {} });
  return "ok";
}

export async function loginFb(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export function watchAuthAndRedirect() {
  return onAuthStateChanged(auth, (u) => {
    const page = location.pathname.split("/").pop() || "index.html";
    if (u && page === "index.html") location.replace("profile.html");
    if (!u && page !== "index.html") location.replace("index.html");
  });
}

export async function logoutFb() {
  sessionStorage.removeItem("siteSelection");
  await signOut(auth);
  location.replace("index.html");
}

export async function updatePasswordFb(newPassword) {
  const user = auth.currentUser;
  if (!user) throw new Error("No user is currently signed in.");
  await updatePassword(user, newPassword);
  return "ok";
}

export async function createUser(email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export { auth, db };
