import React from "react";

export default function HeadDetail({ hotelName, hotelRanking }) {
  return (
    <>
      <div className="w-full h-[12.5%] font-bold text-4xl">{hotelName}</div>
      <div className="w-full h-[12.5%] xl:mb-5">
        <p className="text-gray-800 text-sm pt-1 pb-2">{hotelRanking}</p>
        <div className="flex flex-row gap-2 xl:mt-2">
          <div className="py-[5px] px-[20px] bg-[#cfd9df] rounded-md flex items-center justify-center">
            <p className="lg:text-[14px] text-center text-[#0d423f]">Ballroom</p>
          </div>
          <div className="py-[5px] px-[20px] bg-[#cfd9df] rounded-md flex items-center justify-center">
            <p className="lg:text-[14px] text-center text-[#0d423f]">Wedding Party</p>
          </div>
          <div className="py-[5px] px-[20px] bg-[#cfd9df] rounded-md flex items-center justify-center">
            <p className="lg:text-[14px] text-center text-[#0d423f]">Meeting</p>
          </div>
          <div className="py-[5px] px-[20px] bg-[#cfd9df] rounded-md flex items-center justify-center">
            <p className="lg:text-[14px] text-center text-[#0d423f]">Birthday Party</p>
          </div>
        </div>
      </div>
    </>
  );
}
