import { auth, db, storage } from "./../firebase";
import { router, store } from './../main';

export async function signIn(email, password) {
    store.commit('showLoader');
    return await auth.signInWithEmailAndPassword(email, password).then(() => {
        store.commit({ type: 'showNotifications', message: 'Successfull Log In!' });
        router.push('/');
    }).finally(() => {
        store.commit('hideLoader');
    });
}

export async function signUp(email, password, firstName, lastName, image, gender, age) {
    store.commit('showLoader');
    return await auth.createUserWithEmailAndPassword(email, password).then((d) => {
        updateUserData({ uid: d.user.uid, firstName, lastName, image, gender, age }).then(() => {
            store.commit({ type: 'showNotifications', message: 'Successfull Registrations!' });
            router.push('/');
        });
    }).finally(() => {
        store.commit('hideLoader');
    });
}

export async function updateUserData(userdata) {
    if (typeof userdata.image === 'object') {
        userdata.image = await uploadImage(userdata.image);
    }
    return await db.doc(`users/${userdata.uid}`).set(userdata);
}

export async function logOut() {
    store.commit('showLoader');
    return await auth.signOut().then(() => { router.push('/auth'); }).finally(() => { store.commit('hideLoader'); });
}

async function uploadImage(img) {
    const id = db.createId();
    const storageRef = storage.ref(`profileImages/${id}`);
    return await storageRef.put(img).then(getUrl)
}

async function getUrl(snapshot) {
    return await snapshot.ref.getDownloadURL();
}