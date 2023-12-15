import { Link } from "react-router-dom"
import BottomNavigation from "./../components/shared/BottomNavigation"
import aboutImg from "/images/about.png"
import DubaiAreas from "../components/Home/DubaiAreas"
import Footer from "../components/shared/Footer.jsx/Footer"
import FixedHeader from "../components/shared/FixedHeader"

const BlogDetails = () => {
	return (
		<div>
			<FixedHeader link='/blogs' icon='back' text='Back' share />
			<div className='box-container mb-20'>
				<div style={{ margin: "-20px -15px" }}>
					<img src={aboutImg} alt='' />
				</div>
				<div className='pt-10 pb-4'>
					<span className='text-stone-500 '>
						<small>
							<Link to='/'>Home</Link>/{" "}
							<Link to='/blogs'>Dubai Apartments For Sale</Link> / Bughatti
							Residences
						</small>
					</span>
				</div>
				<h2 className='heading my-4'>
					Ultra-Luxury Waterfront Residences Direct Burj Khalifa Views
				</h2>
				<p>11 June, 2023</p>
				<div className='mt-4'>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
						rerum molestias soluta voluptas assumenda totam.Lorem ipsum dolor
						sit amet consectetur, adipisicing elit. Temporibus rerum molestias
						soluta voluptas assumenda totam.
					</p>
					<p className='mt-4'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
						rerum molestias soluta voluptas assumenda totam.Lorem ipsum dolor
						sit amet consectetur, adipisicing elit. Temporibus rerum molestias
						soluta voluptas assumenda totam.
					</p>
				</div>
				<div className='mt-4'>
					<img
						className='w-full h-96 object-cover'
						src='./images/location3.jpg'
						alt=''
					/>
				</div>
				<div className='py-4 space-y-2'>
					<Link to='/dubai-area'>
						<button className='w-full bg-black text-white p-3 mt-4'>
							Contact Us
						</button>
					</Link>
				</div>
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, eum
						necessitatibus quod expedita veniam eligendi commodi ad officiis
						sequi nobis.
					</p>
				</div>
				<div className='mt-4'>
					<img
						className='w-full h-96 object-cover'
						src='./images/location4.jpg'
						alt=''
					/>
				</div>
				<div className='mt-4'>
					<img
						className='w-full h-96 object-cover'
						src='./images/location3.jpg'
						alt=''
					/>
				</div>
				<div className='mt-4'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem
						neque exercitationem consequuntur delectus dignissimos tempore?
						Iusto natus quos officia!
					</p>
				</div>
				<div>
					<h1 className='heading my-6'>Similar Posts</h1>
				</div>

				<DubaiAreas px={0} />
			</div>
			<div className='-my-12'>
				<Footer />
			</div>
			<BottomNavigation />
		</div>
	)
}

export default BlogDetails
