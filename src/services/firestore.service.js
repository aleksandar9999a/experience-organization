import { db, storage } from "./../firebase";

export async function setUserData(data) {
    return await setData(data, `users/${data.uid}`);
}

export async function setProject(data) {
    return await setData(data, `projects/${data.id}`);
}

export function getUsersCollection() {
    return db.collection('users');
}

export function getUser(id) {
    return getUsersCollection().doc(id);
}

export function getProjects() {
    return db.collection('projects');
}

export function getProject(id) {
    return getProjects().doc(id);
}

export function getProjectsByCreator(id) {
    return db.collection('projects', ref => ref.where('creator_id', '==', id));
}

async function setData(data, ref) {
    if (data.image && typeof data.image === 'object') {
        data.image = await uploadImage(data.image);
    }

    return await db.doc(ref).set(data);
}

async function uploadImage(img) {
    const id = db.createId();
    const storageRef = storage.ref(id);
    return await storageRef.put(img).then(getUrl);
}

async function getUrl(snapshot) {
    return await snapshot.ref.getDownloadURL();
}