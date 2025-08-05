import Image from 'next/image';
import styles from './patrocinadores.module.css';

const patrocinadores = [
  { name: 'Escavador', src: '/logos/escavadoramarela.svg' },
  { name: 'Alura', src: '/logos/alura-light.svg' }
];

const apoio = [
  { name: 'Alura', src: '/logos/alura-light.svg' }
];

function LogoGrid({ title, logos }: { title: string; logos: { name: string; src: string }[] }) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        <div className={styles.row}>
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.name}
              width={logo.name === 'Alura' ? 100 : 120}
              height={logo.name === 'Alura' ? 50 : 60}
              className={logo.name === 'Alura' ? `${styles.logo} ${styles.aluraLogo}` : styles.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Patrocinadores() {
  return (
    <div className={styles.container}>
      <LogoGrid title="Patrocínio" logos={patrocinadores} />
      <LogoGrid title="Apoio" logos={apoio} />
    </div>
  );
}
