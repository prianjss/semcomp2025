import styles from './diaquatro.module.css';
import Image from 'next/image';

export default function DiaQuatro() {
    return (
        <main className={styles.container}>
            <section className={styles.programacaoCard}>


                <div className={styles.card}>
                    <div className={styles.conteudoCard}>
                        <h1 className={styles.titulo}>08:00 - <span>MARATONA</span></h1>
                        <p className={styles.sobre}>A maratona de programação é uma competição de programação, onde os participantes tem que resolver diversos problemas de programação em um tempo limitado.</p>
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

                <div className={styles.card}>
                    <div className={styles.conteudoCard}>
                        <h1 className={styles.titulo}>13:00 - <span>Hackathon</span></h1>
                        <p className={styles.sobre}>O Hackathon SEMCOMP25 é uma competição onde os participantes devem criar soluções para um problema que descobrirão na hora em tempo limitado.</p>
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

            </section>

            <section className={styles.programacaoCard}>

                <div className={styles.card}>


                    <div className={styles.cardHorizontal}>
                        <h1 className={styles.titulo}>≈15:30 - <span>COFFEE BREAK</span></h1>
                        <div className={styles.conteudoCard}>
                            <p className={styles.sobre}>
                                O Coffee Break da SEMCOMP25 é um momento de pausa para recarregar as energias e trocar ideias de forma descontraída. Mais do que um intervalo, é uma chance de fortalecer conexões, conhecer novas pessoas e continuar as conversas iniciadas nas atividades. Tudo isso em um ambiente acolhedor, pensado para unir sabor, descanso e networking.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.conteudoCard}>
                        <h1 className={styles.titulo}>≈17:00 - <span>PREMIAÇÃO</span></h1>
                        <p className={styles.sobre}>A premiação da SEMCOMP25 é um momento de reconhecimento, reconhecendo o trabalho dos participantes e premiando os melhores.</p>
                    </div>
                </div>

            </section>

        </main>
    );
}
