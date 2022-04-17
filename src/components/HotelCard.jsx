import React from "react";
import { Link } from "react-router-dom";

export default function HotelCard({ ballroom }) {
  // console.log({ballroom});

  const priceBallroom = (price) => {
    if (!price) return "Undisclosed";
    const higherPrice = price?.split("-")[1];
    const ballroomPrice = parseInt(higherPrice?.replace(/[^0-9]/g, "") * 100);
    return ballroomPrice.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
  };

  return (
    <>
      <Link to="/detail">
        {/* <div className="mx-2 w-52 lg:mb-0 mb-8 relative">
          <div>
            <img
              src={ballroom.photo?.images.large.url}
              className="w-[250px] h-[230px] bg-cover bg-no-repeat rounded-xl shadow-lg"
              alt={ballroom.name}
            />
            <div className="flex flex-row justify-between">
              <div className="bg-white py-1.5 px-6 rounded-md absolute top-[10px] left-2">
                <p className="text-sm">{ballroom.name}</p>
              </div>
              <div className="absolute top-[10px] left-[200px] text-slate-100">
                <i className="far fa-heart"></i>
              </div>
            </div>
          </div>
          <div className="bg-white absolute top-[168px] left-[6px] px-7 rounded-md">
            <div className="p-2">
              <div className="flex flex-row gap-4 items-center justify-between">
                <h2 className="text-xs font-semibold">Address</h2>
                <h3 className="text-sm font-semibold">{priceBallroom(ballroom.price)}</h3>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8 relative">
          <img
            src={ballroom.photo?.images.large.url}
            className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
            alt={ballroom.name}
          />
          <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden absolute -bottom-10">
            <div className="py-2 text-center font-bold uppercase tracking-wide text-[#bb9e80]">
              {ballroom.name}
            </div>
            <div className="flex items-center justify-center py-2 px-3 bg-[#bb9e80]">
              <h1 className="text-white font-bold">
                {priceBallroom(ballroom.price)}
              </h1>
            </div>
          </div>
          {/* <div className="absolute">{ballroom.name}</div>
          <div>{priceBallroom(ballroom.price)}</div> */}
        </div>
      </Link>
    </>
  );
}
