import * as firebase from "firebase";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDm5uJnwoK1L-Fe04lVVTgilv-93RDH1a0",
  authDomain: "boomtown-186f7.firebaseapp.com",
  databaseURL: "https://boomtown-186f7.firebaseio.com",
  projectId: "boomtown-186f7",
  storageBucket: "boomtown-186f7.appspot.com",
  messagingSenderId: "881938671949"
};
const firebaseApp = firebase.initializeApp(config);
const firebaseAuth = firebaseApp.auth();
export { firebaseApp, firebaseAuth };
