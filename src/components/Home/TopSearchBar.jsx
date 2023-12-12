import { CiSearch } from "react-icons/ci"
import { PiSlidersFill } from "react-icons/pi"
const TopSearchBar = () => {
	return (
		<div className='box-container'>
			<div className='flex gap-1 w-full'>
				<div className='flex items-center min-w-0 flex-grow overflow-hidden shadow-lg border border-stone-100 p-2 rounded-full'>
					<CiSearch className='text-3xl font-bold ml-1' />
					<input
						className='ml-1 items-center outline-none bg-white text-stone-400 flex-grow min-w-0'
						type='search'
						placeholder='Search Properties, Area...'
					/>
				</div>
				<div className='p-3 bg-black rounded-full  text-white flex items-center justify-center text-2xl'>
					<PiSlidersFill />
				</div>
			</div>
		</div>
	)
}
export default TopSearchBar
