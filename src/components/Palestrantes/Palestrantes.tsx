"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card, { CardProps } from "../CardPalestrante/CardPalestrante";
import styles from "./palestrantes.module.css";
import { useWindowSize } from "@/hooks/useWindowSize";

export type SpeakerData = CardProps & { id?: string };

const speakers: SpeakerData[] = [
  {
    nome: "Leka Hattori",
    cargo: "Founder & CEO da Space Terra, Representante NASA Space Challenge, Administradora, Consultora, Astronauta Análoga, Palestrante, Chef de Cozinha, etc.",
    descricao: "Founder & CEO Space Terra| TEDx Speaker | Representante NASA Space Challenge (world winner) | Administradora, MBA em finanças| Especialista em inovação na educação | Consultora de negócios internacionais e espaciais |Astronauta Análoga | Palestrante | Chef de cozinha internacional| Membra da “Bold Community - Comunidade de Visionários” – Programa do Governo da Áustria e do Coletivo \"Nasa Space\" - EUA.",
    instagram: "@lekahattori @spaceterrahub",
    imageUrl: "./palestrantes/leka-hattori.jpg",
  },
  /*{
    nome: "Luiz Santos",
    cargo: "Desenvolvedor, Docente e Pesquisador",
    descricao: "Desenvolvedor .NET e Node.js, com experiência em arquitetura de software e micro frontends. Atuo também como docente e pesquisador, no Centro Universitário Estácio Sergipe, sendo também mestrando, em último semestre, na Universidade Federal de Sergipe.",
    imageUrl: "/palestrantes/luiz-felipe.png",
    instagram: "@luiz.cirqueira",
    id: "luiz-cirqueira-1",
  },
  {
    nome: "Pachi Parra",
    cargo: "Developer Advocate, Palestrante e Mentora",
    descricao: "Pachi Parra atua como Developer Advocate no GitHub, focada na comunidade brasileira. Especialista em Developer Relations, gerenciamento de comunidades e eventos tech, ela é fundadora da Abacate DevRel, pioneira em consultoria DevRel no Brasil, e co-fundadora da Feministech, comunidade que fortalece a presença de mulheres e pessoas LGBTQIAP+ na tecnologia. Palestrante, mentora e apaixonada por construir relações que nutrem o ecossistema tech.",
    instagram: "@pachicodes",
    imageUrl: "/palestrantes/pachi-parra.jpg",
  },
  */
  {
    nome: "Iasmim Oliveira",
    cargo: "Software Engineer no iFood, especialista em soluções Front-end e Mentora",
    descricao: "Staff Software Engineer no iFood, especialista em soluções Front-end. Apaixonada por automatização e IA aplicada a fluxos de desenvolvimento.Mentora no Programadores do Amanhã, minha missão é unir código, arte e impacto social para acelerar inovação real.",
    instagram: "@oliv_code",
    imageUrl: "./palestrantes/iasmin-oliveira.jpeg",
  },
  {
    nome: "Mateus Carvalho",
    cargo: "Fundador e CEO da MobApps",
    descricao: "Mateus Carvalho é fundador da Mobapps, empresa referência no Brasil no desenvolvimento de aplicativos White Label para mobilidade, com presença internacional e mais de 25 colaboradores. Natural do sertão baiano, Mateus atua no mercado digital há mais de 17 anos. Iniciou sua trajetória criando sites em sua cidade natal e, ao longo dos anos, participou de projetos de destaque para empresas como OAS, Ivete Sangalo, Cozinhas Itatiaia, além de aplicativos para a Ambev e o Governo da Bahia. \n Vencedor da competição nacional Campus Mobile, que o levou ao Vale do Silício, e campeão de hackathons, Mateus é hoje um exemplo de como a tecnologia pode abrir caminhos inimagináveis. Ele inspira pela sua resiliência e pela prova de que é possível construir grandes coisas partindo de lugares pequenos. \n Hoje, além de liderar sua empresa, compartilha sua história para motivar desenvolvedores a também despertarem seu lado empreendedor — mostrando que, com visão e atitude, é possível transformar código em impacto real no mundo.",
    instagram: "@mateuscarvalho.tech ",
    imageUrl: "./palestrantes/MateusCarvalho.JPG",
  },
  {
    nome: "Priscila Araújo",
    cargo: "Desenvolvedora, Técnica e Pesquisadora em IA",
    descricao: "Desenvolvedora de software desde 2018, tecnica em automação pelo IFBA, estudante de ciência da computação na UFBA e pesquisadora em Inteligencia Artificial e Otimização na Ford Motor Company. Além de anos de experiência no mercado de trabalho, fiz parte de iniciativas da Google, Alura, entre outros, sempre sendo destaque em curriculo, pesquisa e formação.",
    imageUrl: "/palestrantes/priscila-araujo.jpeg",
    instagram: "@prihcaraujo",
  },
  {
    nome: "Irlan Nascimento",
    cargo: "Game designer, Desenvolvedor de jogos, Artista e Empresário",
    descricao: "Graduado no Bacharelado Interdisciplinar em Artes com concentração em Artes e Tecnologias Contemporâneas na Universidade Federal da Bahia. Aprendeu a desenvolver jogos ainda na adolescência, de forma autodidata, através de tutoriais online. Fundou seu estúdio em 2018, onde já publicou mais de 15 jogos e experiências artísticas digitais. Está na posição de vice-presidente da BIND, coletivo de desenvolvedores de jogos da Bahia, desde 2023. Irlan também já atuou como professor de desenvolvimento de jogos.",
    instagram: "@bragiestudios",
    imageUrl: "./palestrantes/irlan.png",
  },
  {
    nome: "Eduarda Bango",
    cargo: "Produtora cultural, Artista e Diretora de arte",
    descricao: "Produtora cultural (audiovisual, games e eventos), artista e diretora de arte. Graduada no Bacharelado Interdisciplinar em Artes com concentração em Cinema e Audiovisual e no Bacharelado em Comunicação com habilitação em Produção Cultural, ambos na Universidade Federal da Bahia. Já ocupou cargos de direção, direção de arte, roteiro e produção em audiovisual, mas migrou para a área de games. Atua como produtora de jogos e diretora de arte na Bragi Estúdios desde 2022, onde já participou de mais de 10 jogos produzidos. Assina roteiro, direção de arte e produção do jogo MOOH.",
    instagram: "@bragiestudios",
    imageUrl: "./palestrantes/eduarda-bango.png",
  },
  // {
  //   nome: "Caio Lopes",
  //   cargo: "Designer de Produto Sênior, Diretor do ConDan.SSA, Artista e Mestrando em Dança",
  //   descricao: "Bacharel em Ciência da Computação pela UFBA e artista independente, atuo na interseção entre tecnologia, arte e produção cultural. Com experiência em UX/UI, produto, programação e marketing, já integrei equipes de startups e projetos de economia criativa, além de ter passagem pelo Movimento Empresa Júnior na InfoJr, NEJ Salvador e enquanto coordenador da SEMCOMP nos anos de 2019 e 2020. Atualmente sou aluno especial do Mestrado Profissional em Dança (PRODAN/UFBA), diretor do ConDan.SSA – Convergências em Dança Salvador e Designer de Produto Sênior na Caffeine Army, desenvolvendo produtos digitais e trabalhos que atravessam educação, inovação e criação artística.",
  //   instagram: "@caiovinisl",
  //   imageUrl: "./palestrantes/caio-lopes.jpg",
  // },
  {
    nome: "Palestrante",
    cargo: "Novidades em breve",
    descricao: "Novidades em breve",
    instagram: "Novidades em breve",
    imageUrl: "./palestrantes/embreve.png",
  },
  {
    nome: "Palestrante",
    cargo: "Novidades em breve",
    descricao: "Novidades em breve",
    instagram: "Novidades em breve",
    imageUrl: "./palestrantes/embreve.png",
  },
  {
    nome: "Palestrante",
    cargo: "Novidades em breve",
    descricao: "Novidades em breve",
    instagram: "Novidades em breve",
    imageUrl: "./palestrantes/embreve.png",
  },
  {
    nome: "Palestrante",
    cargo: "Novidades em breve",
    descricao: "Novidades em breve",
    instagram: "Novidades em breve",
    imageUrl: "./palestrantes/embreve.png",
  },
  {
    nome: "Palestrante",
    cargo: "Novidades em breve",
    descricao: "Novidades em breve",
    instagram: "Novidades em breve",
    imageUrl: "./palestrantes/embreve.png",
  },
  {
    nome: "Palestrante",
    cargo: "Novidades em breve",
    descricao: "Novidades em breve",
    instagram: "Novidades em breve",
    imageUrl: "./palestrantes/embreve.png",
  },
  {
    nome: "Palestrante",
    cargo: "Novidades em breve",
    descricao: "Novidades em breve",
    instagram: "Novidades em breve",
    imageUrl: "./palestrantes/embreve.png",
  },
  {
    nome: "Palestrante",
    cargo: "Novidades em breve",
    descricao: "Novidades em breve",
    instagram: "Novidades em breve",
    imageUrl: "./palestrantes/embreve.png",
  },
  {
    nome: "Palestrante",
    cargo: "Novidades em breve",
    descricao: "Novidades em breve",
    instagram: "Novidades em breve",
    imageUrl: "./palestrantes/embreve.png",
  },
  {
    nome: "Palestrante",
    cargo: "Novidades em breve",
    descricao: "Novidades em breve",
    instagram: "Novidades em breve",
    imageUrl: "./palestrantes/embreve.png",
  },
  {
    nome: "Palestrante",
    cargo: "Novidades em breve",
    descricao: "Novidades em breve",
    instagram: "Novidades em breve",
    imageUrl: "./palestrantes/embreve.png",
  },
  {
    nome: "Palestrante",
    cargo: "Novidades em breve",
    descricao: "Novidades em breve",
    instagram: "Novidades em breve",
    imageUrl: "./palestrantes/embreve.png",
  },
  {
    nome: "Palestrante",
    cargo: "Novidades em breve",
    descricao: "Novidades em breve",
    instagram: "Novidades em breve",
    imageUrl: "./palestrantes/embreve.png",
  },
  {
    nome: "Palestrante",
    cargo: "Novidades em breve",
    descricao: "Novidades em breve",
    instagram: "Novidades em breve",
    imageUrl: "./palestrantes/embreve.png",
  },

]



const swiperBreakpoints = {
  320: { slidesPerView: 2 },
  480: { slidesPerView: 2 },
  768: { slidesPerView: 3 },
  1024: { slidesPerView: 4 },
  1440: { slidesPerView: 5 },
}

export default function Palestrantes() {
  const [isMounted, setIsMounted] = useState(false);
  const { width: windowWidth } = useWindowSize();
  const [formattedSpeakers, setFormattedSpeakers] = useState<SpeakerData[]>([]);

  useEffect(() => {
    setIsMounted(true);
    setFormattedSpeakers(speakers);
  }, []);

  useEffect(() => {
    // COLOCAR CARDS NA ORDEM CORRETA NA HORA DA VISUALIZAÇÃO
    const aux: SpeakerData[] = [...speakers];
    const rows: SpeakerData[][] = [];
    let slidesPerView = 2;

    if (windowWidth >= 1440) {
      slidesPerView = swiperBreakpoints[1440].slidesPerView;
    } else if (windowWidth >= 1024) {
      slidesPerView = swiperBreakpoints[1024].slidesPerView;
    } else if (windowWidth >= 768) {
      slidesPerView = swiperBreakpoints[768].slidesPerView;
    } else if (windowWidth >= 480) {
      slidesPerView = swiperBreakpoints[480].slidesPerView;
    } else if (windowWidth >= 320) {
      slidesPerView = swiperBreakpoints[320].slidesPerView;
    }

    rows[0] = aux.splice(0, slidesPerView);
    rows[1] = aux.splice(0, slidesPerView);

    while (aux.length > 0) {
      const index = rows[0].length - rows[1].length;
      rows[index].push(aux.shift() as SpeakerData);
    }

    setFormattedSpeakers(rows.flat());
  }, [windowWidth]);

  return (
    <main className={styles.palestrantesContainer}>
      <header className={styles.palestrantesHeader}>
        <h1 className={styles.palestrantesTitle}>PALESTRANTES 2025</h1>
      </header>

      <article className={styles.palestrantesContent}>
        {isMounted && (
          <Swiper
            modules={[Pagination, Grid]}
            spaceBetween={10}
            slidesPerView={5}
            grid={{ rows: 2, fill: "row" }}
            pagination={{ clickable: true }}
            breakpoints={swiperBreakpoints}
          >

            {formattedSpeakers.map((speaker, index) => (
              <SwiperSlide key={speaker.id ?? index} >
                <Card
                  nome={speaker.nome}
                  cargo={speaker.cargo}
                  descricao={speaker.descricao}
                  instagram={speaker.instagram}
                  imageUrl={speaker.imageUrl}
                />
              </SwiperSlide>
            ))}

          </Swiper>
        )}
      </article>

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
    </main>
  );
}
