import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sneakers from "../assets/Data";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { AiFillCaretRight } from "react-icons/ai";
import { motion } from "framer-motion";

const Product = () => {
  const [color, setColor] = useState(0);

  const id = useParams();
  const details = Sneakers.find((single) => single.id == id.id);
  const { title, desc, price, imageList, category, Company } = details;

  const handlechange = (key) => {
    setColor(key);
  };
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-12 items-center">
        <div className="w-2/5 relative">
          <motion.img
           
            src={imageList[color]} 
            alt="productimag"
            className="w-full object-cover "
          />
        </div>

        <div className="w-3/5 relative">
          <div>
            <p className="text-2xl font-titleFont font-semibold my-5">{title}</p>
          </div>
          <p>{category} Shoes</p>

          <motion.div layout 
          exit={{opacity:0, x:-100}}
          className="flex items-center gap-1 my-5">
            {imageList.map((option, index) => {
              return (
                <motion.div 
               
                whileTap={{ scale: 0.8 }} key={index}>
                  <img
                    src={option}
                    alt="options"
                    className="w-[90px] object-cover rounded-xl"
                    key={index}
                    onClick={() => handlechange(index)}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-3">
            <p className="font-semibold text-xl text-gray-900 my-5">{price}</p>
          </div>

          <div className="flex gap-2 my-5">
            <div className="flex items-center gap-2 text-base ">
              <AiFillStar className="text-orange-600" />
              <AiFillStar className="text-orange-600" />
              <AiFillStar className="text-orange-600" />
              <AiFillStar className="text-orange-600" />
              <AiFillStar className="text-orange-600" />
            </div>

            <div>
              <p className="text-xs text-gray-500">(1 Customer Review)</p>
            </div>
          </div>

          <p className="text-base mt-3 text-gray-500 max-w-2xl text-justify my-5">
            {desc}
          </p>

          <button className="flex items-center bg-black text-white py-3 px-6 active:bg-gray-800 gap-2 my-5">
            Add To Cart
            <span>
              <MdOutlineShoppingCartCheckout /> 
            </span>
          </button>

          <p className="text-base text-gray-500 flex items-center gap-1 my-5">
            Category{" "}
            <span>
              <AiFillCaretRight />
            </span>
            <span className="font-medium capitalize">{category}</span>
          </p>

          <p className="absolute top-6 right-12  bg-black text-white py-2 px-4 active:bg-gray-800 rounded-md">{Company}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
