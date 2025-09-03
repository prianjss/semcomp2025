import Image from 'next/image';
import styles from '../DiaUm/diaum.module.css';

export default function DiaTres() {
  return (
    <main className={styles.container}>
      <section className={styles.programacaoCard}>

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

        <div className={styles.card}>
          <h1 className={styles.titulo}>13:00 - <span>PALESTRA</span></h1>
          <h2 className={styles.subtitulo}>Quando o Código Imita a Empresa: Micro Frontends e a Lei de Conway em Ação</h2>


          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                Esta oficina/palestra explora como a arquitetura de micro frontends reflete, e depende, da forma como as equipes de desenvolvimento estão organizadas. Partindo da Lei de Conway, que afirma que sistemas tendem a espelhar a estrutura de comunicação das organizações que os produzem, apresentaremos um exemplo prático de aplicação web. A oficina aborda como micro frontends podem promover autonomia entre times, facilitar deploys independentes e escalar o desenvolvimento de forma mais eficiente, quando bem alinhados à estrutura organizacional.
              </p>
              <h3 className={styles.palestranteP}>Palestrante</h3>
              <p className={styles.cargoP}>Desenvolvedor, Docente e Pesquisador</p>
              <p className={styles.nomeP}>Luiz Santos</p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/palestrantes/luiz-felipe.png"
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
          <h1 className={styles.titulo}>13:50 - <span>PALESTRA</span></h1>
          <h2 className={styles.subtitulo}>Desenvolvendo o jogo &quot;Um Gato no Cangaço&quot;</h2>


          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                Palestra que explora as fases do desenvolvimento e o processo criativo de Um Gato no Cangaço, mostrando como narrativa, arte e mecânicas são planejadas, testadas e refinadas. A apresentação conduz o público pelos bastidores da construção do jogo, evidenciando as etapas e decisões que transformam ideias em uma experiência jogável.
              </p>
              <h3 className={styles.palestranteP}>Palestrante</h3>
              <p className={styles.cargoP}>Game designer, Desenvolvedor de jogos, Artista e Empresário</p>
              <p className={styles.cargoP}>Produtora cultural, Artista e Diretora de arte</p>
              <p className={styles.nomeP}>Irlan Nascimento</p>
              <p className={styles.nomeP}>Eduarda Bango</p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/palestrantes/irlan-e-eduarda.png"
                alt="Botão Fale Conosco"
                className={styles.imagem}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h1 className={styles.titulo}>15:00 - <span>PALESTRA</span></h1>
          <h2 className={styles.subtitulo}>Arte & Tecnologia - Como criar na era da reprodução</h2>


          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                A tecnologia ampliou o acesso às ferramentas criativas, mas também facilitou a reprodução de fórmulas e padrões. Como se destacar nesse cenário? Esta apresentação traz reflexões e exemplos práticos sobre como unir arte e tecnologia de forma autêntica, crítica e autoral. A proposta é mostrar caminhos para criar com propósito — e não apenas reproduzir — usando ferramentas contemporâneas como IA, plataformas low-code/no-code, linguagens digitais e analógicas, com foco também em aplicações reais no mercado criativo e na web.
              </p>
              <h3 className={styles.palestranteP}>Palestrante</h3>
              <p className={styles.cargoP}>Designer de Produto Sênior, Diretor do ConDan.SSA, Artista e Mestrando em Dança</p>
              <p className={styles.nomeP}>Caio Lopes</p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/palestrantes/caio-lopes.jpg"
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

        <div className={styles.card}>
          <h1 className={styles.titulo}>16:40 - <span>PALESTRA</span></h1>
          <h2 className={styles.subtitulo}>Enganharia de Dados e IA: Uma via de mão dupla</h2>


          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                Exploraremos como a Engenharia de Dados e Inteligência Artificial se conectam e se potencializam. De um lado, mostramos como arquiteturas de dados modernas criam a base necessária para aplicações de IA; de outro, exploramos como a IA já está sendo aplicada para otimizar pipelines, melhorar a qualidade dos dados e acelerar processos analíticos.
              </p>
              <h3 className={styles.palestranteP}>Palestrante</h3>
              <p className={styles.cargoP}>DBA, analista de BI, desenvolvedor e engenheiro de dados</p>
              <p className={styles.nomeP}>Leandro Correia</p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/palestrantes/leandro-correia.jpg"
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
          <h1 className={styles.titulo}>17:30 - <span>PALESTRA</span></h1>
          <h2 className={styles.subtitulo}>De Dev a CEO: Como transformar seu código em negócio</h2>


          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                Com a palestra De Dev a CEO: Como transformar seu código em negócio, meu objetivo é inspirar tanto novos desenvolvedores quanto profissionais experientes a darem o passo rumo ao empreendedorismo. Quero mostrar que é possível transformar conhecimento técnico em soluções reais, tirando ideias do papel e criando negócios de impacto — assim como fizeram gigantes como Google, Microsoft, Facebook e Apple, que nasceram das mãos de desenvolvedores.
              </p>
              <h3 className={styles.palestranteP}>Palestrante</h3>
              <p className={styles.cargoP}>Fundador e CEO da MobApps</p>
              <p className={styles.nomeP}>Mateus Carvalho</p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/palestrantes/MateusCarvalho.JPG"
                alt="Botão Fale Conosco"
                className={styles.imagem}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h1 className={styles.titulo}>18:30 - <span>LUGO BOTS</span></h1>

          <div className={styles.cardHorizontal}>
            <div className={styles.conteudoCard}>
              <p className={styles.sobre}>
                Acompanhe com todos no auditório os jogos das finais dos campeonatos da Liga Nacional de Lugo Bots e Campeonato Aberto de Lugo Bots. A InfoJR UFBA estará presente representando a UFBA no jogo final da Liga Nacional, venha torcer e se divertir!
              </p>
            </div>
            <div className={styles.cardImage}>
              <Image
                src="/images/lugo.jpg"
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
