import React from "react";

export default function HeadDetail() {
  return (
    <>
      <div className="w-full items-center">
        <h2 className="font-semibold lg:text-2xl text-3xl lg:leading-9 leading-7 tracking-wider text-gray-800 mb-5">
          Ballroom Hotel Ritz Carlton
        </h2>
        {/* Start Tag */}
        <div className="flex flex-row gap-2">
          <div className="py-[5px] px-[20px] bg-[#e5f6f0] rounded-md flex items-center justify-center">
            <p className="lg:text-[14px] text-center text-[#3b7369]">
              Ballroom
            </p>
          </div>
          <div className="py-[5px] px-[20px] bg-[#e5f6f0] rounded-md flex items-center justify-center">
            <p className="lg:text-[14px] text-center text-[#3b7369]">
              Wedding Party
            </p>
          </div>
          <div className="py-[5px] px-[20px] bg-[#e5f6f0] rounded-md flex items-center justify-center">
            <p className="lg:text-[14px] text-center text-[#3b7369]">Meeting</p>
          </div>
          <div className="py-[5px] px-[20px] bg-[#e5f6f0] rounded-md flex items-center justify-center">
            <p className="lg:text-[14px] text-center text-[#3b7369]">
              Birthday Party
            </p>
          </div>
        </div>
        {/* End Tag */}
      </div>
      {/* <!-- End title & tag --> */}
    </>
  );
}