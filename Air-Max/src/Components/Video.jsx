import React, { useState, useRef } from "react";
import adidasV from "../assets/images/adidas-video.mp4";
import { motion } from "framer-motion";
import nike from "../assets/images/nike-banner-1.webp";

const Video = () => {
  return (
    <motion.div>
      {/* <video src={adidasV}  controls className="w-full " /> */}

      <h1 className="flex justify-center items-center text-2xl text-gray-800 font-bodyFont font-semibold py-10">
        A Pair For All
      </h1>
      <div>
        <img
          src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/Source_Max_2560/628774_v2.jpg"
          alt="banner"
          className=" w-full h-[550px]"
        />
      </div>
    </motion.div>
  );
};

export default Video;
