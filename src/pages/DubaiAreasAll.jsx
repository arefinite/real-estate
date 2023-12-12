import { Swiper, SwiperSlide } from "swiper/react"
import { IoIosShareAlt } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"

import { Link } from "react-router-dom"
import { useEffect } from "react"

import Footer from "../components/shared/Footer.jsx/Footer"

import { CiSearch } from "react-icons/ci"
import BottomNavigation from './../components/shared/BottomNavigation';



const DubaiAreasAll = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div>
			<div className='flex justify-between items-center h-[7vh] px-2 pt-2  z-50 bg-white sticky top-0'>
				<Link to='/'>
					<span className='flex gap-2 items-center text-lg  '>
						<IoIosArrowBack /> <strong>Back</strong>
					</span>
				</Link>
				<span className='flex gap-5 items-center text-xl'>
				
					<span>
						<IoIosShareAlt style={{ fontSize: "2rem" }} />
					</span>
				</span>
			</div>

			<hr className='w-full my-2' />
			<div className='px-4 mb-20'>
				<span className='text-stone-500'>
					<small>
						<Link to='/'>Home</Link>/ Dubai Apartments For Sale{" "}
					</small>
				</span>
				<h1 className='heading pt-4'>DUBAI AREAS</h1>
				<div className='flex justify-between pb-0 pt-2'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
						provident aliquid iure impedit voluptates culpa possimus, itaque
						odit quod laborum.
					</p>
				</div>
				<div className='my-8'>
					<div className='flex items-center min-w-0 flex-grow overflow-hidden shadow-lg border border-stone-100 p-2 rounded-full'>
						<CiSearch className='text-3xl font-bold ml-1' />
						<input
							className='ml-1 items-center outline-none bg-white text-stone-400 flex-grow min-w-0'
							type='search'
							placeholder='Search Area...'
						/>
					</div>
				</div>
				{/* Slider */}
				<div style={{ margin: "0 -16px" }}>
					{/* <img className='w-full max-h-52 object-cover' src={house.photoUrl} alt={house.name}/> */}
					<Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
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
					<p>DOWNTOWN DUBAI</p>
					<p className='underline'>View Map</p>
					<Link to='/dubai-area'>
						<button className='w-full bg-black text-white p-3 mt-4'>
							Explore More
						</button>
					</Link>
				</div>
				{/* 22222222222222222222222222222222222222 */}
				{/* Slider */}
				<div style={{ margin: "0 -16px" }}>
					{/* <img className='w-full max-h-52 object-cover' src={house.photoUrl} alt={house.name}/> */}
					<Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
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
								src='./images/location3.jpg'
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className='w-full h-96 object-cover'
								src='./images/location2.jpg'
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
					<p>DUBAI MARINA</p>
					<p className='underline'>View Map</p>
					<Link to='/dubai-area'>
						<button className='w-full bg-black text-white p-3 mt-4'>
							Explore More
						</button>
					</Link>
				</div>

				{/* 33333333333333333333333333333333333333333333333333333333 */}
				{/* Slider */}
				<div style={{ margin: "0 -16px" }}>
					{/* <img className='w-full max-h-52 object-cover' src={house.photoUrl} alt={house.name}/> */}
					<Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
						<SwiperSlide>
							<img
								className='w-full h-96 object-cover'
								src='./images/location2.jpg'
								alt=''
							/>
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
					<p>DOWNTOWN DUBAI</p>
					<p className='underline'>View Map</p>
					<Link to='/dubai-area'>
						<button className='w-full bg-black text-white p-3 mt-4'>
							Explore More
						</button>
					</Link>
				</div>
				{/* 44444444444444444444444444444444444444444444444444444444444444444444444444444 */}
				{/* Slider */}
				<div style={{ margin: "0 -16px" }}>
					{/* <img className='w-full max-h-52 object-cover' src={house.photoUrl} alt={house.name}/> */}
					<Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
						<SwiperSlide>
							<img
								className='w-full h-96 object-cover'
								src='./images/location1.jpg'
								alt=''
							/>
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
								src='./images/location3.jpg'
								alt=''
							/>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className='py-4 space-y-2'>
					<p>DOWNTOWN DUBAI</p>
					<p className='underline'>View Map</p>
					<Link to='/dubai-area'>
						<button className='w-full bg-black text-white p-3 mt-4'>
							Explore More
						</button>
					</Link>
				</div>
			</div>

			<div className='-mt-8 '>
				<Footer />
				<BottomNavigation />
			</div>
		</div>
	)
}

export default DubaiAreasAll
