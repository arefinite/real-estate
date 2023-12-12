import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
const buttons = [
	"Apartment",
	"Villa",
	"Penthouse",
	"Townhouse",
	"House",
]
const ScrollProjects = () => {
	return (
		<div className='px-4 pb-8 pt-2'>
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
	)
}

export default ScrollProjects
