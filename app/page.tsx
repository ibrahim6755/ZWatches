import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import React from "react";

const Home = () => {
  return (
    <div className="bg-[#F8F9FA]">
      <Hero />
      <h2 className="w-full text-center text-2xl md:text-4xl font-semibold py-6 text-black">
        All Products
      </h2>
      <ProductList />
    </div>
  );
};

export default Home;
