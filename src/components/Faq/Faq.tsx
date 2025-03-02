<<<<<<< HEAD
'use client'
=======
>>>>>>> f816f345b9389474380dbeeb57878edb93b77996
import styles from './faq.module.css';

export default function Faq() {
  return (

    <section className={styles.faqContainer}>

        <header className={styles.faqHeader}>
            <h1 className={styles.faqTitle}>Perguntas Frequentes</h1>
        </header>

        <article className={styles.faqContent}>

            <section className={styles.faqSection}>
                <div className={styles.faqItem}>
                    <h2 className={styles.faqSubtitle}>Quem pode participar?</h2>
                    <p className={styles.faqTexto}>
                        Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.            
                    </p>
                </div>

                <div className={styles.faqItem}>
                    <h2 className={styles.faqSubtitle}>Onde ocorrerá o evento?</h2>
                    <p className={styles.faqTexto}>
                        Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.            
                    </p>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className={styles.faqItem}>
                    <h2 className={styles.faqSubtitle}>Onde acontecerá o hackathon?</h2>
                    <p className={styles.faqTexto}>
                        Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.            
                    </p>
                </div>

                <div className={styles.faqItem}>
                    <h2 className={styles.faqSubtitle}>Haverá certificação?</h2>
                    <p className={styles.faqTexto}>
                        Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.            
                    </p>
                </div>
            </section>
        </article>

        <div className={styles.faqButtons}>
            <a href="/sua-pagina-faq" className={styles.formaBotao}>
                <img src="./botoes/forma_botao_3.svg" alt="Botão FAQ Completa" className={styles.imagemBotao} />
                <p className={styles.textoBotao}>FAQ COMPLETA</p>
            </a>

            <a href="https://www.instagram.com/semcompssa/" className={styles.formaBotao}>
                <img src="./botoes/forma_botao_4.svg" alt="Botão Fale Conosco" className={styles.imagemBotao} />
                <p className={styles.textoBotao2}>FALE CONOSCO!</p>
            </a>
        </div>

    </section>
  );
}
