import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { men, women, kids } from "../constants/items";

const Catcard = ({ item }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div
      href={item.href}
      className="h-[400px] w-[290px] md:h-[500px] md:w-[410px] bg-white text-[black] comic-neue-bold mb-5 shadow-lg shadow-black hover:shadow-2xl hover:shadow-black transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 rounded-xl flex flex-col justify-end overflow-hidden p-2 hover:p-0"
      style={{
        backgroundImage: `url(${item.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <img
        src={item.img}
        alt="img"
        className="h-[60%] w-full rounded-t-lg object-fill"
      /> */}

      <div className="flex flex-col justify-start gap-2 p-3 bg-white bg-opacity-80 hover:bg-opacity-100">
        <p className="text-[black] font-bold text-2xl overflow-hidden whitespace-nowrap overflow-ellipsis">
          {item.name.length > 10
            ? item.name.substring(0, 30) + "..."
            : item.name}
        </p>
        <p className="text-[gray] font-medium -mt-2 text-xl">{item.desc}</p>
        <div className="flex justify-between items-center pb-2">
          <div className="flex gap-2">
            <p className="text[#800020] font-medium">Rs.{item.price}</p>
            <s className="text-gray-700 font-semibold">Rs.{item.org}</s>
          </div>
          <p className="text-[#228B22] font-semibold"> {item.dis}</p>
        </div>

        <div className="flex justify-between items-center border-t-2 border-gray-400 t">
          <div className="flex justify-start items-center gap-1 pt-2 font-semibold text-gray-600">
            <p>{item.rate}</p>
            <FaStar className="text-[#FFD700]" />
          </div>
          <FaRegHeart
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
            className={`${liked ? "hidden" : "block"}`}
          />
          <FaHeart
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
            className={`${liked ? "block" : "hidden"} text-red-400`}
          />
        </div>
      </div>
    </div>
  );
};
export default Catcard;
