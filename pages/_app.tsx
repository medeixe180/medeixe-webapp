import '../styles/device-mockups.css';
import '../styles/style.default.css';
import '../styles/custom.css';
import type { AppProps } from 'next/app';
import {useEffect, useLayoutEffect} from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap");
  }, []);
  useLayoutEffect(() => {
    import("../js/front");
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
