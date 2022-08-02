import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react';
import logoLight from 'assets/logo-light.svg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LogoWhite } from '../Logo';
import { NavFooter } from './NavFooter';

export default function Footer() {
    return (
        <Box
            as='footer'
            bg='#333333'
            position='relative'
            zIndex={-1}
        >
            <Flex
                direction='column'
                justify='center'
                align='center'
                p='3.75rem 0 2.5rem'
            >
                <Box mb='2rem'>
                    <LogoWhite />
                </Box>
                <NavFooter />
                <Flex
                    mt='1rem'
                >
                    <Link
                        pt={2}
                        mr='1rem'
                        target="_blank"
                        href="https://github.com/adrianobarbosa1"
                        color='whitesmoke'
                        transition={'color .3s'}
                        _hover={{
                            textDecoration: 'none',
                            color: '#00B8E4',
                        }}
                    >
                        <Icon w={4} h={4} as={FaGithub} />
                    </Link>
                    <Link
                        pt={2}
                        mr='1rem'
                        target="_blank"
                        href="https://www.linkedin.com/in/adriano-barbosa-10892750"
                        color='whitesmoke'
                        transition={'color .3s'}
                        _hover={{
                            textDecoration: 'none',
                            color: '#00B8E4',
                        }}
                    >
                        <Icon w={4} h={4} as={FaLinkedin} />
                    </Link>
                </Flex>
            </Flex>
            <Box
                me={{
                    base: "20px",
                    md: "44px",
                }}
                w='100%'
                textAlign='center'
                p='15px 0 20px'
                color='whitesmoke'
                borderTop='1px solid rgb(131, 131, 131)'
            >
                <Text as='p' >
                    All rights reserved by
                    <Text as='span' color='#00B8E4'> Adriano Barbosa, </Text>
                    {` ${new Date().getFullYear()}.`}
                </Text>
            </Box>
        </Box>
    );
}