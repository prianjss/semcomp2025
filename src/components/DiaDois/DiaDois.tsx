import Image from 'next/image';
import styles from '../DiaUm/diaum.module.css';

export default function DiaDois() {
  return (
    <main className={styles.container}>
      <section className={styles.programacaoCard}>

        <div className={styles.card}>
          <h1 className={styles.titulo}>09:00 - <span>WORKSHOP</span></h1>

          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                LLMs no Dia a Dia do Dev: Da Otimização de Código à Análise de Performance - Crie e aplique seu próprio agente
              </p>

              <h3 className={styles.palestranteP}>Ministrado por</h3>
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

        <div className={styles.card}>
          <h1 className={styles.titulo}>12:00 - <span>CREDENCIAMENTO</span></h1>

          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                A SEMCOMP SSA (Semana de Computação de Salvador) é um evento anual realizado na UFBA pela InfoJr UFBA. Seu propósito é unir e fortalecer a comunidade acadêmica e entusiastas em tecnologia, inovação e empreendedorismo.
                Buscamos criar um ambiente acolhedor e acessível, onde todos os participantes se sintam bem-vindos e representados.
              </p>

            </div>
            <div className={styles.cardImage}>
              <Image
                src="/images/credenciamento.jpg"
                alt="Botão Fale Conosco"
                className={styles.imagem}
                style={{ objectFit: 'contain' }}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

      </section>

      <section className={styles.programacaoCard}>

        <div className={styles.card}>
          <h1 className={styles.titulo}>13:00 - <span>MESA REDONDA</span></h1>
          <h2 className={styles.subtitulo}>O Mercado de Tecnologias e o Ecossistema Empreendedor de Salvador</h2>
          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                O mercado de tecnologia em Salvador muitas vezes pode soar desafiador, ainda mais quando se trata de empreender, seja em startups ou não. Juntamente aos convidados, a Vale do Dendê propõe uma reflexão desse mercado, apontando caminhos possíveis para este ecossistema de inovação e tecnologias.
              </p>

              <h3 className={styles.palestranteP}>Participantes</h3>
              <p className={styles.cargoP}>Vale do Dendê</p>
              <p className={styles.nomeP}>Maria Emília Ribeiro<br />Tata Ribeiro<br />Mateus Aragão</p>
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

        {/* <div className={styles.card}>
          <h1 className={styles.titulo}>14:10 - <span>PALESTRA</span></h1>
          <h2 className={styles.subtitulo}><i>Uma super palestra te espera... não perca!</i></h2>

          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                <i>A SEMCOMP é feita de encontros que inspiram, e essa palestra promete ser mais um deles. Um momento para explorar ideias, compartilhar experiências e mergulhar em novas perspectivas sobre tecnologia e inovação. Seja você iniciante curioso ou veterano de código, a conversa vai trazer insights práticos, reflexões atuais e aquele empurrãozinho para pensar diferente.

                  Venha de mente aberta, coração curioso e disposição para aprender junto. Afinal, é isso que faz da SEMCOMP uma semana tão especial. 🚀</i>
              </p>

              <h3 className={styles.palestranteP}>Palestrante</h3>
              <p className={styles.nomeP}><i>A confirmar</i></p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/palestrantes/perfil.png"
                alt="Botão Fale Conosco"
                className={styles.imagem}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div> */}



        <div className={styles.card}>
          <h1 className={styles.titulo}>14:50 - <span>DINÂMICA</span></h1>

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
          <h1 className={styles.titulo}>15:00 - <span>PALESTRA</span></h1>
          <h2 className={styles.subtitulo}>Plano de Carreira para Autônomos e Empreendedores em Tecnologia</h2>

          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                O mercado de tecnologia, no Brasil e no mundo, oferece cada vez mais oportunidades de atuação autônoma, empreendedora e remota. Porém, muitos profissionais ainda enxergam o plano de carreira apenas no modelo tradicional (CLT), sem perceber que é possível trilhar caminhos sólidos e rentáveis como freelancer ou empreendedor individual.

                Nesta palestra, compartilho minha trajetória e apresento estratégias práticas para quem deseja construir um plano de carreira autônomo em tecnologia. Vamos explorar:

                Como se posicionar no mercado por meio de branding pessoal e portfólio profissional;

                Onde encontrar oportunidades em plataformas e comunidades;

                Como estruturar e apresentar propostas comerciais que geram confiança;

                Estratégias para crescer e escalar como freelancer, transformando clientes em parceiros de longo prazo.

                O objetivo é mostrar, de forma clara e aplicável, que qualquer profissional pode se tornar protagonista da própria carreira em tecnologia — criando posicionamento, construindo autoridade e conquistando clientes no Brasil e no exterior.
              </p>

              <h3 className={styles.palestranteP}>Palestrante</h3>
              <p className={styles.cargoP}>Desenvolvedor Mobile Flutter</p>
              <p className={styles.nomeP}>Iran Dias</p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/palestrantes/iran-dias.jpg"
                alt="Botão Fale Conosco"
                className={styles.imagem}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>



        <div className={styles.card}>
          <h1 className={styles.titulo}>16:00 - <span>COFFEE BREAK</span></h1>

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
      </section>

      <section className={styles.programacaoCard}>
        <div className={styles.card}>
          <h1 className={styles.titulo}>16:40 - <span>DINÂMICA</span></h1>

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



        <div className={styles.card}>
          <h1 className={styles.titulo}>17:10 - <span>PALESTRA</span></h1>
          <h2 className={styles.subtitulo}>Da cozinha para a Nasa</h2>


          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                Fomentar aprendizado contínuo, transições de carreira, mentalidade astronauta.
              </p>
              <h3 className={styles.palestranteP}>Palestrante</h3>
              <p className={styles.cargoP} title='Founder & CEO da Space Terra, Representante NASA Space Challenge, Administradora, Consultora, Astronauta Análoga, Palestrante, Chef de Cozinha, etc.'>Founder & CEO da Space Terra, Representante NASA Space Challenge, e mais...</p>
              <p className={styles.nomeP}>Leka Hattori</p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/palestrantes/leka-hattori.jpg"
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
          <h1 className={styles.titulo}>18:20 - <span>PALESTRA</span></h1>
          <h2 className={styles.subtitulo}>Do Júnior ao Sênior: A Evolução da Carreira de Desenvolvedor</h2>


          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                Uma palestra onde sobre o que importa nos diferentes niveis de senioridade e como o trabalho muda à medida que cresce.
              </p>
              <h3 className={styles.palestranteP}>Palestrante</h3>
              <p className={styles.cargoP}>CEO da Avantsoft</p>
              <p className={styles.nomeP}>Paulo Carvalho</p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/palestrantes/paulo.jfif"
                alt="Botão Fale Conosco"
                className={styles.imagem}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>


        <div className={`${styles.card} ${styles.unique}`}>
          <h1 className={styles.titulo}>19:10 - <span>PALESTRA</span></h1>
          <h2 className={styles.subtitulo}>IA na Prática: Como Criar um Workflow de Desenvolvimento Inteligente, Produtivo e Acelerar Seu Trabalho</h2>


          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                Você sente que está sempre correndo contra o tempo para entregar código de qualidade? E se
                você pudesse automatizar tarefas repetitivas, acelerar testes e documentação, e focar no que
                realmente importa?
                Nesta palestra, vou mostrar como integrar IA Generativa ao seu workflow de desenvolvimento,
                eliminando gargalos e tornando o processo mais eficiente. Vamos explorar como criar testes
                automatizados, gerar documentação viva, escrever user stories e até refatorar código com IA
                Com exemplos práticos, você verá como montar um workflow mais produtivo usando
                ferramentas acessíveis e prompts eficazes
              </p>
              <h3 className={styles.palestranteP}>Palestrante</h3>
              <p className={styles.cargoP}>Software Engineer no iFood, especialista em soluções Front-end e Mentora</p>
              <p className={styles.nomeP}>Iasmin Oliveira</p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/palestrantes/iasmin-oliveira.jpeg"
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
