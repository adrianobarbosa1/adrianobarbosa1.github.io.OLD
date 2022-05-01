import Image from 'next/image'

import styles from './styles.module.scss'

export function Logo() {
    return (
        <>
            <div className={styles.container}>
                <Image src='./image/logo.jpg' alt='imgLogo' />
            </div>

        </>
    )
}