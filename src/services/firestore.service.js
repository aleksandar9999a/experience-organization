import { auth, firestore, storage } from "./../firebase";

export async function setUserData(data) {
    return await setData(data, `users/${data.uid}`);
}

export async function setProject(data) {
    return await setData(data, `projects/${data.id}`);
}

export function getUsersCollection() {
    return firestore.collection('users');
}

export function getUser(id) {
    return getUsersCollection().doc(id);
}

export function getMyData() {
    if (auth.currentUser) {
        const uid = auth.currentUser.uid;
        return getUsersCollection().doc(uid);
    }
    return null;
}

export function searchUserByName(name) {
    return getUsersCollection().where('firstName', '>=', name).limit(5);
}

export function getProjects() {
    return firestore.collection('projects');
}

export function getProject(id) {
    return getProjects().doc(id);
}

export function getProjectsByCreator(id) {
    return firestore.collection('projects').where('creator_id', '==', id);
}

async function setData(data, ref) {
    if (data.image && typeof data.image === 'object') {
        data.image = await uploadImage(data.image);
    }

    return await firestore.doc(ref).set(data);
}

async function uploadImage(img) {
    const id = firestore.createId();
    const storageRef = storage.ref(id);
    return await storageRef.put(img).then(getUrl);
}

async function getUrl(snapshot) {
    return await snapshot.ref.getDownloadURL();
}