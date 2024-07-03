import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { categories } from "../constants/data";
import CarouselComponent from "./CaraouselComponent";

const Featured = () => {
  const [hoveredImages, setHoveredImages] = useState([]);

  const handleMouseEnter = (images) => {
    setHoveredImages(images);
  };
  return (
    <div className="h-screen flex justify-evenly items-center gap-[50px]">
      <div className="flex flex-col w-1/3 bg-gray-200 p-8 rounded-lg">
        <div className="bg-white flex rounded-lg border border-gray-300 h-9 items-center gap-5 hover:bg-gray-100 transition-colors duration-300">
          <FaMagnifyingGlass className="text-gray-600 m-2" />
          <input
            type="text"
            placeholder="Search for categories..."
            className="bg-transparent outline-none focus:border-transparent pl-2"
          />
        </div>
        <div className="mt-8">
          {categories.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-4 py-2 hover:bg-gray-100 transition duration-300 ease-in-out"
              onMouseEnter={() => handleMouseEnter(item.caraousel || [])}
            >
              <img
                src={item.pic}
                alt={item.label}
                className="rounded-full h-10 w-10 shadow-md"
              />
              <div>{item.label}</div>
            </a>
          ))}
        </div>
      </div>
      <div className="w-2/3">
        <CarouselComponent images={hoveredImages} />
      </div>
    </div>
  );
};
export default Featured;
