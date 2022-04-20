import React from "react";

export default function HeroComponent() {
  return (
    <>
      <div className="flex flex-col relative">
        <img src="./assets/img/banner-2.png" alt="Logo" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-slate-50 font-title flex justify-center">
            Palms
          </p>
          <p className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-bold text-slate-100 font-title flex justify-center">
            Get ballroom in&ensp;
            <span className="text-slate-100">your</span>
            &ensp;palm!
          </p>
          <div className="bg-[#e5f6f0] rounded-full flex justify-center flex-row mt-2 p-2 ">
            <div className="flex flex-col w-full justify-center">
              <p className="text-xs px-2 text-stone-400 ">Location</p>
              <input className="w-full px-2 bg-[#e5f6f0]" placeholder="City"></input>
            </div>
            <div className="self-center border-[1px] border-solid border-[#DDDDDD] h-10"></div>
            <div className="flex flex-col w-full px-2 justify-center">
              <p className="text-xs px-2 text-stone-400">Book</p>
              <p className=" px-2 text-stone-400 justify-center">Date</p>
            </div>
            <div className="flex flex-row w-full justify-center items-center bg-[#023d3a] hover:bg-opacity-95 hover:cursor-pointer rounded-full px-2 py-2 ml-4 gap-2">
              <i className="fas fa-search text-zinc-200 text-xs"></i>
              <p className="text-zinc-200">Search</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
