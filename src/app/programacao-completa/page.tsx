'use client'

import { useState } from 'react';
import styles from "./page.module.css";
import DiaUm from '@/components/DiaUm/DiaUm';
import DiaDois from '@/components/DiaDois/DiaUm';
import DiaTres from '@/components/DiaTres/DiaTres';
import DiaQuatro from '@/components/DiaQuatro/DiaUm';
import Header from '@/components/Header/Header';

type Dia = 1 | 2 | 3 | 4;

export default function ProgramacaoCompleta() {
  const [diaSelecionado, setDiaSelecionado] = useState<Dia>(1);

  const mudarDia = (dia: Dia) => {
    setDiaSelecionado(dia);
  };

  return (
    <main className={styles.container}>
        <Header/>

        <section className={styles.programacaoTitulo}>
            <h1 className={styles.titulo}>PROGRAMAÇÃO<br />COMPLETA</h1>
        </section>

        <section className={styles.programacaoNavigation}>

            <div className={styles.botoes}>
                <div className={styles.imagemContainer} onClick={() => mudarDia(1)}>
                    <img
                        src={diaSelecionado === 1 ? "./botoes/botao_programacao1.svg" : "./botoes/botao_programacao2.svg"}
                        alt="Dia 1"
                        className={styles.imagemDia}
                    />
                    <span className={styles.textoImagem}>Dia 1</span>
                </div>
                <div className={styles.imagemContainer} onClick={() => mudarDia(2)}>
                    <img
                        src={diaSelecionado === 2 ? "./botoes/botao_programacao1.svg" : "./botoes/botao_programacao2.svg"}
                        alt="Dia 2"
                        className={styles.imagemDia}
                    />
                    <span className={styles.textoImagem}>Dia 2</span>
                </div>
                <div className={styles.imagemContainer} onClick={() => mudarDia(3)}>
                    <img
                        src={diaSelecionado === 3 ? "./botoes/botao_programacao1.svg" : "./botoes/botao_programacao2.svg"}
                        alt="Dia 3"
                        className={styles.imagemDia}
                    />
                    <span className={styles.textoImagem}>Dia 3</span>
                </div>
                <div className={styles.imagemContainer} onClick={() => mudarDia(4)}>
                    <img
                        src={diaSelecionado === 4 ? "./botoes/botao_programacao1.svg" : "./botoes/botao_programacao2.svg"}
                        alt="Hackathon"
                        className={styles.imagemDia}
                    />
                    <span className={styles.textoImagem}>Dia 4</span>
                </div>
            </div>

            <div className={styles.programacaoDia}>
                {diaSelecionado === 1 && (
                <div className={styles.dia}>
                    <h2 className={styles.tituloDia}>DIA 1</h2>
                    <h3 className={styles.subtituloDia}>TERÇA-FEIRA</h3>
                </div>
                )}

                {diaSelecionado === 2 && (
                <div className={styles.dia}>
                    <h2 className={styles.tituloDia}>DIA 2</h2>
                    <h3 className={styles.subtituloDia}>QUARTA-FEIRA</h3>
                </div>
                )}

                {diaSelecionado === 3 && (
                <div className={styles.dia}>
                    <h2 className={styles.tituloDia}>DIA 3</h2>
                    <h3 className={styles.subtituloDia}>QUINTA-FEIRA</h3>
                </div>
                )}

                {diaSelecionado === 4 && (
                <div className={styles.dia}>
                    <h2 className={styles.tituloDia}>HACKATHON</h2>
                    <h3 className={styles.subtituloDia}>SEXTA-FEIRA</h3>
                </div>
                )}
        </div>

        </section>

        <section className={styles.programacaoConteudo}>
            {diaSelecionado === 1 && (
                <div className={styles.conteudoDia}>
                    <DiaUm/>
                </div>
            )}

            {diaSelecionado === 2 && (
            <div className={styles.conteudoDia}>
                <DiaDois/>
            </div>
            )}

            {diaSelecionado === 3 && (
            <div className={styles.conteudoDia}>
                <DiaTres/>
            </div>
            )}

            {diaSelecionado === 4 && (
            <div className={styles.conteudoDia}>
                <DiaQuatro/>
            </div>
            )}
        </section>
    </main>
  );
}
