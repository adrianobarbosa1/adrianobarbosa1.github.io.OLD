import {
    Box,
    Stack,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link as ScrollLink } from "react-scroll";

import { NAV_ITEMS } from './navItems.data';
import DesktopSubNav from './DesktopSubNav';

export default function DesktopNav() {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('blue.500', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem, i) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}
                            >
                                <ScrollLink
                                    activeClass="active"
                                    to={navItem.path ?? '#'}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    key={i}
                                    path={navItem.path ?? '#'}

                                >
                                    {navItem.label}
                                </ScrollLink>
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))
            }
        </Stack >
    );
};
