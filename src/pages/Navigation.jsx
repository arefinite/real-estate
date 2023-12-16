import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"

import { Link } from "react-router-dom"
import SecondaryHeader from "../components/shared/SecondaryHeader"

const Navigation = () => {
	const [show1, setShow1] = useState(false)
	const [show2, setShow2] = useState(false)
	const [show3, setShow3] = useState(false)
	return (
		<nav>
			<SecondaryHeader link='/' icon='delete' name='Menu' />

			<div className='px-6 space-y-2 text-stone-700'>
				<h1 className='mt-12 nav-item'>
					<Link to='/apartments'>
						<span>Latest Projects</span>
					</Link>
				</h1>

				<h1 className='nav-item'>
					<Link to='/apartments'>
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
							<Link to='/apartments'>
								<li>Luxury Projects</li>
							</Link>
							<Link to='/apartments'>
								<li>Apartments</li>
							</Link>
							<Link to='/apartments'>
								<li>Vila</li>
							</Link>
							<Link to='/apartments'>
								<li>Penthouse</li>
							</Link>
							<Link to='/apartments'>
								<li>Townhouse</li>
							</Link>
							<Link to='/apartments'>
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
							<Link to='/dubai-areas'>
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
							<Link to='/explore'>
								<li>Why Dubai</li>
							</Link>
							<Link to='/explore'>
								<li>Invest in Dubai Real Estate</li>
							</Link>
							<Link to='/explore'>
								<li>Dubai Fact Numbers</li>
							</Link>
							<Link to='/explore'>
								<li>GUide To Off Plan</li>
							</Link>
							<Link to='/explore'>
								<li>Why Invest In Off Plan</li>
							</Link>
							<Link to='/explore'>
								<li>Guide on Renting</li>
							</Link>
							<Link to='/explore'>
								<li>Guide to Selling</li>
							</Link>
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
