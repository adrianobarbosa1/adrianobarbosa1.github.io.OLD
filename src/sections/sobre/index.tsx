import SectionHeading from '../../components/SectionHeading';
import styles from './styles.module.scss'

const Sobre = () => {
    return (
        <div className={styles.container} id="sobre">
            <SectionHeading
                className={styles.heading}
                slogan='Sobre'
                title='Adriano Barbosa'
            />

        </div>
    );
};

export default Sobre;