import { NavBar } from "./NavBar";

import styles from "./styles.module.scss";
import { useState } from "react";
import { HamburguerMenu } from "./hamburguerMenu";
import { Logo } from "../Logo";

export function Header() {
  const [state, setState] = useState(false);
  const [header, setHeader] = useState(false)


  const toggleMobileMenu = () => {
    setState(!state)
  };

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', changeBackground)
  }


  return (
    <header className={header ? styles.headerActive : styles.header}>
      <div className={styles.container}>
        <Logo />
        <NavBar
          isOpen={state}
        />
        <HamburguerMenu
          isOpen={state}
          toggleMobileMenu={toggleMobileMenu} />
      </div>
    </header>
  );
}
