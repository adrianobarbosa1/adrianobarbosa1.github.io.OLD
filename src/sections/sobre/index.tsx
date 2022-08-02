import { Box, Flex, Image, Text } from '@chakra-ui/react';
import SectionHeading from '../../components/SectionHeading';

const Sobre = () => {
    return (
        <Flex
            as='section'
            id="sobre"
            maxW='1120px'
            h='100vh'
            m='0 auto'
            pt='1rem'
            flexDir='column'
        >
            <Box>
                <Box pt='1rem' pb='7.5rem'>
                    <SectionHeading
                        slogan='Sobre'
                        title='Adriano Barbosa'
                    />
                    <Flex align={'center'} direction={{ base: 'column', md: 'row' }}>
                        <Flex
                            border='1px solid blue'
                            w='40%'
                            align='center'
                            justify='center'
                        >
                            <Image
                                borderRadius='full'
                                boxSize='150px'
                                src='image/adriano.jpg'
                                alt='Adriano Barbosa'
                            />
                        </Flex>
                        <Box border='1px solid red' w='60%'>
                            <Text as='p' px={{ base: '2', md: '10' }} py={{ base: '2', md: '10' }}>
                                Formadoe em Análise e Desenvolvimento de Sistemas,
                                Programador e desenvolvedor há mais de 6 anos, atuando diretamente no mercado.
                                Teve início na carreira em 2016 quando descobriu seu maior vício: códigos.
                                Seu primeiro trabalho foi na secretaria da educação, que

                                o proporcionou um alavancamento nas suas habilidades,
                                a partir daí começou com projetos externos das mais diversas formas, Websites,
                                Aplicativos, Sistemas, adquirindo um vasto conhecimento nas diversas linguagens
                                de programação hoje utilizadas no mercado.

                            </Text>

                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
};

export default Sobre;