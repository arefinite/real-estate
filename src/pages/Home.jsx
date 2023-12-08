import Banner from "../components/Home/Banner"
import CardHeading from "../components/Home/CardHeading"
import DubaiAreas from "../components/Home/DubaiAreas"
import LatestProjectsSlider from "../components/Home/LatestProjectsSlider"
import LuxuryProjects from "../components/Home/LuxuryProjects/LuxuryProjects"
import ScrollProjects from "../components/Home/ScrollProjects"
import TopSearchBar from "../components/Home/TopSearchBar"
import Footer from "../components/shared/Footer.jsx/Footer"
import BottomNavigation from "../components/shared/BottomNavigation"
import { useEffect } from "react"

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
	}, [])
	
	return (
		<>
			<TopSearchBar />
			<Banner />
			<BottomNavigation />
			<CardHeading title='Dubai Latest Projects'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
				recusandae quisquam fugit assumenda a ex, molestiae explicabo incidunt
				ratione laboriosam.
			</CardHeading>
			<LatestProjectsSlider />
			<CardHeading title='Dubai Luxury Projects'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
				recusandae quisquam fugit assumenda a ex, molestiae explicabo incidunt
				ratione laboriosam.
			</CardHeading>
			<LuxuryProjects />
			<CardHeading title='Dubai Projects For Sale'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
				recusandae quisquam fugit assumenda a ex, molestiae explicabo incidunt
				ratione laboriosam.
			</CardHeading>
			<ScrollProjects />
			<LuxuryProjects />
			<CardHeading title='Dubai Areas'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
				recusandae quisquam fugit assumenda a ex, molestiae explicabo incidunt
				ratione laboriosam.
			</CardHeading>
      <DubaiAreas />
      <Footer/>
		</>
	)
}
export default Home
