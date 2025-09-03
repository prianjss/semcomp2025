import Image from 'next/image';
import styles from './diaum.module.css';

export default function DiaUm() {
  return (
    <main className={styles.container}>
      <section className={styles.programacaoCard}>

        <div className={styles.card}>
          <h1 className={styles.titulo}>12:00 - <span>ABERTURA - CREDENCIAMENTO</span></h1>
          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>

              <p className={styles.sobre}>
                A SEMCOMP SSA (Semana de Computação de Salvador) é um evento anual realizado na UFBA pela InfoJr UFBA. Seu propósito é unir e fortalecer a comunidade acadêmica e entusiastas em tecnologia, inovação e empreendedorismo.
                Buscamos criar um ambiente acolhedor e acessível, onde todos os participantes se sintam bem-vindos e representados.
              </p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/images/abertura.svg"
                alt="Botão Fale Conosco"
                className={styles.imagem}
                style={{ objectFit: 'contain' }}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h1 className={styles.titulo}>13:00 - <span>MOMENTO CULTURAL</span></h1>

          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                O Momento Cultura da SEMCOMP 25 é um espaço dedicado à descontração e integração entre os participantes. Nossa proposta é ir além da tecnologia, trazendo atividades culturais e artísticas que celebrem a diversidade e a criatividade da comunidade. Será uma oportunidade para relaxar, compartilhar experiências e se conectar em um ambiente leve e inspirador.
              </p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/images/apresentacao.svg"
                alt="Botão Fale Conosco"
                className={styles.imagem}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

      </section>

      <section className={styles.programacaoCard}>

        <div className={styles.card}>
          <h1 className={styles.titulo}>13:40 - <span>palestra</span></h1>
          <h2 className={styles.subtitulo}>A vida de uma pessoa engenheira de Software no Google</h2>


          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                Uma visão sobre a vida de um Engenheiro de Software no Google.
                Explore a cultura e os valores do Google, incluindo o compromisso com a diversidade e inclusão. Entenda o dia a dia de um engenheiro: um mix de codificação, testes, revisões de código, reuniões e design de novas funcionalidades, sempre com forte colaboração em equipe.
                Descubra as práticas essenciais de engenharia, como os ambientes de desenvolvimento e os desafios únicos de codificar para a escala massiva do Google, considerando tráfico, latência, segurança, privacidade e acessibilidade. Conheça as ferramentas padrão para edição, controle de versão, rastreamento de bugs e build/deployment.
                Além disso, obtenha dicas sobre desenvolvimento de carreira, a importância do aprendizado contínuo e como se manter atualizado. Finalmente, saiba mais sobre as oportunidades no Google.
              </p>
              <h3 className={styles.palestranteP}>Palestrante</h3>
              <p className={styles.cargoP}>Engenheiro de Software no Google</p>
              <p className={styles.nomeP}>Lucas Hagen</p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/palestrantes/lucas-hagen.jpg"
                alt="Botão Fale Conosco"
                className={styles.imagem}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h1 className={styles.titulo}>14:50 - <span>palestra</span></h1>
          <h2 className={styles.subtitulo}>Buscando o Futuro: Como Transformamos Dados Brutos em Oportunidades</h2>


          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                Em um universo com um volume massivo e caótico de informações jurídicas, como garantimos que a resposta exata para uma pergunta complexa seja encontrada? Nesta palestra, vamos explorar nossa jornada de evolução: saindo da busca léxica tradicional para um funil de relevância que compreende o significado e a intenção por trás de cada consulta. Uma jornada técnica que nos permite fazer o mais importante: transformar dados brutos em oportunidades concretas.
              </p>
              <h3 className={styles.palestranteP}>Palestrante</h3>
              <p className={styles.cargoP}>Engenheiro de Software Associado em Escavador</p>
              <p className={styles.nomeP}>Caio Nery</p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/palestrantes/caio-nery.jpg"
                alt="Botão Fale Conosco"
                className={styles.imagem}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

      </section>

      <section className={styles.programacaoCard}>

        <div className={styles.card}>
          <h1 className={styles.titulo}>15:30 - <span>COFFEE BREAK</span></h1>

          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                O Coffee Break da SEMCOMP 25 é um momento de pausa para recarregar as energias e trocar ideias de forma descontraída. Mais do que um intervalo, é uma chance de fortalecer conexões, conhecer novas pessoas e continuar as conversas iniciadas nas atividades. Tudo isso em um ambiente acolhedor, pensado para unir sabor, descanso e networking.
              </p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/images/coffee-break.jpg"
                alt="Botão Fale Conosco"
                className={styles.imagem}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h1 className={styles.titulo}>16:10 - <span>DINÂMICA</span></h1>

          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                A Dinâmica da SEMCOMP 25 é um momento pensado para estimular a interação e a colaboração entre os participantes. De forma leve e divertida, buscamos criar experiências que aproximem as pessoas, incentivem o trabalho em equipe e fortaleçam o espírito coletivo do evento.
              </p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/images/dinamica.jpg"
                alt="Botão Fale Conosco"
                className={styles.imagem}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

      </section>

      <section className={styles.programacaoCard}>

        <div className={styles.card}>
          <h1 className={styles.titulo}>16:40 - <span>MESA REDONDA</span></h1>

          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                Roda de conversa sobre carreira e o impacto que a participação em uma Empresa Junior tem na vida profissional com ex-membros da InfoJr UFBA
              </p>

              <h3 className={styles.palestranteP}>Participantes</h3>
              <p className={styles.cargoP}>Membros da InfoJr</p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/images/roda-de-conversa.jpg"
                alt="Botão Fale Conosco"
                className={styles.imagem}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h1 className={styles.titulo}>17:50 - <span>PALESTRA</span></h1>
          <h2 className={styles.subtitulo}>Como preparar o Linkedin e o Curriculo para serem porta de entrada para multinacionais</h2>

          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                Ensino de tecnicas, meios e conceitos que ajudam a destacar curriculos e linkedins na area de tecnologia.
              </p>

              <h3 className={styles.palestranteP}>Palestrante</h3>
              <p className={styles.cargoP}>Desenvolvedora, Técnica e Pesquisadora em IA</p>
              <p className={styles.nomeP}>Priscila Araújo</p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/palestrantes/priscila-araujo.jpeg"
                alt="Botão Fale Conosco"
                className={styles.imagem}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

      </section>

      <section className={styles.programacaoCard}>

        <div className={styles.card}>
          <h1 className={styles.titulo}>19:00 - <span>PALESTRA</span></h1>
          <h2 className={styles.subtitulo}>Web App Hardening: HTTP Headers</h2>

          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                TODO
              </p>

              <h3 className={styles.palestranteP}>Palestrante</h3>
              <p className={styles.cargoP}>TODO</p>
              <p className={styles.nomeP}>Gildásio Júnior</p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/palestrantes/gildasio-junior.jpg"
                alt="Botão Fale Conosco"
                className={styles.imagem}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
