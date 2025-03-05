import Faq from '@/components/Faq/Faq';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Patrocinadores from '@/components/Patrocinadores/Patrocinadores';
import Palestrantes from '@/components/Palestrantes/Palestrantes';
import SobreSemcomp from '@/components/SobreSemcomp/sobreSemcomp';
import SessaoImpacto from '@/components/SessaoImpacto/SessaoImpacto';
import Background from '@/components/Background/Background';
import HackatonSection from '@/components/HackatonSection/HackatonSection';
import HackatonStanding from '@/components/HackatonStanding/HackatonStanding';
import Realizations from '@/components/Realizations/Realizations';
import Banner from '@/components/Banner/Banner';
import Image from 'next/image';
import Luz from '../../public/assets/bola 3.png'

export default function Home() {
  return (
    <main>
      <section className={styles.homeTop}>
        <div className={styles.homeBackground}>
          <Background />
        </div>
        
        <Header />
        <Banner />
        {/*COLOCAR COUNTDOWN AQUI*/}
      </section>

      <section className={styles.homeMid}>
        <Image src={Luz} alt='Luz' className={styles.homeLuz}/>
        <SessaoImpacto/>
        <SobreSemcomp/>
      </section>
      
      <Palestrantes />
      <Patrocinadores />
      <HackatonSection id='hackathon'/>
      <HackatonStanding />
      <Faq id="faq" />
      <Realizations />
    </main>
  );
}