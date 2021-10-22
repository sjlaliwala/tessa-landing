import { TypeFormPopUpButton } from '../button/TypeFormPopUpButton';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Join our Waitlist Today!"
      subtitle=""
      button={<TypeFormPopUpButton title="Get Started" />}
    />
  </Section>
);

export { Banner };
