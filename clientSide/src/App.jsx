import './App.scss'
import { IoMenu } from 'react-icons/io5'
import {
	FaArrowLeft,
	FaArrowRight,
	FaFacebookF,
	FaInstagram,
} from 'react-icons/fa'
import { RiYoutubeLine } from 'react-icons/ri'

export default function App() {
	const title = document.getElementsByTagName('title')[0]
	title.innerHTML = 'Ibapam'

	return (
		<>
			<NavBar />
			<MainView />
			<VerseDay />
			<AboutUs />
			<Panel />
			<VerseDay />
			<Footer />
		</>
	)
}

function NavBar() {
	return (
		<>
			<div className='navBar'>
				<span>IBAPAM</span>
				<div className='fieldNav'>
					<button>Início</button>
					<button>Sobre nós</button>
					<button>Ministério</button>
					<button>EBD</button>
					<button>Blog</button>
					<a href='#op'>
						<button>Contato</button>
					</a>
				</div>
				<button id='menuButton'>
					<IoMenu />
				</button>
			</div>
		</>
	)
}

function MainView() {
	return (
		<div className='mainView'>
			<div className='overBanner'>
				<h1>Igreja Batista da Pampalona</h1>
				<span>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</span>
				<button className='saibaMais'>Saiba mais</button>
				<div className='btnCarousel'>
					<button className='backCarousel'>
						<FaArrowLeft />
					</button>
					<button className='nextCarousel'>
						<FaArrowRight />
					</button>
				</div>
			</div>
			<div className='banner'>{/* <img src="" alt="" /> */}</div>
		</div>
	)
}

function VerseDay() {
	return (
		<>
			<div className='verseDay'>
				<div className='card'></div>
				<div className='overCard'>
					<p>
						Ainda que eu andasse pelo vale da sombra da morte, não temeria mal
						algum, porque tu estás comigo.
					</p>
					<span>Salmos 23:4 NVI</span>
				</div>
			</div>
		</>
	)
}

function AboutUs() {
	return (
		<>
			<div className='aboutUs'>
				<span className='title'>Sobre nós</span>
				<div className='cardBoard A'>
					<span>História da Igreja</span>
				</div>
				<div className='cardBoard B'>
					<span>Líderes e Equipe</span>
				</div>
			</div>
		</>
	)
}

function Panel() {
	return (
		<div className='panel'>
			<span className='title'>Destaque</span>
			<div className='card A'>
				<span>Same Text</span>
			</div>
			<div className='card B'>
				<span>Same Text</span>
			</div>
			<div className='card C'>
				<p>Ver mais</p>
			</div>
			<div className='card D'>
				<span>Same Text</span>
			</div>
		</div>
	)
}

function Footer() {
	const Banner = () => {
		return (
			<>
				<div className='imgFooter' id='op'></div>
				<div className='overImg'></div>
			</>
		)
	}

	const TrueFooter = () => {
		return (
			<div className='trueFooter'>
				<div className='top'>
					<div className='rigth'>
						<span>IBAPAM</span>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</div>
					<div>
						<span>Sobre nós</span>
						<p>Nossos guias</p>
						<p>Blog</p>
						<p>Contate-nos</p>
					</div>
				</div>
				<hr />
				<div className='bottom'>
					<span>© Copyright 2024 IBAPAM - Feira de Santana, BA, Brazil</span>
					<button>
						<RiYoutubeLine />
					</button>
					<button>
						<FaFacebookF />
					</button>
					<button>
						<FaInstagram />
					</button>
				</div>
			</div>
		)
	}

	return (
		<>
			<div className='footer'>
				<Banner />
				<TrueFooter />
			</div>
		</>
	)
}
