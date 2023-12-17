import { Link } from "react-router-dom"

const Copyright = () => {
	return (
		<>
			<div className='text-stone-400 px-4 flex pb-2 justify-center items-center'>
				Copyright &copy; 2023. All Rights Reserved.
			</div>
			<div className='text-stone-500 text-sm px-4 pb-20 flex justify-center items-center'>
				<Link to='privacy-policy'>Privacy & Policy</Link>
			</div>
		</>
	)
}

export default Copyright
