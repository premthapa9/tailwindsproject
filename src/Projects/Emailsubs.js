import React from "react";
import IMG from "./images/image.jpg";
const Emailsubs = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#143444]">
      <div className="border-gray-500 border-4 rounded-lg flex min-w-[300px] p-1 gap-2 flex-col mx-4 md:flex-row  ">
        <img src={IMG} alt="" className="rounded-lg md:rounded-r-none h-72" />
        <div className="flex flex-col  md:justify-center md:items-start">
          <h1 className="my-2 px-4 text-center font-bold text-white md:px-5">
            Get diet and fitness tips in your inbox
          </h1>
          <p className="my-2 text-center text-white  md:px-5">
            Eat better and exercise better. Sign up for the Diet&Fitness
            newsletter
          </p>
          <div className="flex flex-col gap-2 px-5 my-4 md:flex-row">
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-transparent border-2 border-gray-500 p-1 outline-none text-center rounded-lg flex-1"
            />
            <button className="flex-1 bg-green-500 rounded-lg outline-none px-4 py-1">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emailsubs;
