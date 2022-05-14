import type { NextPage } from 'next'
import Contato from '../sections/contato';
import Home from '../sections/home';
import Portfolio from '../sections/portfolio';
import Servicos from '../sections/servicos';
import Sobre from '../sections/sobre';

const IndexPage: NextPage = () => {
  return (
    <>
      <Home />
      <Sobre />
      <Servicos />
      <Portfolio />
      <Contato />
    </>
  )
}

export default IndexPage;