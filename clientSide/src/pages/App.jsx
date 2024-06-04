import NavBar from '../components/NavBar/NavBar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import MainView from '../components/MainView/MainView.jsx'
import AboutUs from '../components/AboutUs/AboutUs.jsx'
import Panel from '../components/Panel/Panel.jsx'
import VerseDay from '../components/VerseDay/VerseDay.jsx'

import './App.scss'

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
			<Footer />
		</>
	)
}
