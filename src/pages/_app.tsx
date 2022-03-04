import { Windmill } from '@windmill/react-ui';
import { AppProps } from 'next/app';

import '../styles/main.css';
import tessaTheme from '../themes/tessaTheme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Windmill theme={tessaTheme}>
    <Component {...pageProps} />
  </Windmill>
);

export default MyApp;
