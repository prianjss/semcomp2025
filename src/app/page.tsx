import Faq from '@/components/Faq/Faq';
import styles from './page.module.css';
import Header from '@/components/Header/Header';

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>Seja bem-vindo ao site SEMCOMP 2025</h1>
    </div>
    <Faq />
    </>
    
  );
}
