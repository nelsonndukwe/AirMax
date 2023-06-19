import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import ProductCategory from "./ProductCategory";
import { staggerContainer } from "../Framer/Framer";

const Category = () => {
  const [active, setActive] = useState("hello-2");

  const ProductCat = [
    {
      id: "hello-1",
      image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9df857a1-1dc3-49ea-880f-1bb1f0da1ffa/air-force-1-low-x-undefeated-mens-shoes-R2PS0J.png",
      title: "Mens Shoe",
      route: "/men",
    },

    {
      id: "hello-2",
      image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b46c043-4b2e-487b-b072-70f9c5638f31/pegasus-trail-4-womens-trail-running-shoes-CQT261.png",
      title: "Womens Shoe",
      route: "/women",
    },

    {
      id: "hello-3",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e6612c0b-7a9d-4dd4-87b3-4cfea47c6284/air-max-270-big-kids-shoes-HbtNX3.png",
      title: "Kids",
      route: "/children",
    },

    {
      id: "hello-4",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1ca2b1eb-ec53-42f1-84b6-adc37e488e15/zoom-mercurial-vapor-15-elite-fg-firm-ground-soccer-cleats-NLZxDR.png",
      title: "Soccer",
      route: "/",
    },

    {
      id: "hello-5",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a6914ce-ef4f-4d21-95b7-897baee8ce5d/nikecourt-zoom-vapor-cage-4-rafa-mens-hard-court-tennis-shoes-dMxMqL.png",
      title: "Tennis",
      route: "/",
    },
  ];

  return (
    <div className="py-10 mr-10 ml-10">
      <motion.h1 className="flex justify-center items-center text-2xl text-gray-800 font-bodyFont font-semibold">
        Product Category
      </motion.h1>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col"
      >
        <div className="my-10 w-full  flex flex-col gap-y-5 items-center justify-center md:flex-row gap-x-2 min-h-[70vh]">
          {ProductCat.map((item, id) => (
            <div key={id}>
              <ProductCategory
                key={item.id}
                item={item}
                id={id}
                active={active}
                handleClick={setActive}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Category;
