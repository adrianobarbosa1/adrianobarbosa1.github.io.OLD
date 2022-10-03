import React from "react"
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  useColorModeValue,
  Container,
  Center,
} from "@chakra-ui/react"
import SectionHeading from "../../components/SectionHeading"
import { BlogAuthor } from "./BlogAuthor"

const ArticleList = () => {
  return (
    <Box bg="#ecf4ff">
      <Box
        backgroundImage={"linear-gradient(180deg,#4b9fee,#7298d9)"}
        clipPath={"polygon(0 0, 100% 0, 100% 89%, 0 100%)"}
      >
        <Container maxW={"7xl"} p="12" as="section" id="sobre">
          <Box mt="1rem">
            {/* <SectionHeading slogan="Sobre" /> */}
            <Center>
              <Heading color="#fff">Sobre</Heading>
            </Center>
          </Box>
          <Box
            marginTop={{ base: "1", sm: "5" }}
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
            justifyContent="space-between"
          >
            <Box
              display="flex"
              flex="1"
              marginRight="3"
              position="relative"
              alignItems="center"
            >
              <Box
                width={{ base: "100%", sm: "85%" }}
                zIndex="2"
                marginLeft={{ base: "0", sm: "5%" }}
                marginTop="5%"
              >
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    borderRadius="lg"
                    w={"400px"}
                    src={"image/sobre/adriano-barbosa.jpeg"}
                    alt="some good alt text"
                    objectFit="contain"
                  />
                </Link>
              </Box>

              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  bgGradient={useColorModeValue(
                    "radial(orange.600 1px, transparent 1px)",
                    "radial(orange.300 1px, transparent 1px)"
                  )}
                  backgroundSize="20px 20px"
                  opacity="0.4"
                  height="100%"
                />
              </Box>
            </Box>

            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: "3", sm: "0" }}
            >
              <Heading marginTop="1">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  Adriano Barbosa
                </Link>
              </Heading>
              <Text
                as="p"
                marginTop="2"
                color={useColorModeValue("gray.700", "gray.200")}
                fontSize="lg"
              >
                Sou formado em Análise e Desenvolvimento de Sistemas,
                Programador e Desenvolvedor há mais de 6 anos, atuando
                diretamente no mercado. Tive início na carreira em 2016 quando
                descobri meu maior vício: códigos. Meu primeiro trabalho foi na
                Secretaria da Educação em Anápolis, que me proporcionou um
                alavancamento em minhas habilidades, a partir daí começei a
                fazer projetos externos das mais diversas formas, websites,
                aplicativos, sistemas, adquiri um vasto conhecimento. Nos dias
                de hoje me tornei um desenvolvedor Full stack, trabalhando com
                Nest.js, Express, mongoDB, SQL, PostgreSQL no lado
                servidor(Back-end) e Next.js, React, diversos frameworks css, no
                lado cliente(Front-end), estou sempre me atualizando e
                aprendendo.
              </Text>
              <BlogAuthor
                name="Adriano Barbosa"
                date={new Date("2022-09-30T19:01:27Z")}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default ArticleList
