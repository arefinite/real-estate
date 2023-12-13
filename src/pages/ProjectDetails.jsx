import { Swiper, SwiperSlide } from "swiper/react"
import { IoMdDownload } from "react-icons/io"
import { IoIosShareAlt } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"
import { FaRegCheckCircle } from "react-icons/fa"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"

import { Link } from "react-router-dom"
import { useEffect } from "react"
import LatestProjectsSlider from "../components/Home/LatestProjectsSlider"
import Footer from "../components/shared/Footer.jsx/Footer"
import RegisterInt from "../components/ProjectDetails/RegisterInt"

const buttons = [
	"Studio",
	"2 Bedroom",
	"3 Balcony",
	"1 Kitchen",
	"1 Living",
	"1 Dining",
]

const ProjectDetails = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div>
			<div className='flex justify-between items-center h-[7vh] px-2 pt-2  z-50 bg-white sticky border-b  top-0'>
				<Link to='/'>
					<span className='flex gap-2 items-center text-lg  '>
						<IoIosArrowBack /> <strong>Back</strong>
					</span>
				</Link>
				<span className='flex gap-5 items-center text-xl'>
					<span>
						<IoMdDownload style={{ fontSize: "2rem" }} />
					</span>
					<span>
						<IoIosShareAlt style={{ fontSize: "2rem" }} />
					</span>
				</span>
			</div>

		
			<div className='px-4 mt-4 mb-20'>
				<span className='text-stone-500'>
					<small>
						<Link to='/'>Home</Link>/ Dubai Apartments For Sale{" "}
					</small>
				</span>
				<h1 className='heading pt-4'>
					Bugatti Branded Ultra-Luxury Residences in Business Bay
				</h1>
				<div className='flex justify-between pb-4 pt-2 font-bold text-sm'>
					<span>Business Bay</span>
					<span className='text-stone-400 underline'>View Map</span>
				</div>
				{/* Slider */}
				<div style={{ margin: "0 -16px" }}>
					{/* <img className='w-full max-h-52 object-cover' src={house.photoUrl} alt={house.name}/> */}
					<Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
						<SwiperSlide>
							<Link to='/lightbox'>
								<img
									className='w-full h-96 object-cover'
									src='./images/location2.jpg'
									alt=''
								/>
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className='w-full h-96 object-cover'
								src='./images/location3.jpg'
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className='w-full h-96 object-cover'
								src='./images/location4.jpg'
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className='w-full h-96 object-cover'
								src='./images/location1.jpg'
								alt=''
							/>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className='py-4 space-y-2'>
					<p>Bedrooms: Studio 1,2 & 3</p>
					<p>Project Type: Apartments</p>
				</div>
				<div>
					<h1 className='heading'>Project Details</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
						unde eius voluptas quisquam iste nemo quos suscipit tempore quaerat
						placeat!
					</p>
				</div>
				<hr className='my-4' />
				<div>
					<h1 className='heading py-2 mt-2'>Amenities</h1>
					<ul className='space-y-2'>
						<li>Swimming Pool</li>
						<li>Concierge Service</li>
						<li>Gymnasium</li>
						<li>High-Speed Internet</li>
						<li>Jacuzzi</li>
						<li>Kids Club</li>
					</ul>
					<Link to='/amenities'>
						<span className='underline block pt-2'>See All Amenities</span>
					</Link>
				</div>
				<hr className='my-4' />
				<h1 className='heading py-2 mt-2'>Floor Plan:</h1>
				<div className='my-4'>
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
				<div>
					<img src='/images/floor.png' alt='' />
				</div>
				<button className='w-full bg-blue-500 text-white p-3'>
					Request Units Availability
				</button>
				<hr className='my-4 ' />
				<h1 className='heading py-2 mt-2'>Payment Plan</h1>
				<div className='flex justify-center flex-col space-y-5'>
					<div className='border p-4'>
						<span className='font-bold text-2xl pl-8 pr-2'>10%</span>
						<span>Booking</span>
					</div>
					<div className='border p-4'>
						<span className='font-bold text-2xl pl-8 pr-2'>40%</span>
						<span>On Construction</span>
					</div>

					<div className='border p-4'>
						<span className='font-bold text-2xl pl-8 pr-2'>50%</span>
						<span>Handover in Q4 2025</span>
					</div>
				</div>
				<Link to='/register-interest'>
					<button className='w-full bg-black text-white p-3 mt-4'>
						Register Interest
					</button>
				</Link>
				<div>
					<h1 className='heading py-2 my-4 '>Nearby Locations</h1>
					<ul className='space-y-2'>
						<li>
							<span className='flex gap-2 items-center'>
								<FaRegCheckCircle />
								<span className=' font-bold'>5 Minutes</span>to
								Burj Khalifa Downtown
							</span>
						</li>
						<li>
							<span className='flex gap-2 items-center'>
								<FaRegCheckCircle />
								<span className=' font-bold'>10 Minutes</span>to
								Palm Jumeirah
							</span>
						</li>
						<li>
							<span className='flex gap-2 items-center'>
								<FaRegCheckCircle />
								<span className=' font-bold'>10 Minutes</span> to
								Burj Al Arab
							</span>
						</li>
						<li>
							<span className='flex gap-2 items-center'>
								<FaRegCheckCircle />
								<span className='font-bold'>10 Minutes</span>to
								DXB Intl Airport
							</span>
						</li>
						<li>
							<span className='flex gap-2 items-center'>
								<FaRegCheckCircle />
								<span className=' font-bold'>30 Minutes</span> to
								Dubai Marina
							</span>
						</li>
					</ul>
				</div>
				<hr className='my-4' />
				<div>
					<div>
						<h1 className='heading py-2 my-4'>About Location Business Bay</h1>
						<div style={{ margin: "0 -16px" }}>
							<img src='./images/img1.jpg' alt='' />
						</div>

						<p className='mt-4'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
							minima, vel fuga alias deserunt voluptates voluptatum laboriosam
							fugit odit blanditiis?
						</p>
					</div>
				</div>
				<hr className='my-4' />
				<div>
					<h1 className=' py-2 my-4 heading'>Developed By Omniyat</h1>
					<img src='' alt='' />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. In odio
						debitis iure enim at laboriosam maxime ipsum adipisci dignissimos
						voluptatem?
					</p>
					<img src='/images/single-dev.png' className='my-4' alt='' />
				</div>
				<div>
					<h1 className=' py-2 my-4 heading'>Similar Properties</h1>
					<div style={{ margin: "0 -16px" }}>
						<LatestProjectsSlider />
					</div>
				</div>
			</div>

			<div className='-mt-8 '>
				<Footer />
			</div>
			<RegisterInt />
		</div>
	)
}

export default ProjectDetails
