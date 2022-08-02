import { Flex } from '@chakra-ui/react';
import { Adriano } from '../../components/Adriano';

const Home = () => {
    return (
        <Flex
            as='section'
            id="home"
            h='98vh'
            align='center'
            justify='center'
            backgroundImage="url('/image/2.png')"
            backgroundPosition="cover"
            backgroundRepeat="no-repeat"
        >
            <Adriano />
        </Flex>
    );
};

export default Home;