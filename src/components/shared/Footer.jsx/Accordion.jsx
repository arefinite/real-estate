import { useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import { FaAngleUp } from "react-icons/fa"

const AccordionItem = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className='py-4'>
			<div className='flex justify-between items-center' onClick={handleToggle}>
				<h1 className='text-bose h-10 py-2 font-semibold'>{title}</h1>
				<span>
					{isOpen ? (
						<FaAngleUp className='text-xl' />
					) : (
						<FaAngleDown className='text-xl' />
					)}
				</span>
			</div>
			{isOpen && <div className=''>{content}</div>}
		</div>
	)
}

const Accordion = ({ items }) => {
	return (
		<div className='px-6 bg-black text-white my-8 divide-y divide-white'>
			{items.map((item, index) => (
				<AccordionItem key={index} title={item.title} content={item.content} />
			))}
		</div>
	)
}

export default Accordion
