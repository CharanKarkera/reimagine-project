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

const EXTRA_ITEMS = [
  {
    label: "Login",
    href: "/login",
  },
  {
    label: "Sign Up",
    href: "/signup",
  },
];

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <nav className="flex flex-col justify-center py-5 px-10 text-xl items-center navy-blue text-[ivory]">
      <img src="/logo.png" alt="Meesho" className="w-[10%] h-[5%] p-5" />
      {mobile === false && (
        <div className="flex w-full justify-around p-5">
          <div className="flex justify-between gap-20">
            {NAV_ITEMS.map((item, index) => (
              <a key={index} href={item.href}>
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
