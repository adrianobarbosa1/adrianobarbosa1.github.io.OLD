import React from "react"
import { Flex, Box, Container } from "@chakra-ui/react"
import SectionHeading from "../../components/SectionHeading"
import ImageSwiper from "../../components/ImageSwiper"

const cards = [
  {
    title: "Meu lote Minha Historia",
    img: "/image/portfolio/port-1.png",
    alt: "portfolio Meu lote minha historia",
    txt: "Projeto para doação de lotes da prefeitura de Anápolis",
    link: "http://meuloteminhahistoria.anapolis.go.gov.br:8089/",
  },
  {
    title: "Portal Brazlândia",
    img: "/image/portfolio/port-2.png",
    alt: "portfolio Portal Brazlândia",
    txt: "Projeto portal de noticias para a cidade de Brazlândia",
    link: "https://www.brazlandia.com.br/",
  },
]

const Portfolio = () => {
  return (
    <Container maxW={"7xl"} p="12" as="section" id="portfolio">
      <Box mt="1rem">
        <SectionHeading
          slogan="Portfólio"
          title="Confira alguns projetos realizados"
        />
      </Box>

      <ImageSwiper slides={cards} />
    </Container>
  )
}

export default Portfolio
