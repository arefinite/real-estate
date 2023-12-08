import { Link } from "react-router-dom"

import BottomNavigation from "../components/shared/BottomNavigation"
import TopSearchBar from "../components/Home/TopSearchBar"
import ScrollProjects from "../components/Home/ScrollProjects"
import LuxuryProjects from "../components/Home/LuxuryProjects/LuxuryProjects"
import Footer from "../components/shared/Footer.jsx/Footer"

const DubaiDeveloper = () => {
	return (
		<div>
			<div className='pb-2'>
				<TopSearchBar />
				<div className='px-6 my-2 '>
					<span>
						<small>
							<Link to='/'>Home</Link>/ Dubai Apartments For Sale
						</small>
					</span>
					<div>
						<h1 className='text-2xl py-2 my-2 font-bold'>Dubai Developers</h1>
						<img src='/public/images/single-dev.png' className='py-4' alt='' />
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Repudiandae ducimus id fuga maiores tempora expedita cupiditate
							autem incidunt laudantium harum. Repudiandae rem debitis incidunt
							laudantium fuga, doloremque similique commodi ea, totam,
							architecto alias vel animi cum quae expedita inventore eaque.
						</p>
					</div>
					<Link to='/register-interest'>
						<button className='w-full bg-black text-white p-3 mt-4'>
							Register Interest
						</button>
					</Link>
				</div>
				<div className='my-4'>
					<ScrollProjects />
				</div>
				<div>
					<LuxuryProjects />
				</div>
			</div>
			<Footer />
			<BottomNavigation />
		</div>
	)
}

export default DubaiDeveloper
