import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import validator from 'validator';

import { auth } from '../../../firebase';
import { sendPwrdResetEmail } from '../../../firebase/auth';
import { Background } from '../../background/Background';
import { Section } from '../../layout/Section';
import { LandingNavbar } from '../landing/LandingNavbar';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const [sentEmail, setSentEmail] = useState(false);
  // const [emailError, setEmailError] = useState('')
  const router = useRouter();

  const isValidEmail = validator.isEmail(email);

  const sendResetEmail = async () => {
    await sendPwrdResetEmail(email);
    setSentEmail(true);
  };

  useEffect(() => {
    if (error) alert(error);
    if (loading) return;
    if (user) router.replace('/home/interests');
  }, [user, loading, error]);

  return (
    <div className="antialiased text-gray-900">
      <Background color="bg-pattern-randomized">
        <Section yPadding="py-6">
          <LandingNavbar />
        </Section>
        <Section yPadding="py-10">
          <div className="flex items-center justify-center">
            <div className="flex flex-col text-center p-30">
              <div className="flex flex-col mb-3">
                <input
                  type="email"
                  className="p-3 text-base border rounded-lg border-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail Address"
                />
                {!isValidEmail && (
                  <span className="text-red-500">
                    Please enter a valid email
                  </span>
                )}
              </div>
              <button
                className="p-3 text-lg ml-1 mb-5 text-white rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400"
                onClick={sendResetEmail}
                disabled={!isValidEmail}
              >
                {sentEmail ? 'Resend Email' : 'Send password reset email'}
              </button>
              {sentEmail && (
                <button
                  className="p-3 text-lg ml-1 mb-5 text-white rounded-lg bg-blue-600"
                  onClick={() => router.replace('/onboarding/sign-in')}
                >
                  Back to Login
                </button>
              )}
              <div className="pl-1 text-lg mb-2">
                Don{"'"}t have an account?{' '}
                <Link href="/onboarding/sign-up">Register now</Link>.
              </div>
            </div>
          </div>
        </Section>
      </Background>
    </div>
  );
}

export default ResetPassword;
