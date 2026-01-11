import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="hero-bg pt-5">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
