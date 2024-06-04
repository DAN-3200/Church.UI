import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './MainView.scss'

export default function MainView() {
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
