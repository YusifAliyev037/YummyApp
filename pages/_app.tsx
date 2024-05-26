import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Provider } from 'react-redux';
import { store } from '@/shared/redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <ProgressBar height='4px' color='#8b1fab' />
    </ChakraProvider>
  );
}

export default MyApp;
