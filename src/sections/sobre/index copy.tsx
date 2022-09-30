import { Box, Flex, Image, Text } from "@chakra-ui/react"
import SectionHeading from "../../components/SectionHeading"

const Sobre = () => {
  return (
    <Flex
      as="section"
      id="sobre"
      h="100vh"
      m="0 auto"
      flexDir="column"
      align="center"
    >
      <Box>
        <SectionHeading slogan="Sobre" title="Adriano Barbosa" />

        <Flex>
          <Box>
            <Image
              w="200px"
              src="image/sobre/adriano-barbosa.jpeg"
              alt="Adriano Barbosa"
            />
          </Box>

          <Box w="50%" ml="20px">
            <Text as="p" fontWeight={"400"} fontStyle="" fontSize={"1.25rem"}>
              Sou formado em Análise e Desenvolvimento de Sistemas, Programador
              e Desenvolvedor há mais de 6 anos, atuando diretamente no mercado.
              Tive início na carreira em 2016 quando descobri meu maior vício:
              códigos. Meu primeiro trabalho foi na Secretaria da Educação em
              Anápolis, que me proporcionou um alavancamento em minhas
              habilidades, a partir daí começei a fazer projetos externos das
              mais diversas formas, websites, aplicativos, sistemas, adquiri um
              vasto conhecimento. Nos dias de hoje me tornei um desenvolvedor
              Full stack, trabalhando com Nest.js, Express, mongoDB, SQL,
              PostgreSQL no lado servidor(Back-end) e Next.js, React, diversos
              frameworks css, no lado cliente(Front-end), estou sempre me
              atualizando e aprendendo.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Sobre
