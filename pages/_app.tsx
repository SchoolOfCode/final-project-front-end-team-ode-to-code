import '../styles/globals.css';
import '../styles/reset.css';
import '../styles/containers.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
