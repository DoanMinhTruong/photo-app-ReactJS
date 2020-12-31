import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDwywRNvCNqoJmX8W-XfnXO6jLyy_5dJ-0",
    authDomain: "ezskey-photo-app.firebaseapp.com",
    projectId: "ezskey-photo-app",
    storageBucket: "ezskey-photo-app.appspot.com",
    messagingSenderId: "668124274310",
    appId: "1:668124274310:web:1b076d33bffe68bbd3bb07"
};
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFireStore, timestamp };