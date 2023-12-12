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
						{/* <div className='flex gap-4'>
							<img src='./images/omniyat-logo.png' alt='' className='w-1/3' />
							<img src='./images/omniyat-logo.png' alt='' className='w-1/3' />
						</div> */}
						<div className='flex gap-2 '>
							<div className='w-1/2 p-4 border h-24 flex items-center'>
								<Link to='/dubai-developer'>
									<img src='./images/omniyat-logo.png' alt='logo' />
								</Link>
							</div>
							<div className='w-1/2 p-4 border h-24 flex items-center'>
								<Link to='/dubai-developer'>
									<img src='./images/emaar-logo.png' alt='logo' />
								</Link>
							</div>
						</div>
						<div className='flex gap-2 mt-4'>
							<div className='w-1/2 p-4 border  h-24 flex items-center'>
								<Link to='/dubai-developer'>
									<img src='./images/damac-logo.png' alt='logo' />
								</Link>
							</div>
							<div className='w-1/2 p-4 border  h-24 flex items-center'>
								<Link to='/dubai-developer'>
									<img src='./images/meraas-logo.png' alt='logo' />
								</Link>
							</div>
						</div>
						<div className='flex gap-2 '>
							<div className='w-1/2 p-4 border h-24 flex items-center'>
								<Link to='/dubai-developer'>
									<img src='./images/omniyat-logo.png' alt='logo' />
								</Link>
							</div>
							<div className='w-1/2 p-4 border h-24 flex items-center'>
								<Link to='/dubai-developer'>
									<img src='./images/emaar-logo.png' alt='logo' />
								</Link>
							</div>
						</div>
						<div className='flex gap-2 mt-4'>
							<div className='w-1/2 p-4 border  h-24 flex items-center'>
								<Link to='/dubai-developer'>
									<img src='./images/damac-logo.png' alt='logo' />
								</Link>
							</div>
							<div className='w-1/2 p-4 border  h-24 flex items-center'>
								<Link to='/dubai-developer'>
									<img src='./images/meraas-logo.png' alt='logo' />
								</Link>
							</div>
						</div>

						{/* <Link to='/dubai-developer'>
							<img src='./images/dev.png' className='w-full h-72' alt='' />
							<img src='./images/dev.png' className='w-full h-72' alt='' />
							<img src='./images/dev.png' className='w-full h-72' alt='' />
							<img src='./images/dev.png' className='w-full h-72' alt='' />
						</Link> */}
					</div>
				</div>
			</div>
			<BottomNavigation />
		</div>
	)
}

export default DubaiDevelopers
