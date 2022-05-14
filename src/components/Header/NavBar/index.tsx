import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

import { menuItems } from "./header.data";

import styles from "./styles.module.scss";

interface NavBarProps {
  isOpen: boolean;
}

export function NavBar({ isOpen }: NavBarProps) {

  return (
    <>
      <nav className={isOpen ? styles.isMobile : styles.container}>
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
        <a target="_blank" href="https://github.com/adrianobarbosa1">
          <i>
            <FaGithub />
          </i>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/adriano-barbosa-10892750">
          <i>
            <FaLinkedin />
          </i>
        </a>
      </nav>
    </>
  );
}
