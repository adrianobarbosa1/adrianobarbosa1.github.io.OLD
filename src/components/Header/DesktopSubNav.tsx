import {
  Box,
  Stack,
  Link,
  useColorModeValue,
  Icon,
  Text,
  Flex,
} from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import NextLink from "next/link"
import NavItem, { NAV_ITEMS } from "../navItems.data"
import { ChevronRightIcon } from "@chakra-ui/icons"

export default function DesktopSubNav({ label, href, subLabel }: NavItem) {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}
