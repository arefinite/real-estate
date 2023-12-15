
import { Link } from "react-router-dom"
import BottomNavigation from "../components/shared/BottomNavigation";
import FixedHeader from "../components/shared/FixedHeader";

const Sell = () => {
	return (
		<div>
			<div className='flex justify-center bg-400 '>
				<div>
					<FixedHeader link='/' icon='back' text='Back' share />
					<div className='p-6'>
						<span className='text-stone-500 '>
							<small>
								<Link to='/'>Home</Link>/ Sell
							</small>
						</span>
					</div>
					<div className='flex  justify-center pb-20'>
						<div>
							<h1 className=' pb-2 px-6 mt-2 heading'>Sell</h1>
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
										type='text'
										placeholder='Property For'
										className='p-2 border border-slate-300 w-full outline-none'
										required
									/>
									<input
										type='text'
										placeholder='Property Type'
										className='p-2 border border-slate-300 w-full outline-none'
										required
									/>
									<input
										type='text'
										placeholder='Location'
										className='p-2 border border-slate-300 w-full outline-none'
										required
									/>
									<input
										type='text'
										placeholder='Bedrooms'
										className='p-2 border border-slate-300 w-full outline-none'
										required
									/>
									<input
										type='text'
										placeholder='Size (Sq.Ft.)'
										className='p-2 border border-slate-300 w-full outline-none'
										required
									/>
									<input
										type='submit'
										value='Submit'
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

export default Sell
