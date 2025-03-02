import Faq from '@/components/Faq/Faq';
import styles from './page.module.css';
import Header from '@/components/Header/Header';

export default function Home() {
  return (
    <main className={styles.main}>
    <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Seja bem-vinde ao site SEMCOMP 2025</h1>
      </div>
    <Faq />
    </main>
    
  );
}
