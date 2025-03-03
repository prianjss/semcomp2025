import Faq from '@/components/Faq/Faq';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Patrocinadores from '@/components/Patrocinadores/Patrocinadores';
import Palestrantes from '@/components/Palestrantes/Palestrantes';
import SobreSemcomp from '@/components/SobreSemcomp/sobreSemcomp';


export default function Home() {
  return (
    <main className={styles.main}>
    <Header />
    <SobreSemcomp/>
    <Palestrantes />
    <Patrocinadores/>
    <Faq />
    </main>
    
  );
}
