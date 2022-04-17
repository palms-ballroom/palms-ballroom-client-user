import React from "react";

export default function ImagesPreview({ hotelPhotos }) {
  return (
    <>
      {/* <div className="flex flex-row items-center mt-8 gap-5">
        <div className="mainImg w-2/3 h-72 flex items-center">
          <img
            src={hotelPhotos[3].data.sizes[7].url}
            alt="Main Photos"
          />
        </div>
        <div className="grid grid-rows-2 gap-4 h-72 items-center justify-center">
          <div className="grid grid-cols-2 gap-2">
            <img
              src={hotelPhotos[9].data.sizes[7].url}
              alt="Image1"
              className="w-28 h-24 rounded-lg"
            />
            <img
              src={hotelPhotos[0].data.sizes[7].url}
              alt="Image2"
              className="w-28 h-24 rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={hotelPhotos[2].data.sizes[7].url}
              alt="Image3"
              className="w-28 h-24 bg-contain rounded-lg"
            />
            <div className="bg-slate-200 rounded-lg flex items-center justify-center w-28 h-24">
              <p className="text-sm text-slate-900 text-center my-auto">
                {" "}
                +15 Photos
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="w-full h-[75%] flex flex-row">
        <div className="w-2/3 h-full pr-2">
          <img
            src={hotelPhotos[3].data.sizes[7].url}
            alt="Main Photos"
            className="w-full h-full object-fill rounded-2xl"
          />
        </div>
        <div className="w-1/3 h-full grid grid-cols-2">
          <div className="w-full h-full">
            <img
              src={hotelPhotos[9].data.sizes[7].url}
              alt="Image1"
              className="w-full h-full object-cover rounded-2xl px-2 pb-2"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={hotelPhotos[0].data.sizes[7].url}
              alt="Image2"
              className="w-full h-full object-cover rounded-2xl pl-2 pb-2"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={hotelPhotos[2].data.sizes[7].url}
              alt="Image3"
              className="w-full h-full object-cover rounded-2xl px-2 pt-2"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={hotelPhotos[2].data.sizes[7].url}
              alt="Image3"
              className="w-full h-full object-cover rounded-2xl pl-2 pt-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
