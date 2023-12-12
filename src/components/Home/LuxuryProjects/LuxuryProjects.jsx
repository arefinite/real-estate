import houseData from "../../../data/HouseData.json"
import LuxuryProject from './LuxuryProject';

const LuxuryProjects = () => {
	return (
		<div className="flex flex-col gap-6">
			{houseData.map(house => (
				<LuxuryProject key={house.id} house={house} />
			))}
		</div>
	)
}
export default LuxuryProjects
