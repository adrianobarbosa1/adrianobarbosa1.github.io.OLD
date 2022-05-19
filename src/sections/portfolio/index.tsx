import SectionHeading from '../../components/SectionHeading';
import SectionHeadingLight from '../../components/SectionHeadingLight';
import styles from './styles.module.scss'
import Carousel from 'react-elastic-carousel'

const Portfolio = () => {
    return (
        <div className={styles.container} id="portfolio">
            <SectionHeading
                className={styles.heading}
                slogan='Portfólio'
                title='Confira alguns projetos realizados'
            />

        </div>
    );
};

export default Portfolio;