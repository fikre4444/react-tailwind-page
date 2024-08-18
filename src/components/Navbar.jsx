import { IoIosSearch } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { PiDogFill } from "react-icons/pi";
import { TbSoup, TbWorld } from "react-icons/tb";
import { GiSnowflake2 } from "react-icons/gi";
import { IoColorPaletteOutline, IoGameControllerOutline } from "react-icons/io5";
import { FaCode, FaRegEnvelope, FaTv, FaUnlockAlt } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { PiBooksFill } from "react-icons/pi";
import { AiOutlineStock } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { FaInfinity } from "react-icons/fa6";
import { FaBitcoinSign } from "react-icons/fa6";
import { BsCurrencyExchange } from "react-icons/bs";
import { LuClipboardCheck } from "react-icons/lu";

import { useRef } from 'react';
import LinkComp from "./LinkComp";

function Navbar() {
  const searchInputRef = useRef(null);

  const handleClick = () => {
    searchInputRef.current.focus();
  }

  const links = [
    { icon: PiDogFill, name: "Animals" },
    { icon: TbSoup, name: "Anime" },
    { icon: GiSnowflake2, name: "Anti Malware" },
    { icon: IoColorPaletteOutline, name: "Art & Design" },
    { icon: FaUnlockAlt, name: "Autentication & Authorization" },
    { icon: FiLink, name: "Blockchain" },
    { icon: PiBooksFill, name: "Books" },
    { icon: AiOutlineStock, name: "Business" },
    { icon: FaRegCalendarAlt, name: "Calendar" },
    { icon: CiCloudOn, name: "Cloud Storage & File Sharing" },
    { icon: FaInfinity, name: "Continuous Integration" },
    { icon: FaBitcoinSign, name: "Cryptocurrency" },
    { icon: BsCurrencyExchange, name: "Currency Exchange" },
    { icon: LuClipboardCheck, name: "Data Validation" },
    { icon: FaCode, name: "Development" },
    { icon: FaRegEnvelope, name: "Email" },
    { icon: FaTv, name: "Entertainment" },
    { icon: TbWorld, name: "Environment" },
    { icon: IoGameControllerOutline, name: "Games & Comics" },
    { icon: PiDogFill, name: "Animals" },
    { icon: TbSoup, name: "Anime" },
    { icon: GiSnowflake2, name: "Anti Malware" },
    { icon: IoColorPaletteOutline, name: "Art & Design" },
    { icon: FaUnlockAlt, name: "Autentication & Authorization" },
    { icon: FiLink, name: "Blockchain" },
    { icon: PiBooksFill, name: "Books" },
    { icon: AiOutlineStock, name: "Business" },
    { icon: FaRegCalendarAlt, name: "Calendar" },
    { icon: CiCloudOn, name: "Cloud Storage & File Sharing" },
    { icon: FaInfinity, name: "Continuous Integration" },
    { icon: FaBitcoinSign, name: "Cryptocurrency" },
    { icon: BsCurrencyExchange, name: "Currency Exchange" },
    { icon: LuClipboardCheck, name: "Data Validation" },
    { icon: FaCode, name: "Development" },
    { icon: FaRegEnvelope, name: "Email" },
    { icon: FaTv, name: "Entertainment" },
    { icon: TbWorld, name: "Environment" },
    { icon: IoGameControllerOutline, name: "Games & Comics" },
  ];

  return (
    <div className="flex-[0.25] sticky top-[64px] h-[calc(100vh-64px)] overflow-y-auto bg-black">
      <div className="mr-16 flex flex-col items-center">
        <div className="w-[100%] pt-6 pb-5 mb-5 pl-7 pr-0"> {/*for the search bar */}
          <div onClick={handleClick} className="w-[90%] cursor-text flex p-2 py-2 items-center border border-gray-600 rounded-md text-gray-600 hover:border-gray-500 duration-200 focus-within:border-gray-500 focus-within:text-gray-400">
            <IoIosSearch className="mr-1" size={23} />
            <input ref={searchInputRef} className="w-[80%] ml-0 pl-1 pr-0 text-white text-md border-none outline-none bg-black placeholder:text-gray-600 caret-white" placeholder="Search" type="text" /> 
          </div>
        </div>
        <div className="w-[100%] h-[73vh] pl-7 pr-6 overflow-y-auto pb-2 scrollbar-hide"> {/*for the main navbar */}
          <div className="mb-4">
            <h1 className="text-md py-1 uppercase font-bold">We also Created</h1>
            <LinkComp Icon={FiExternalLink} name="Dev Resources" />
            <LinkComp Icon={FiExternalLink} name="Linktopus" />
          </div>
          <div>
            <h1 className="text-md py-1 uppercase font-bold">Categories</h1>
            {links.map((link, index) => (
              <LinkComp key={index} Icon={link.icon} name={link.name} />
            ))}
            <hr className="border-t border-gray-600 border-opacity-70 my-[20px]"/>
            <h1 className="text-sm font-semibold tracking-widest text-gray-500 mb-2 uppercase">Total Resources: <span className="text-xl text-gray-100 font-bold">1403</span></h1>
          </div>         
        </div>
      </div>
    </div>
  )
}

export default Navbar;
