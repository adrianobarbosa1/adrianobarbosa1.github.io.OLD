import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from './styles.module.scss'

export function HeaderLink() {
    return (
        <>
            <nav className={styles.container}>
                <a href="#home">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#portfolio">Portfólio</a>
                <a href="#servicos">Serviços</a>
                <a href="#contato">Contato</a>
                <a href="https://github.com/adrianobarbosa1">
                    <i>
                        <FaGithub />
                    </i>

                </a>
                <a href="https://www.linkedin.com/in/adriano-barbosa-10892750">
                    <i>

                        <FaLinkedin />
                    </i>
                </a>
            </nav>
        </>
    )
}