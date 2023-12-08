import { FaXmark } from "react-icons/fa6"
import { IoMdDownload } from "react-icons/io"
import { IoIosShareAlt } from "react-icons/io"
import { Link } from "react-router-dom"

const LightBox = () => {
	return (
		<div>
			<div className='flex justify-center bg--400 '>
				<div className='relative'>
					<div className='flex justify-around gap-6 '>
						<button className='absolute left-[20px] top-6'>
							<Link to='/project-details'>
								<FaXmark />
							</Link>
						</button>
						<h1 className='p-4 text-2xl font-bold pl-24 invisible'></h1>
						<div className='flex items-center justify-end gap-6 ml-8'>
							<span>
								<IoMdDownload style={{ fontSize: "2rem" }} />
							</span>
							<span>
								<IoIosShareAlt style={{ fontSize: "2rem" }} />
							</span>
						</div>
					</div>
				</div>
			</div>
			{/* ----- */}
			<div className="space-y-4">
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
