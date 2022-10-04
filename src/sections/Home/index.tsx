import { Box, Container, Flex, Icon, Image, Text } from "@chakra-ui/react"
import { Adriano } from "../../components/Adriano"
import svgSeparatorWave from "../../../public/image/home/section-separator.svg"

const Home = () => {
  return (
    <>
      <Flex
        id="home"
        w="100%"
        mt={{ base: "0.5rem", md: "3rem", lg: "3.75rem" }}
        pb="2rem"
        gap="2rem"
        align="center"
        justify="center"
        bg="#12172a"
        direction={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
      >
        <Box>
          <Image
            w={["10rem", "20rem", "30rem"]}
            src={"image/sobre/adriano-barbosa.jpeg"}
            alt="Adriano Desenvolvedor"
          />
        </Box>
        <Flex direction={"column"}>
          <Box>
            <Text
              as="h1"
              fontSize={{ base: "3rem", md: "5rem", lg: "8rem" }}
              fontWeight="600"
              color="blue"
            >
              Olá,
            </Text>
            <Text
              mt="-20px"
              mb="30px"
              as="h2"
              fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
              fontWeight="300"
              color="blue"
            >
              Me chamo Adriano Barbosa
            </Text>
          </Box>

          <Box
            bg="linear-gradient(225deg, #313860 0%, #11172B 100%)"
            p="2rem"
            fontFamily={"monospace"}
            fontWeight="300"
            w={["15rem", "18rem", "24rem"]}
            alignItems="flex-start"
            transition="1s"
            _hover={{
              filter: "auto",
              brightness: "1.5",
            }}
          >
            <Text color="#62677d">//Minha apresentação</Text>
            <Text mt="10px" color="#f279c6">
              Infos{" "}
              <Text as="span" color="#f8f8f2">
                {"\u007B"}
              </Text>
            </Text>

            <Text ml="10px" color="#f8f8f2">
              Nome:{" "}
              <Text as="span" color="#e4fa8c">
                "Adriano",
              </Text>
            </Text>

            <Text ml="10px" color="#f8f8f2">
              Sobrenome:{" "}
              <Text as="span" color="#e4fa8c">
                "Barbosa"
              </Text>
            </Text>
            <Text color="#f8f8f2">{"\u007D"}</Text>
          </Box>

          <Box
            mt="2rem"
            ml={["1rem", "14rem", "16rem"]}
            bg="linear-gradient(225deg, #313860 0%, #11172B 100%)"
            p="2rem"
            fontFamily={"monospace"}
            fontWeight="300"
            w={["15rem", "18rem", "24rem"]}
            alignItems="flex-start"
            transition="1s"
            _hover={{
              filter: "auto",
              brightness: "1.5",
            }}
          >
            <Text mt="10px" color="#f279c6">
              Cargo{" "}
              <Text as="span" color="#f8f8f2">
                {"\u007B"}
              </Text>
            </Text>

            <Text ml="10px" color="#f8f8f2">
              função:{" "}
              <Text as="span" color="#e4fa8c">
                "Dev Fullstack",
              </Text>
            </Text>

            <Text ml="10px" color="#f8f8f2">
              Tecnologias:{" "}
              <Text as="span" color="#e4fa8c">
                "Node.js", "React.js", "mongoDB"
              </Text>
            </Text>
            <Text color="#f8f8f2">{"\u007D"}</Text>
          </Box>
        </Flex>
      </Flex>
      <Box w="100%" bottom="0" left="0" lineHeight="0" bg="#12172A">
        <Image
          src={"/image/home/section-separator.svg"}
          alt="Adriano Desenvolvedor"
          position="relative"
          display="block"
          w="calc(100% + 1.3px)"
          h="113px"
        />
      </Box>
    </>
  )
}
//rosa = f279c6
//Azul = 4ecbfd
//fundo = 282a36
//brakeqtes e text = f8f8f2
// cor comentários = 62677d
export default Home
