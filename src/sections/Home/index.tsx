import { Adriano } from '../../components/Adriano';
import styles from './styles.module.scss'

const Home = () => {
    return (
        <>
            <div className={styles.container} id="home">
                <div className={styles.background} />
                <Adriano />
            </div>
        </>
    );
};

export default Home;