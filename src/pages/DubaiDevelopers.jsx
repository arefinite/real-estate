import { Link } from "react-router-dom"

import BottomNavigation from "../components/shared/BottomNavigation"
import TopSearchBar from "../components/Home/TopSearchBar"

const DubaiDevelopers = () => {
	return (
		<div>
			<TopSearchBar />
			<div className='px-6 my-2 pb-20'>
				<span>
					<small>
						<Link to='/'>Home</Link>/ Dubai Apartments For Sale
					</small>
				</span>
				<div>
					<h1 className='text-2xl py-2 my-2 font-bold'>Dubai Developers</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
						dolorum esse libero quidem tempore accusantium autem est ullam nemo
						porro!
					</p>
					<div className='my-6'>
						<Link to='/dubai-developer'>
							<img src='./images/dev.png' className='w-full h-72' alt='' />
							<img src='./images/dev.png' className='w-full h-72' alt='' />
							<img src='./images/dev.png' className='w-full h-72' alt='' />
							<img src='./images/dev.png' className='w-full h-72' alt='' />
						</Link>
					</div>
				</div>
			</div>
			<BottomNavigation />
		</div>
	)
}

export default DubaiDevelopers
