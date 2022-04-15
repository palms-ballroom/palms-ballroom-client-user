import React, { useState } from "react";
import HeaderComponent1 from "../components/HeaderComponent1";
import HeadDetail from "../components/HeadDetail";
import ImagesPreview from "../components/ImagesPreview";
const DetailPage = () => {
  return (
    <>
      <HeaderComponent1></HeaderComponent1>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6">
        {/* <!-- Start title & tag --> */}
        <HeadDetail></HeadDetail>

        {/* <!-- Start Preview Images --> */}
        <ImagesPreview></ImagesPreview>

        {/* <!-- Start Description --> */}
        <div className="flex flex-row">
          <div className="flex flex-col mt-7">
            <h1 className="font-sub_title text-xl tracking-wider">Details</h1>
            <div className="flex flex-row gap-4">
              <div className="mt-5 bg-slate-100 py-6 w-24">
                <p className="text-gray-800 text-xs text-center">Price: </p>
              </div>
              <div className="mt-5 bg-slate-100 py-6 w-24">
                <p className="text-gray-800 text-xs text-center">
                  Room size :{" "}
                </p>
              </div>
              <div className="mt-5 bg-slate-100 py-6 w-24">
                <p className="text-gray-800 text-xs text-center">Price: </p>
              </div>
            </div>
            <div className="description mt-5 w-1/2">
              <p className="text-gray-800 text-xs font-sub_title font-semibold tracking-widest">
                Description
              </p>
              <p className="text-gray-800 text-xs mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                numquam voluptatibus error architecto earum at repudiandae
                delectus, tempora doloribus eius laudantium neque sint quod
                ducimus quis saepe. Quod, illo rerum?
              </p>
            </div>
            <div className="description mt-5 w-1/2">
              <p className="text-gray-800 text-xs font-sub_title font-semibold tracking-widest">
                Room Aminities
              </p>
              <p className="text-gray-800 text-xs mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                numquam voluptatibus error architecto earum at repudiandae
                delectus, tempora doloribus eius laudantium neque sint quod
                ducimus quis saepe. Quod, illo rerum?
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <button className="bg-slate-200 shadow-lg py-2 px-36">
                View 3D Ballroom
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
