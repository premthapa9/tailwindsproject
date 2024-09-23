import React from "react";
import { data } from "./data";

const Card = () => {
  return (
    <div className="min-h-screen py-10 flex justify-center items-center bg-[#143444]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {data.length > 0 &&
          data.map((item, ind) => (
            <div
              key={ind}
              style={{ borderColor: item.active ? "#0c84bb" : "" }}
              className="border-8 border-gray-500 hover:scale-105 duration-300 transition-all rounded-lg py-4 flex justify-center items-center text-white flex-col gap-2"
            >
              <h3>{item.plan.toUpperCase()}</h3>
              <h1 className="text-2xl">
                {item.dataMon}
                <span className="text-3xl">
                  {item.plan != "Premium" ? "GB" : "TB"}
                </span>
              </h1>
              <h5>${item.price}/month</h5>
              <button
                style={{ backgroundColor: item.active ? "#0c84bb" : "" }}
                className="px-4 mt-4 py-1 rounded-lg border-2 outline-none border-blue-700 shadow-md"
              >
                Purchase
              </button>
              <div className="border-t border-gray-500 p-5 mt-4 rounded-b-lg">
                {item.benefits.map((el, ind) => (
                  <h2
                    key={el}
                    style={{
                      marginLeft: ind === 0 ? 10 : 0,
                      marginTop: 2,
                      marginBottom: 2,
                    }}
                  >
                    {el}
                  </h2>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
