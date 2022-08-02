import {
    Box,
    Stack,
    Link,
    useColorModeValue,
    Icon,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import NextLink from "next/link"
import { NAV_ITEMS } from './navItems.data';

export default function DesktopNav() {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('#00B8E4', 'white');

    return (
        <Stack
            align='center'
            justify='center'
            direction={'row'}
            spacing={4}
        >
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <NextLink href={navItem.path} passHref>
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

                            {navItem.label}
                        </Link>
                    </NextLink>
                </Box>
            ))
            }

            <Link
                pt={2}
                href="https://github.com/adrianobarbosa1"
                isExternal
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
                href="https://www.linkedin.com/in/adriano-barbosa-10892750"
                isExternal
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
