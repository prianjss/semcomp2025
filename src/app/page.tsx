import Faq from '@/components/Faq/Faq';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Patrocinadores from '@/components/Patrocinadores/Patrocinadores';
import Palestrantes from '@/components/Palestrantes/Palestrantes';
import SobreSemcomp from '@/components/SobreSemcomp/sobreSemcomp';
import SessaoImpacto from '@/components/SessaoImpacto/SessaoImpacto';
import Image from 'next/image';
import Botao from '../../public/botoes/forma botao 1.png'
import Star from '../../public/assets/star.png'
import Background from '@/components/Background/Background';


export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <Header />
        <Background />
        <div className={styles.home}>
          <h1>SEMCOMP</h1>
          <h1 className={styles.homeTitle}>EM 2025</h1>
          
          <div className={styles.homeData}>
            <h4>09 A 12 DE SETEMBRO</h4>
            <Image src={Star} alt='Estrela' width={55} className={styles.homeDataEstrela}/>
            <h4> SALVADOR - BA</h4>
          </div>

          <p className={styles.homeTexto}>O maior evento de computação e tecnologia de Salvador está de volta, de cara nova, e na sua 13ª edição!</p>

          <div className={styles.homeFormaBotao}>
            <Image src={Botao} alt='Participe Agora' width={239} className={styles.homeBotao} />
            <p>PARTICIPE AGORA</p>
          </div>
        </div>

        <SessaoImpacto/>
        <SobreSemcomp/>
      </section>
    <Palestrantes />
    <Patrocinadores/>
    <Faq />
    </main>
    
  );
}