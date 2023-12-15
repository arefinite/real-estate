import SecondaryHeader from "../components/shared/SecondaryHeader"

const RegisterInterest = () => {
	return (
		<div>
			<div className='flex'>
				<div className='relative'>
					<SecondaryHeader link='/project-details' icon='delete' name='Register Interest' />
					<hr className='w-screen invisible' />
					<div className='flex items-center h-[70vh] justify-center'>
						<div>
							<h1 className='text-center pb-8 mt-12 text-2xl font-bold'>
								Emaar The Oasis Villas
							</h1>
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
		</div>
	)
}

export default RegisterInterest
