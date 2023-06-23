import React from "react";
import Sneakers from "../assets/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/AirmaxSlice";
import { ToastContainer, toast } from "react-toastify";

import { TfiShoppingCartFull } from "react-icons/tfi";

const Trending = () => {
  const dispatch = useDispatch();

  return (
    <div className="ml-10 mr-10">
      <div>
      <h1 className="flex justify-center items-center text-2xl text-gray-800 font-bodyFont font-semibold">
        Trending Products
      </h1>
      </div>
      

      <div className="grid grid-cols-4 gap-4 py-10 ">
        {Sneakers.map((item) => {
          if (item.trending === true) {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                key={item.id}
                className="group relative bg-gray-200 pb-5 rounded-b-lg "
              >
                <Link to={`product/${item.id}`}>
                  <div className="w-full cursor-pointer overflow-hidden">
                    <img
                      src={item.image}
                      alt="productimg"
                      className="w-full h-full object-cover group-hover:scale-[1.2] duration-500"
                    />
                  </div>
                </Link>

                <h1 className="px-3 pt-3">{item.title}</h1>
                <div className="px-3 pt-3 flex justify-between items-center ">
                  <p className="text-black font-semibbold font-titleFont">
                    {item.price}
                  </p>
                </div>

                <motion.div
                  whileTap={{
                    scale: 0.8,
                  }}
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.desc,
                      })
                    ) & toast.success(`${item.title} is added to cart`)
                  }
                  className="absolute right-3 bottom-[60.8px] text-xl"
                >
                  <TfiShoppingCartFull />
                </motion.div>

                <div className="absolute top-4 right-0">
                  {item.InStock && (
                    <p className="bg-black text-white font-semibold font-titleFont px-6 py-">
                      Sale
                    </p>
                  )}
                </div>
              </motion.div>
            );
          }
        })}

        
      </div>

     <ToastContainer
     position="top-left"
     autoClose={2000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover



/>
    </div>
  );
};

export default Trending;
