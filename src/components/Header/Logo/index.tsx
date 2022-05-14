import { Link as ScrollLink } from "react-scroll";

import styles from "./styles.module.scss";

export function Logo() {
  return (
    <>

      <ScrollLink path="/" className={styles.container}>
        <img src='./image/adr.svg' alt='logo adriano barbosa' />
      </ScrollLink>

    </>
  );
}
