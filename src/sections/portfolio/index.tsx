import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import SectionHeading from '../../components/SectionHeading';
import ImageSlider from '../../components/ImageSwiper';
import ImageSwiper from '../../components/ImageSwiper';

const cards = [
    {
        title: 'Meu lote Minha Historia',
        img: '/image/portfolio/port-1.png',
        alt: 'portfolio Meu lote minha historia',
        txt: 'Projeto para doação de lotes da prefeitura de Anápolis',
        link: 'http://meuloteminhahistoria.anapolis.go.gov.br:8089/',
    },
    {
        title: 'Portal Brazlândia',
        img: '/image/portfolio/port-2.png',
        alt: 'portfolio Portal Brazlândia',
        txt: 'Projeto portal de noticias para a cidade de Brazlândia',
        link: 'https://www.brazlandia.com.br/',
    },
];

const Portfolio = () => {

    return (
        <Flex
            as='section'
            id="portfolio"
            maxW='1120px'
            h='100vh'
            m='0 auto'
            mb='1rem'
            flexDir='column'
        >
            <SectionHeading
                slogan='Portfólio'
                title='Confira alguns projetos realizados'
            />
            <Box px='5rem'>
                <ImageSwiper slides={cards} />
            </Box>
        </Flex>
    );
};

export default Portfolio;