import React, { useState } from "react";
import { GoStarFill } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Product = ({ product }) => {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center lg:items-start h-full w-full lg:px-44 lg:py-20 p-10 lg:gap-20 gap-10 fontfam">
      <img
        src="/jakvg_512.webp"
        alt="Product Image"
        className="shadow-lg rounded-xl w-fit h-fit object-contain"
      />
      <article className="flex flex-col gap-5 lg:gap-10 w-fit h-fit">
        <div className="rounded-xl bg-white p-10 shadow-lg flex flex-col gap-5 text-[#1A1A40]">
          <div className="flex sm:gap-10 justify-between sm:justify-start items-center">
            <span className="text-4xl font-bold">{product.title}</span>

            <div className="flex items-center gap-5">
              <div className="text-xl font-bold flex items-center gap-3 navy-blue w-fit rounded-s-full rounded-e-full p-2 px-3 hover:bg-[orange] group hover:text-black hover:scale-105">
                <span className="text-[ivory]">{product.rating}</span>
                <GoStarFill className="text-[ivory]" />
              </div>
              <IoMdInformationCircleOutline
                className="text-[navy] text-xl hover:text-[orange] hover:scale-105"
                onMouseEnter={() => setShowReviews(true)}
                onMouseLeave={() => setShowReviews(false)}
              />
              {showReviews && (
                <div className="flex gap-5">
                  <span className="text-sm">Reviews: {product.reviews}</span>
                  <span className="text-sm">Reviews: {product.ratings}</span>
                </div>
              )}
            </div>
          </div>
          <span className="text-2xl">₹ {product.price}</span>
        </div>
        <div className="rounded-xl bg-white p-10 shadow-lg flex flex-col gap-5">
          <span className="font-bold text-3xl">Product Details</span>
          <p className="text-xl">{product.description}</p>
        </div>
      </article>
    </section>
  );
};

export default Product;
