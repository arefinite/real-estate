import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"

import { FaXmark } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Navigation = () => {
	const [show1, setShow1] = useState(false)
	const [show2, setShow2] = useState(false)
	const [show3, setShow3] = useState(false)
	return (
		<nav>
			<div className='flex justify-center '>
				<button className='absolute left-10 top-6'>
					<Link to='/'>
						<FaXmark />
					</Link>
				</button>
				<h1 className='p-4 heading '>Menu</h1>
			</div>
			<hr className='w-screen' />
			<div className='px-10 space-y-2 text-stone-700'>
				<h1 className='mt-12 text-base'>
					<Link to='/project-details'>
						<span>Latest Projects</span>
					</Link>
				</h1>

				<h1 className='text-base'>
					<Link to='/project-details'>
						<span>Luxury Projects</span>
					</Link>
				</h1>

				<h1 className='nav-item' onClick={() => setShow1(prev => !prev)}>
					<span className='flex items-center gap-2'>
						Dubai Projects For Sale{" "}
						{show1 ? (
							<IoIosArrowUp style={{ color: "#808080" }} />
						) : (
							<IoIosArrowDown style={{ color: "#808080" }} />
						)}
					</span>
				</h1>
				{show1 && (
					<div className='dropdown pb-3'>
						<ul className='text-base leading-10'>
							<Link to='/project-details'>
								<li>Luxury Projects</li>
							</Link>
							<Link to='/project-details'>
								<li>Apartments</li>
							</Link>
							<Link to='/project-details'>
								<li>Vila</li>
							</Link>
							<Link to='/project-details'>
								<li>Penthouse</li>
							</Link>
							<Link to='/project-details'>
								<li>Townhouse</li>
							</Link>
							<Link to='/project-details'>
								<li>Land Plots</li>
							</Link>
						</ul>
					</div>
				)}
				<h1 className='nav-item' onClick={() => setShow2(prev => !prev)}>
					<span className='flex items-center gap-2'>
						Dubai Areas{" "}
						{show2 ? (
							<IoIosArrowUp style={{ color: "#808080" }} />
						) : (
							<IoIosArrowDown style={{ color: "#808080" }} />
						)}
					</span>
				</h1>
				{show2 && (
					<div className='dropdown'>
						<ul className='text-base leading-10 pb-3'>
							<Link to='/dubai-area'>
								<li>Palm Jumeirah</li>
							</Link>
							<Link to='/dubai-area'>
								<li>Downtown Dubai</li>
							</Link>
							<Link to='/dubai-area'>
								<li>Dubai Hills Estate</li>
							</Link>
							<Link to='/dubai-area'>
								<li>Dubai Creek Harbour</li>
							</Link>
							<Link to='/dubai-area'>
								<li>Business Bay</li>
							</Link>
							<Link to='/dubai-area'>
								<li>View All</li>
							</Link>
						</ul>
					</div>
				)}

				<h1 className='nav-item' onClick={() => setShow3(prev => !prev)}>
					<span className='flex items-center gap-2'>
						Explore{" "}
						{show3 ? (
							<IoIosArrowUp style={{ color: "#808080" }} />
						) : (
							<IoIosArrowDown style={{ color: "#808080" }} />
						)}
					</span>
				</h1>
				{show3 && (
					<div className='dropdown'>
						<ul className='text-base leading-10 pb-3'>
							<li>Why Dubai</li>
							<li>Invest in Dubai Real Estate</li>
							<li>Dubai Fact Numbers</li>
							<li>GUide To Off Plan</li>
							<li>Why Invest In Off Plan</li>
							<li>Guide on Renting</li>
							<li>Guide to Selling</li>
						</ul>
					</div>
				)}

				<h1 className='nav-item'>
					<Link to='/dubai-developers'>
						<span className='flex items-center gap-2'>Dubai Developers</span>
					</Link>
				</h1>

				<h1 className=' nav-item'>
					<Link to='/blogs'>
						<span className='flex items-center gap-2'>Blogs</span>
					</Link>
				</h1>

				<h1 className=' nav-item'>
					<Link to='/sell'>
						<span className='flex items-center gap-2'>Sell Your Property</span>
					</Link>
				</h1>

				<h1 className=' nav-item'>
					<Link to='/about'>
						<span className='flex items-center gap-2'>About Us</span>
					</Link>
				</h1>

				<h1 className=' nav-item'>
					<Link to='/contact'>
						<span className='flex items-center gap-2'>Contact Us</span>
					</Link>
				</h1>
			</div>
		</nav>
	)
}

export default Navigation
