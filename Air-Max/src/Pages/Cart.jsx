import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem } from "../Redux/AirmaxSlice";
import {
  decreaseQuanitity,
  incrementQuanitity,
  resetItems,
} from "../Redux/AirmaxSlice";
import { AiTwotoneDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const cartdata = useSelector((state) => state.airmax.productData);
  const [state, setState] = useState(cartdata.length);
  const [totalPrice, SetTotalPrice] = useState("")

  useEffect(() => {
    let price = 0;

    cartdata.map((data) => {
      price += data.quantity * data.price;
      return price;
    });

    SetTotalPrice(price.toFixed(2));
  }, [cartdata]);


  const dispatch = useDispatch();
  return (
    <div>
      <div className="">
        <img
          src="https://cdn.pixabay.com/photo/2020/01/13/14/44/checkout-4762569_1280.jpg"
          alt=""
          className="object-cover w-full h-[400px]"
        />
      </div>

      <h2 className="mt-10 text-2xl text-black font-bold tracking-wide text-center">
        Cart
      </h2>

      {state != 0 ? (
        <div className="flex mt-20 mx-10 gap-5 ">
          <div className="w-3/5 flex flex-col gap-3">
            {cartdata.map((item) => {
              return (
                <div className="flex items-center justify-evenly gap-5 ">
                  <span
                    onClick={() =>
                      dispatch(deleteItem(item._id)) &
                      toast.error(`${item.title} has been removed from cart`)
                    }
                    className="text-red-800 text-xl"
                  >
                    <AiTwotoneDelete />
                  </span>
                    <div className="w-[12rem] py-5 px-5 ">
                      <img src={item.image} alt="" className="w-[12rem]" />
                    </div>

                  <div>
                    <h3>{item.title}</h3>
                  </div>

                  <p>${item.price}</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        dispatch(
                          decreaseQuanitity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className="border h-5 gap-5 font-normal text-lg flex items-center justify-center px-2 
                hover:bg-red-800 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(
                          incrementQuanitity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className="border h-5 gap-5 font-normal text-lg flex items-center justify-center px-2 
                hover:bg-red-800 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      +
                    </button>
                  </div>

                  <p>${item.quantity * item.price}</p>
                </div>
              );
            })}

            <p
              onClick={() =>
                dispatch(resetItems()) &
                toast.error("Your Cart is Empty!") &
                setState(0)
              }
              className="py-5 px-5 bg-red-950 w-[10rem] text-white rounded-lg flex  items-center justify-center"
            >
              Clear Cart
            </p>
          </div>

          <div className="w-2/5 bg-[#fafafa] py-6 px-4 h-[30rem]">
            <h1 className="uppercase font-bodyFont font-semibold text-black text-2xl text-center mb-3 border-b-[1px] py-3 border-b-red-400">
              Checkout
            </h1>
            <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <p className="flex items-center gap-4 text-base ">
                Subtotal
                <span className="font-titleFont font-bold text-lg">${totalPrice}</span>
              </p>

              <p className="flex items-center  gap-4 text-base ">
                Shipping
                <span className="font-titleFont font-bold text-lg">
                  Don’t call Hooks inside loops, conditions, or nested
                  functions.
                </span>
              </p>

              <p className="text-base flex items-center gap-4 ">
                Tax fee
                <span className="font-titleFont font-bold text-lg">
                  14% Stamp Duty Charge
                </span>
              </p>

              <p className="flex items-center gap-4 text-base ">
                Total
                <span className="font-titleFont font-bold text-lg">${totalPrice}</span>
              </p>
            </div>

            <button className="uppercase bg-red-800 py-4 px-10 w-full mt-10  hover:bg-gray-800 duration-300 ">
              Pay
            </button>
          </div>
        </div>
      ) : (
        <p className="text-2xl bg-text-gray-800 text-center my-5 font-bodyFont">
          Pls add Item to cart to Checkout
        </p>
      )}

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

export default Cart;
