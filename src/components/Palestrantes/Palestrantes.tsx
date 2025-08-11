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
import { v4 } from 'uuid';

export type SpeakerData = CardProps & { id?: string };

const speakers: SpeakerData[] = [
  {
    nome: "Luiz Santos",
    cargo: "Desenvolvedor, Docente e Pesquisador",
    descricao: "Desenvolvedor .NET e Node.js, com experiência em arquitetura de software e micro frontends. Atuo também como docente e pesquisador, no Centro Universitário Estácio Sergipe, sendo também mestrando, em último semestre, na Universidade Federal de Sergipe.",
    imageUrl: "https://drive.google.com/open?id=1QMflJGA6cAGXo3fgtxRh65c6PabqnOH7",
    instagram: "@luiz.cirqueira",
    id: "luiz-cirqueira-1",
  },
  {
    nome: "Priscila Araújo",
    cargo: "Desenvolvedora, Técnica e Pesquisadora em IA",
    descricao: "Desenvolvedora de software desde 2018, tecnica em automação pelo IFBA, estudante de ciência da computação na UFBA e pesquisadora em Inteligencia Artificial e Otimização na Ford Motor Company. Além de anos de experiência no mercado de trabalho, fiz parte de iniciativas da Google, Alura, entre outros, sempre sendo destaque em curriculo, pesquisa e formação.",
    imageUrl: "https://drive.google.com/open?id=1tvg-TO5WNbSsea8-IE3nRGVdoNvliHUR",
    instagram: "@prihcaraujo",
    id: "priscila-ara-1",
  },
  {
    nome: "FULANO DA SILVA",
    cargo: "CEO DE ALGUMA COISA",
    descricao: "Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinhas pois.",
    instagram: "@fulanodasilva",
    imageUrl: "./palestrantes/perfil.png",
  },
  {
    nome: "FULANO DA SILVA",
    cargo: "CEO DE ALGUMA COISA",
    descricao: "Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinhas pois.",
    instagram: "@fulanodasilva",
    imageUrl: "./palestrantes/perfil.png",
  },
  {
    nome: "FULANO DA SILVA",
    cargo: "CEO DE ALGUMA COISA",
    descricao: "Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinhas pois.",
    instagram: "@fulanodasilva",
    imageUrl: "./palestrantes/perfil.png",
  },
  {
    nome: "FULANO DA SILVA",
    cargo: "CEO DE ALGUMA COISA",
    descricao: "Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinhas pois.",
    instagram: "@fulanodasilva",
    imageUrl: "./palestrantes/perfil.png",
  },
  {
    nome: "FULANO DA SILVA",
    cargo: "CEO DE ALGUMA COISA",
    descricao: "Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinhas pois.",
    instagram: "@fulanodasilva",
    imageUrl: "./palestrantes/perfil.png",
  },
  {
    nome: "FULANO DA SILVA",
    cargo: "CEO DE ALGUMA COISA",
    descricao: "Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinhas pois.",
    instagram: "@fulanodasilva",
    imageUrl: "./palestrantes/perfil.png",
  },
  {
    nome: "FULANO DA SILVA",
    cargo: "CEO DE ALGUMA COISA",
    descricao: "Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinhas pois.",
    instagram: "@fulanodasilva",
    imageUrl: "./palestrantes/perfil.png",
  },
  {
    nome: "FULANO DA SILVA",
    cargo: "CEO DE ALGUMA COISA",
    descricao: "Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinhas pois.",
    instagram: "@fulanodasilva",
    imageUrl: "./palestrantes/perfil.png",
  },
  {
    nome: "FULANO DA SILVA",
    cargo: "CEO DE ALGUMA COISA",
    descricao: "Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinhas pois.",
    instagram: "@fulanodasilva",
    imageUrl: "./palestrantes/perfil.png",
  },
  {
    nome: "FULANO DA SILVA",
    cargo: "CEO DE ALGUMA COISA",
    descricao: "Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinhas pois.",
    instagram: "@fulanodasilva",
    imageUrl: "./palestrantes/perfil.png",
  },
]

export default function Palestrantes() {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
            breakpoints={{
              320: { slidesPerView: 2, grid: { rows: 2 } },
              480: { slidesPerView: 2, grid: { rows: 2 } },
              768: { slidesPerView: 3, grid: { rows: 2 } },
              1024: { slidesPerView: 4, grid: { rows: 2 } },
              1440: { slidesPerView: 5, grid: { rows: 2 } },
            }}
          >

            {speakers.map((speaker) => (
              <SwiperSlide key={speaker.id ?? v4()}>
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
