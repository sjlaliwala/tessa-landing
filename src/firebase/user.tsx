import { doc, updateDoc } from 'firebase/firestore';

import { db } from './index';

async function updateUserInfo(user: any, updatedUserInfo: any) {
  const userRef = doc(db, 'users', user.uid);
  await updateDoc(userRef, updatedUserInfo);
}

export { updateUserInfo };
