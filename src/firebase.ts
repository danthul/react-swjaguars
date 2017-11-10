import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBrUL-lIc3ZE0Dpd3DmqbwRsCGbc725BW8",
  authDomain: "swjaguars.firebaseapp.com",
  databaseURL: "https://swjaguars.firebaseio.com",
  projectId: "swjaguars",
  storageBucket: "",
  messagingSenderId: "8216070069"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
