import { Link } from "react-router-dom"
import BottomNavigation from "./../components/shared/BottomNavigation"
import { IoIosArrowBack } from "react-icons/io"

import { IoIosShareAlt } from "react-icons/io"
import aboutImg from '/images/about.png'

const About = () => {
	return (
		<div>
			<div className='flex justify-center sticky top-0 bg-white border border-slate-200'>
				<div className=''>
					<div className='flex justify-between'>
						<button className='absolute left-2 top-6'>
							<Link to='/'>
								<div className='flex items-center gap-1'>
									<IoIosArrowBack className='text-2xl' />
									<span>Back</span>
								</div>
							</Link>
						</button>
						<h1 className='p-4 text-2xl font-bold pl-20 invisible'>About</h1>
						<div className='flex items-center absolute right-4 top-4 ml-8 '>
							<span>
								<IoIosShareAlt style={{ fontSize: "2rem" }} />
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className='box-container mb-20'>
				<div style={{ margin: "-20px -16px" }}>
					<img src={aboutImg} alt='' />
				</div>
				<div className="pt-10 pb-4">
					<span className='text-stone-500 '>
						<small>
							<Link to='/'>Home</Link>/ About Us
						</small>
					</span>
				</div>
				<h2 className='heading my-4'>About Us</h2>
				<div>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
					rerum molestias soluta voluptas assumenda totam.
				</div>
				<h2 className='heading my-4'>About Us</h2>
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
						rerum molestias soluta voluptas assumenda totam.
					</p>
					<p className='mt-4'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
						rerum molestias soluta voluptas assumenda totam.
					</p>
				</div>
			</div>
			<BottomNavigation />
		</div>
	)
}

export default About
