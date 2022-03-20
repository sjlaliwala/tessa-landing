import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';

import { auth, db } from './index';

const googleProvider = new GoogleAuthProvider();

const loginWithGoogle = async () => {
  await signInWithPopup(auth, googleProvider);
};

const signUpWithGoogle = async () => {
  const res = await signInWithPopup(auth, googleProvider);
  const { user } = res;
  const usersRef = collection(db, 'users');
  await setDoc(doc(usersRef, user.uid), {
    uid: user.uid,
    name: user.displayName,
    authProvider: 'google',
    email: user.email,
    created: new Date().getTime(),
  });
};

const loginWithEmailAndPassword = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};

const signUpWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const { user } = res;
  const usersRef = collection(db, 'users');
  await setDoc(doc(usersRef, user.uid), {
    uid: user.uid,
    name,
    authProvider: 'local',
    email,
    created: new Date().getTime(),
  });
};

const sendPwrdResetEmail = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
};

const signOut = () => {
  auth.signOut();
};

export {
  loginWithGoogle,
  loginWithEmailAndPassword,
  signUpWithEmailAndPassword,
  signUpWithGoogle,
  sendPwrdResetEmail,
  signOut,
};
