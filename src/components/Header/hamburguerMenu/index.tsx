import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import styles from "./styles.module.scss";

interface HamburguerProps {
  isOpen: boolean;
  toggleMobileMenu: () => void;
}

export function HamburguerMenu({ isOpen, toggleMobileMenu }: HamburguerProps) {
  return (
    <>
      <button className={styles.container} onClick={toggleMobileMenu}>
        {isOpen ? <i><FaTimes /></i> : <i><FaBars /></i>}
      </button>
    </>
  );
}
