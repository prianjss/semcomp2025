import styles from "./hackatonstanding.module.css";

export default function HackatonStanding() {
  return (
    <section className={styles.hackatonStanding}>
      <h3 className={styles.hackatonStandingTitle}>PREMIAÇÃO DO HACKATHON</h3>
      <div className={styles.hackatonStandingContainer}>
        <div className={styles.hackatonStanding2nd}>
          <h4 className={styles.hackatonStandingPlacesTitle}>2º LUGAR</h4>
          <p className={styles.hackatonStandingPlacesText}>
            ➜ Camiseta SEMCOMP<br></br><br></br>
            ➜ Ecobag<br></br><br></br>
            ➜ Boné<br></br><br></br>
            ➜ 2 Bottons <br></br><br></br>
            ➜ Stickers
          </p>
        </div>
        <div className={styles.hackatonStanding1st}>
          <h4 className={styles.hackatonStandingPlacesTitle}>1º LUGAR</h4>
          <p className={styles.hackatonStandingPlacesText}>
            ➜ Bolsa de acesso completo da Rocketseat (12 meses)<br></br><br></br>
            ➜ Camiseta SEMCOMP<br></br><br></br>
            ➜ Ecobag<br></br><br></br>
            ➜ Bloco de notas adesivo<br></br><br></br>
            ➜ Boné<br></br><br></br>
            ➜ 4 Bottons <br></br><br></br>
            ➜ Stickers
          </p>
        </div>
        <div className={styles.hackatonStanding3rd}>
          <h4 className={styles.hackatonStandingPlacesTitle}>3º LUGAR</h4>
          <p className={styles.hackatonStandingPlacesText}>
            ➜ Camiseta SEMCOMP<br></br><br></br>
            ➜ Boné<br></br><br></br>
            ➜ 2 Bottons <br></br><br></br>
            ➜ Stickers
          </p>
        </div>
      </div>
      <div className={styles.hackatonStandingCTAContainer}>
        <p className={styles.hackatonStandingCTA}>
          QUER SABER O CAMINHO E A INFO COMPLETA ATÉ O PRÊMIO SER SEU?
        </p>
        <a href="/hackathon">
          <button className={styles.hackatonStandingCTAButton}>
            DESCUBRA AGORA!
          </button>
        </a>
      </div>
    </section>
  );
}
