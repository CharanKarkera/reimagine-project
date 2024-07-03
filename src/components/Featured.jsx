import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaTimes, FaBars } from "react-icons/fa";
import { categories } from "../constants/data";

const Featured = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col p-5 w-full md:w-1/3 h-fit shadow-lg shadow-black fontfam">
      <div className="bg-white flex rounded-lg border border-gray-300 h-9 items-center gap-5 hover:bg-gray-100 transition-colors duration-300">
        <FaMagnifyingGlass className="text-gray-600 m-2 bg-gray-200" />
        <input
          type="text"
          placeholder="Search for categories..."
          className="bg-transparent outline-none focus:border-transparent pl-2 w-full"
        />
        <div className="md:hidden ml-auto flex items-center ">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="focus:outline-none"
          >
            {isDropdownOpen ? (
              <FaTimes className="text-gray-600 m-2 bg-gray-200" />
            ) : (
              <FaBars className="text-gray-600 m-2 bg-gray-200" />
            )}
          </button>
        </div>
      </div>
      <div className={`mt-8 ${isDropdownOpen ? "block" : "hidden"} md:block`}>
        {categories.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center gap-4 py-2 hover:bg-gray-200 hover:scale-105 transition duration-300 ease-in-out rounded-xl px-2"
          >
            <img
              src={item.pic}
              alt={item.label}
              className="h-10 w-10 shadow-md"
            />
            <div>{item.label}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Featured;
