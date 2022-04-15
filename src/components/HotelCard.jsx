import React from "react";
import { Link } from "react-router-dom";

export default function HotelCard({ballroom}) {
  console.log({ballroom});

  const priceBallroom = (price) => {
    if(!price) return 'Undisclosed'
    const higherPrice = price?.split('-')[1]
    const ballroomPrice = parseInt(higherPrice?.replace(/[^0-9]/g,"")*100)
    return ballroomPrice.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
      })
      
  }

  return (
    <>
      <Link to="/detail">
        <div className="mx-2 w-52 lg:mb-0 mb-8 relative">
          <div>
            <img
              src={ballroom.photo?.images.large.url}
              className="w-[250px] h-[230px] bg-cover bg-no-repeat rounded-xl shadow-lg"
            />
            <div className="flex flex-row justify-between">
              <div className="bg-white py-1.5 px-6 rounded-md absolute top-[10px] left-2">
                <p className="text-xs text-[#023d3a]">{ballroom.name}</p>
              </div>
              <div className="absolute top-[10px] left-[200px] text-slate-100">
                <i className="far fa-heart"></i>
              </div>
            </div>
          </div>
          <div className="bg-white absolute top-[168px] left-[6px] px-7 rounded-md">
            <div className="p-2">
             
                <h2 className="text-[#023d3a] text-xs font-semibold">Address</h2>
                <h3 className="text-[#023d3a] text-sm font-semibold">{priceBallroom(ballroom.price)}</h3>
              
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
