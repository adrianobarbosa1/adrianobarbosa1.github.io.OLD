import { Box, Flex, Link } from "@chakra-ui/react"
import React from "react"
import NextLink from "next/link"
import { NAV_ITEMS } from "../navItems.data"

export function NavFooter() {
  return (
    <Flex
      as="nav"
      flexDirection={{
        base: "column",
        md: "row",
      }}
      align="center"
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <NextLink href={navItem.path} passHref>
            <Link
              flex={{ base: 1, md: "auto" }}
              color="whitesmoke"
              cursor="pointer"
              p="5px 20px"
              mt="1.5rem"
              _hover={{
                textDecoration: "none",
                color: "#00B8E4",
              }}
            >
              {navItem.label}
            </Link>
          </NextLink>
        </Box>
      ))}
    </Flex>
  )
}
