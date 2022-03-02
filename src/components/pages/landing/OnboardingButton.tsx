import React from 'react';

import { Button } from '@windmill/react-ui';
import { useRouter } from 'next/router';

function OnboardingButton() {
  const router = useRouter();

  return (
    <Button
      block
      size="large"
      className="text-xl"
      onClick={() => router.replace('/onboarding/sign-up')}
    >
      Start your journey today!
    </Button>
  );
}

export { OnboardingButton };
