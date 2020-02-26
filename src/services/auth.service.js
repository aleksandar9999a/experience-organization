import { auth } from "./../firebase";
import { router } from './../router';
import { addNotification } from './notifications';
import { setUserData } from './firestore.service'
import { changeLoaderState } from './loader';

const defImg = 'https://firebasestorage.googleapis.com/v0/b/experience-organization.appspot.com/o/profile%2FunkItem.svg?alt=media&token=e1aaca08-d10f-4847-bc5b-1ae66d4768bb';

export async function signIn(email, password) {
    changeLoaderState();
    return await auth.signInWithEmailAndPassword(email, password).then(() => {
        addNotification('Successfull Log In!');
        router.push('/');
    }).finally(() => {
        changeLoaderState();
    });
}

export async function signUp(userdata) {
    changeLoaderState();
    return await auth.createUserWithEmailAndPassword(userdata.email, userdata.password)
        .then(async (d) => {
            const data = { uid: d.user.uid, firstName: userdata.firstName, lastName: userdata.lastName, image: defImg, gender: userdata.gender, age: userdata.age };
            return await setUserData(data).then(() => {
                addNotification('Successfull Registrations!');
                router.push('/');
            });
        })
        .finally(() => {
            changeLoaderState();
        });
}

export async function logOut() {
    changeLoaderState();
    return await auth.signOut().then(() => { addNotification('Successfull Log Out!'); router.push('/auth'); }).finally(() => { changeLoaderState(); });
}
