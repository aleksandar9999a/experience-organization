import firebase from 'firebase/app';
import 'firebase/firestore';
import "@firebase/auth";
import { environment } from './environments/environments';

export const db = firebase.initializeApp(environment.firebase);
export const firestore = db.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage;