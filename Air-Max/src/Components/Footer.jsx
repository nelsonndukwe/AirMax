import React from "react";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiYoutubeLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";
import {CgProfile} from 'react-icons/cg'
import {BsCart} from 'react-icons/bs'
import {CiLocationOn, CiDeliveryTruck} from 'react-icons/ci'

const Footer = () => {
  return (
    <div className="bg-black mt-10 py-20">
      <div className="grid grid-cols-4 ml-10 mr-10 gap-2">
        <div className="flex flex-col gap-3 items-center justify-start">
          <h2 className="text-2xl text-white font-heading tracking-wide">
            AirMax
          </h2>

          <p className="text-white text-sm tracking-wide">AirMax.com</p>
          <div className="flex gap-2 mt-5 text-[20px] text-gray-400">
            <RiFacebookLine className="hover:text-white duration-300 cursor-pointer text-red-900" />
            <RiInstagramLine className="hover:text-white duration-300 cursor-pointer text-red-900" />
            <RiYoutubeLine className="hover:text-white duration-300 cursor-pointer text-red-900" />
            <RiTwitterLine className="hover:text-white duration-300 cursor-pointer text-red-900" />
            <RiGithubLine className="hover:text-white duration-300 cursor-pointer text-red-900" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 font-titleFont">
            Locate Us
          </h2>
          <div className="flex flex-col gap-2 text-base ">
            <p className="text-white font-base tracking-wide">
              Company: AirMax
            </p>
            <p className="text-white font-base tracking-wide">
              Webiste : AirMax.com
            </p>
            <p className="text-white font-base tracking-wide">
            Mobile: 09064035138
            </p>
            <p className="text-white font-base tracking-wide">
              Email: nelsonndukwe800@gmail.com
            </p>
          </div>
        </div>


        <div className="flex gap-2 flex-col text-base"> 
        <h2 className="text-2xl font-semibold text-white mb-4 font-titleFont">Profile</h2>
        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer text-white font-base tracking-wide"><span><CgProfile/></span>My Account</p>
        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer text-white font-base tracking-wide"><span><BsCart/></span>Checkout</p>
        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer text-white font-base tracking-wide"><span><CiLocationOn/></span>Order Tracking</p>
        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer text-white font-base tracking-wide"><span><CiDeliveryTruck/></span>Help and Support</p>


        </div>


        <div className="flex flex-col gap-8 items-center justify-center">
          <label className="text-white">Subscrie to our Weekly Newsletter of The best Products</label>
          <input type="email" placeholder="Enter Email..." className="bg-transparent border px-4 text-sm w-[300px] py-3 text-white "/>
          <button className="text-sm border p-3 text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black ">Subscribe</button>
          </div>

      </div>
    </div>
  );
};

export default Footer;
