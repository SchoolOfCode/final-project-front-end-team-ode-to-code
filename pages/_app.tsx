import '../styles/globals.css';
import '../styles/reset.css';
import '../styles/containers.css';
import { AppWrapper} from '../context/state';
import Head from 'next/head';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {

  return (<AppWrapper>
    <Head>
      <title>beyonderbound</title>
    </Head>
    <Component {...pageProps} />
    </AppWrapper>);
}
export default MyApp;
