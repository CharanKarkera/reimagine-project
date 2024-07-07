import React from "react";
import Cloth from "../components/Cloth";
import Catcard from "../components/Catcard";
import { kids } from "../constants/items";
import Shoe from "../components/Shoe";
const Kids = () => {
  return (
    <section>
      <Shoe index={1} />
      <article className="flex flex-wrap w-fit h-fit gap-10 items-center justify-center p-10">
        {kids.slice(0, 8).map((item, index) => (
          <Catcard item={item} key={index} />
        ))}
      </article>
    </section>
  );
};

export default Kids;
