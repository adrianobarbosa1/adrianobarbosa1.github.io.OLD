import { Box, Container, Flex, Grid } from "@chakra-ui/react"

import CardServicos from "../../components/cards/CardServicos"
import SectionHeading from "../../components/SectionHeading"
import { servicosData } from "./servicos.data"

const Servicos = () => {
  return (
    <Box
      backgroundImage="url('/image/servicos/bgservicos.jpg')"
      backgroundColor="#ecf2fd"
    >
      <Container maxW={"7xl"} p="12" as="section" id="servicos">
        <Box>
          <Box pb="7.5rem">
            <Box mt="1rem">
              <SectionHeading
                slogan="Habilidades"
                title="Como posso te ajudar?"
              />
            </Box>

            <Flex justify="center">
              <Grid
                templateColumns={{
                  base: "repeat(1, 6fr)",
                  md: "repeat(3, 2fr)",
                }}
                gap={6}
                maxWidth="1030px"
              >
                {servicosData?.map((item, index) => (
                  <CardServicos key={index} data={item} />
                ))}
              </Grid>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Servicos
