import { Box, Container, Flex, Image, Text } from "@chakra-ui/react"
import { Adriano } from "../../components/Adriano"

const Home = () => {
  return (
    <Flex
      id="home"
      h="98vh"
      gap="2rem"
      align="center"
      justify="center"
      backgroundImage="url('/image/home/2.png')"
      backgroundPosition="cover"
      backgroundRepeat="no-repeat"
    >
      <Flex alignItems="center" display="flex" border="1px solid red" w="100%">
        <Box flex={1} w="40rem">
          <Image src={"image/sobre/adriano-barbosa.jpeg"} />
        </Box>

        <Box flex={4} w="100%" mb="2rem">
          <Box>
            <Text as="h1" fontSize="8rem" fontWeight="600" color="blue">
              Olá
            </Text>
            <Text as="h2" fontSize="3rem" fontWeight="400" color="#57c9e6">
              Me chamo Adriano Barbosa
            </Text>
          </Box>

          <Flex
            w="100%"
            direction="column"
            bg="linear-gradient(225deg, #919191 0%, #36373a 100%)"
          >
            <Text>//Minha apresentação</Text>
            <Text as="span">Infos</Text>
            <Text>{"\u007B"}</Text>
            <Text>
              Nome: <Text as="span">Adriano,</Text>
            </Text>
            <Text>
              Sobrenome: <Text as="span">Barbosa</Text>
            </Text>
            <Text>{"\u007D"}</Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}
//rosa = f279c6
//Azul = 4ecbfd
//fundo = 282a36
//brakeqtes e text = f8f8f2
// cor comentários = 62677d
export default Home
