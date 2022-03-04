import { doc, getDoc } from 'firebase/firestore';

import { db } from './index';

async function FetchUserData(user: any) {
  const userRef = await doc(db, 'users', user.uid);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    const userData = userSnap.data();
    return { userData };
  }
  const err = 'No user exists, please create an account';
  return { error: err };
}

export { FetchUserData };
