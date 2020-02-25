import { db, storage } from "./../firebase";

export async function setUserData(data) {
    return await setData(data, `users/${data.uid}`);
}

export function getUsersCollection() {
    return db.collection('users');
}

export function getUser(id) {
    return getUsersCollection().doc(id);
}

export function getOrganizations() {
    return db.collection('organizations');
}

export function getOrganization(id) {
    return getOrganizations().doc(id);
}

export function getOrganizationsByCreator(id) {
    return db.collection('organizations', ref => ref.where('creator_id', '==', id));
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