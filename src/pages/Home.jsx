import React from "react";
import Featured from "../components/Featured";
import CarouselComponent from "../components/CaraouselComponent";
import Catcard from "../components/Catcard";
import { men, women, kids } from "../constants/items";
import Show from "../components/Show";

const md_images = [
  "/caraousel1.jpeg",
  "https://cdn.sanity.io/images/qa41whrn/prod/52e4dd38bfc2f86dd4b8728b4d1fd39f8b30fe6a-6000x2167.jpg?w=2160&q=80&auto=format",
  "/caraousel3.jpeg",
];

const images = [
  "/md1.jpeg",
  "/md2.jpeg",
  "/md3.jpeg",
  "/md4.jpeg",
  "/md5.jpeg",
];

const Home = () => {
  // console.log(products);
  return (
    <>
      <section>
        <Show />
      </section>
      <section className="min-h-[75vh] p-10 bg-[#D5D5D5]">
        <CarouselComponent images={images} md_images={md_images} />
        <article className="flex flex-col sm:flex-row py-10 gap-10 sm:gap-0 justify-between">
          <Featured />
          <div className="flex flex-wrap w-fit h-fit gap-5 justify-center items-center sm:justify-end">
            {men.slice(0, 3).map((item, index) => (
              <Catcard item={item} key={index} />
            ))}
            {women.slice(0, 3).map((item, index) => (
              <Catcard item={item} key={index} />
            ))}
            {kids.slice(1, 4).map((item, index) => (
              <Catcard item={item} key={index} />
            ))}
          </div>
        </article>
      </section>
    </>
  );
};

export default Home;
