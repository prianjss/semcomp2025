import styles from './banner.module.css';
import Image from 'next/image';
import Botao from '../../../public/botoes/forma botao 1.png'
import Star from '../../../public/assets/star.png'

export default function Banner () {
	return (
		<div className={styles.banner}>
			<h1>SEMCOMP</h1>
			<h1 className={styles.bannerTitle}>EM 2025</h1>
			
			<div className={styles.bannerData}>
				<h4>09 A 12 DE SETEMBRO</h4>
				<Image src={Star} alt='Estrela' width={55} className={styles.bannerDataEstrela}/>
				<h4> SALVADOR - BA</h4>
			</div>

			<p className={styles.bannerTexto}>O maior evento de computação e tecnologia de Salvador está de volta, de cara nova, e na sua 13ª edição!</p>
			
			<div className={styles.bannerFormaBotao}>
				<Image src={Botao} alt='Participe Agora' width={239} className={styles.bannerBotao} />
				<p>PARTICIPE AGORA</p>
			</div>
		</div>
	)
}