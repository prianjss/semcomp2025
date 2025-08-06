'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './header.module.css';
import Image from 'next/image';
import LogoSemcomp from '../../../public/assets/logo semcomp.png';
import LogoMobile from '../../../public/assets/logoMobile.svg';
import Ingresso from '../../../public/assets/ingresso.svg';
import Botao from '../../../public/botoes/forma botao 2.png';
import Link from 'next/link';
import StaticHeader, { StaticHeaderSecundaria } from './StaticHeader';

function HeaderContent() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    const searchParams = useSearchParams();
    
    useEffect(() => {
      const section = searchParams.get('scrollTo');
      if (section) {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [searchParams]);

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
                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hackathon'); }}>Hackathon</a></li>
                        <li><a href='https://www.instagram.com/semcompssa/'>Contato</a></li>
                    </ul>
                </nav>

                <a 
                className={styles.headerBotaoIngresso} 
                href='https://cheers.com.br/pagina/semcomp25~12976'
                    target="_blank"
                    rel="noopener noreferrer">
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
                </a>
            </div>

            <div className={`${styles.mobileDropdown} ${menuOpen ? styles.open : ''}`}>
                <nav>
                    <ul>
                        <li><a href='/programacao-completa'>Programação</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hackathon'); }}>Hackathon</a></li>
                        <li><a href='https://www.instagram.com/semcompssa/'>Contato</a></li>
                        <a 
                            className={styles.headerBotaoIngresso} 
                            href='https://cheers.com.br/pagina/semcomp25~12976'
                                target="_blank"
                                rel="noopener noreferrer">
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
                        </a>
                    </ul>   
                </nav>
            </div>

            <div className={styles.menuIcon} onClick={toggleMenu}>
                <div className={`${styles.hamburguer} ${menuOpen ? styles.open : ''}`}></div>
            </div>
        </div>
    );
}

export default function Header(){
    return(
        <Suspense fallback={<StaticHeader />}>
            <HeaderContent />
        </Suspense>
    )
}

function HeaderSecundariaContent() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
        
    const searchParams = useSearchParams();
    
    useEffect(() => {
      const section = searchParams.get('scrollTo');
      if (section) {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [searchParams]);
    

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
                        <Link href={{ pathname: '/', query: { scrollTo: 'faq' } }} className={styles.siv}>
                            FAQ
                        </Link>
                        <Link href={{ pathname: '/', query: { scrollTo: 'hackathon' } }} className={styles.siv}>
                            Hackathon
                        </Link>
                        <li><a href='https://www.instagram.com/semcompssa/'>Contato</a></li>
                    </ul>
                </nav>

                <a 
                className={styles.headerBotaoIngresso} 
                href='https://cheers.com.br/pagina/semcomp25~12976'
                    target="_blank"
                    rel="noopener noreferrer">
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
                </a>
            </div>

            <div className={`${styles.mobileDropdown} ${menuOpen ? styles.open : ''}`}>
                <nav>
                    <ul>
                        <li><a href='/programacao-completa'>Programação</a></li>
                        <Link href={{ pathname: '/', query: { scrollTo: 'faq' } }} onClick={toggleMenu} className={styles.siv}>
                            FAQ
                        </Link>
                        <Link href={{ pathname: '/', query: { scrollTo: 'hackathon' } }} onClick={toggleMenu} className={styles.siv}>
                            Hackathon
                        </Link>
                        <li><a href='https://www.instagram.com/semcompssa/'>Contato</a></li>
                        <a 
                            className={styles.headerBotaoIngresso} 
                            href='https://cheers.com.br/pagina/semcomp25~12976'
                                target="_blank"
                                rel="noopener noreferrer">
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
                        </a>
                    </ul>   
                </nav>
            </div>

            <div className={styles.menuIcon} onClick={toggleMenu}>
                <div className={`${styles.hamburguer} ${menuOpen ? styles.open : ''}`}></div>
            </div>
        </div>
    );
}

export function HeaderSecundaria(){
    return (
        <Suspense fallback={<StaticHeaderSecundaria />}>
            <HeaderSecundariaContent />
        </Suspense>
    )
}