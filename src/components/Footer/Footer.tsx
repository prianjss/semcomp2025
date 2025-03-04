import styles from './footer.module.css';
import Image from 'next/image';
import LogoInfo from '../../../public/assets/logo info.png'
import LogoIC from '../../../public/assets/logo ic.png'
import LogoSemcomp from '../../../public/assets/logo semcomp.png'

export default function Footer() {
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
              <li>Programação</li>
              <li>FAQ</li>
              <li>Hackathon</li>
              <li>Contato</li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }