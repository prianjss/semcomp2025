'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from './card.module.css';
import InstagramIcon from '../../../public/assets/instagram icon.svg'

export interface CardProps {
  nome: string;
  cargo: string;
  descricao: string;
  instagram: string;
  imageUrl: string;
}

export default function Card({ nome, cargo, descricao, instagram, imageUrl }: CardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <main className={`${styles.card} ${flipped ? styles.flipped : ''}`}>
      <section className={styles.cardFrente} style={{ backgroundImage: `url(${imageUrl})` }} onClick={handleFlip}>
        <div className={styles.informacoesCard}>
          <h2 className={styles.cardNome}>{nome}</h2>
          <h3 className={styles.cardCargo}>{cargo}</h3>
          <div className={styles.animacao}>
            Conheça mais sobre
            <Image
              src="/assets/conhecaMais.svg"
              alt="Conheça mais"
              width={13}
              height={14}
            />
          </div>
        </div>
      </section>

      <section className={styles.cardVerso} onClick={handleFlip}>
        <div className={styles.versoInformacoes}>
          <h2>{nome}</h2>
          <h3>{cargo}</h3>
          <div>
            {descricao && descricao.split("\n").map((paragrafo, index) => (
              <p key={index}>{paragrafo}</p>
            ))}
          </div>
          <div className={styles.cardInstagram}>
            <Image src={InstagramIcon} alt='Instagram' width={12} />
            <p>{instagram}</p>
          </div>
        </div>

        <Image
          src="/assets/conhecaMais.svg"
          alt="Conheça mais"
          width={13}
          height={14}
          className={styles.cardVersoVoltar}
        />
      </section>
    </main>
  );
}
