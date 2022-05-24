import logoLight from 'assets/logo-light.svg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LogoWhite } from '../Logo';
import { NavFooter } from './NavFooter';
import styles from './styles.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.mainFooter}>
                <LogoWhite />
                <NavFooter />
                <div className={styles.socialIcons}>
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
                </div>
            </div>
            <div className={styles.p}>
                <p>
                    All rights reserved by
                    <a target="_blanck" href=""> <span>Adriano Barbosa,</span></a>
                    {` ${new Date().getFullYear()}.`}
                </p>
            </div>
        </footer>
    );
}

// const styles = {
//     footer: {
//         py: ['40px', null, null, null, null, '30px', '40px'],
//         backgroundColor: '#020718',
//         position: 'relative',
//         '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: '#ffffff',
//             opacity: '0.05',
//         },
//     },
//     container: {
//         display: 'flex',
//         flexDirection: ['column', null, null, null, null, 'row'],
//         justifyContent: ['center', null, null, null, null, 'space-between'],
//         alignItems: 'center',
//         position: 'relative',
//         flexWrap: 'wrap',
//     },
//     linksWrap: {
//         mt: ['15px', null, null, null, null, '0'],
//         display: 'flex',
//         flexWrap: 'wrap',
//         a: {
//             fontSize: ['14px', null, null, null, '16px'],
//             color: '#ffffff',
//             transition: 'all 500ms ease',
//             '&:hover': { opacity: 0.7 },
//         },
//         'a+a': { ml: ['15px', null, null, null, '35px'] },
//     },
// };
