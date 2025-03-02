import styles from './header.module.css';
import Image from 'next/image';
import LogoSemcomp from '../../../public/assets/logo semcomp.png'
import Ingresso from '../../../public/assets/ingresso.svg'
import Botao from '../../../public/botoes/forma botao 2.png'

export default function Header() {
    return (
      <>
      <div className={styles.headerContent}>
        <Image src={LogoSemcomp} alt='Logo SEMCOMP 2025' width={181} className={styles.headerLogo}/>
        
        <div className={styles.headerRedirecionamento}>
          <nav>
            <ul>
              <li>Programação</li>
              <li>FAQ</li>
              <li>Hackathon</li>
              <li>Contato</li>
            </ul>
          </nav>

          <div className={styles.headerBotaoIngresso}>
            <Image src={Botao} alt='Ingressos' width={198} className={styles.headerBotao} />

            <div className={styles.headerIngresso}>
              <Image src={Ingresso} alt='Ingressos' width={28} />
              <p>INGRESSOS</p>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }