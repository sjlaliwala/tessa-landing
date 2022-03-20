import { doc, getDoc } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';

import { db } from '../../../firebase';

async function fetchUserData(uid: any) {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  const userData = userSnap.exists() ? userSnap.data() : null;
  return userData;
}

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { uid },
    method,
  } = req;

  switch (method) {
    case 'GET': {
      // Get data from your database
      const userData = await fetchUserData(uid);
      if (userData) {
        res.status(200).json({ userData });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
      break;
    }
    case 'PUT':
      // Update or create data in your database
      return;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
