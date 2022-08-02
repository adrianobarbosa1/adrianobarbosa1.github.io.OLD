import { Box, Flex, Grid } from '@chakra-ui/react';

import CardServicos from '../../components/cards/CardServicos';
import SectionHeading from '../../components/SectionHeading';
import { servicosData } from './servicos.data';

const Servicos = () => {
    return (
        <Flex
            as='section'
            id="servicos"
            maxW='1120px'
            h='100vh'
            m='0 auto'
            pt='1rem'
            flexDir='column'
        >
            <Box  >
                <Box pb='7.5rem'>
                    <SectionHeading
                        slogan='Serviços'
                        title='Como posso te ajudar?'
                    />

                    <Flex justify='center' >
                        <Grid templateColumns={{ base: 'repeat(1, 6fr)', md: 'repeat(3, 2fr)' }} gap={6} maxWidth='1030px'>
                            {servicosData?.map((item, index) => (
                                <CardServicos key={index} data={item} />
                            ))}
                        </Grid >

                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
};

export default Servicos;