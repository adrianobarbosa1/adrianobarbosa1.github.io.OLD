import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import styles from "./styles.module.scss";

export function MenuHamburguer({ state, toggle }) {
  return (
    <>
      <button className={styles.container} onClick={toggle}>
        {state ? <i><FaTimes /></i> : <i><FaBars /></i>}
      </button>
    </>
  );
}
