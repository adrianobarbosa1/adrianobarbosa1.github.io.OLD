import SectionHeading from '../../components/SectionHeading';

import styles from './styles.module.scss'

const Portfolio = () => {
    return (
        <div className={styles.container} id="portfolio">
            <SectionHeading
                className={styles.heading}
                slogan='Portfólio'
                title='Confira alguns projetos realizados'
            />
            {/* <Carousel itemsToShow={3}>
                {portfolioData?.map((item) => (
                    <CardCarousel className={styles.servicosItem} key={item.id} data={item} />
                ))}

            </Carousel> */}

        </div>
    );
};

export default Portfolio;