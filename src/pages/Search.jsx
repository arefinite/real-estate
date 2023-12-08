import { useState } from "react"
import { FaXmark } from "react-icons/fa6"
import { Range } from "react-range"
import { Link } from 'react-router-dom';

const Search = () => {
	const [range, setRange] = useState([550000, 960000])
	const handleRangeChange = newRange => {
		setRange(newRange)
	}

	return (
		<div>
			<div className='flex justify-center '>
				<div className='relative'>
					<div className='sticky top-0 bg-white z-50 h-[8vh] border-b'>
						<div className='flex justify-center gap-6 '>
							<button className='absolute left-10 top-6'>
								<Link to='/'>
									<FaXmark />
								</Link>
							</button>
							<h1 className='p-4 text-2xl font-bold'>Search Project</h1>
						</div>
					</div>
					<hr className='w-screen' />

					<div className='mt-8 flex justify-center text-lg mr-2'>
						<form
							onSubmit={e => e.preventDefault()}
							className='flex flex-col gap-8'
						>
							<div className='flex flex-col gap-2'>
								<label htmlFor='area' className='font-bold tracking-wide'>
									Area/Project
								</label>
								<input
									type='text'
									className='p-2 px-4 border border-slate-300 w-80 outline-none'
								/>
							</div>
							<div>
								<label htmlFor='type' className='font-bold tracking-wide'>
									Project Type
								</label>
								<div className='flex flex-col mt-2 gap-2 '>
									<span className='flex items-center gap-2 '>
										<input
											type='checkbox'
											name='type'
											className='h-5 w-5 custom-checkbox'
										/>{" "}
										Apartment
									</span>
									<span className='flex items-center gap-2 '>
										<input
											type='checkbox'
											className='h-5 w-5 custom-checkbox'
											name='type'
										/>{" "}
										Villa
									</span>
									<span className='flex items-center gap-2 '>
										<input
											type='checkbox'
											className='h-5 w-5 custom-checkbox'
											name='type'
										/>{" "}
										Penthouse
									</span>
									<span className='flex items-center gap-2 '>
										<input
											type='checkbox'
											className='h-5 w-5 custom-checkbox'
											name='type'
										/>{" "}
										Townhouse
									</span>
									<span className='flex items-center gap-2 '>
										<input
											type='checkbox'
											className='h-5 w-5 custom-checkbox'
											name='type'
										/>{" "}
										Land Plots
									</span>
								</div>
							</div>
							<div className='flex flex-col gap-2'>
								<label htmlFor='develop' className='font-bold tracking-wide'>
									Developer
								</label>
								<select className='p-2 pr-4 border border-slate-300 w-80 outline-none '>
									<option value=''>Please Select</option>
									<option value=''>Develope One</option>
									<option value=''>Developer Two</option>
								</select>
							</div>
							<div className='flex flex-col gap-2'>
								<label htmlFor='Price' className='font-bold tracking-wide'>
									Price Range
								</label>
								{/* Start................................................................................................................. */}

								<div className='w-80 mt-4 outline-none'>
									<Range
										step={1}
										min={100000}
										max={2000000}
										values={range}
										onChange={handleRangeChange}
										renderTrack={({ props, children }) => (
											<div
												{...props}
												style={{
													...props.style,
													height: "1px",
													backgroundColor: "#ccc",
												}}
											>
												{children}
											</div>
										)}
										renderThumb={({ props }) => (
											<div
												{...props}
												style={{
													...props.style,
													height: "20px",
													width: "20px",
													borderRadius: "100%",
													border: "2px solid #000",
													backgroundColor: "#fff",
												}}
											/>
										)}
									/>
									<div className='flex justify-between mt-4'>
										<span>${range[0]}</span>
										<span>${range[1]}</span>
									</div>
								</div>

								
							</div>
							<div className='flex w-80 gap-3'>
								<div>
									<input
										type='number'
										placeholder='Min Price'
										className='p-2 border border-slate-300 w-[155px]   outline-none'
									/>
								</div>
								<div>
									<input
										type='number'
										placeholder='Max Price'
										className='p-2 border border-slate-300  w-[155px] outline-none'
									/>
								</div>
							</div>
							<div>
								<h1 className='font-bold tracking-wide'>Lifestyle</h1>
								<div className='grid grid-cols-2 gap-4 pb-10 w-80 mt-4'>
									<div className='p-2 border border-slate-300 rounded-full w-[155px]  text-center outline-none hover:bg-black  hover:text-white'>
										Beachfront
									</div>
									<div className='p-2 border border-slate-300 rounded-full w-[155px]  text-center outline-none hover:bg-black hover:text-white'>
										Luxury Living
									</div>
									<div className='p-2 border border-slate-300 rounded-full w-[155px]  text-center outline-none hover:bg-black hover:text-white'>
										Waterfront
									</div>
									<div className='p-2 border border-slate-300 rounded-full w-[155px]  text-center outline-none hover:bg-black hover:text-white'>
										Near Golf
									</div>
									<div className='p-2 border border-slate-300 rounded-full w-[155px]  text-center outline-none hover:bg-black hover:text-white'>
										Near Burj Khalifa
									</div>
									<div className='p-2 border border-slate-300 rounded-full w-[155px]  text-center outline-none hover:bg-black hover:text-white'>
										Near Expo Dubai
									</div>
								</div>
							</div>
						</form>
					</div>

					<div className='p-4 sticky box-top-shadow border border-t-slate-100  bottom-0 bg-white py-2'>
						<div className='flex justify-between'>
							<input type='reset' className='font-bold' value='Clear All' />
							<input
								type='submit'
								className='p-2 border border-slate-300  text-center outline-none bg-black text-white'
								value='Show Results'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Search
