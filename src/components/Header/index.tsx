import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react"
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons"
import { MobileNav } from "./MobileNav"
import DesktopNav from "./DesktopNav"
import { useState } from "react"
import { Logo } from "../Logo"

export default function Header() {
  const { isOpen, onToggle } = useDisclosure()
  const [header, setHeader] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground)
  }

  return (
    <Box>
      <Flex
        bg={"white"}
        color={useColorModeValue("gray.600", "white")}
        position={{ base: "static", md: "fixed" }}
        w={{ md: "100%" }}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        boxShadow={header ? "md" : ""}
        align={"center"}
        zIndex="1000"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Logo />
          <Spacer />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}
