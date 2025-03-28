"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "../CardPalestrante/CardPalestrante";
import styles from "./palestrantes.module.css";

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
              <SwiperSlide>
                <Card
                  nome="MARK ZUCKERBERG"
                  cargo="FORMER CEO DA META"
                  descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                  instagram="@fulanodasilva"
                  imageUrl="./palestrantes/marquinhos.png"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Card
                  nome="MARK ZUCKERBERG"
                  cargo="FORMER CEO DA META"
                  descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                  instagram="@fulanodasilva"
                  imageUrl="./palestrantes/marquinhos.png"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Card
                  nome="MARK ZUCKERBERG"
                  cargo="FORMER CEO DA META"
                  descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                  instagram="@fulanodasilva"
                  imageUrl="./palestrantes/marquinhos.png"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Card
                  nome="MARK ZUCKERBERG"
                  cargo="FORMER CEO DA META"
                  descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                  instagram="@fulanodasilva"
                  imageUrl="./palestrantes/marquinhos.png"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Card
                  nome="MARK ZUCKERBERG"
                  cargo="FORMER CEO DA META"
                  descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                  instagram="@fulanodasilva"
                  imageUrl="./palestrantes/marquinhos.png"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Card
                  nome="MARK ZUCKERBERG"
                  cargo="FORMER CEO DA META"
                  descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                  instagram="@fulanodasilva"
                  imageUrl="./palestrantes/marquinhos.png"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Card
                  nome="MARK ZUCKERBERG"
                  cargo="FORMER CEO DA META"
                  descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                  instagram="@fulanodasilva"
                  imageUrl="./palestrantes/marquinhos.png"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Card
                  nome="MARK ZUCKERBERG"
                  cargo="FORMER CEO DA META"
                  descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                  instagram="@fulanodasilva"
                  imageUrl="./palestrantes/marquinhos.png"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Card
                  nome="MARK ZUCKERBERG"
                  cargo="FORMER CEO DA META"
                  descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                  instagram="@fulanodasilva"
                  imageUrl="./palestrantes/marquinhos.png"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Card
                  nome="MARK ZUCKERBERG"
                  cargo="FORMER CEO DA META"
                  descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                  instagram="@fulanodasilva"
                  imageUrl="./palestrantes/marquinhos.png"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Card
                  nome="MARK ZUCKERBERG"
                  cargo="FORMER CEO DA META"
                  descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                  instagram="@fulanodasilva"
                  imageUrl="./palestrantes/marquinhos.png"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Card
                  nome="MARK ZUCKERBERG"
                  cargo="FORMER CEO DA META"
                  descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                  instagram="@fulanodasilva"
                  imageUrl="./palestrantes/marquinhos.png"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Card
                  nome="MARK ZUCKERBERG"
                  cargo="FORMER CEO DA META"
                  descricao={`Pequeno resumo sobre a carreira ou vida ou algo relevante do palestrante aqui. \nMarta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras. Marta foi a cozinha pois queria ver belo jogo de xicaras.`}
                  instagram="@fulanodasilva"
                  imageUrl="./palestrantes/marquinhos.png"
                />
              </SwiperSlide>

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
