import React from 'react';

import Link from 'next/link';

import { Logo } from '../../logo/Logo';
import { NavbarTwoColumns } from '../../navigation/NavbarTwoColumns';

function LandingNavbar() {
  return (
    <NavbarTwoColumns logo={<Logo xl />}>
      <li>
        <Link href="/onboarding/sign-in">
          <a>Sign in</a>
        </Link>
      </li>
    </NavbarTwoColumns>
  );
}

export { LandingNavbar };
