import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import styles from "./styles.module.scss";

export function Logo() {
  return (
    <><div className={styles.container} >
      <ScrollLink className={styles.logo}
        activeClass="active"
        to='home'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        path='home'>
        <img src="./image/adr.svg" alt="Logo Adriano Barbosa" />
      </ScrollLink>
      <p className={styles.p}>Adriano Barbosa</p>
    </div>
    </>
  );
}

export function LogoWhite() {
  return (
    <><div className={styles.container} >
      <ScrollLink className={styles.logo}
        activeClass="active"
        to='home'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        path='home'>
        <img src="./image/adr-white.svg" alt="Logo Adriano Barbosa" />
      </ScrollLink>
      <p className={styles.pWhite}>Adriano Barbosa</p>
    </div>
    </>
  );
}
