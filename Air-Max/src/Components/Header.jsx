import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const productData = useSelector((state) => state.airmax.productData);
  return (
    <div
      className="w-full h-10 flex justify-around items-center  font-titleFont sticky top-0 z-50 py-7 border-b-[1px]
     border-b-gray-800 bg-white"
    >
      <div>
        <Link to="/">
          <h2 className="text-2xl text-red-900 font-heading ">AirMax</h2>
        </Link>
      </div>

      <ul className="flex items-center gap-8 ">
        <Link to="/men">
          <li className="text-xl hover:underline hover:text-red-900 duration-300">
            Men
          </li>
        </Link>
        <Link to="/women">
          <li className="text-xl hover:underline hover:text-red-90 duration-300">
            Women
          </li>
        </Link>{" "}
        <Link to="/children">
          <li className="text-xl hover:underline hover:text-red-90 duration-300">
            Children
          </li>{" "}
        </Link>
      </ul>

      <div className="flex items-center justify-center gap-5 ">
        <div className=" w-full">
          <input
            type="search"
            name="search"
            placeholder="Search Product"
            className="px-4 text-sm w-[200px] py-2 border-[1px] rounded-md border-gray-800"
          />
        </div>

        <div className="flex items-center justify-evenly gap-6 ">
          <Link to="cart">
            <div className="relative">
              <FiShoppingCart className="text-[25px] text-black hover:text-blue-600 duration-300 " />
              <div>
              <p className="absolute top-[-10px] bg-red-800 left-[14px] font-bodyFont text-[12.586px] rounded-full px-[1px] py-[1px] text-white">
                {productData.length}
              </p>
                </div>
            </div>
          </Link>

          <Link to="/favorite">
            <div>
              <AiOutlineHeart className="text-[25px] text-black hover:text-red-800 duration-300 " />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
