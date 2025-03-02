import Faq from '@/components/Faq/Faq';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Patrocinadores from '@/components/Patrocinadores/Patrocinadores';
import Palestrantes from '@/components/Palestrantes/Palestrantes';


export default function Home() {
  return (
    <main className={styles.main}>
    <Header />
    <Palestrantes />
    <Patrocinadores/>
    <Faq />
    </main>
    
  );
}
