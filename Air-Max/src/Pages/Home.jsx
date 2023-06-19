import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import '../App.css'
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
import yeezy2 from "../assets/images/yeezy2.jpg";
import adidas1 from "../assets/images/adidas1.jpg";
import adidas2 from "../assets/images/adidas2.jpg";
import adidas6 from "../assets/images/adidas6.jpg";
import adidas4 from "../assets/images/adidas4.jpg";
import adidas5 from "../assets/images/adidas5.jpg";
import Category from "../Components/Category";
import Trending from "../Components/Trending";
import Video from "../Components/Video";
import ProductCard from "../Components/ProductCard";

const Home = () => {


  return (
    <div className="mx-auto">
      <h1 className="text-black text-4xl font-bold  text-center py-5 uppercase tracking-wide block font-titleFont">
        Introducing <span className="text-red-800">AirMax</span> Finnest
        Collection
      </h1>

      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {/* <SwiperSlide>
           
            <video src={adidasV} controls className="w-full h-[600px]" />
          </SwiperSlide> */}
          <SwiperSlide>
            <img src={yeezy2} alt="" className="w-full h-[600px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={adidas1} alt="" className="w-full h-[600px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={adidas2} alt="" className="w-full h-[600px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={adidas6} alt="" className="w-full h-[600px]" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={adidas4} alt="" className="w-full h-[600px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={adidas5} alt="" className="w-full h-[600px]" />
          </SwiperSlide>
        </Swiper>
      </div>

      <Category />

      <Trending />
      <Video />

      <ProductCard 
      />
    </div>
  );
};

export default Home;
