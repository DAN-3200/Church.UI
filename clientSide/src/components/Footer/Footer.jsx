import { RiYoutubeLine } from 'react-icons/ri'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import './Footer.scss'

export default function Footer() {
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
						<p>
							R. Marilândia, 17 - Pampalona <br /> Feira de Santana - BA,
							44020-000
						</p>
					</div>
				</div>
				<hr />
				<div className='bottom'>
					<span>© Copyright 2024 IBAPAM - Feira de Santana, BA, Brasil</span>
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
