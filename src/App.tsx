import { RouterProvider } from "react-router-dom"
import route from "./routes"
import HomeTop from "./pages/Home/HomeTop"
import About from "./pages/About"

function App() {
  return (
    <>
      <div className="">
        <div className="hero-bg pt-5">
          <RouterProvider router={route} />
        </div>
      </div>
    </>
  )
}

export default App
