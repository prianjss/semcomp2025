import Faq from '@/components/Faq/Faq';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Realizations from '@/components/Realizations/Realizations';
import Patrocinadores from '@/components/Patrocinadores/Patrocinadores';
import Palestrantes from '@/components/Palestrantes/Palestrantes';
import SobreSemcomp from '@/components/SobreSemcomp/sobreSemcomp';
import SessaoImpacto from '@/components/SessaoImpacto/SessaoImpacto';


export default function Home() {
  return (
    <main className={styles.main}>
    <Header />
    <SessaoImpacto/>
    <SobreSemcomp/>
    <Palestrantes />
    <Patrocinadores/>
    <Faq />
    <Realizations/>
    </main>
  );
}