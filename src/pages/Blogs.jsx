import { Link } from "react-router-dom"
import BottomNavigation from './../components/shared/BottomNavigation';
import { FaXmark } from "react-icons/fa6"
import { IoIosShareAlt } from "react-icons/io"

const Blogs = () => {
	return (
		<div>
			<div className='flex justify-center sticky top-0 bg-white border border-slate-200'>
				<div className=''>
					<div className='flex justify-between'>
						<button className='absolute left-4 top-6'>
							<Link to='/'>
								<FaXmark />
							</Link>
						</button>
						<h1 className='p-4 text-2xl font-bold pl-20 invisible'>
							Blog
						</h1>
						<div className='flex items-center absolute right-4 top-4 ml-8 '>
							<span>
								<IoIosShareAlt style={{ fontSize: "2rem" }} />
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className='box-container mb-20'>
				<span className='text-stone-500'>
					<small>
						<Link to='/'>Home</Link>/ Dubai Apartments For Sale{" "}
					</small>
				</span>
				<h2 className='font-bold text-2xl my-4'>Blogs</h2>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
				rerum molestias soluta voluptas assumenda totam.
				<div className='flex justify-end mx-2 my-4'>
					Old to New / New to Old
				</div>
				<div className='flex flex-col gap-6'>
					<div className='flex gap-2 boxShadow'>
						<div>
							<img
								src='./images/img1.jpg'
								alt=''
								className='w-96 h-full object-cover'
							/>
						</div>
						<div className='flex flex-col justify-between p-2 h-36'>
							<div>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Excepturi.
							</div>
							<div>
								<small>11 June 2023</small>
							</div>
						</div>
					</div>

					<div className='flex gap-2 boxShadow'>
						<div>
							<img
								src='./images/img1.jpg'
								alt=''
								className='w-96 h-full object-cover'
							/>
						</div>
						<div className='flex flex-col justify-between p-2 h-36'>
							<div>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Excepturi.
							</div>
							<div>
								<small>11 June 2023</small>
							</div>
						</div>
					</div>

					<div className='flex gap-2 boxShadow'>
						<div>
							<img
								src='./images/img1.jpg'
								alt=''
								className='w-96 h-full object-cover'
							/>
						</div>
						<div className='flex flex-col justify-between p-2 h-36'>
							<div>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Excepturi.
							</div>
							<div>
								<small>11 June 2023</small>
							</div>
						</div>
					</div>

					<div className='flex gap-2 boxShadow'>
						<div>
							<img
								src='./images/img1.jpg'
								alt=''
								className='w-96 h-full object-cover'
							/>
						</div>
						<div className='flex flex-col justify-between p-2 h-36'>
							<div>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Excepturi.
							</div>
							<div>
								<small>11 June 2023</small>
							</div>
						</div>
					</div>

					<div className='flex gap-2 boxShadow p-b-12'>
						<div>
							<img
								src='./images/img1.jpg'
								alt=''
								className='w-96 h-full object-cover'
							/>
						</div>
						<div className='flex flex-col justify-between p-2 h-36 '>
							<div>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Excepturi.
							</div>
							<div>
								<small>11 June 2023</small>
							</div>
						</div>
					</div>
				</div>
			</div>
			<BottomNavigation />
		</div>
	)
}

export default Blogs
