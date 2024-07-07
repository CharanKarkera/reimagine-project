import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaPaintBrush, FaBars, FaHome } from "react-icons/fa";
import {
  IoPersonCircleSharp,
  IoCall,
  IoMan,
  IoWomanSharp,
} from "react-icons/io5";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { TbMoodKidFilled } from "react-icons/tb";
import { FaKitchenSet } from "react-icons/fa6";

const NAV_ITEMS = [
  {
    label: "Profile",
    href: "/",
    tag: <IoPersonCircleSharp className="text-[orange]" />,
  },
  {
    label: "Cart",
    href: "/",
    tag: <FaShoppingCart className="text-[orange]" />,
  },
  {
    label: "Home",
    href: "/",
    tag: <FaHome className="text-[orange]" />,
  },
  { label: "Men", href: "/men", tag: <IoMan className="text-[orange]" /> },
  {
    label: "Women",
    href: "/women",
    tag: <IoWomanSharp className="text-[orange]" />,
  },
  {
    label: "Kids",
    href: "/kids",
    tag: <TbMoodKidFilled className="text-[orange]" />,
  },
];

const Header = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 768);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex flex-col items-center text-xl text-[ivory] bg-black comic-neue-bold justify-center">
      <div className="flex justify-between items-center w-full relative p-2 px-10">
        <div className="flex items-center hover:scale-105 hover:text-[orange] transition duration-300 ease-in-out">
          <img
            src="/logo-1.png"
            alt="Meesho"
            className="h-[100px] w-[100px] hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <span className="text-5xl comic-beue-bold">meesho</span>
        </div>
        <div className="comic-neue-bold gap-10 text-3xl hidden md:flex pr-5">
          <a
            href="/"
            className="hover:scale-105 hover:text-[orange] transition duration-300 ease-in-out"
          >
            Profile
          </a>
          <a
            href="/"
            className="hover:scale-105 hover:text-[orange] transition duration-300 ease-in-out"
          >
            Cart
          </a>
        </div>
        <div className="flex items-center text-[#F69838] md:hidden">
          {mobile && (
            <FaBars
              className="h-6 w-6 hover:scale-105 transition-transform duration-300 ease-in-out"
              onClick={() => setShowMenu(!showMenu)}
            />
          )}
        </div>
      </div>
      {mobile && showMenu && (
        <div className="flex flex-col justify-start bg-black w-full px-5 py-3 border-t border-white">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-3 py-2 w-full justify-start hover:text-[orange] transition duration-300 ease-in-out"
            >
              {item.tag}
              {item.label}
            </a>
          ))}
        </div>
      )}
      {!mobile && (
        <div className="flex justify-center w-full pb-5 gap-20">
          {NAV_ITEMS.slice(2).map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:scale-105 hover:text-[orange] transition duration-300 ease-in-out"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
