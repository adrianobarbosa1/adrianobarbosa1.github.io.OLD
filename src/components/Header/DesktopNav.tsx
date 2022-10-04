import {
  Box,
  Stack,
  Link,
  useColorModeValue,
  Icon,
  Popover,
  PopoverContent,
} from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import NextLink from "next/link"
import { NAV_ITEMS } from "../navItems.data"
import DesktopSubNav from "./DesktopSubNav"

export default function DesktopNav() {
  const linkColor = useColorModeValue("gray.600", "gray.200")
  const linkHoverColor = useColorModeValue("#00B8E4", "white")
  const popoverContentBgColor = useColorModeValue("white", "gray.800")

  return (
    <Stack align="center" justify="center" direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <NextLink href={navItem.path} passHref scroll={true}>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </NextLink>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Link
        pt={2}
        href="https://github.com/adrianobarbosa1"
        isExternal
        color={linkColor}
        transition={"color .3s"}
        _hover={{
          textDecoration: "none",
          color: linkHoverColor,
        }}
      >
        <Icon w={4} h={4} as={FaGithub} />
      </Link>

      <Link
        pt={2}
        href="https://www.linkedin.com/in/adriano-barbosa-10892750"
        isExternal
        color={linkColor}
        transition={"color .3s"}
        _hover={{
          textDecoration: "none",
          color: linkHoverColor,
        }}
      >
        <Icon w={4} h={4} as={FaLinkedin} />
      </Link>
    </Stack>
  )
}
