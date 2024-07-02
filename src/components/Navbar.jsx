import React from "react";
import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { IoCall } from "react-icons/io5";

const NAV_ITEMS = [
  {
    label: "Men",
    href: "/men",
  },
  {
    label: "Women",
    href: "/women",
  },
  {
    label: "Kids",
    href: "/kids",
  },
  {
    label: "Beauty",
    href: "/beauty",
  },
  {
    label: "Home & Kitchen",
    href: "/home",
  },
];



const first = [
  {
    label: "Login",
    href: "/login",
  },
  {
    label: "Sign-up",
    href: "/signup",
  },
];
const basic = [
  {
    label: "About",
    href: "/about",
    tag:<HiQuestionMarkCircle  className="h-[20px] w-[20px]"/>
  },
  {
    label: "Contact",
    href: "/contact",
    tag:<IoCall  className="h-[20px] w-[20px]"/>
  },
];
const second = [
  {
    label: "Profile",
    href: "/profile",
    tag:<IoPersonCircleSharp/>
  },
  {
    label: "Cart",
    href: "/cart",
    tag:<FaShoppingCart/>
  },
];
const Navbar = () => {
  const [login, islogin]=useState(false)
  const [mobile, setMobile] = useState(window.innerWidth<768);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <nav className="flex flex-col justify-center text-xl items-center navy-blue text-[ivory]">
      <div className="flex justify-between w-full fontfam m-0 p-0">
        <div className="flex pl-3 md:gap-[3px] gap-[2px] mt-2">{basic.map((item, index) => (
                <a className={mobile ? `hover:bg-[orange] text-[#1A1A40]
                   h-[40px] w-[40px] p-2 gap[3px] rounded-md join-button md:${
                  index === 0 ? 'module' : ''
                }` : `hover:scale-105 p-3 bg-gradient-to-b h-[60px] from-[orange] to-[orange] w-[100px] flex justify-center items-center ${
                 index === 0 ? 'module' : ''
               } hover:bg-gradient-to-b hover:from-[#D87A1D] hover:to-[#F69838] transition duration-300 ease-in-out text-[#1A1A40]`} key={index} href={item.href}>
                  {mobile ? item.tag : item.label}

              </a>
            ))}</div><img src="/logo.png" alt="Meesho" className="h-[80px] w-[220px] md:h-[7pc] md:w-[19pc] p-5 hover:scale-105 transition-transform duration-300 ease-in-out"/>
        <div className="flex pr-3  gap-[3px]">{mobile && <button className="join-button font-playfair text-[#1A1A40] font-bold px-4 border border-transparent rounded-md transition duration-300 ease-in-out h-[40px] w-[80px] my-2">Join</button>}{!login && !mobile && first.map((item, index) => (
               <a
               className={`hover:scale-105 p-3 bg-gradient-to-b h-[60px] from-[orange] to-[orange] w-[100px] flex justify-center items-center ${
                 index === 0 ? 'module' : ''
               } hover:bg-gradient-to-b hover:from-[#D87A1D] hover:to-[#F69838] transition duration-300 ease-in-out text-[#1A1A40]`}
               key={index}
               href={item.href}
             >
               {item.label}
             </a>
            ))}{login && second.map((item, index) => (
              <a  className={`hover:scale-105 p-3 hover:bg-gradient-to-b h-[60px] hover:from-[orange] w-[110px] flex justify-center items-center gap-2 ${
                index === 0 ? 'module' : ''
              }`} key={index} href={item.href}>
                {item.tag}
                {!mobile && item.label}
              </a>
            ))}</div>
      </div>
      {mobile === false && (
        <div className="flex w-full justify-around p-5">
          <div className="flex justify-between gap-20 fontfam">
            {NAV_ITEMS.map((item, index) => (
              <a className=" hover:scale-105 hover:text-[orange] transition duration-300 ease-in-out" key={index} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
