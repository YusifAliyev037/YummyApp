import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";
import { Provider } from "react-redux";
import { store } from "@/shared/redux/store";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
        <ProgressBar height="4px" color="#8b1fab" />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
