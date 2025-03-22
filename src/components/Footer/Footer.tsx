'use client'
import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import LogoInfo from '../../../public/assets/logo info.png'
import LogoIC from '../../../public/assets/logo ic.png'
import LogoSemcomp from '../../../public/assets/logo semcomp.png'

export default function Footer() {
  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
      <div className={styles.footerContainer}>
        <div className={styles.footerEmpresas}>
          <div>
            <h3>Realização:</h3>
            <Image src={LogoInfo} alt={'Logo InfoJr'} width={131} className={styles.logosNormal}/>
            <Image src={LogoInfo} alt={'Logo InfoJr'} width={119} className={styles.logosResposivo}/>
          </div>

          <div>
            <h3>Apoio:</h3>
            <Image src={LogoIC} alt={'Logo Instituto de Computação'} width={150} className={styles.logosNormal}/>
            <Image src={LogoIC} alt={'Logo Instituto de Computação'} width={136} className={styles.logosResposivo}/>
          </div>
        </div>

        <div className={styles.footerTexto}>
          <p>
            A SEMCOMP SSA (Semana de Computação de Salvador) é um evento anual realizado na UFBA pela InfoJr UFBA. Seu propósito é unir e fortalecer a comunidade acadêmica e entusiastas em tecnologia, inovação e empreendedorismo.
          </p>
        </div>

      
        <div className={styles.footerProgramacao}>
          <Image src={LogoSemcomp} alt={'Logo SEMCOMP 2025'} width={181}/>

          <nav>
            <ul>
              <li><a href='/programacao-completa'>Programação</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault();  scrollToSection('faq');}}>FAQ</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hackathon');}}>Hackathon</a></li>
              <li><a href='https://www.instagram.com/semcompssa/'>Contato</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }