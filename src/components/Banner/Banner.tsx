'use client'
import { useEffect, useState, useRef } from 'react';
import styles from './banner.module.css';
import Image from 'next/image';
import Botao from '../../../public/botoes/forma botao 1.png'
import Star from '../../../public/assets/star.png'
import Seta from '../../../public/assets/home arrow.png'

export default function Banner () {
	const [isHidden, setIsHidden] = useState(false);
	const bannerRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 200) { 
				setIsHidden(true); 
			} else {
				setIsHidden(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<main className={styles.banner}>
			<div className={styles.bannerContainer}>
				<h1>SEMCOMP</h1>
				<h1 className={styles.bannerTitle}>EM 2025</h1>

				<div className={styles.bannerData}>
					<h4>09 A 12 DE SETEMBRO</h4>
					<Image src={Star} alt='Estrela' width={55} className={styles.bannerDataEstrela}/>
					<h4> SALVADOR - BA</h4>
				</div>

				<p className={styles.bannerTexto}>O maior evento de computação e tecnologia de Salvador está de volta, de cara nova, e na sua 13ª edição!</p>

				<a className={styles.bannerFormaBotao} 
				href='https://cheers.com.br/pagina/semcomp25~12976'
				target="_blank"
				rel="noopener noreferrer">
					<Image src={Botao} alt='Participe Agora' className={styles.bannerBotao} />
					<p className={styles.textoBotao}>PARTICIPE AGORA</p>
				</a>
			</div>

			<div
			ref={bannerRef}
			className={`${styles.bannerCirculoSeta} ${isHidden ? styles.hidden : ''}`}>
				<div className={styles.bannerCirculo}></div>
				<Image src={Seta} alt='Seta' className={styles.bannerSeta}/>
			</div>
		</main>
	)
}