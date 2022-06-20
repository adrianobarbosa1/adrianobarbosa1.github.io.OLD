import {
    Flex,
    Stack,
    Icon,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';

import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { NAV_ITEMS } from './navItems.data';

export default function MobileNav() {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('blue.500', 'white');

    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}
            w='350px'

        >

            {NAV_ITEMS.map((navItem, i) => (


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
                            {navItem.label}
                        </Link>
                    </Stack>

                </ScrollLink>
            ))}
            <Flex
                direction={'column'}
            >
                <Stack
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}

                >
                    <Link
                        p={2}
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
                </Stack>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}

                >
                    <Link
                        mt={2}
                        p={2}
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
                </Stack>
            </Flex>
        </Stack >

    );
};
