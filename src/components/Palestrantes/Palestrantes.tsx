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
                descricao= ""
                instagram=""
                imageUrl="./palestrantes/marquinhos.png" 
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao= ""
                instagram=""
                imageUrl="./palestrantes/marquinhos.png"  
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao= ""
                instagram=""
                imageUrl="./palestrantes/marquinhos.png"  
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao= ""
                instagram=""
                imageUrl="./palestrantes/marquinhos.png"  
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao= ""
                instagram=""
                imageUrl="./palestrantes/marquinhos.png"  
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao= ""
                instagram=""
                imageUrl="./palestrantes/marquinhos.png"  
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao= ""
                instagram=""
                imageUrl="./palestrantes/marquinhos.png"  
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao= ""
                instagram=""
                imageUrl="./palestrantes/marquinhos.png"  
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao= ""
                instagram=""
                imageUrl="./palestrantes/marquinhos.png"  
            />
            <Card 
                nome="MARK ZUCKERBERG" 
                cargo="FORMER CEO DA META" 
                descricao= ""
                instagram=""
                imageUrl="./palestrantes/marquinhos.png"  
            />
            
        </article>

        <div className={styles.palestrantesButton}>
            <a href="/programacao-completa" className={styles.formaBotao}>
                <img src="./botoes/botao_palestrantes.svg" alt="Botão FAQ Completa" className={styles.imagemBotao} />
                <p className={styles.textoBotao}>VEJA A PROGRAMAÇÃO COMPLETA</p>
            </a>
        </div>

    </main>
  );
}
