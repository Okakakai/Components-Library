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
          *,
          ::before,
          ::after,
          :before,
          :after {
            font-family: inherit;
            box-sizing: border-box;
            border-style: solid;
            border-width: 0;
          }
          div {
            display: block;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
