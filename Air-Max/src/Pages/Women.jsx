import React from 'react'
import mother from '../assets/images/adidas6.jpg'
import Sneakers from '../assets/Data'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import { TfiShoppingCartFull } from "react-icons/tfi";


const Women = () => {
  return (
    <div>
      <div className=''>
        <img src={mother} alt='mother'/>
      </div>

      <h1 className='text-3xl font-titleFont text-center mt-10'>WOMEN</h1>


      <div className="grid grid-cols-4 gap-4 py-10 ml-10 mr-10">
        {Sneakers.map((item) => {
          if (item.category === "Womens") {
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
      


    </div>
  )
}

export default Women