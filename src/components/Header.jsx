import { FaGithub } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";
import { GoSignIn } from "react-icons/go";
import { FaRegSquarePlus } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <div className="bg-black py-4 px-7 text-gray-200 items-center z-50 flex justify-between sticky top-0 bg-opacity-80 backdrop-filter backdrop-blur-md">
      <h1 className="text-3xl cursor-pointer hover:text-gray-100 ">PUBLIC APIs</h1>
      <div className="items-center gap-7 text-gray-400 font-medium text-md hidden lg:flex">
        <a className="flex bg-gray-900 cursor-pointer text-gray-300 items-center rounded-md text-xs border border-gray-800 border-opacity-75">
          <p className="flex gap-1 pl-5 pr-2 p-1 items-center hover:bg-gray-700 duration-100 bg-gray-800"><FaGithub /> Star </p>
          <p className="flex gap-1 pr-5 pl-2 p-1 items-center hover:text-blue-600 duration-100 rounded-md border-l border-gray-800 bg-black bg-opacity-75">3,612</p>
        </a>
        <a className="flex gap-2 items-center hover:text-white duration-100 cursor-pointer"><CiHeart size={20} /> Sponsor</a>
        <a className="flex gap-2 items-center hover:text-white duration-100 cursor-pointer"><FaRegEnvelope size={20} /> Newsletter</a>
        <a className="flex gap-2 items-center hover:text-white duration-100 cursor-pointer"><GoSignIn size={20} /> Sign In</a>
        <button className="flex items-center gap-1 bg-gray-200 hover:bg-gray-100 duration-100 text-gray-950 rounded-md py-2 px-5 font-medium text-sm"><FaRegSquarePlus /> Submit API</button>
      </div>
      <div className="text-2xl lg:hidden cursor-pointer">
        <RxHamburgerMenu />
      </div>
    </div>
  )
}

export default Header;
