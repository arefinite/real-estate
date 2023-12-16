import { Link } from "react-router-dom"
import  aboutImg  from '/images/about.png';
import FixedHeader from "../components/shared/FixedHeader";
import { useEffect } from "react";
import BottomNavigation from "../components/shared/BottomNavigation";

const Explore = () => {
useEffect(() => {
			window.scrollTo(0, 0)
		}, [])
	return (
		<div>
			<FixedHeader link='/blogs' icon='back' text='Back' share />
			<div className='box-container mb-20'>
				<div style={{ margin: "-20px -15px" }}>
					<img src={aboutImg} alt='' />
				</div>
				<div className='pt-10 pb-4'>
					<span className='text-stone-500 '>
						<small>
							<Link to='/'>Home</Link>/{" "}
							<Link to='/'>Invest in Dubai Real Estate</Link>
							
						</small>
					</span>
				</div>
				<h2 className='heading my-4'>
					Invest In Dubai Real Estate
				</h2>
				
				<div className='mt-4'>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
						rerum molestias soluta voluptas assumenda totam.Lorem ipsum dolor
						sit amet consectetur, adipisicing elit. Temporibus rerum molestias
						soluta voluptas assumenda totam.
					</p>
					<p className='mt-4'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
						rerum molestias soluta voluptas assumenda totam.Lorem ipsum dolor
						sit amet consectetur, adipisicing elit. Temporibus rerum molestias
						soluta voluptas assumenda totam.
					</p>
        </div>
      </div>
      <BottomNavigation/>
    </div>
  )
}
export default Explore