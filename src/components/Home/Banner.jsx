import bannerImage from '/images/banner.jpg'
const Banner = () => {
   const bannerStyle = {
			backgroundImage: `url(${bannerImage})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			height: "60vh",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			color: "white",
		}
	return (
		<div
			style={bannerStyle}
			className='h-full relative lex items-center justify-center'
		>
			<div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-60'></div>
			<div className='z-10 text-white absolute bottom-8 left-4'>
				<h1 className='font-merri text-4xl font-bold tracking-wider space-y-2 flex flex-col'>
					<span> DUBAI</span>
					<span>OFF PLAN</span>
					<span>PROJECTS</span>
				</h1>
			</div>
		</div>
	)
}
export default Banner
