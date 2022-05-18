import Image from "next/image";
import styles from './styles.module.scss'

const CardServicos = ({ data, ...props }) => {
    return (
        <div className={styles.container} {...props}>
            <figure className={styles.figure}>
                <Image src={data?.icon} alt={data?.title} />
            </figure>
            <div>
                <div className={styles.h3}>{data?.title}</div>
                <p>{data?.description}</p>
            </div>

        </div>
    )
}

export default CardServicos;