import {
    Box,
    Stack,
    Link,
    Popover,
    PopoverTrigger,
    useColorModeValue,
    Icon,
} from '@chakra-ui/react';
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { NAV_ITEMS } from './navItems.data';

export default function DesktopNav() {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('blue.500', 'white');

    return (
        <Stack
            align='center'
            justify='center'
            direction={'row'}
            spacing={4}
        >

            {NAV_ITEMS.map((navItem, i) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                fontSize={'sm'}
                                fontWeight="bold"
                                color={linkColor}
                                transition={'color .3s'}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
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
                        </PopoverTrigger>
                    </Popover>
                </Box>
            ))
            }
            <Link
                pt={2}
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
                pt={2}
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
        </Stack >
    );
};
