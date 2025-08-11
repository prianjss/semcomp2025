import React, { forwardRef } from 'react';
import styles from './faq.module.css';
import Image from 'next/image';

interface FaqProps {
    id: string;
}

const Faq = forwardRef<HTMLDivElement, FaqProps>(({ id }, ref) => {
    return (
        <section id={id} ref={ref} className={styles.faqContainer}>

            <header className={styles.faqHeader}>
                <h1 className={styles.faqTitle}>Perguntas Frequentes</h1>
            </header>

            <article className={styles.faqContent}>

                <section className={styles.faqSection}>
                    <div className={styles.faqItem}>
                        <h2 className={styles.faqSubtitle}>Quem pode participar?</h2>
                        <p className={styles.faqTexto}>
                            Todos podem participar, sendo estudante da UFBA ou não, apenas venha viver nossa experiência!
                        </p>
                    </div>

                    <div className={styles.faqItem}>
                        <h2 className={styles.faqSubtitle}>Onde ocorrerá o evento?</h2>
                        <p className={styles.faqTexto}>
                            Auditório Leopoldo Amaral da Escola Politécnica - UFBA.
                            Endereço: Rua Aristides Novis, 02, 6º andar, Federação Salvador - Bahia.
                        </p>
                    </div>
                </section>

                <section className={styles.faqSection}>
                    <div className={styles.faqItem}>
                        <h2 className={styles.faqSubtitle}>Onde acontecerá o Hackathon?</h2>
                        <p className={styles.faqTexto}>
                            Sala Smart Class II do PAF II - Campus Federação/Ondina - UFBA.
                            Endereço: Rua Barão de Jeremoabo, S/N, Ondina - CEP: 40170-115 | Salvador-BA.
                        </p>
                    </div>

                    <div className={styles.faqItem}>
                        <h2 className={styles.faqSubtitle}>Haverá certificação?</h2>
                        <p className={styles.faqTexto}>
                            Sim! A participação na SemComp25 é certificada com um certificado de 07 horas de participação para cada um dos 3 dias de palestras que o congressista se credenciar.
                        </p>
                    </div>
                </section>
            </article>

            <div className={styles.faqButtons}>
                <a href="https://drive.google.com/drive/folders/1e5UgDcX8QivfspJ0dNxey4-LRvJc3rzo?usp=drive_link" className={styles.formaBotao}>
                    <Image
                        src="/botoes/forma_botao_3.svg"
                        alt="Botão FAQ Completa"
                        className={styles.imagemBotao}
                        width={250}
                        height={48}
                    />
                    <p className={styles.textoBotao}>FAQ COMPLETA</p>
                </a>

                <a href="https://www.instagram.com/semcompssa/" className={styles.formaBotao2}>
                    <Image
                        src="/botoes/forma_botao_4.svg"
                        alt="Botão Fale Conosco"
                        className={styles.imagemBotao}
                        width={250}
                        height={48}
                    />
                    <p className={styles.textoBotao2}>FALE CONOSCO!</p>
                </a>
            </div>

        </section>
    );
});

Faq.displayName = 'Faq';
export default Faq;