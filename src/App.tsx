import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="hero-bg pt-5">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
