import React from "react";
import Product from "../components/Product";
import products from "../constants/data";

const Home = () => {
  console.log(products);
  return (
    <section className="min-h-[75vh] ivory">
      <Product product={products[0]} />
    </section>
  );
};

export default Home;
