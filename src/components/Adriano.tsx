import { Box, Flex, Heading, Text } from "@chakra-ui/react"

const textArray = [
  "DESENVOLVEDOR FULLSTACK",
  "ESPECIALISTA NODE.JS",
  "ESPECIALISTA REACT.JS",
]

export function Adriano() {
  return (
    <Flex mb="2rem">
      <Flex
        ml={{ base: "1rem", md: "10rem" }}
        direction="column"
        fontSize={{ base: "1.2rem", md: "1.75rem" }}
        lineHeight="3rem"
        fontWeight={700}
      >
        <Heading color="text" fontSize={{ base: "1.75rem", md: "3rem" }}>
          ADRIANO BARBOSA
        </Heading>
        <Text as="p" color="blue">
          DESENVOLVEDOR WEB <br />
          PROGRAMADOR JAVASCRIPT
        </Text>
        <Box color="blue">
          {/* <Typewriter
            options={{
              strings: `<Text>${textArray}</Text>`,
              autoStart: true,
              loop: true,
            }}
          /> */}
        </Box>
      </Flex>
    </Flex>
  )
}
