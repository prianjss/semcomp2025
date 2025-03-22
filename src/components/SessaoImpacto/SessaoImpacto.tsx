import Image from "next/image";
import styles from "./sessaoImpacto.module.css"

const impactoData = [
  {
    image: "/images/impacto1.svg",
    value: "+100",
    description: "Horas de conteúdo",
    color: "#AF31F9",
  },
  {
    image: "/images/impacto2.svg",
    value: "+140k",
    description: "Visualizações no nosso Instagram",
    color: "#7933DB",
  },
  {
    image: "/images/impacto3.svg",
    value: "+21k",
    description: "Contas alcançadas",
    color: "#DF399D",
  },
];

export default function SessaoImpacto() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>CONEXÃO, IMPULSÃO, INOVAÇÃO</h2>
      <p className={styles.subtitle}>
        Conectando pessoas, criando oportunidades: A tecnologia e inovação para
        impulsionar carreiras e moldar o amanhã.
      </p>

      <div className={styles.impactContainer}>
        {impactoData.map((item, index) => (
          <div key={index} className={styles.impactItem}>
            <Image
              src={item.image}
              alt="Impacto"
              width={160}
              height={160}
              className={styles.image}
            />
            <div className={styles.impactContent}>
              <p className={styles.value} style={{ color: item.color }}>
                {item.value}
              </p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
