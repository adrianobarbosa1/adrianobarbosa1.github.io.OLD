import { useState } from 'react';
import {
    Box,
    Flex,
    IconButton,
    Collapse,
    useColorModeValue,
    useDisclosure,
    Spacer,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { Logo } from '../Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function Header() {
    const { isOpen, onToggle } = useDisclosure();
    const [header, setHeader] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 70) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeBackground)
    }

    return (
        <Flex
            position='sticky'
            top='0'
            justify='center'
            bg={header ? "white" : 'transparent'}
            boxShadow={header ? 'md' : ''}
            color={useColorModeValue('gray.600', 'white')}
        >
            <Flex
                maxWidth={1366}
                w='100%'

                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={'center'}
                justify='space-between'
            >

                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>

                <Flex
                    flex={{ base: 2 }} justify={{ xs: 'center', md: 'start' }}>
                    <Logo />
                    <Spacer />
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Flex>
    );
}



