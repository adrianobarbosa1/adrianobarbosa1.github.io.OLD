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
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import NavItem, { NAV_ITEMS } from './navItems.data';
import MobileNavItem from './MobileNavItem';
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function MobileNav() {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('blue.500', 'white');

    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}
        >

            {NAV_ITEMS.map((navItem, i) => (
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}

                >

                    <Link
                        py={2}
                        _hover={{
                            textDecoration: 'none',
                        }}
                    >
                        <ScrollLink
                            activeClass="active"
                            to={navItem.path}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            key={i}
                            path={navItem.path}

                        >
                            {navItem.label}
                        </ScrollLink>
                    </Link>
                </Stack>
            ))}
            <Flex
                direction={'column'}

            >
                <Link
                    mt={1}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    p={2}
                    pl={8}
                    target="_blank"
                    href="https://github.com/adrianobarbosa1"
                    color={linkColor}
                    transition={'color .3s'}
                    _hover={{
                        textDecoration: 'none',
                        color: linkHoverColor,
                    }}
                >
                    <Icon w={4} h={4} as={FaGithub} />
                </Link>
                <Link
                    mt={2}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    p={2}
                    pl={8}
                    target="_blank"
                    href="https://www.linkedin.com/in/adriano-barbosa-10892750"
                    color={linkColor}
                    transition={'color .3s'}
                    _hover={{
                        textDecoration: 'none',
                        color: linkHoverColor,
                    }}
                >
                    <Icon w={4} h={4} as={FaLinkedin} />
                </Link>
            </Flex>
        </Stack >

    );
};
