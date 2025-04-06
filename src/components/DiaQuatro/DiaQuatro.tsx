import styles from './diaquatro.module.css';
import Image from 'next/image';

export default function DiaQuatro() {
    return (
        <main className={styles.container}>
            <section className={styles.programacaoCard}>

                <div className={styles.card}>
                    <div className={styles.conteudoCard}>
                        <h1 className={styles.titulo}>12:00 - <span>ABERTURA</span></h1>
                        <p className={styles.sobre}>A SEMCOMP SSA (Semana de Computação de Salvador) é um evento anual realizado na UFBA pela InfoJr UFBA. Seu propósito é unir e fortalecer a comunidade acadêmica e entusiastas em tecnologia, inovação e empreendedorismo.
                        Buscamos criar um ambiente acolhedor e acessível, onde todos os participantes se sintam bem-vindos e representados.</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.conteudoCard}>
                        <h1 className={styles.titulo}>13:00 - <span>ABERTURA</span></h1>
                        <p className={styles.sobre}>A SEMCOMP SSA (Semana de Computação de Salvador) é um evento anual realizado na UFBA pela InfoJr UFBA. Seu propósito é unir e fortalecer a comunidade acadêmica e entusiastas em tecnologia, inovação e empreendedorismo.
                        Buscamos criar um ambiente acolhedor e acessível, onde todos os participantes se sintam bem-vindos e representados.</p>
                    </div>
                    <div className={styles.cardImage}>
                        <Image
                            src="/hackathon/hack1.png"
                            alt="Hackathon SemComp 2024"
                            className={styles.imagem}
                            width={396}
                            height={300}
                        />
                    </div>
                </div>

            </section>

            <section className={styles.programacaoCard}>

                <div className={styles.card}>
                    <div className={styles.conteudoCard}>
                        <h1 className={styles.titulo}>14:00 - <span>ABERTURA</span></h1>
                        <p className={styles.sobre}>A SEMCOMP SSA (Semana de Computação de Salvador) é um evento anual realizado na UFBA pela InfoJr UFBA. Seu propósito é unir e fortalecer a comunidade acadêmica e entusiastas em tecnologia, inovação e empreendedorismo.
                        Buscamos criar um ambiente acolhedor e acessível, onde todos os participantes se sintam bem-vindos e representados.</p>
                    </div>
                    <div className={styles.cardImage}>
                        <Image
                            src="/hackathon/hack2.png"
                            alt="Hackathon SemComp 2024"
                            className={styles.imagemHack}
                            width={396} 
                            height={300} 
                        />
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.conteudoCard}>
                        <h1 className={styles.titulo}>17:40 - <span>PREMIAÇÃO</span></h1>
                        <p className={styles.sobre}>A SEMCOMP SSA (Semana de Computação de Salvador) é um evento anual realizado na UFBA pela InfoJr UFBA. Seu propósito é unir e fortalecer a comunidade acadêmica e entusiastas em tecnologia, inovação e empreendedorismo.
                        Buscamos criar um ambiente acolhedor e acessível, onde todos os participantes se sintam bem-vindos e representados.</p>
                    </div>
                </div>

            </section>

        </main>
    );
}
