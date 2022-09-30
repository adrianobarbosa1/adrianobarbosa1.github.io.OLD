import React from "react"
import { Flex, Box, Container } from "@chakra-ui/react"
import SectionHeading from "../../components/SectionHeading"
import ImageSwiper from "../../components/ImageSwiper"

const cards = [
  {
    data: "2022-09-30",
    title: "Meu lote Minha Historia",
    img: "/image/portfolio/port-1.png",
    alt: "portfolio Meu lote minha historia",
    link: "http://meuloteminhahistoria.anapolis.go.gov.br:8089/",
  },
  {
    data: "2022-09-30",
    title: "Portal Brazlândia",
    img: "/image/portfolio/port-2.png",
    alt: "portfolio Portal Brazlândia",
    link: "https://www.brazlandia.com.br/",
  },
  {
    data: "2022-09-30",
    title: "Meu lote Minha Historia",
    img: "/image/portfolio/port-1.png",
    alt: "portfolio Meu lote minha historia",
    link: "http://meuloteminhahistoria.anapolis.go.gov.br:8089/",
  },
  {
    data: "2022-09-30",
    title: "Portal Brazlândia",
    img: "/image/portfolio/port-2.png",
    alt: "portfolio Portal Brazlândia",
    link: "https://www.brazlandia.com.br/",
  },
  {
    data: "2022-09-30",
    title: "Meu lote Minha Historia",
    img: "/image/portfolio/port-1.png",
    alt: "portfolio Meu lote minha historia",
    link: "http://meuloteminhahistoria.anapolis.go.gov.br:8089/",
  },
  {
    data: "2022-09-30",
    title: "Portal Brazlândia",
    img: "/image/portfolio/port-2.png",
    alt: "portfolio Portal Brazlândia",
    link: "https://www.brazlandia.com.br/",
  },
  {
    data: "2022-09-30",
    title: "Meu lote Minha Historia",
    img: "/image/portfolio/port-1.png",
    alt: "portfolio Meu lote minha historia",
    link: "http://meuloteminhahistoria.anapolis.go.gov.br:8089/",
  },
  {
    data: "2022-09-30",
    title: "Portal Brazlândia",
    img: "/image/portfolio/port-2.png",
    alt: "portfolio Portal Brazlândia",
    link: "https://www.brazlandia.com.br/",
  },
  {
    data: "2022-09-30",
    title: "Meu lote Minha Historia",
    img: "/image/portfolio/port-1.png",
    alt: "portfolio Meu lote minha historia",
    link: "http://meuloteminhahistoria.anapolis.go.gov.br:8089/",
  },
  {
    data: "2022-09-30",
    title: "Portal Brazlândia",
    img: "/image/portfolio/port-2.png",
    alt: "portfolio Portal Brazlândia",
    link: "https://www.brazlandia.com.br/",
  },
]

const Portfolio = () => {
  return (
    <Box id="portfolio" border="1px solid red">
      <Box mt="1rem">
        <SectionHeading
          slogan="Portfólio"
          title="Confira alguns projetos realizados"
        />
      </Box>

      <ImageSwiper slides={cards} />
    </Box>
  )
}

export default Portfolio
