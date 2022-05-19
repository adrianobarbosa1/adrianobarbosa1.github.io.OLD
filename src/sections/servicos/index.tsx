import CardServicos from '../../components/cards/servicos';
import SectionHeading from '../../components/SectionHeading';
import { servicosData } from './servicos.data';
import styles from './styles.module.scss'

const Servicos = () => {
    return (
        <div id="servicos">
            <div className={styles.container} >
                <SectionHeading
                    className={styles.heading}
                    slogan='Serviços'
                    title='Como posso te ajudar?'
                />
                <div className={styles.box}>
                    <div className={styles.servicos}>
                        {servicosData?.map((item) => (
                            <CardServicos className={styles.servicosItem} key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicos;