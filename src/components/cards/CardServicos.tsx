import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"

const CardServicos = ({ data, ...props }) => {
  return (
    <Flex direction="column" textAlign="center" {...props} zIndex="5">
      <Box
        as="figure"
        minWidth="4.375rem"
        mr="1.875rem"
        m="0 0 20px"
        zIndex="-1"
      >
        <Image src={data?.icon} alt={data?.title} />
      </Box>

      <Box>
        <Heading
          fontWeight="600"
          fontSize={{ base: "1rem", md: "1.2rem" }}
          lineHeight="1.28"
          color="textTitle"
          mb="1.25rem"
        >
          {data?.title}
        </Heading>

        <Text
          as="p"
          fontSize="1rem"
          mx={{ base: "1rem" }}
          fontWeight="400"
          lineHeight="1.88"
          color="text"
        >
          {data?.description}
        </Text>
      </Box>
    </Flex>
  )
}

export default CardServicos
