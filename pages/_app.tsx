import '../styles/globals.css';
import type { AppProps } from 'next/app';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          li {
            list-style: none;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
