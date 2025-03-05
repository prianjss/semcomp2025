import styles from './background.module.css';
import Image from 'next/image';
import Home1 from '../../../public/background/home 1.png'
import Home2 from '../../../public/background/home 2.png'
import Home3 from '../../../public/background/home 3.png'
import Home4 from '../../../public/background/home 4.png'
import Home5 from '../../../public/background/home 5.png'
import Home6 from '../../../public/background/home 6.png'
import Home7 from '../../../public/background/home 7.png'
import Home8 from '../../../public/background/home 8.png'
import Home9 from '../../../public/background/home 9.png'
import Home10 from '../../../public/background/home 10.png'
import Home11 from '../../../public/background/home 11.png'
import Home12 from '../../../public/background/home 12.png'
import Elipse from '../../../public/assets/home elipse.png'
import Luz from '../../../public/assets/bola 1.png'

export default function Background() {
	return (
		<main className={styles.background}>
			<Image src={Luz} alt='Luz' className={styles.backgroundLuz}/>
			<Image src={Elipse} alt='Elipse' className={styles.backgroundElipse}/>

			<section className={styles.backgroundContent}>
				<div>
					<Image src={Home1} alt={''} width={328} height={219} className={styles.backgroundFotos}/>
					<Image src={Home2} alt={''} width={348} height={232} className={styles.backgroundMedio}/>
					<Image src={Home3} alt={''} width={350}height={234} className={styles.backgroundMedio}/>
					<Image src={Home4} alt={''} width={171} height={229} className={styles.backgroundEscuro}/>
				</div>
				<div>
					<Image src={Home5} alt={''} width={345} height={230} className={styles.backgroundMedio}/>
					<Image src={Home6} alt={''} width={340} height={227} className={styles.backgroundDestaque}/>
					<Image src={Home7} alt={''} width={179} height={229} className={styles.backgroundMedio}/>
					<Image src={Home8} alt={''} width={237} height={220} className={styles.backgroundEscuro}/>
				</div>
				<div>
					<Image src={Home9} alt={''} width={319} height={212} className={styles.backgroundEscuro}/>
					<Image src={Home10} alt={''} width={337} height={225} className={styles.backgroundFotos}/>
					<Image src={Home11} alt={''} width={340} height={227} className={styles.backgroundMedio}/>
					<Image src={Home12} alt={''} width={337} height={225} className={styles.backgroundFotos}/>
				</div>
			</section>
		</main>
	);
}