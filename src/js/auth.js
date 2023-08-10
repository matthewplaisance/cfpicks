import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updatePassword, updateProfile } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC8J8_Bo2YSeM1aTkE3--bQLCaeuGU3hQE",
    authDomain: "cfpicks-66e14.firebaseapp.com",
    projectId: "cfpicks-66e14",
    storageBucket: "cfpicks-66e14.appspot.com",
    messagingSenderId: "924459609957",
    appId: "1:924459609957:web:c1125a2a8f5147de313b8c"
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const onAuthStateChangedFb = () => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log('user mon :>> ', user);
            //up();
        } else {
            console.log("none");
            window.location.replace('index.html');
            const currentState = window.history.state;
            window.history.replaceState(currentState, '', window.location.href);
            window.onpopstate = function () {
            window.history.replaceState(currentState, '', window.location.href);
            };
        }
    });
};

const up = () => {
    updateProfile(auth.currentUser, {
        displayName: ''
      }).then(() => {
        console.log('userCredential.user.displayName :>> ', auth.currentUser.displayName);
      }).catch((error) => {
        console.log('error :>> ', error);
      });
};

const loginFb = (email, password) => {
    return signInWithEmailAndPassword(auth,email,password)
};

const logoutFb = () => {
    sessionStorage.removeItem('siteSelection')
    return signOut(auth);
};

const updatePasswordFb = (newPassword) => {
    const user = auth.currentUser;
    if (user) {
        return updatePassword(user,newPassword);
    }
    return Promise.reject(new Error('No user is currently signed in.'));
};

export { auth, onAuthStateChangedFb, loginFb, logoutFb, updatePasswordFb };

