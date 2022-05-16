import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import styles from "./styles.module.scss";

export function Logo() {
  return (
    <>
      <ScrollLink path="home" className={styles.container}>
        <img src="./image/adr.svg" alt="logo adriano barbosa" />
      </ScrollLink>
    </>
  );
}
