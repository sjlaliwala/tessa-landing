import React from 'react';

import { LandingHeading } from '../heading/LandingHeading';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Landing = () => (
  <>
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}></NavbarTwoColumns>
    </Section>
    <Section yPadding="pt-20">
      <LandingHeading />
    </Section>
  </>
);

export { Landing };
