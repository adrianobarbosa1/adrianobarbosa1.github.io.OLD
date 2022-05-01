import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll';
import { Nav } from "../../../../types";

import menuItems from '../header.data'

import styles from './styles.module.scss'

export function HeaderLink() {
    return (
        <>
            <nav className={styles.container}>
                {menuItems.map((item, i) => {
                    return (
                        <Link
                            activeClass='active'
                            to={item.path}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            key={i}
                        >
                            {item.label}
                        </Link>
                    )
                })}
            </nav>
        </>
    )
}