import { FaXmark } from "react-icons/fa6"
import { IoMdDownload } from "react-icons/io"
import { IoIosShareAlt } from "react-icons/io"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const LightBox = () => {
	const { state } = useLocation()
	const prevPath = state.previousPath
	console.log(prevPath)
	return (
		<div>
			{/* <div className='flex justify-between items-center h-[8vh] px-4 pt-2  z-50 bg-white sticky top-0'>
				<Link
					to={
						prevPath === "/project-details"
							? "/project-details"
							: prevPath === "/dubai-area"
							? "/dubai-area"
							: null
					}
				>
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
			</div> */}
			<div className='flex justify-center sticky top-0 bg-white border border-slate-200 z-[50]'>
				<div>
					<div className='flex justify-between'>
						<button className='absolute left-4 top-6'>
							<Link
								to={
									prevPath === "/project-details"
										? "/project-details"
										: prevPath === "/dubai-area"
										? "/dubai-area"
										: null
								}
							>
								<span className='flex gap-2 items-center text-lg  '>
									<FaXmark /> <strong></strong>
								</span>
							</Link>
						</button>
						<h1 className='p-4 text-2xl font-bold pl-20 invisible'>Text</h1>
						<div className='flex gap-4 items-center absolute right-4 top-4 ml-8 '>
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
