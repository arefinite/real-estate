import { RouterProvider } from "react-router-dom"
import { appRouter } from "./routes/Routes"
import ScrollToTop from "./services/ScrollToTop"

const App = () => {
  return (
		<>
			<RouterProvider router={appRouter}>
				<ScrollToTop />
			</RouterProvider>
		</>
	)
}
export default App