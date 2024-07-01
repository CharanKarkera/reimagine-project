import React from "react";
import { useState, useEffect } from "react";

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
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
const second = [
  {
    label: "Profile",
    href: "/login",
  },
  {
    label: "Cart",
    href: "/signup",
  },
];
const Navbar = () => {
  const [login, islogin]=useState(false)
  const [mobile, setMobile] = useState(false);
  return (
    <nav className="flex flex-col justify-center text-xl items-center navy-blue text-[ivory]">
      <div className="flex justify-between w-full fontfam m-0 p-0">
        <div className="flex pl-3">{basic.map((item, index) => (
                <a className=" hover:scale-105 p-3 hover:bg-gradient-to-b h-[60px] hover:from-[orange] w-[100px] flex justify-center" key={index} href={item.href}>
                {item.label}
              </a>
            ))}</div><img src="/logo.png" alt="Meesho" className="h-[20%] w-[20%] p-5 hover:scale-105"/>
        <div className="flex pr-3">{login && first.map((item, index) => (
              <a className=" hover:scale-105 p-3 hover:bg-gradient-to-b  h-[60px] hover:from-[orange]  w-[100px] flex justify-center" key={index} href={item.href}>
                {item.label}
              </a>
            ))}{!login && second.map((item, index) => (
              <a  className=" hover:scale-105 p-3 hover:bg-gradient-to-b h-[60px] hover:from-[orange]  w-[100px] flex justify-center" key={index} href={item.href}>
                {item.label}
              </a>
            ))}</div>
      </div>
      {mobile === false && (
        <div className="flex w-full justify-around p-5">
          <div className="flex justify-between gap-20 fontfam">
            {NAV_ITEMS.map((item, index) => (
              <a className=" hover:scale-105 hover:text-[orange]" key={index} href={item.href}>
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
