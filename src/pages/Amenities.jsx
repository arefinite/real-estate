import { FaXmark } from "react-icons/fa6"
import { IoMdDownload } from "react-icons/io"
import { IoIosShareAlt } from "react-icons/io"
import { Link } from "react-router-dom"

const Amenities = () => {
	return (
		<div>
			<div className='flex justify-center bg--400 border border-slate-200'>
				<div className='relative'>
					<div className='flex justify-around gap-6 '>
						<button className='absolute left-[20px] top-6'>
							<Link to='/project-details'>
								<FaXmark />
							</Link>
						</button>
						<h1 className='p-4 text-2xl font-bold pl-20 invisible'>Amenities</h1>
						<div className='flex items-center justify-end gap-6 ml-8 '>
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

			<ul className='space-y-2 text-lg px-12 py-8'>
				<li>Swimming Pool</li>
				<li>Concierge Service</li>
				<li>Gymnasium</li>
				<li>High-Speed Internet</li>
				<li>Jacuzzi</li>
				<li>Kids Club</li>
				<li>Meeting Room</li>
				<li>Restaurant</li>
				<li>Sauna</li>
				<li>Standard Pool</li>
				<li>Steam Room</li>
				<li>Video Security</li>
				<li>Meeting Room</li>
				<li>Restaurant</li>
				<li>Sauna</li>
				<li>Standard Pool</li>
				<li>Steam Room</li>
				<li>Video Security</li>
			</ul>
		</div>
	)
}

export default Amenities
