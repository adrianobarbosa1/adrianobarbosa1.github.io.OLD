import React from "react"
import { Flex, Box, Container } from "@chakra-ui/react"
import SectionHeading from "../../components/SectionHeading"
import ImageSwiper from "../../components/ImageSwiper"
import { portfolioData } from "./portfolio.data"

const Portfolio = () => {
  return (
    <Box id="portfolio">
      <Box mt="1rem">
        <SectionHeading
          slogan="Portfólio"
          title="Confira alguns projetos realizados"
        />
      </Box>
      <ImageSwiper slides={portfolioData} />
    </Box>
  )
}

export default Portfolio
