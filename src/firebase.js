import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import "@firebase/auth";

const environment = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

export const db = firebase.initializeApp(environment);
export const firestore = db.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();