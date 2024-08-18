import { TbBookmarkPlus } from "react-icons/tb";
import { FaEllipsis } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";
import { MdOutlineQuestionMark } from "react-icons/md";
import { IoMdCheckmark } from 'react-icons/io';
import HoverableElement from "./HoverableElement";

function Card({title, category, description, image}) {
  return (
      <div className="bg-[#14181A] w-[300px] cursor-pointer group ml-0 m-2 p-2 rounded-lg flex flex-col font-inter"> {/* this is one card */}
        <img src={image} className="rounded-lg"/>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <p className="text-white text-lg font-bold">{title}</p>
            <div className="flex gap-4 text-xl text-gray-400 opacity-0 group-hover:opacity-100 duration-500">
              <HoverableElement Icon={FaEllipsis} Message="More" />
              <HoverableElement Icon={TbBookmarkPlus} Message="Bookmark" />
            </div>
          </div>
          <p className="mb-3 text-sm font-semi text-gray-300">{category}</p>
          <p className="my-2 text-sm text-gray-300">{description}</p>
          <div className="flex gap-3 mt-3 text-sm">
            <p className="flex gap-1 items-center"><FaKey /> API key</p>
            <p className="flex gap-1 items-center text-gray-400"><MdOutlineQuestionMark /> cors</p>
            <p className="flex gap-1 items-center"><IoMdCheckmark /> Https</p>
          </div>
        </div>
      </div>
  );
}

export default Card;
