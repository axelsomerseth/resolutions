import { app } from "./firebase";

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Get resolutions collection reference (subcollection of users)
const getResolutionsCollectionRef = (userId) => {
  return collection(db, `users/${userId}/resolutions`);
};

const createResolution = (userId, newResolution) => {
  return addDoc(getResolutionsCollectionRef(userId), {
    resolutionType: newResolution.resolutionType,
    title: newResolution.title,
    icon: newResolution.icon,
    color: newResolution.color,
    datetime: newResolution.datetime,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
};

const readResolution = (userId, docId) => {
  const docRef = doc(db, `users/${userId}/resolutions`, docId);
  return getDoc(docRef);
};

const listResolutions = (userId) => {
  return getDocs(getResolutionsCollectionRef(userId));
};

const listResolutionsRealtime = (userId, onNext, onError) => {
  const q = query(
    getResolutionsCollectionRef(userId),
    orderBy("createdAt", "desc")
  );
  return onSnapshot(q, onNext, onError);
};

const updateResolution = (userId, docId, updatedResolution) => {
  const docRef = doc(db, `users/${userId}/resolutions`, docId);
  return updateDoc(docRef, {
    resolutionType: updatedResolution.resolutionType,
    title: updatedResolution.title,
    icon: updatedResolution.icon,
    color: updatedResolution.color,
    datetime: updatedResolution.datetime,
    updatedAt: serverTimestamp(),
  });
};

const deleteResolution = (userId, docId) => {
  const docRef = doc(db, `users/${userId}/resolutions`, docId);
  return deleteDoc(docRef);
};

export {
  createResolution,
  readResolution,
  listResolutions,
  listResolutionsRealtime,
  updateResolution,
  deleteResolution,
};
