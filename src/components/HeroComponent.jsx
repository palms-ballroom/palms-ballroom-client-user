import React from "react";

export default function HeroComponent() {
  return (
    <>
      <div className="flex flex-col">
        <img src="./assets/img/banner-2.png" />
        <div>
          <div className="flex flex-col items-end justify-end">
            <p className="text-4xl 2xl:text-6xl tracking-wider font-bold text-slate-50 absolute flex justify-center items-center xl:top-[50%] xl:left-[46%] 2xl:top-[21%] 2xl:left-[46%] font-title">
              <span className="text-4xl 2xl:text-[100px] tracking-widest font-bold text-slate-100 flex justify-center items-center xl:top-[50%] xl:left-[50%] 2xl:top-[21%] 2xl:left-[46%] font-title">
                P
              </span>
              alms
            </p>
            <p className="text-4xl text-bold text-slate-100 absolute flex justify-center items-center xl:top-[50%] 2xl:top-[24%] xl:left-[35%] mt-14 font-title">
              Get ballroom in&ensp;
              <span className="text-slate-100">your</span>
              &ensp;palm!
            </p>
            <div className="bg-[#e5f6f0] lg:top-1/2 xl:top-[43%] xl:left-[25%] 2xl:top-[22%] 2xl:left-[35%] mt-[170px] absolute rounded-full flex flex-row p-4 ">
              <p className="ml-2 flex items-center">
                <i className="fas fa-map-marker-alt text-slate-700"></i>
              </p>
              <div className="flex flex-col justify-center">
                <p className="text-xs text-stone-400 ml-1">&ensp;Location</p>
                <p className="text-xs ml-2 justify-center">
                  Where are you going?
                </p>
              </div>
              <hr className="border-[1px] border-black ml-2" />
              <p className="ml-4 flex items-center text-slate-700">
                <i className="fas fa-map-marker-alt"></i>
              </p>
              <div className="flex flex-col ml-2 justify-center">
                <p className="text-xs text-stone-400">&ensp;Location</p>
                <p className="text-xs ml-1 justify-center">
                  Where are you going?
                </p>
              </div>
              <p className="ml-4 flex items-center">
                <i className="fas fa-map-marker-alt text-slate-700"></i>
              </p>
              <div className="flex flex-col ml-2 justify-center">
                <p className="text-xs text-stone-400">&ensp;Location</p>
                <p className="text-xs ml-1">Where are you going?</p>
              </div>
              <div className="flex flex-row justify-center items-center bg-[#023d3a] hover:bg-opacity-95 hover:cursor-pointer rounded-full px-7 py-2 ml-4 gap-2">
                <i className="fas fa-search text-zinc-200 text-xs"></i>
                <p className="text-zinc-200">Search</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
