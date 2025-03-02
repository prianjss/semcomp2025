import styles from './card.module.css';

interface CardProps {
  nome: string;
  cargo:string;
  descricao: string;
  instagram:string;
  imageUrl: string;
}

export default function Card({ nome, cargo, descricao, instagram, imageUrl }: CardProps) {
  return (
    <main className={styles.card}>
        <section className={styles.cardFrente} style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className={styles.informacoesCard}>
                <h2 className={styles.cardNome}>{nome}</h2>
                <h3 className={styles.cardCargo}>{cargo}</h3>
                <div className={styles.animacao}> 
                    Conheça mais sobre
                    <img src="./assets/conhecaMais.svg"/>
                </div>
            </div>
        </section>

        <section className={styles.cardVerso}>
            <p className={styles.cardDescricao}>{descricao}</p>
            <p className={styles.cardInstagram}>{instagram}</p>
        </section>
    </main>
  );
}
