import { HeaderLink } from './HeaderLink'
import { HeaderName } from './headerName'
import { Logo } from './Logo'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                {/* <Logo /> */}
                {/* <div className={styles.headerGroup}> */}
                {/* <HeaderName />
                    <div className={styles.linha} /> */}
                <HeaderLink />
                {/* </div> */}
            </div>
        </header>
    )
}