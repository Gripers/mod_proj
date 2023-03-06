import '@/styles/globals.scss';

import type { AppProps } from 'next/app';
import { CartProvider } from 'react-use-cart';
import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';
import CookiesProvider from 'react-cookie/cjs/CookiesProvider';

import { store } from '@/store/store';
import Layout from '@/components/Layout';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-modern-drawer/dist/index.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextNProgress color='black' options={{ showSpinner: false }} />
      <CookiesProvider>
        <CartProvider>
          <Provider store={store}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </CartProvider>
      </CookiesProvider>
    </>
  );
};

export default App;
