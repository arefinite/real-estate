import { Link } from "react-router-dom"
import BottomNavigation from "./../components/shared/BottomNavigation"
import aboutImg from '/images/about.png'
import FixedHeader from "../components/shared/FixedHeader"

const About = () => {
	return (
		<div>
			<FixedHeader link='/' icon='back' text='Back'  share />
			<div className='box-container mb-20'>
				<div style={{ margin: "-20px -15px" }}>
					<img src={aboutImg} alt='' />
				</div>
				<div className='pt-10 pb-4'>
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
