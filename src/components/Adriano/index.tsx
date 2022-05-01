import styles from './styles.module.scss'
import Typewriter from 'typewriter-effect';

const textArray = ["DESENVOLVEDOR FULLSTACK", "ESPECIALISTA NODE.JS", "ESPECIALISTA REACT.JS"];


export function Adriano() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>ADRIANO BARBOSA</h1>
                    <p>
                        DESENVOLVEDOR WEB <br />
                        PROGRAMADOR JAVASCRIPT

                    </p>
                    <div className={styles.type}>
                        <Typewriter
                            options={{
                                strings: textArray,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}