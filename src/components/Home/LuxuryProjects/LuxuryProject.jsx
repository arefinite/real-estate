import { Swiper, SwiperSlide } from "swiper/react"
import { useNavigate } from "react-router-dom"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"

const LuxuryProject = ({ house }) => {
	const navigate = useNavigate()
	return (
		<div className='border-b border-stone-300'>
			<div>
				<Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
					<SwiperSlide onClick={() => navigate("/project-details")}>
						<img
							className='w-full h-72 object-cover'
							src='./images/location2.jpg'
							alt={house.name}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className='w-full h-72 object-cover'
							src='./images/location3.jpg'
							alt={house.name}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className='w-full h-72 object-cover'
							src='./images/location1.jpg'
							alt={house.name}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className='w-full h-72 object-cover'
							src='./images/location4.jpg'
							alt={house.name}
						/>
					</SwiperSlide>
				</Swiper>
			</div>
			<div className='p-4 px-4'>
				<h2 className='heading'>{house.name}</h2>
				<p className='text-stone-500 tracking-wide pb-3'>{house.location}</p>

				<p>
					<span className='text-sm pr-2'>From</span>
					<span className='font-bold'>AED {house.price.toLocaleString()}</span>
				</p>
			</div>
		</div>
	)
}
export default LuxuryProject
