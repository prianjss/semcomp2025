import Image from "next/image";
import styles from "./sobreSemcomp.module.css";

export default function SobreSemcomp() {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>O QUE É A SEMCOMP?</h1>
        <p className={styles.description}>
          A SEMCOMP SSA (Semana de Computação de Salvador) é um evento anual
          realizado na UFBA pelo InfoJr UFBA. Seu propósito é unir e fortalecer
          a comunidade acadêmica e entusiastas em tecnologia, inovação e
          empreendedorismo.
        </p>
        <p className={styles.description}>
          Buscamos criar um ambiente acolhedor e acessível, onde todos os
          participantes se sintam bem-vindos e representados.
        </p>

        <h2 className={styles.subtitle}>PÚBLICO-ALVO</h2>
        <ul className={styles.list}>
          <li>
            Estudantes de diversas instituições de Ensino
          </li>
          <li>
            Professores, profissionais e pesquisadores de tecnologia
          </li>
          <li>
            Empresários e entusiastas da área
          </li>
        </ul>

        <a href="#" className={styles.link}>
          retrospectiva 2024
          <Image
            src="/assets/play.svg"
            alt="Ícone de play"
            width={20}
            height={20}
          />
        </a>
      </div>

      <div className={styles.imageSection}>
        <Image
          src="/images/time.svg"
          alt="Equipe da Semcomp"
          width={540}
          height={224}
          className={styles.image}
        />
        <Image
          src="/images/palestra.svg"
          alt="Palestra da Semcomp"
          width={540}
          height={117}
          className={styles.image}
        />
        <div className={styles.starContainer}>
          <Image
            src="/images/apresentacao.svg"
            alt="Apresentação cultural"
            width={540}
            height={220}
            className={styles.image}
          />
          <Image
            src="/assets/star.png"
            alt="Estrela decorativa"
            width={140}
            height={140}
            className={styles.star}
          />
        </div>
      </div>
    </div>
  );
}


