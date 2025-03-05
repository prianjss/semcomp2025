import styles from "./hackatonstanding.module.css";

export default function HackatonStanding() {
  return (
    <section className={styles.hackatonStanding}>
      <h3 className={styles.hackatonStandingTitle}>PREMIAÇÃO DO HACKATON</h3>
      <div className={styles.hackatonStandingContainer}>
        <div className={styles.hackatonStanding2nd}>
          <h4 className={styles.hackatonStandingPlacesTitle}>2º LUGAR</h4>
          <p className={styles.hackatonStandingPlacesText}>
            Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi
            a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha
            pois queria ver belo jogo de xicaras. Marta foi a cozinha pois
            queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver
            belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo
            de xicaras. Marta foi a cozinha pois queria ver belo jogo de
            xicaras.
          </p>
        </div>
        <div className={styles.hackatonStanding1st}>
          <h4 className={styles.hackatonStandingPlacesTitle}>1º LUGAR</h4>
          <p className={styles.hackatonStandingPlacesText}>
            Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi
            a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha
            pois queria ver belo jogo de xicaras. Marta foi a cozinha pois
            queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver
            belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo
            de xicaras. Marta foi a cozinha pois queria ver belo jogo de
            xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.
            Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi
            a cozinha pois queria ver belo jogo de xicaras.
          </p>
        </div>
        <div className={styles.hackatonStanding3rd}>
          <h4 className={styles.hackatonStandingPlacesTitle}>3º LUGAR</h4>
          <p className={styles.hackatonStandingPlacesText}>
            Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi
            a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha
            pois queria ver belo jogo de xicaras. Marta foi a cozinha pois
            queria ver belo jogo de xicaras.
          </p>
        </div>
      </div>
      <div className={styles.hackatonStandingCTAContainer}>
        <p className={styles.hackatonStandingCTA}>
          QUER SABER O CAMINHO E A INFO COMPLETA ATÉ O PRÊMIO SER SEU?
        </p>
        <a href="/hackaton">
          <button className={styles.hackatonStandingCTAButton}>
            DESCUBRA AGORA!
          </button>
        </a>
      </div>
    </section>
  );
}
