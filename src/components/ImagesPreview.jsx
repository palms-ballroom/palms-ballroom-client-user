import React from "react";

export default function ImagesPreview({ hotelPhotos }) {
  return (
    <>
      <div className="w-full h-[75%] flex flex-row">
        <div className="w-2/3 h-full pr-2">
          <img
            src={
              hotelPhotos[3].data.sizes[hotelPhotos[3].data.sizes.length - 1]
                .url
            }
            alt="Main Photos"
            className="w-full h-full object-fill rounded-2xl"
          />
        </div>
        <div className="w-1/3 xl:w-[45%] h-full grid grid-cols-2">
          <div className="w-full h-full">
            <img
              src={
                hotelPhotos[9].data.sizes[hotelPhotos[9].data.sizes.length - 1]
                  .url
              }
              alt="Image1"
              className="w-full h-full object-cover rounded-2xl px-2 pb-2"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={
                hotelPhotos[0].data.sizes[hotelPhotos[0].data.sizes.length - 1]
                  .url
              }
              alt="Image2"
              className="w-full h-full object-cover rounded-2xl pl-2 pb-2"
            />
          </div>
          <div className="w-full h-48">
            <img
              src={
                hotelPhotos[2].data.sizes[hotelPhotos[2].data.sizes.length - 1]
                  .url
              }
              alt="Image3"
              className="w-full h-full object-cover rounded-2xl px-2 pt-2"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={
                hotelPhotos[7].data.sizes[hotelPhotos[7].data.sizes.length - 1]
                  .url
              }
              alt="Image3"
              className="w-full h-48 object-cover rounded-2xl pl-2 pt-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
