import Faq from '@/components/Faq/Faq';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>Seja bem-vindo ao site SEMCOMP 2025</h1>
    </div>
    <Faq />
    </>
    
  );
}
