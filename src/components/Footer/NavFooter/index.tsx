import React from "react";
import { Link as ScrollLink } from "react-scroll";

import { menuItems } from "./footer.data";

import styles from "./styles.module.scss";

export function NavFooter() {

  return (
    <>
      <nav className={styles.container}>
        {menuItems.map(({ path, label }, i) => {
          return (
            <ScrollLink
              activeClass="active"
              to={path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
              path={path}

            >
              {label}
            </ScrollLink>
          );
        })}

      </nav>
    </>
  );
}
