import Image from 'next/image';
import styles from './patrocinadores.module.css';

const patrocinadores = [
  { name: 'Escavador', src: '/logos/escavadoramarela.svg' },
  /*{ name: 'MobApps', src: '/logos/mobapss.jpg' }*/
];

const apoio = [
  { name: 'Instituto de Computação', src: '/logos/logoic.png' },
  { name: 'Alura', src: '/logos/alura-light.svg', small:true }
];

function LogoGrid({ title, logos }: { title: string; logos: {
  small?: boolean; name: string; src: string 
}[] }) {
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
              width={logo.small ? 100 : 120}
              height={logo.small ? 50 : 60}
              className={
                logo.small
                  ? `${styles.logo} ${styles.aluraPequena}`
                  : styles.logo
              }
            />/*
            <Image
              key={index}
              src={logo.src}
              alt={logo.name}
              width={logo.name === 'Alura' ? 100 : 120}
              height={logo.name === 'Alura' ? 50 : 60}
              className={logo.name === 'Alura' ? `${styles.logo} ${styles.aluraLogo}` : styles.logo}
            />*/
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
