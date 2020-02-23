import { auth, db, storage } from "./../firebase";
import { router } from './../router';
import { store } from './../store';
import { addNotification } from './notifications';

const defImg = 'https://firebasestorage.googleapis.com/v0/b/experience-organization.appspot.com/o/profile%2FunkItem.svg?alt=media&token=e1aaca08-d10f-4847-bc5b-1ae66d4768bb';

export async function signIn(email, password) {
    store.commit('showLoader');
    return await auth.signInWithEmailAndPassword(email, password).then(() => {
        addNotification('Successfull Log In!');
        router.push('/');
    }).finally(() => {
        store.commit('hideLoader');
    });
}

export async function signUp(userdata) {
    store.commit('showLoader');
    return await auth.createUserWithEmailAndPassword(userdata.email, userdata.password)
        .then(async (d) => {
            const data = { uid: d.user.uid, firstName: userdata.firstName, lastName: userdata.lastName, image: defImg, gender: userdata.gender, age: userdata.age };
            return await updateUserData(data).then(() => {
                addNotification('Successfull Registrations!');
                router.push('/');
            });
        })
        .finally(() => {
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