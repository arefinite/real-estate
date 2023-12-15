import { Link } from "react-router-dom"
import BottomNavigation from './../components/shared/BottomNavigation';
import FixedHeader from "../components/shared/FixedHeader";

const Blogs = () => {
	return (
		<div>
			<FixedHeader link='/' icon='delete' share />
			<div className='box-container mb-20'>
				<span className='text-stone-500'>
					<small>
						<Link to='/'>Home</Link>/ Dubai Apartments For Sale{" "}
					</small>
				</span>
				<h2 className='heading my-4'>Blogs</h2>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
				rerum molestias soluta voluptas assumenda totam.
				<div className='flex justify-end mx-2 my-4'>
					Old to New / New to Old
				</div>
				<div className='flex flex-col gap-6'>
					<Link to='/blog-details'>
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
					</Link>
					<Link to='/blog-details'>
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
					</Link>
					<Link to='/blog-details'>
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
					</Link>

					<Link to='/blog-details'>
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
					</Link>

					<Link to='/blog-details'>
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
					</Link>
				</div>
			</div>
			<BottomNavigation />
		</div>
	)
}

export default Blogs
