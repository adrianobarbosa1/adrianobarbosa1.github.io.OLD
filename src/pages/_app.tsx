import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import Footer from '../components/Footer'
import Header from '../components/Header'

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  )

}

export default MyApp
