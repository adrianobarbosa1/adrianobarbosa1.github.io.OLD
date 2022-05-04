import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as LinScroll } from "react-scroll";
import Link from "next/link";

import { menuItems } from "./header.data";

import styles from "./styles.module.scss";
import { MenuHamburguer } from "../mobileDrawer/MenuHamburguer";

export function HeaderLink() {
  const [state, setState] = useState(false)
  console.log(state)
  const toggle = () => {
    setState(!state)
  }

  return (
    <>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul>
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
          </ul>
        </nav>
        <MenuHamburguer state={state} toggle={toggle} />
      </div>
    </>
  );
}
