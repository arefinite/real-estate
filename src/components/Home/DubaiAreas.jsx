import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper/modules"
import { Link } from "react-router-dom"
const locations = [
	{
		url: "./images/location1.jpg",
		name: "Palm Jumeirah",
	},
	{
		url: "./images/location2.jpg",
		name: "Downtown Dubai",
	},
	{
		url: "./images/location3.jpg",
		name: "Dubai Hills Estate",
	},
	{
		url: "./images/location4.jpg",
		name: "Dubai Creek Harbour",
	},
]

const DubaiAreas = () => {
	return (
		<div className='px-4 h-auto flex'>
			<Swiper
				slidesPerView={"1.5"}
				spaceBetween={0}
				modules={[Pagination]}
				className='mySwiper'
			>
				{locations.map((location, i) => (
					<SwiperSlide key={i} className='pr-2'>
						<Link to='/dubai-areas'>
							<div className='border border-stone-400'>
								<img
									src={location.url}
									className='w-full h-[150px] object-cover'
									alt=''
								/>
								<p className='mt-2 py-3 boxShadow font-bold  pl-2'>
									{location.name}
								</p>
							</div>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default DubaiAreas
