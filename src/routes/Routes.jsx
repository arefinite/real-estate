import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../layouts/RootLayout"
import { Blogs, Error, Home, Map, Search,About,Sell,Inquiry,Contact, Navigation, ProjectDetails, DubaiDevelopers, DubaiDeveloper, Amenities, RegisterInterest, DubaiArea, DubaiAreasAll, LightBox, BlogDetails } from "../pages"





export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "blogs",
				element: <Blogs />,
			},
			{
				path: "map",
				element: <Map />,
			},
			{
				path: "search",
				element: <Search />,
			},
			{
				path: "navigation",
				element: <Navigation />,
			},
			{
				path: "project-details",
				element: <ProjectDetails />,
			},
			{
				path: "amenities",
				element: <Amenities />,
			},
			{
				path: "register-interest",
				element: <RegisterInterest />,
			},
			{
				path: "dubai-developers",
				element: <DubaiDevelopers />,
			},
			{
				path: "dubai-developer",
				element: <DubaiDeveloper />,
			},
			{
				path: "dubai-areas",
				element: <DubaiAreasAll />,
			},
			{
				path: "dubai-area",
				element: <DubaiArea />,
			},
			{
				path: "lightbox",
				element: <LightBox />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "sell",
				element: <Sell />,
			},
			{
				path: "inquiry",
				element: <Inquiry />,
			},
			{
				path: 'blog-details',
				element:<BlogDetails />,
			}
		],
	},
])
