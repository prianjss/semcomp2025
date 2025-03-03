import Image from 'next/image';
import Card from '../CardPalestrante/CardPalestrante';
import styles from './palestrantes.module.css';

export default function Palestrantes() {
  return (

    <main className={styles.palestrantesContainer}>

        <header className={styles.palestrantesHeader}>
            <h1 className={styles.palestrantesTitle}>PALESTRANTES 2025</h1>
        </header>

        <article className={styles.palestrantesContent}>

            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                instagram="@fulanodasilva"
                imageUrl="./palestrantes/marquinhos.png" 
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                instagram="@fulanodasilva"
                imageUrl="./palestrantes/marquinhos.png"  
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                instagram="@fulanodasilva"
                imageUrl="./palestrantes/marquinhos.png"  
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                instagram="@fulanodasilva"
                imageUrl="./palestrantes/marquinhos.png"  
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                instagram="@fulanodasilva"
                imageUrl="./palestrantes/marquinhos.png"  
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                instagram="@fulanodasilva"
                imageUrl="./palestrantes/marquinhos.png"  
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                instagram="@fulanodasilva"
                imageUrl="./palestrantes/marquinhos.png"  
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                instagram="@fulanodasilva"
                imageUrl="./palestrantes/marquinhos.png"  
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                instagram="@fulanodasilva"
                imageUrl="./palestrantes/marquinhos.png"  
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                instagram="@fulanodasilva"
                imageUrl="./palestrantes/marquinhos.png"  
            />
            
        </article>

        <div className={styles.palestrantesButton}>
            <div className={styles.palestrantesButton}>
                <a href="/programacao-completa" className={styles.formaBotao}>
                    <Image 
                        src="./botoes/botao_palestrantes.svg" 
                        alt="Botão FAQ Completa" 
                        className={styles.imagemBotao} 
                        width={391} 
                        height={52} 
                    />
                    <p className={styles.textoBotao}>VEJA A PROGRAMAÇÃO COMPLETA</p>
                </a>
            </div>
        </div>

    </main>
  );
}
