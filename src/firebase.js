import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import "@firebase/auth";

const environment = {
    apiKey: "AIzaSyDI88uhP_qrlocsOwiCzCOcovQUYRRRr1c",
    authDomain: "experience-organization.firebaseapp.com",
    databaseURL: "https://experience-organization.firebaseio.com",
    projectId: "experience-organization",
    storageBucket: "experience-organization.appspot.com",
    messagingSenderId: "256827991862",
    appId: "1:256827991862:web:ac02f4926621024a6fb597",
    measurementId: "G-B0SDJT3MXV"
};

export const db = firebase.initializeApp(environment);
export const firestore = db.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();