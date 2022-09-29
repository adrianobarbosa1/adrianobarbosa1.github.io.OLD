import { Flex, Stack, Icon, Link, useColorModeValue } from "@chakra-ui/react"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import NextLink from "next/link"
import { NAV_ITEMS } from "../navItems.data"
import { MobileNavItem } from "./MobileNavItem"

export function MobileNav() {
  const linkColor = useColorModeValue("gray.600", "gray.200")
  const linkHoverColor = useColorModeValue("blue.500", "white")

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}
