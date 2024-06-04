import { IoMenu } from 'react-icons/io5'
import './NavBar.scss'

export default function NavBar() {
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
