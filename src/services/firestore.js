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

const RESOLUTIONS = "resolutions";

// Resolution collection ref
const resolutionCollection = collection(db, RESOLUTIONS);

const createResolution = (newResolution) => {
  return addDoc(resolutionCollection, {
    resolutionType: newResolution.resolutionType,
    title: newResolution.title,
    icon: newResolution.icon,
    color: newResolution.color,
    datetime: newResolution.datetime,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
};

const readResolution = (docId) => {
  const docRef = doc(db, RESOLUTIONS, docId);
  return getDoc(docRef);
};

const listResolutions = () => {
  return getDocs(resolutionCollection);
};

const listResolutionsRealtime = (onNext, onError) => {
  const q = query(collection(db, RESOLUTIONS), orderBy("createdAt", "desc"));
  return onSnapshot(q, onNext, onError);
};

const updateResolution = (docId, updatedResolution) => {
  const docRef = doc(db, RESOLUTIONS, docId);
  return updateDoc(docRef, {
    resolutionType: updatedResolution.resolutionType,
    title: updatedResolution.title,
    icon: updatedResolution.icon,
    color: updatedResolution.color,
    datetime: updatedResolution.datetime,
    updatedAt: serverTimestamp(),
  });
};

const deleteResolution = (docId) => {
  const docRef = doc(db, RESOLUTIONS, docId);
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
