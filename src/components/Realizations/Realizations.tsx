import styles from './realizations.module.css'
import Image from "next/image"

export default function Realizations(){
    return(
        <section className={styles.realizationContainer}>
            <div className={styles.realizationContainer_text}>
                <h1 className={styles.realizationContainer_text_title}>Realização</h1>
                <article className={styles.realizationContainer_text_article}>
                    A SEMCOMP é concebida, idealizada e realizada pela <strong>InfoJr UFBA</strong>. Com 27 anos de existência, a InfoJr é formada por estudantes que buscam proporcionar aos estudantes de computação e áreas correlacionadas uma experiência empreendedora no mercado de tecnologia.
                    <br />
                    <br />
                    Além de ser responsável pela organização da SEMCOMP, a InfoJr oferece serviços de desenvolvimento de produtos digitais, como sistemas web e sites. A InfoJr é uma iniciativa que visa impulsionar o aprendizado prático, a inovação e o empreendedorismo entre os estudantes, contribuindo para sua formação profissional e para o fortalecimento do ecossistema de tecnologia.
                </article>
                <a href="https://www.infojr.com.br" className={styles.realizationContainer_text_link}>
                    <span>Conheça mais a InfoJr</span>
                    <Image src="/realizations/play.svg" alt="Botão de iniciar" width={24} height={24}></Image>
                </a>
            </div>
            <section className={styles.realizationContainer_section}>
                <div className={styles.realizationContainer_section_image}>
                    <Image src="/realizations/group-image.png" alt="Foto dos organizadores e membros da infoJr em 2024" width={2880} height={1620}/>
                </div>
                <div className={styles.realizationContainer_section_image}>
                    <Image src="/realizations/celebration.png" alt="Foto do grupo de membros da infoJr torcendo para a vitória da mesma no campeonato LugoBots" width={4096} height={2731}></Image>
                </div>
            </section>
        </section>
    )
}