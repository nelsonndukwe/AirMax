import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBag } from "react-icons/sl";
import { Link } from "react-router-dom";

const Header = () => {
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
              <SlBag className="text-2xl text-black hover:text-blue-600 duration-300 " />
              <p className="absolute top-[3.5px] left-[8.5px] font-bodyFont text-sm ">
                1
              </p>
            </div>
          </Link>

          <Link to="/favorite">
            <div>
              <AiOutlineHeart className="text-2xl text-black hover:text-red-800 duration-300 " />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
