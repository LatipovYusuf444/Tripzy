import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import HomeTop from "./pages/Home/HomeTop"
import About from "./pages/About"

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomeTop /> },   // "/"
      { path: "about", element: <About /> },   // "/about"
    ],
  },
])

export default route
