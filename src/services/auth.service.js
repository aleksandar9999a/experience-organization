import { auth } from "./../firebase";
import { router } from './../router';
import { store } from './../store';
import { addNotification } from './notifications';
import { setUserData } from './firestore.service'

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
            return await setUserData(data).then(() => {
                addNotification('Successfull Registrations!');
                router.push('/');
            });
        })
        .finally(() => {
            store.commit('hideLoader');
        });
}

export async function logOut() {
    store.commit('showLoader');
    return await auth.signOut().then(() => { addNotification('Successfull Log Out!'); router.push('/auth'); }).finally(() => { store.commit('hideLoader'); });
}
