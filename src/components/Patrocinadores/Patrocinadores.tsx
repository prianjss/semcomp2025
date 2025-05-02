import Image from 'next/image';
import styles from './patrocinadores.module.css';

const sponsors = [
  { name: 'Escavador', src: '/logos/semcomp.svg' },
  { name: 'Google', src: '/logos/semcomp.svg' },
  { name: 'Alura', src: '/logos/semcomp.svg' }
];

function LogoGrid({ title }: { title: string }) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {[...Array(6)].map((_, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {sponsors.map((sponsor, index) => (
              <Image 
                key={`${rowIndex}-${index}`} 
                src={sponsor.src} 
                alt={sponsor.name} 
                width={sponsor.name === 'Alura' ? 100 : 120} 
                height={sponsor.name === 'Alura' ? 50 : 60} 
                className={sponsor.name === 'Alura' ? `${styles.logo} ${styles.aluraLogo}` : styles.logo} 
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Patrocinadores() {
  return (
    <div className={styles.container}>
      <LogoGrid title="Patrocínio" />
      <LogoGrid title="Apoio" />
    </div>
  );
}
