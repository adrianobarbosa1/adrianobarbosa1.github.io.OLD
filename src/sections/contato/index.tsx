import SectionHeading from '../../components/SectionHeading';
import styles from './styles.module.scss'

const Contato = () => {
    return (
        <div className={styles.container} id="contato">
            <SectionHeading
                className={styles.heading}
                slogan='Contato'
                title='Você tem alguma pergunta?'
            />

        </div>
    );
};

export default Contato;