import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import houseData from '../../data/HouseData.json'

const LatestProjectsSlider = () => {
  return (
		<div className='border-b'>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className='mySwiper'
			>
				{houseData.map((location, i) => (
					<SwiperSlide key={i}>
						<div key={i} className=' w-h-full flex flex-col  pb-4'>
							<div className='flex-grow'>
								<img
									src={location.photoUrl}
									className='w-full h-full object-cover'
									alt=''
								/>
							</div>
							<div className='py-4  px-4 '>
								<p className='font-bold'>{location.name}</p>
								<p className="text-stone-400">{location.location}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
export default LatestProjectsSlider
