import { Link } from "react-router-dom"
import FixedHeader from "../components/shared/FixedHeader"
import { useEffect } from "react"
import BottomNavigation from "../components/shared/BottomNavigation"

const Privacy = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div>
			<FixedHeader link='/blogs' icon='back' text='Back' share />
			<div className='box-container mb-20'>
				<div className='pt-4'>
					<span className='text-stone-500 '>
						<small>
							<Link to='/'>Home</Link>/{" "}
							<Link to='/'>Invest in Dubai Real Estate</Link>
						</small>
					</span>
				</div>

				<div className='mt-4'>
					<h1 className='heading'>Privacy & Policy</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
						rerum molestias soluta voluptas assumenda totam.Lorem ipsum dolor
						sit amet consectetur, adipisicing elit. Temporibus rerum molestias
						soluta voluptas assumenda totam.
					</p>
					<h1 className='heading mt-4'>Lorem Ipsum</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
						rerum molestias soluta voluptas assumenda totam.Lorem ipsum dolor
						sit amet consectetur, adipisicing elit. Temporibus rerum molestias
						soluta voluptas assumenda totam.
					</p>

					<p className="mt-4">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
						rerum molestias soluta voluptas assumenda totam.Lorem ipsum dolor
						sit amet consectetur, adipisicing elit. Temporibus rerum molestias
						soluta voluptas assumenda totam.
					</p>

					<p className="mt-4">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
						rerum molestias soluta voluptas assumenda totam.Lorem ipsum dolor
						sit amet consectetur, adipisicing elit. Temporibus rerum molestias
						soluta voluptas assumenda totam.
					</p>
				</div>
			</div>
			<BottomNavigation />
		</div>
	)
}
export default Privacy
