import { Swiper, SwiperSlide } from "swiper/react"
import { FaRegCheckCircle } from "react-icons/fa"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"

import { Link } from "react-router-dom"
import { useEffect } from "react"
import Footer from "../components/shared/Footer.jsx/Footer"

import LuxuryProjects from "../components/Home/LuxuryProjects/LuxuryProjects"
import BottomNavigation from "../components/shared/BottomNavigation"

import { useLocation } from "react-router-dom"
import FixedHeader from "../components/shared/FixedHeader"

const buttons = [
	"Apartment",
	"Villa",
	"Penthouse",
	"Townhouse",
	"Land Plots",
	"House",
]

const DubaiArea = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	const { pathname } = useLocation()
	return (
		<div>
			<FixedHeader link='/dubai-areas' icon='back' text='Back' share />

			<div className='px-4 pt-4 mb-20'>
				<span className='text-stone-500'>
					<small>
						<Link to='/'>Home</Link>/ Dubai Apartments For Sale{" "}
					</small>
				</span>
				<h1 className='heading pt-4'>DOWNTOWN DUBAI</h1>
				<div className='pb-4  underline'>
					<span>View Map</span>
				</div>
				{/* Slider */}
				<div style={{ margin: "0 -15px" }}>
					{/* <img className='w-full max-h-52 object-cover' src={house.photoUrl} alt={house.name}/> */}
					<Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
						<SwiperSlide>
							<Link to='/lightbox' state={{ previousPath: pathname }}>
								<img
									className='w-full h-96 object-cover'
									src='./images/location3.jpg'
									alt=''
								/>
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link to='/lightbox' state={{ previousPath: pathname }}>
								<img
									className='w-full h-96 object-cover'
									src='./images/location3.jpg'
									alt=''
								/>
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link to='/lightbox' state={{ previousPath: pathname }}>
								<img
									className='w-full h-96 object-cover'
									src='./images/location4.jpg'
									alt=''
								/>
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link to='/lightbox' state={{ previousPath: pathname }}>
								<img
									className='w-full h-96 object-cover'
									src='./images/location1.jpg'
									alt=''
								/>
							</Link>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className='py-4 '>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
					blanditiis perferendis, rerum delectus velit aspernatur ex corrupti
					necessitatibus, voluptas sunt, sapiente error! Dignissimos minima, ea
					eum nostrum quisquam et ratione, cupiditate possimus nesciunt, aut
					amet suscipit? Asperiores modi fuga consequuntur.
				</div>

				<div>
					<h1 className=' py-2 my-4 heading'>Nearby Locations</h1>
					<ul className='space-y-2'>
						<li>
							<span className='flex gap-2 items-center'>
								<FaRegCheckCircle />
								<span className='text-slate-700 font-bold'>5 Minutes</span>to
								Burj Khalifa Downtown
							</span>
						</li>
						<li>
							<span className='flex gap-2 items-center'>
								<FaRegCheckCircle />
								<span className='text-slate-700 font-bold'>10 Minutes</span>to
								Palm Jumeirah
							</span>
						</li>
						<li>
							<span className='flex gap-2 items-center'>
								<FaRegCheckCircle />
								<span className='text-slate-700 font-bold'>10 Minutes</span> to
								Burj Al Arab
							</span>
						</li>
						<li>
							<span className='flex gap-2 items-center'>
								<FaRegCheckCircle />
								<span className='text-slate-700 font-bold'>10 Minutes</span>to
								DXB Intl Airport
							</span>
						</li>
						<li>
							<span className='flex gap-2 items-center'>
								<FaRegCheckCircle />
								<span className='text-slate-700 font-bold'>30 Minutes</span> to
								Dubai Marina
							</span>
						</li>
					</ul>
				</div>

				<div className='my-8'>
					<h1 className='heading my-6'>Properties in Down Town Dubai</h1>
					<Swiper
						slidesPerView={"3"}
						spaceBetween={10}
						modules={[Pagination]}
						className='mySwiper'
					>
						{buttons.map((button, i) => (
							<SwiperSlide key={i}>
								<button
									key={i}
									className='px-4 h-12 w-full rounded-full border border-stone-300 hover:bg-stone-950 hover:text-slate-200 outline-none cursor-pointer flex items-center justify-center'
								>
									{button}
								</button>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div style={{ margin: "0 -15px" }}>
					<LuxuryProjects />
				</div>
			</div>

			<div className='-mt-8 '>
				<Footer />
			</div>
			<BottomNavigation />
		</div>
	)
}

export default DubaiArea
