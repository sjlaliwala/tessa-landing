import { Windmill } from '@windmill/react-ui';
import NextNProgress from 'nextjs-progressbar';

import { Base } from '../components/pages/landing/Base';
import tessaTheme from '../themes/tessaTheme';

const Index = () => (
  <Windmill theme={tessaTheme}>
    <NextNProgress />
    <Base />
  </Windmill>
);

export default Index;
