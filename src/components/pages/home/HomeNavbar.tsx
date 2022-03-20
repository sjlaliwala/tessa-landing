import React from 'react';

import { Button } from '@windmill/react-ui';
import Link from 'next/link';

import { signOut } from '../../../firebase/auth';
import { Logo } from '../../logo/Logo';
import { NavbarTwoColumns } from '../../navigation/NavbarTwoColumns';

const pages = ['Recommendations', 'Profile'];

function HomeNavbar() {
  const handleLogout = () => {
    signOut();
  };

  return (
    <NavbarTwoColumns logo={<Logo xl />}>
      {pages.map((page) => {
        return (
          <li className="text-xl font-semibold" key={page}>
            <Link href={`/home/${page.toLowerCase()}`}>{page}</Link>
          </li>
        );
      })}
      <li>
        <Button
          key="sign-out"
          layout="primary"
          size="large"
          onClick={handleLogout}
        >
          Sign Out
        </Button>
      </li>
    </NavbarTwoColumns>
  );
}

export { HomeNavbar };
