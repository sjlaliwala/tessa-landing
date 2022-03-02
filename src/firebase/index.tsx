import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDAOq2JZgp9_zHN80mjeDVSHxg3mBK_YiQ',
  authDomain: 'tessa-b9822.firebaseapp.com',
  projectId: 'tessa-b9822',
  storageBucket: 'tessa-b9822.appspot.com',
  messagingSenderId: '859170554573',
  appId: '1:859170554573:web:6a480286e199603e641f84',
  measurementId: 'G-JQ0FW4LF06',
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
