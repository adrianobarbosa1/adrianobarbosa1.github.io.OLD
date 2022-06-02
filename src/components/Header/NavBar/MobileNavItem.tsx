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
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from "react-scroll";

import NavItem from './navItems.data';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function MobileNavItem({ label, children, path }: NavItem) {
    const { isOpen, onToggle } = useDisclosure();
    console.log(children)
    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.path}>
                                {child.label}
                                <ScrollLink
                                    activeClass="active"
                                    to={path}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    key={label}
                                    path={path}

                                >
                                    {child.label}
                                </ScrollLink>

                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};