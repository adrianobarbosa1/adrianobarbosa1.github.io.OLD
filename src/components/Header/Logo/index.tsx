import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import styles from "./styles.module.scss";

export function Logo() {
  return (
    <>
      <ScrollLink className={styles.container}
        activeClass="active"
        to='home'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        path='home'>
        <img src="./image/adr.svg" alt="logo adriano barbosa" />
      </ScrollLink>
    </>
  );
}
