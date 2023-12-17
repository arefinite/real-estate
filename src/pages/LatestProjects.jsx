import { Link } from "react-router-dom"

import BottomNavigation from "../components/shared/BottomNavigation"
import TopSearchBar from "../components/Home/TopSearchBar"
import LuxuryProjects from "../components/Home/LuxuryProjects/LuxuryProjects"
import Footer from "../components/shared/Footer.jsx/Footer"

const LatestProjects = () => {
	return (
		<div>
			<div className='pb-2'>
				<TopSearchBar />
				<div className='px-6 my-2 '>
					<span>
						<small>
							<Link to='/'>Home</Link>/ Latest Projects
						</small>
					</span>
					<div>
						<h1 className='heading py-2 my-2'>
							Latest Projects
						</h1>

						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Repudiandae ducimus id fuga maiores tempora expedita cupiditate.
						</p>
					</div>
				</div>

				<div className='mt-8'>
					<LuxuryProjects />
				</div>
			</div>
			<Footer />
			<BottomNavigation />
		</div>
	)
}

export default LatestProjects
