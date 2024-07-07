import React from "react";
import Cloth from "../components/Cloth";
import Catcard from "../components/Catcard";
import { men } from "../constants/items";
const Men = () => {
  return (
    <section>
      <Cloth index={0} />
      <article className="flex flex-wrap w-fit h-fit gap-10 items-center justify-center mb-10">
        {men.slice(0, 8).map((item, index) => (
          <Catcard item={item} key={index} />
        ))}
      </article>
    </section>
  );
};

export default Men;
