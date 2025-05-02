import Image from "next/image";
import styles from "./page.module.css";
import InstagramIcon from '../../../public/assets/instagram icon.svg'
import Hackathon1 from '../../../public/hackathon/hackathon 1.png'
import Hackathon2 from '../../../public/hackathon/hackathon 2.png'
import HeaderTwo from "@/components/HeaderTwo/HeaderTwo";

export default function Hackathon() {
  return (
    <main className={styles.pageHackathonContainer}>
    <HeaderTwo /> 

    <section className={styles.pageHackathonSection}>
      <div className={styles.hackathonConteudo}>        
        <section className={styles.pageHackathonConteudo}>
          <div className={styles.pageHackathonPerguntas}>
            <h1>HACKATHON</h1>

            <div>
              <h2>Onde?</h2>
              <p>SmartClass II, localizada no PAF 2</p>
            </div>
      
            <div className={styles.pageHackathonPerguntasQuando}>
              <h2>Quando?</h2>
              <p>Na sexta feira (12/09), tendo início às 13h.</p>
            </div>
      
            <div className={styles.pageHackathonPerguntasComo}>
              <h2>Como?</h2>
              <p>Os organizadores introduzirão um tema e irão apresentar as ferramentas e recursos disponíveis, além de explicar as regras e os critérios de avaliação.</p>
              <p>As equipes terão o prazo de 4 horas para desenvolvimento da solução, tendo direito a monitoria, caso necessário, a partir das 15h. Às 17h, todas as equipes deverão entregar a sua solução, para dar inicio aos pitchs de apresentação. Os projetos são avaliados com base em critérios como criatividade, experiência do usuário e viabilidade.</p>
              <p>Ao final da avaliação, serão divulgados os ganhadores, encerrando o evento.</p>
            </div>
          </div>
      
          <div className={styles.pageHackathonImagens}>
            <Image src={Hackathon1} alt={"Imagem do Hackathon 2024"} />
            <Image src={Hackathon2} alt={"Imagem do Hackathon 2024"} />
          </div>
        </section>
      
        <section className={styles.pageHackathonDuvida}>
          <h2>FICOU COM ALGUMA DÚVIDA?</h2>
          <p>Clique no botão abaixo e entre em contato conosco pelo nosso Instagram!</p>
      
          <div>
            <Image src={InstagramIcon} alt="Instagram" width={21}/>
            <a href="https://www.instagram.com/semcompssa/">@semcompssa</a>
          </div>
        </section>
      </div>
    </section>
  </main>
  )
};
