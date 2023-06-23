import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/AirmaxSlice";
import { ToastContainer, toast } from "react-toastify";


const ProductsTemplate = ({ item, index }) => {

  const dispatch = useDispatch()

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      key={index}
    >
      <motion.div
        layout
        className="group relative bg-gray-200 pb-5 rounded-b-lg "
      >
        <Link to={`product/${item.id}`}>
          <div
            className="w-full cursor-pointer overflow-hidden 
              "
          >
            <img
              src={item.image}
              alt="productimg"
              className="w-full h-full object-cover group-hover:scale-[1.2] duration-500"
            />
          </div>
        </Link>
        <h1 className="px-3 pt-3">{item.title.substring(0, 24)}</h1>
        <div className="px-3 pt-3 flex justify-between items-center ">
          <p className="text-black font-semibbold font-titleFont">
            {item.price}
          </p>
          <p className="line-through text-gray-600 font-titleFont">
            {item.oldPrice}
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
    </motion.div>
  );
};

export default ProductsTemplate;
