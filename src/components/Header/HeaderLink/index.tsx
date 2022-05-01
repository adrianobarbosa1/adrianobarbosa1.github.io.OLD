import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll';
import { Nav } from "../../../../types";

import menuItems from '../header.data'

import styles from './styles.module.scss'

export function HeaderLink() {
    return (
        <>
            <div className={styles.container}>
                {menuItems.map((item, i) => {
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
                })}
            </div>
            {/* <a href="https://github.com/adrianobarbosa1">
                    <i>
                        <FaGithub />
                    </i>

                </a> */}
            {/* <a href="https://www.linkedin.com/in/adriano-barbosa-10892750">
                    <i>

                        <FaLinkedin />
                    </i>
                </a> */}
        </>
    )
}