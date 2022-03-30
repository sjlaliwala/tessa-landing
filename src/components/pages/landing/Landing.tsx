import React from 'react';

import { Background } from '../../background/Background';
import { Section } from '../../layout/Section';
import { LandingHeading } from './LandingHeading';
import { LandingNavbar } from './LandingNavbar';
import { OnboardingButton } from './OnboardingButton';

const screenSize = 'lg';

function Landing() {
  return (
    <Background className="bg-pattern-randomized h-screen w-screen">
      <Section yPadding="py-6" sectionWidth={screenSize}>
        <LandingNavbar />
      </Section>
      <Section yPadding="pt-10" sectionWidth={screenSize}>
        <LandingHeading />
      </Section>
      <Section sectionWidth={screenSize}>
        <OnboardingButton />
      </Section>
    </Background>
  );
}

export { Landing };
