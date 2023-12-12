import { FaXmark } from "react-icons/fa6"
import { IoMdDownload } from "react-icons/io"
import { IoIosShareAlt } from "react-icons/io"
import { Link } from "react-router-dom"

const LightBox = () => {
	return (
		<div>
			<div className='flex justify-between items-center h-[8vh] px-4 pt-2  z-50 bg-white sticky top-0'>
				<Link to='/project-details'>
					<span className='flex gap-2 items-center text-lg  '>
						<FaXmark /> <strong></strong>
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
			{/* ----- */}
			<div className='space-y-4'>
				<img
					className='w-full h-96 object-cover'
					src='./images/location1.jpg'
					alt=''
				/>

				<img
					className='w-full h-96 object-cover'
					src='./images/location2.jpg'
					alt=''
				/>

				<img
					className='w-full h-96 object-cover'
					src='./images/location3.jpg'
					alt=''
				/>

				<img
					className='w-full h-96 object-cover'
					src='./images/location4.jpg'
					alt=''
				/>
			</div>
		</div>
	)
}

export default LightBox
