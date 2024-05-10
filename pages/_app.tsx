import { ChakraProvider } from '@chakra-ui/react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <ProgressBar height='4px' color='#fffd00'/>

    </ChakraProvider>
  )
}

export default MyApp
