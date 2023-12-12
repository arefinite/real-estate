const Currency = () => {
	return (
		<div className='px-6 my-8 '>
			<div className='border-y border-y-white'>
				<div className='text-base h-20  flex items-center gap-4 justify-center '>
					<h1 className="py-8">Currency</h1>
					<select className='bg-black border border-white px-3 py-1'>
						<option value='AED'>AED</option>
						<option value='USD'>USD</option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default Currency
