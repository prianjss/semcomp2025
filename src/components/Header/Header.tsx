'use client';
import { useState } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import LogoSemcomp from '../../../public/assets/logo semcomp.png';
import LogoMobile from '../../../public/assets/logoMobile.svg';
import Ingresso from '../../../public/assets/ingresso.svg';
import Botao from '../../../public/botoes/forma botao 2.png';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <div className={`${styles.headerContent} ${menuOpen ? styles.open : ''}`}>
            <Image
                src={LogoSemcomp}
                alt='Logo SEMCOMP 2025'
                width={181}
                className={styles.headerLogo}
            />
            <Image
                src={LogoMobile}
                alt='Logo SEMCOMP 2025'
                width={30}
                className={styles.logoMobile}
            />

            <div className={`${styles.headerRedirecionamento} ${menuOpen ? styles.menuOpen : ''}`}>
                <nav>
                    <ul>
                        <li>Programação</li>
                        <li>FAQ</li>
                        <li>Hackathon</li>
                        <li>Contato</li>
                    </ul>
                </nav>

                <div className={styles.headerBotaoIngresso}>
                    <Image
                        src={Botao}
                        alt='Ingressos'
                        width={198}
                        className={styles.headerBotao}
                    />
                    <div className={styles.headerIngresso}>
                        <Image src={Ingresso} alt='Ingressos' width={28} />
                        <p>INGRESSOS</p>
                    </div>
                </div>
            </div>

            <div className={`${styles.mobileDropdown} ${menuOpen ? styles.open : ''}`}>
                <nav>
                    <ul>
                        <li>Programação</li>
                        <li>FAQ</li>
                        <li>Hackathon</li>
                        <li>Contato</li>
                        <div className={styles.headerBotaoIngresso}>
                            <Image
                                src={Botao}
                                alt='Ingressos'
                                width={198}
                                className={styles.headerBotao}
                            />
                            <div className={styles.headerIngresso}>
                                <Image src={Ingresso} alt='Ingressos' width={28} />
                                <p>INGRESSOS</p>
                            </div>
                        </div>
                    </ul>   
                </nav>

                
            </div>

            <div className={styles.menuIcon} onClick={toggleMenu}>
            <div className={`${styles.hamburguer} ${menuOpen ? styles.open : ''}`}></div>
            </div>
        </div>
    );
}
