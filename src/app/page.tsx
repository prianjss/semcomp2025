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


export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <Header />
        <Background />
        <Banner />
        <SessaoImpacto/>
        <SobreSemcomp/>
      </section>
      
      <Palestrantes />
      <Patrocinadores />
      <HackatonSection />
      <HackatonStanding />
      <Faq />
      <Realizations />
    </main>
  );
}