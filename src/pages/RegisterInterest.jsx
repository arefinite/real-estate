import { FaXmark } from "react-icons/fa6"
import { Link } from "react-router-dom"

const RegisterInterest = () => {
	return (
		<div className=''>
			<div className='flex justify-center bg--400 '>
				<div className='relative'>
					<div className='flex justify-center gap-6 '>
						<button className='absolute left-10 top-6'>
							<Link to='/project-details'>
								<FaXmark />
							</Link>
						</button>
						<h1 className='p-4 text-2xl font-bold'>Register Interest</h1>
					</div>
					<hr className='w-screen' />
					<h1 className='text-center pb-8 mt-12 text-2xl font-bold'>
						Emaar The Oasis Villas
					</h1>
					<div className='flex flex-col justify-center items-center'>
						<form
							onSubmit={e => e.preventDefault()}
							className='flex flex-col gap-4'
						>
							<input
								type='text'
								placeholder='Full Name'
								className='p-2 border border-slate-300 w-80 outline-none'
								required
							/>
							<input
								type='email'
								placeholder='Email'
								className='p-2 border border-slate-300 w-80 outline-none'
								required
							/>
							<div className='w-80 border border-slate-300'>
								<select style={{ color: "#666", outline: "none", border: "0" }}>
									<option>+971</option>
									<option>+1</option>
									<option>+54</option>
								</select>
								<input
									type='email'
									placeholder='Number'
									className='p-2 border-none    outline-none'
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
	)
}

export default RegisterInterest
