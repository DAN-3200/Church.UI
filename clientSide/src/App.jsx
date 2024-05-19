import './App.scss'
import { IoMenu } from 'react-icons/io5'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function App() {
	const title = document.getElementsByTagName('title')[0]
	title.innerHTML = 'Ibapam'

	return (
		<>
			<MainView />
			<AboutUs />
			<Carousel />
			<Footer />
		</>
	)
}

function MainView() {
	return (
		<div className='mainView'>
			<div className='navBar'>
				<span>Ibapam</span>
				<div className='fieldNav'>
					<button>Home</button>
					<button>About us</button>
					<button>Blog</button>
					<a href='#op'>
						<button>Contact</button>
					</a>
				</div>
				<button id='menuButton'>
					<IoMenu />
				</button>
			</div>
			<div className='overBanner'>
				<h1>Igreja Batista da Pampalona</h1>
				<span>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</span>
				<button className='saibaMais'>know more</button>
				<div className='btnCarousel'>
					<button className='backCarousel'>
						<FaArrowLeft />
					</button>
					<button className='nextCarousel'>
						<FaArrowRight />
					</button>
				</div>
			</div>
			<div className='banner'>
				{/* <img src='https://cdn.wallpapersafari.com/20/71/gecao0.jpg' alt='' /> */}
			</div>
		</div>
	)
}

function AboutUs() {
	return (
		<>
			<div className='aboutUs'>
				<div className='banner'></div>
				<div className='overBanner'></div>
				<div className='textUs'></div>
				<h1 className='wordEffect'></h1>
			</div>
		</>
	)
}

function Carousel() {
	return <div className='carousel'></div>
}

function Footer() {
	return (
		<>
			<div className='footer'>
				<div className='imgFooter' id='op'></div>
				<div className='overImg'></div>
				<div className='trueFooter'></div>
			</div>
		</>
	)
}
