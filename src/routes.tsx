import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeTop from "./pages/Home/HomeTop";
import About from "./pages/About";

const route = createBrowserRouter([
  {
    element: <Navbar />,
    path: "/"
  },
  {
    element: <HomeTop/>,
    path: "/"
  },
  {
    element: <About/>,
    path: "/about"
  },
])

export default route;
