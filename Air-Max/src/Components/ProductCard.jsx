import React, { useState  } from "react";
import Sneakers from "../assets/Data";
import ProductsTemplate from "./ProductsTemplate";
import { motion } from "framer-motion";

const ProductCard = () => {
  const [filterItems, setFilterItems] = useState(Sneakers);

  const selectFilter = (selectItems) => {
    const updatedFilter = Sneakers.filter((items) => {
      return items.category === selectItems;
    });

    setFilterItems(updatedFilter);
  };


  
  return (
    <div className="ml-10 mr-10 py-10">
      <h1 className="flex justify-center items-center text-2xl text-gray-800 font-bodyFont font-semibold py-3">
        SHOP
      </h1>
      <div className="flex justify-center items-center gap-4">
      <p
          className="text-xl text-black hover:text-red-800 underline cursor-pointer"
          onClick={() => setFilterItems(Sneakers)}
        >
          All
        </p>
        <p
          className="text-xl text-black hover:text-red-800 underline cursor-pointer"
          onClick={() => selectFilter("Mens")}
        >
          Men
        </p>
        <p
          className="text-xl text-black hover:text-red-800 underline cursor-pointer"
          onClick={() => selectFilter("Womens")}
        >
          Women
        </p>
        <p
          className="text-xl text-black hover:text-red-800 underline cursor-pointer"
          onClick={() => selectFilter("Kids")}
        >
          Children
        </p>
      </div>

      <motion.div 
      layout
      className="grid grid-cols-4 gap-4 py-10">
        {filterItems.map((item, index) => {
          return (
            <ProductsTemplate 
            index={index}
            item={item}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default ProductCard;
