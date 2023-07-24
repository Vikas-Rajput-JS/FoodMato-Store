import React, { useState } from "react";
import { useEffect } from "react";

export default function Card() {
  const [Data, setdata] = useState([]);
  async function Ab() {
    const req = await fetch("http://localhost:5000/Get");
    const res = await req.json();
    console.log(res);
    setdata(res);
  }
  useEffect(() => {
    Ab();
  }, []);
  return (
    <div className="w-[90%] h-[90vh] md:w-[100%] md:h-[93vh] mt-5   rounded-2xl shadow-2xl  sm:grid grid-cols-3 sm:ml-4  ">
      {Data.map((item, key) => {
        return (
          <ul className="w-[90%] h-[38vh] sm:w-[95%] ml-3 flex sm:ml-2 rounded-xl justify-between  bg-[#B0E0E6] mt-5 " key={key}>
            <div
              className="w-[100%] h-[38vh] sm:w-[100%] flex  rounded-xl justify-between  bg-[#B0E0E6] "
              key={key}
            >
              <div className="flex flex-col justify-around items-start sm:ml-2 ml-1">
                <img
                  className="w-[90%] h-[25vh] rounded-lg"
                  src={item.imgdata}
                  alt=""
                />
                <button
                  className="px-3 py-2 bg-orange-400 rounded-lg ml-4 animation duration-100 hover:scale-105 hover:bg-lime-500 hover:shadow-lg "
                  onClick={async() => {
                   
                      const Data = await fetch("http://localhost:5000/Cart", {
                        method: "Post",
                        body: JSON.stringify({
                         id:item.id,
                          rname: item.rname,
                          imgdata: item.imgdata,
                          address: item.address,
                          somedata: item.somedata,
                          rating: item.rating,
                          price: item.price,
                        }),
                        headers: { "Content-Type": "application/json" },
                      });
                      const res = await Data.json()
                      console.log(res)
                    
                  }}
                >
                  Add To Cart
                </button>
              </div>
              <div className="w-[50%] h-[35vh] flex justify-around flex-col  ">
                <h1 className="font-serif text-xl sm:text-2xl md:text-lg lg:text-2xl text-purple-400">
                  {item.rname}
                </h1>
                <h1 className="font-serif text-xs sm:text-xl md:text-xs lg:text-xl text-black">
                  {item.address}
                </h1>
                <h1 className="font-serif text-xs sm:text-lg md:text-xs lg:text-lg  text-black">
                  {item.somedata}
                </h1>
                <h1 className="font-serif text-lg sm:text-xl md:text-xs lg:text-xl text-amber-500">
                  {item.rating}
                </h1>
                <h1 className="font-serif text-2xl text-red-600">
                  {item.price}
                </h1>
              </div>
            </div>
          </ul>
        );
      })}
    </div>
  );
}
