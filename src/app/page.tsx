import Faq from '@/components/Faq/Faq';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Patrocinadores from '@/components/Patrocinadores/Patrocinadores';
import Palestrantes from '@/components/Palestrantes/Palestrantes';
import SobreSemcomp from '@/components/SobreSemcomp/sobreSemcomp';
import HackatonSection from '@/components/HackatonSection/HackatonSection';
import HackatonStanding from '@/components/HackatonStanding/HackatonStanding';



export default function Home() {
  return (
    <main className={styles.main}>
    <Header />
    <SobreSemcomp/>
    <Palestrantes />
    <Patrocinadores />
    <HackatonSection />
    <HackatonStanding />
    <Faq />
    </main>
    
  );
}
