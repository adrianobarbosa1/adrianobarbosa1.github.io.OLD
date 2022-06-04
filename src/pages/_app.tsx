import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import Footer from '../components/Footer'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </ChakraProvider>
    </>
  )

}

export default MyApp
