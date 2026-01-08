import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

const route = createBrowserRouter([
  {
    element: <Navbar />,
    path: "/"
  },
])

export default route;
