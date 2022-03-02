import React from 'react';

import { Section } from '../../layout/Section';
import { LandingHeading } from './LandingHeading';
import { LandingNavbar } from './LandingNavbar';
import { OnboardingButton } from './OnboardingButton';

function Landing() {
  return (
    <>
      <Section yPadding="py-6">
        <LandingNavbar />
      </Section>
      <Section yPadding="pt-10">
        <LandingHeading />
      </Section>
      <Section>
        <OnboardingButton />
      </Section>
    </>
  );
}

export { Landing };
