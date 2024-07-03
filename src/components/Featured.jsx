import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
// import CarouselComponent from "./CarouselComponent";

const cats = [
  {
    label: "Jewellery & Accessories",
    pic: <img src="/womenethnic.jpeg" className="rounded-full h-10 w-10 shadow-custom-shadow" />,
    href: "/items"
  },
  {
    label: "Women Ethnic",
    pic: <img src="/womenethnic.jpeg" className="rounded-full h-10 w-10 shadow-custom-shadow" />,
    href: "/items"
  },
  {
    label: "Women Western",
    pic: <img src="/womenethnic.jpeg" className="rounded-full h-10 w-10 shadow-custom-shadow" />,
    href: "/items"
  },
  {
    label: "Mens Ethnic",
    pic: <img src="/womenethnic.jpeg" className="rounded-full h-10 w-10 shadow-custom-shadow" />,
    href: "/items"
  },
  {
    label: "Mens Casuals",
    pic: <img src="/womenethnic.jpeg" className="rounded-full h-10 w-10 shadow-custom-shadow" />,
    href: "/items"
  },
  {
    label: "Kids",
    pic: <img src="/womenethnic.jpeg" className="rounded-full h-10 w-10 shadow-custom-shadow" />,
    href: "/items"
  },
  {
    label: "Toys & Accessories",
    pic: <img src="/womenethnic.jpeg" className="rounded-full h-10 w-10 shadow-custom-shadow" />,
    href: "/items"
  },
  {
    label: "Bags & Footwear",
    pic: <img src="/womenethnic.jpeg" className="rounded-full h-10 w-10 shadow-custom-shadow" />,
    href: "/items"
  }
];

const Featured = () => {
  return (
    <div name="featured" className="h-[100vh] w-full featurebg p-[60px] flex justify-between">
      <div name="left" className="flex flex-col h-[35pc] w-[30vw] bg-[#EED9C4] rounded-lg">
        <div className="bg-white flex m-3 rounded-lg border-[#800020] border-[2px] h-9 justify-start items-center gap-5 hover:bg-[#F5F5DC] hover:border-[#1A1A40] transition-colors duration-300">
          <FaMagnifyingGlass className="text-[#1A1A40] m-2" />
          <input
            type="text"
            placeholder="Search for categories..."
            className="bg-transparent outline-none focus:border-transparent pl-2"
          />
        </div>
        <div className="flex flex-col m-6 p-2 rounded-lg bg-[#F1E9D2]">
          {cats.map((item, index) => (
            <a
              className="flex justify-start items-center text-black fontfam font-semibold gap-4 pt-3 hover:scale-105 transition duration-300 ease-in-out transform origin-left"
              key={index}
              href={item.href}
            >
              <div>{item.pic}</div>
              <div className="w-full">
                <div className="pb-2 border-b-2 border-[#800020] mr-4">{item.label}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div name="right" className="h-[35pc] w-[40vw]">
        {/* <CarouselComponent/> */}
      </div>
    </div>
  );
};

export default Featured;
