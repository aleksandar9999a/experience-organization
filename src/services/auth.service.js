import { auth, db, storage } from "./../firebase";
import { router } from './../main';

export async function signIn(email, password) {
    return await auth.signInWithEmailAndPassword(email, password).then(() => { router.push('/') });
}

export async function signUp(email, password, firstName, lastName, image, gender, age) {
    return await auth.createUserWithEmailAndPassword(email, password).then((d) => {
        updateUserData({ uid: d.user.uid, firstName, lastName, image, gender, age }).then(console.log);
    })
}

export async function updateUserData(userdata) {
    if(typeof userdata.image === 'object') {
        userdata.image = await uploadImage(userdata.image);
    }
    return await db.doc(`users/${userdata.uid}`).set(userdata);
}

export async function logOut() {
    return await auth.signOut().then(() => {router.push('/')});
}

async function uploadImage(img){
    const id = db.createId();
    const storageRef = storage.ref(`profileImages/${id}`);
    return await storageRef.put(img).then(getUrl)
}

async function getUrl(snapshot) {
    return await snapshot.ref.getDownloadURL();
}