// global styles for all brands (style resets, default styles, and etc.)
// TODO: Move this as it causes a "cascading dependency" that hurts our Lighthouse score
import '../public/normalize.css';
import '../style/variables.css';
import '../style/global.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
// import NextNprogress from 'nextjs-progressbar';
import { AppStore, createStore } from '../redux/store';
import NextNprogress from '../components/NextNProgress';

import '../public/normalize.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [store, setStore] = useState<AppStore>(null);

  if (!store) {
    setStore(createStore(pageProps.globalProps));
  }

  return (
    <>
      <Head>
        <title>Girenko</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link type="text/css" rel="stylesheet" href={`/theme.css`} />
      </Head>
      <Provider store={store}>
        <NextNprogress />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

// TODO: In future version of NextJS, we will be able to use getStaticProps to populate our navigation & alertBanners
// export const getStaticProps: GetStaticProps = async (context) => {
//     const navigation = await ContentfulDelivery(context.preview).getNavigation()
//     return { props: { navigation } }
// }

export default MyApp;
