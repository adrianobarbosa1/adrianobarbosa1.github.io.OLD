import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Footer from '../components/Footer';
import Contato from '../sections/contato';
import Home from '../sections/Home';
import Portfolio from '../sections/portfolio';
import Servicos from '../sections/servicos';
import Sobre from '../sections/sobre';

const IndexPage: NextPage = () => {
  return (
    <Flex m='0' flexDir='column'>
      <Home />
      <Sobre />
      <Servicos />
      <Portfolio />
      <Contato />
      <Footer />
    </Flex>
  )
}

export default IndexPage;