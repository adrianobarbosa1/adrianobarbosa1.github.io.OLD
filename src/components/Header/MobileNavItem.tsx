import {
  Flex,
  Stack,
  Icon,
  Link,
  Text,
  useColorModeValue,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import NextLink from "next/link"
import { NAV_ITEMS } from "../navItems.data"
import { ChevronDownIcon } from "@chakra-ui/icons"

export function MobileNavItem({ label, children, href, path, id }: NavItem) {
  const { isOpen, onToggle } = useDisclosure()
  const linkColor = useColorModeValue("gray.600", "gray.200")
  const linkHoverColor = useColorModeValue("blue.500", "white")

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <NextLink href={path} passHref key={`${label}${id}`}>
        <Link
          p={2}
          fontSize={"sm"}
          fontWeight="bold"
          color={linkColor}
          transition={"color .3s"}
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          _hover={{
            textDecoration: "none",
            color: linkHoverColor,
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>

          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Link>
      </NextLink>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}
