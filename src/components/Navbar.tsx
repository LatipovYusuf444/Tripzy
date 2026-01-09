import logo from "@/assets/images/Tripzy.webp"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
const Navbar = () => {
  return (
    <div className="container mt-5 mx-auto w-350 rounded-4xl bg-[#32a3dbd8] flex justify-center items-center gap-50  ">
      <img className="h-26 w-38 -ml-13" src={logo} alt="" />
      <div className="flex justify-center items-center gap-20 fonts text-white font-bold">
        <Link to={'/'}>
          Biz haqimizda
        </Link>
        <Link to={'/'}>
          Xizmatlarimiz
        </Link>
        <Link to={'/'}>
          Reyslar
        </Link>
        <Link to={'/'}>
          Contact
        </Link>
      </div>
      <Button className="fonts text-white bg-blue-300 rounded-3xl px-14 py-6 cursor-pointer">
        Register
      </Button>
    </div>
  )
}

export default Navbar

