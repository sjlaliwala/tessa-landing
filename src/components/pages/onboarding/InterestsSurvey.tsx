import React, { useEffect, useState } from 'react';

import { Button, Input } from '@windmill/react-ui';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import Creatable from 'react-select/creatable';

import { auth } from '../../../firebase';
import { updateUserInfo } from '../../../firebase/user';
import { Background } from '../../background/Background';
import { Section } from '../../layout/Section';
import { LandingNavbar } from '../landing/LandingNavbar';

const careersData = [
  { value: 'software engineer', label: 'software engineer' },
  { value: 'senior software engineer', label: 'senior software engineer' },
  { value: 'product manager', label: 'product manager' },
  { value: 'senior product manager', label: 'senior product manager' },
  { value: 'vp of product', label: 'vp of product' },
  { value: 'vp of engineering', label: 'vp of engineering' },
];

const domainsData = [
  { value: 'blockchain', label: 'blockchain' },
  { value: 'machine learning', label: 'machine learning' },
  { value: 'quantum computing', label: 'quantum computing' },
  { value: 'artificial intelligence', label: 'artificial intelligence' },
  { value: 'data mining', label: 'data mining' },
  { value: 'big data', label: 'big data' },
  { value: 'virtual reality', label: 'virtual reality' },
  { value: 'augmented reality', label: 'augmented reality' },
  { value: 'metaverse', label: 'metaverse' },
  { value: 'web3', label: 'web3' },
  { value: 'cloud computing', label: 'cloud computing' },
  { value: 'crypto', label: 'crypto' },
  { value: 'devops', label: 'devops' },
  { value: 'ui ux', label: 'ui ux' },
  { value: 'payments', label: 'payments' },
  {
    value: 'natural language processing',
    label: 'natural language processing',
  },
  { value: 'robotics', label: 'robotics' },
  { value: 'react js', label: 'react js' },
  { value: 'frontend', label: 'frontend' },
  { value: 'backend', label: 'backend' },
  { value: 'full stack development', label: 'full stack development' },
  { value: 'distributed systems', label: 'distributed systems' },
  { value: 'growth', label: 'growth' },
  { value: 'Capital One', label: 'Capital One' },
  { value: 'Facebook', label: 'Facebook' },
  { value: 'Google', label: 'Google' },
  { value: 'Microsoft', label: 'Microsoft' },
  { value: 'Amazon', label: 'Amazon' },
];
const locationsData = [
  { value: 'new york', label: 'new york' },
  { value: 'san francisco', label: 'san francisco' },
  { value: 'chicago', label: 'chicago' },
  { value: 'boston', label: 'boston' },
  { value: 'washington DC', label: 'washington dc' },
];

function InterestsSurvey() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const [info, setInfo] = useState({
    linkedin: '',
    position: '',
    company: '',
    location: '',
    school: '',
    major: '',
  });

  const [interests, setInterests] = useState({
    careers: [],
    domains: [],
    locations: [],
  });
  const handleCompleteOnboarding = async () => {
    if (!user) return;
    const updatedUserInfo = { ...info, ...interests, last_updated: Date.now() };
    updateUserInfo(user, updatedUserInfo);
    router.replace('/home/interests');
  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
    }
    if (!user) {
      router.replace('/onboarding/sign-in');
    }
  }, [user, loading]);

  const handleInfoChange = (evt: any) => {
    const { value } = evt.target;
    setInfo({
      ...info,
      [evt.target.name]: value,
    });
  };

  const handleInterestsChange = (evt: any, name: any) => {
    setInterests({
      ...interests,
      [name]: evt.map((e: any) => e.value),
    });
  };

  return (
    <div className="antialiased text-gray-900">
      {user && (
        <Background className="h-screen w-screen bg-pattern-randomized">
          <Section yPadding="py-6">
            <LandingNavbar />
          </Section>
          <form className="w-50">
            <Section yPadding="py-4">
              <header className="text-2xl font-semibold">
                Tell us about your professional interests
              </header>
              <Creatable
                options={domainsData}
                isSearchable
                isMulti
                placeholder="What interests you?"
                className="mt-5 text-lg"
                onChange={(evt) => handleInterestsChange(evt, 'domains')}
              />
              <Creatable
                options={careersData}
                isSearchable
                isMulti
                placeholder="What careers interest to you?"
                className="mt-5 text-lg"
                onChange={(evt) => handleInterestsChange(evt, 'careers')}
              />
              <Creatable
                options={locationsData}
                isSearchable
                isMulti
                placeholder="Where locations interest you?"
                className="mt-5 text-lg"
                onChange={(evt) => handleInterestsChange(evt, 'locations')}
              />
            </Section>
            <Section yPadding="py-1">
              <header className="text-2xl font-semibold">
                And a little more information...
              </header>
              <div className="mt-2 grid gap-x-7 gap-y-3 grid-cols-2">
                <div>
                  <span className="text-xl">Linkedin</span>
                  <Input
                    css=""
                    id="interests-select"
                    className="text-lg h-10"
                    value={info.linkedin}
                    name="linkedin"
                    onChange={handleInfoChange}
                  />
                </div>
                <div>
                  <span className="text-xl">Most Recent Position</span>
                  <Input
                    css=""
                    className="text-lg h-10"
                    value={info.position}
                    name="position"
                    onChange={handleInfoChange}
                  />
                </div>
                <div>
                  <span className="text-xl">
                    Company/Organization (if applicable)
                  </span>
                  <Input
                    css=""
                    className="text-lg h-10"
                    value={info.company}
                    name="company"
                    onChange={handleInfoChange}
                  />
                </div>
                <div>
                  <span className="text-xl">Location</span>
                  <Input
                    css=""
                    className="text-lg h-10"
                    value={info.location}
                    name="location"
                    onChange={handleInfoChange}
                  />
                </div>
                <div>
                  <span className="text-xl">School</span>
                  <Input
                    css=""
                    className="text-lg h-10"
                    value={info.school}
                    name="school"
                    onChange={handleInfoChange}
                  />
                </div>
                <div>
                  <span className="text-xl">Major</span>
                  <Input
                    css=""
                    className="text-lg h-10"
                    value={info.major}
                    name="major"
                    onChange={handleInfoChange}
                  />
                </div>
              </div>
            </Section>
            <Section yPadding="py-5">
              <Button
                block
                onClick={handleCompleteOnboarding}
                layout="primary"
                size="large"
                className="text-xl"
              >
                Complete Onboarding!
              </Button>
            </Section>
          </form>
        </Background>
      )}
    </div>
  );
}

export { InterestsSurvey };
