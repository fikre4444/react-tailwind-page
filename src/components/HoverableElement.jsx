import { useRef } from 'react';
import { BsDiamondFill } from "react-icons/bs";

function HoverableElement({Icon, Message}) {
  const hov = useRef(null);

  const handleHover = () => {
    hov.current.classList.remove('opacity-0');
    hov.current.classList.add('opacity-100');
  }

  const handleLeave = () => {
    hov.current.classList.remove('opacity-100');
    hov.current.classList.add('opacity-0');
  }

  return (
  <div className="relative z-40">
    <p 
      className="bg-[#202328] py-2 px-3 text-sm rounded-md duration-[250ms] opacity-0 z-50 text-white absolute top-[-50px] left-1/2 transform -translate-x-1/2"
      ref={hov}
    >
      {Message}
      <BsDiamondFill className="text-gray-400 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
    </p>
    <Icon className="hover:text-white duration-200" onMouseOver={handleHover} onMouseLeave={handleLeave} />
  </div>
  );
}

export default HoverableElement;
