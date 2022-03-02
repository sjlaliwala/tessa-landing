import React, { useEffect, useState } from 'react';

import { Button, Input } from '@windmill/react-ui';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import Creatable from 'react-select/creatable';

import { auth } from '../../../firebase';
import { Background } from '../../background/Background';
import { Section } from '../../layout/Section';
import { LandingNavbar } from '../landing/LandingNavbar';

const domains = [
  { value: 'software engineering', label: 'Software Engineering' },
  // {value: 'product management', label: 'Product Management'},
  // {value: 'investment banking', label: 'Investment Banking'}
];

const skills = [
  { value: 'python', label: 'python' },
  { value: 'java', label: 'java' },
  { value: 'ios development', label: 'ios development' },
];

const interestsData = [
  { value: 'software design patterns', label: 'software design patterns' },
  { value: 'programming languages', label: 'programming languages' },
  { value: 'agile development', label: 'agile development' },
];

// const companies = [
//   {value: 'facebook', label: 'Facebook'},
//   {value: 'google', label: 'Google'},
//   {value: 'goldman sachs', label: 'Goldman Sachs'}
// ]

function InterestsSurvey() {
  const [info, setInfo] = useState({
    linkedin: '',
    school: '',
    major: '',
    position: '',
  });

  const [interests, setInterests] = useState({
    domain: '',
    interests: [],
    skills: [],
  });
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  // const handleCompleteOnboarding = (evt: any) => {
  //   // const { linkedin, school, major } = interests
  //   //TODO: Add to DB
  // }

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
    }
    // if (!user) router.replace("/onboarding/sign-in");
  }, [user, loading]);

  console.log(interests);

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
      [name]: evt,
    });
  };

  // const handleOnboarded = (evt: any) => {

  // }

  return (
    <Background color="bg-pattern-randomized">
      <Section yPadding="py-6">
        <LandingNavbar />
      </Section>
      <Section>
        <form className="w-50">
          <header className="text-xl font-semibold">
            Tell us about your professional interests
          </header>
          <Creatable
            options={domains}
            isSearchable
            id="domain-select"
            placeholder="What career path interests you?"
            className="mt-4 text-md"
            onChange={(evt) => handleInterestsChange(evt, 'domain')}
          />
          <Creatable
            options={interestsData}
            isSearchable
            isMulti
            id="interests-select"
            placeholder="What are your professional interests?"
            className="mt-4 textmd"
            onChange={(evt) => handleInterestsChange(evt, 'interests')}
          />
          <Creatable
            options={skills}
            isSearchable
            isMulti
            id="skills-select"
            placeholder="What skills are you interested in learning?"
            className="mt-4 text-md"
            onChange={(evt) => handleInterestsChange(evt, 'skills')}
          />
          <header className="mt-3 text-xl font-semibold">
            And a little more information...
          </header>
          <div className="mt-1">Linkedin</div>
          <Input
            css=""
            value={info.linkedin}
            name="linkedin"
            onChange={handleInfoChange}
          />
          <div className="">School</div>
          <Input
            css=""
            value={info.school}
            name="school"
            onChange={handleInfoChange}
          />
          <div className="">Major</div>
          <Input
            css=""
            value={info.major}
            name="major"
            onChange={handleInfoChange}
          />
          <div className="">Most Recent Position</div>
          <Input
            css={''}
            value={info.position}
            name="position"
            onChange={handleInfoChange}
          />
          <Button
            onClick={() => router.replace('/home/interests')}
            layout="primary"
            size="large"
            className="mt-4"
          >
            Complete Onboarding!
          </Button>
        </form>
      </Section>
    </Background>
  );
}

export { InterestsSurvey };
