import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as LinScroll } from "react-scroll";
import Link from "next/link";

import { menuItems, menuSocial } from "./header.data";

import styles from "./styles.module.scss";

export function HeaderLink() {
  return (
    <>
      <nav className={styles.container}>
        {menuItems.map(({ path, label }, i) => {
          return (
            <LinScroll
              activeClass="active"
              to={path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
            >
              {label}
            </LinScroll>
          );
        })}
        {menuSocial.map(({ path, icon }, i) => {
          return (
            <Link key={i} href={path}>
              <a>
                <span>{icon}</span>
              </a>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
