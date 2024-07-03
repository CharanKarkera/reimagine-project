import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { IoMan } from "react-icons/io5";
import { IoWomanSharp } from "react-icons/io5";
import { TbMoodKidFilled } from "react-icons/tb";
import { FaPaintBrush } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";

const NAV_ITEMS = [
  {
    label: "Men",
    href: "/",
    tag: <IoMan className="text-[orange]" />,
  },
  {
    label: "Women",
    href: "/",
    tag: <IoWomanSharp className="text-[orange]" />,
  },
  {
    label: "Kids",
    href: "/",
    tag: <TbMoodKidFilled className="text-[orange]" />,
  },
  {
    label: "Beauty",
    href: "/",
    tag: <FaPaintBrush className="text-[orange]" />,
  },
  {
    label: "Home & Kitchen",
    href: "/",
    tag: <FaKitchenSet className="text-[orange]" />,
  },
];

const first = [
  {
    label: "Login",
    href: "/login",
  },
  {
    label: "SignUp",
    href: "/signup",
  },
];
const basic = [
  {
    label: "About",
    href: "/",
    tag: <HiQuestionMarkCircle className="h-[20px] w-[20px]" />,
  },
  {
    label: "Contact",
    href: "/",
    tag: <IoCall className="h-[20px] w-[20px]" />,
  },
];
const second = [
  {
    label: "Profile",
    href: "/",
    tag: <IoPersonCircleSharp />,
  },
  {
    label: "Cart",
    href: "/",
    tag: <FaShoppingCart />,
  },
];
const Navbar = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const [login, setlogin] = useState(authStatus);
  console.log(login);
  const [mobile, setMobile] = useState(window.innerWidth < 768);
  const [showfeat, isshowfeat] = useState(false);
  const dispRef = useRef(null);

  const handlefeats = () => {
    isshowfeat(!showfeat);
    console.log(showfeat);
  };

  useEffect(() => {
    setlogin(authStatus);
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dispRef.current && !dispRef.current.contains(event.target)) {
        isshowfeat(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispRef]);

  return (
    <nav className="flex flex-col justify-center text-xl items-center text-[ivory] radial-gradient">
      {mobile && (
        <div className="flex justify-between items-center w-full relative">
          <img
            src="/logo.png"
            alt="Meesho"
            className="order-1 h-[80px] w-[220px]   p-5 hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <div className="order-2 mr-3 text-[#F69838] flex justify-evenly gap-4 items-center">
            {!login && (
              <>
                <IoPersonCircleSharp className="h-6 w-6 hover:scale-105 transition-transform duration-300 ease-in-out" />
              </>
            )}
            {!login && (
              <>
                <FaShoppingCart className="h-6 w-6 hover:scale-105 transition-transform duration-300 ease-in-out" />
              </>
            )}
            <div onClick={handlefeats}>
              <FaBars className="h-6 w-6 hover:scale-105 transition-transform duration-300 ease-in-out" />
            </div>
          </div>
        </div>
      )}
      {mobile && showfeat && (
        <div
          id="disp"
          ref={dispRef}
          className="h-fit p-3 w-[250px] rounded-lg bg-[#4B4B4B] absolute top-[70px] right-3 z-20"
        >
          <div className="flex gap-3 justify-evenly items-center">
            {!login &&
              first.map((item, index) => (
                <a
                  className={`hover:scale-105 hover:text-[orange] transition duration-300 ease-in-out fontfam w-full flex justify-center ${
                    index === 0 ? "mod" : ""
                  }`}
                  key={index}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
          </div>
          <div className="bottom-0 left-0 w-full h-[2px] mt-2">
            <div className="h-full w-full orange"></div>
          </div>

          <div className="flex flex-col fontfam p-3 space-y-1 relative">
            {NAV_ITEMS.map((item, index) => (
              <div key={index} className="relative">
                <a
                  className="hover:scale-105 hover:text-[orange] transition duration-300 ease-in-out py-2 flex justify-start gap-3 items-center"
                  href={item.href}
                >
                  {item.tag}
                  {item.label}
                </a>
                {index < NAV_ITEMS.length - 1 && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px]">
                    <div className="h-full w-full bg-gradient-to-r from-[#D87A1D] to-transparent blur-none"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {!mobile && (
        <div className="flex justify-between w-full fontfam m-0 p-0">
          <div className="flex pl-3 gap-[3px] mt-2 order-1">
            {basic.map((item, index) => (
              <a
                className={`hover:scale-105 p-3 hover:bg-gradient-to-b h-[60px] from-[orange] hover:text-[#1A1A40] w-[100px] flex justify-center items-center ${
                  index === 0 ? "module" : ""
                } text-[#F69838]`}
                key={index}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
          <img
            src="/logo.png"
            alt="Meesho"
            className=" h-[80px] w-[220px] md:h-[7pc] md:w-[19pc] p-5 hover:scale-105 transition-transform duration-300 ease-in-out order-2"
          />
          <div className="flex pr-3  gap-[3px] md:order-3 order-2">
            {login &&
              !mobile &&
              first.map((item, index) => (
                <a
                  className={`hover:scale-105 p-3 bg-gradient-to-b h-[60px] from-[orange]  hover:text-[#1A1A40] w-[100px] flex justify-center items-center ${
                    index === 0 ? "module" : ""
                  } text-[#F69838]`}
                  key={index}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            {!login &&
              second.map((item, index) => (
                <a
                  className={`hover:scale-105 p-3 hover:bg-gradient-to-b h-[60px] from-[orange] hover:text-[#1A1A40] w-[100px] flex justify-center items-center ${
                    index === 0 ? "module" : ""
                  } text-[#F69838]`}
                  key={index}
                  href={item.href}
                >
                  {item.tag}
                  {!mobile && item.label}
                </a>
              ))}
          </div>
        </div>
      )}
      {mobile === false && (
        <div className="flex w-full justify-around p-5">
          <div className="flex justify-between gap-20 fontfam">
            {NAV_ITEMS.map((item, index) => (
              <a
                className=" hover:scale-105 hover:text-[orange] transition duration-300 ease-in-out"
                key={index}
                href={item.href}
              >
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
