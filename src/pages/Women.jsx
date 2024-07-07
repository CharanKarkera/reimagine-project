import React from "react";
import Headphone from "../components/Headphone";
import Catcard from "../components/Catcard";
import { women } from "../constants/items";
const Women = () => {
  return (
    <section className="min-h-[75vh]">
      <Headphone />
      <article className="flex flex-wrap w-fit h-fit gap-10 items-center justify-center mb-10 p-10">
        {women.map((item, index) => (
          <Catcard item={item} key={index} />
        ))}
      </article>
    </section>
  );
};

export default Women;
