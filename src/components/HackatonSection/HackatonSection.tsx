"use client"
import React, { useState, useEffect, forwardRef } from "react";
import styles from "./hackatonsection.module.css";

interface HackathonProps {
  id: string;
}

const HackatonSection = forwardRef<HTMLDivElement, HackathonProps>(({ id }, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalCircles = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalCircles);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id={id} ref={ref} className={styles.hackatonSectionContainer}>
      <article className={styles.hackatonSectionArticle}>
        <div>
          <h2 className={styles.hackatonSectionTitle}>Hackathon</h2>
          <p className={styles.hackatonSectionText}>
            Hackathon é um{" "}
            <span className={styles.hackatonSectionBold}>
              evento imersivo de programação
            </span>{" "}
            onde desenvolvedores, designers e outros profissionais da tecnologia
            se reúnem para criar soluções inovadoras em um curto período.
          </p>
        </div>
        <h3 className={styles.hackatonSectionSubtitle}>
          NO NOSSO CASO,
          <br />
          EM{" "}
          <span className={styles.hackatonSectionPurpleSpan}>
            ALGUMAS HORAS!
          </span>
        </h3>
        <div>
          <h3 className={styles.hackatonSectionSubtitle}>
            POR QUE PARTICIPAR DO HACKATHON?
          </h3>
          <ul className={styles.hackatonSectionBulletList}>
            <li>
              Você aprende novas tecnologias, frameworks e ferramentas em um
              curto período.
            </li>
            <li>
              Melhoria na comunicação e colaboração com pessoas de diferentes
              áreas.
            </li>
            <li>
              Aprimoramento de habilidades técnicas, como programação e design
            </li>
          </ul>
        </div>
      </article>

      <div className={styles.hackatonSectionColumntainer}>
        <div className={styles.hackatonSectionDiv}>
          <div className={styles.hackatonSectionVerticalLine} />
          <div className={styles.hackatonSectionCircleContainer}>
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`${styles.hackatonSectionOuterCircle} ${
                  index === activeIndex ? styles.active : ""
                }`}
              >
                <div className={styles.hackatonSectionCircle} />
              </div>
            ))}
            <div className={styles.hackatonSectionRoadmapTextRight}>
              <p>Abertura</p>
              <p>
                ENTREGA E<br />
                APRESENTAÇÃO
              </p>
            </div>
            <div className={styles.hackatonSectionRoadmapTextLeft}>
              <p>
                DESENVOLVIMENTO
                <br />E MONITORIA
              </p>
              <p>RESULTADOS</p>
            </div>
          </div>
        </div>
        <button className={styles.hackatonSectionButton}>
          INSCRIÇÕES EM BREVE
        </button>
      </div>
    </section>
  );
});

HackatonSection.displayName = 'HackathonSection';
export default HackatonSection;