'use client';
import React, { useState, useEffect } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import LogoSemcomp from '../../../public/assets/logo semcomp.png';
import LogoMobile from '../../../public/assets/logoMobile.svg';
import Ingresso from '../../../public/assets/ingresso.svg';
import Botao from '../../../public/botoes/forma botao 2.png';
import Link from 'next/link';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    const scrollToSection = (sectionId: string): void => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className={`${styles.headerContent} ${menuOpen ? styles.open : ''} ${scrolled ? styles.scrolled : ''}`}>
            <Link href='/' className={styles.headerLogo}>
                <Image
                    src={LogoSemcomp}
                    alt='Logo SEMCOMP 2025'
                    width={181}
                    className={styles.headerLogo}
                />
            </Link>
            <Link href='/' className={styles.logoMobile}>
                <Image
                    src={LogoMobile}
                    alt='Logo SEMCOMP 2025'
                    width={30}
                    className={styles.logoMobile}
                />
            </Link>

            <div className={`${styles.headerRedirecionamento} ${menuOpen ? styles.menuOpen : ''}`}>
                <nav>
                    <ul>
                        <li><a href='/programacao-completa'>Programação</a></li>
                        <li><a href="#" onClick={() => scrollToSection('faq')}>FAQ</a></li>
                        <li><a href="#" onClick={() => scrollToSection('hackathon')}>Hackathon</a></li>
                        <li><a href='https://www.instagram.com/semcompssa/'>Contato</a></li>
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
                        <li><a href='/programacao-completa'>Programação</a></li>
                        <li><a href="#" onClick={() => scrollToSection('faq')}>FAQ</a></li>
                        <li><a href="#" onClick={() => scrollToSection('hackathon')}>Hackathon</a></li>
                        <li><a href='https://www.instagram.com/semcompssa/'>Contato</a></li>
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
