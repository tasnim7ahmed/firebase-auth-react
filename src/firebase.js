import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCzbn9jDfsiRLHklpLdQMPNGMi89dXX1Ns",
  authDomain: "fir-auth-development-7029c.firebaseapp.com",
  projectId: "fir-auth-development-7029c",
  storageBucket: "fir-auth-development-7029c.appspot.com",
  messagingSenderId: "427082179702",
  appId: "1:427082179702:web:d0d71dc2df56bb95486b57",
});

const auth = app.auth();
export { auth };
export default app;
