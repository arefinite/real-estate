import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import BottomNavigation from "../components/shared/BottomNavigation"

const Contact = () => {
	return (
		<div>
			<div className='flex justify-center bg-400 '>
				<div className='relative'>
					<div className='flex justify-center sticky top-0 bg-white border border-slate-200'>
						<div className=''>
							<div className='flex justify-between'>
								<button className='absolute left-4 top-6'>
									<Link to='/'>
										<div className='flex items-center gap-1'>
											<IoIosArrowBack className='text-2xl' />
											<span>Back</span>
										</div>
									</Link>
								</button>
								<h1 className='p-4 text-2xl font-bold invisible'>Inquiry</h1>
							</div>
						</div>
					</div>
					<hr className='w-screen' />
					<div className='p-6'>
						<span className='text-stone-500 '>
							<small>
								<Link to='/'>Home</Link>/ Inquiry
							</small>
						</span>
					</div>
					<div className='flex  justify-center'>
						<div>
							<h1 className=' pb-2 px-6 mt-2 heading'>Inquiry</h1>
							<div className='px-6 pb-6'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
									unde labore delectus alias consectetur perferendis explicabo.
								</p>
							</div>
							<div className='flex flex-col justify-center items-center '>
								<form
									onSubmit={e => e.preventDefault()}
									className='flex flex-col gap-4'
								>
									<input
										type='text'
										placeholder='Full Name'
										className='p-2 border border-slate-300 w-full outline-none'
										required
									/>
									<input
										type='email'
										placeholder='Email'
										className='p-2 border border-slate-300 w-full outline-none'
										required
									/>
									<div className='border border-slate-300'>
										<select
											style={{
												color: "#666",
												backgroundColor: "#fff",
												outline: "none",
												border: "0",
											}}
										>
											<option>+971</option>
											<option>+1</option>
											<option>+54</option>
										</select>
										<input
											type='number'
											placeholder='Number'
											className='p-2 border-none outline-none'
											required
										/>
									</div>

									<input
										type='submit'
										value='Send Message'
										className='p-2 border border-slate-300 bg-black text-white outline-none'
									/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<BottomNavigation />
		</div>
	)
}

export default Contact
