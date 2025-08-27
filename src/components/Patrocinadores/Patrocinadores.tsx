import Image from 'next/image';
import styles from './patrocinadores.module.css';

const patrocinadores = [
  { name: 'Escavador', src: '/logos/escavadoramarela-cropped.svg' },
  { name: 'Google', src: '/logos/google.svg' },
  { name: '42Cultural', src: '/logos/42cultural.png', square: true },
  { name: 'Solutis', src: '/logos/solutis.png' },
  { name: 'Projétil', src: '/logos/projetil.svg', square: true },
  { name: 'Avantsoft', src: '/logos/avantsoft.png' },
  /*{ name: 'MobApps', src: '/logos/mobapss.jpg' }*/
];

const apoio = [
  { name: 'Rocketseat', src: '/logos/rockeatseat.svg' },
  { name: 'Instituto de Computação', src: '/logos/logoic.png' },
  { name: 'Alura', src: '/logos/alura-light.svg' },
  { name: 'GitHub', src: '/logos/github.png' },
];

function LogoGrid({ title, logos }: {
  title: string; logos: {
    name: string; src: string; colored?: boolean; square?: boolean
  }[]
}) {
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
              width={300}
              height={150}

              className={`${styles.logo} ${logo.colored ? '' : styles.whiteLogo} ${logo.square ? styles.square : ''}`}
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
