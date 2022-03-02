import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../../../firebase';
import { signOut } from '../../../firebase/auth';
import { FetchUserData } from '../../../firebase/queries';
import OnboardingModal from './OnboardingModal';

function Interests() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [name, setName] = useState('');
  const [onboarded, setOnboarded] = useState(true);

  const getUserData = async () => {
    const { userData } = await FetchUserData(user);
    if (userData && !userData.error) {
      setName(userData.name);
      setOnboarded(userData.onboarded);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace('/onboarding/sign-in');
      return;
    }
    getUserData();
  }, [user, loading]);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {user && (
        <>
          <OnboardingModal
            uid={user.uid}
            name={name}
            onboarded={onboarded}
            setOnboarded={setOnboarded}
          />
          <div className="flex flex-col text-center p-30">
            <div className="text-xl text-blue-400">Hi {name}</div>
            <div>{user.email}</div>
            <button
              className="p-10 text-lg mb-10 text-white bg-black"
              onClick={signOut}
            >
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Interests;
