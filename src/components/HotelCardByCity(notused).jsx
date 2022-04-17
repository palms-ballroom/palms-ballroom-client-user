import React from "react";
import { Link } from "react-router-dom";

export default function HotelCardByCity({ ballroom }) {
  // console.log({ballroom});

  const priceBallroom = (price) => {
    if (!price) return "Undisclosed";
    // const higherPrice = price?.split('-')[1]
    const ballroomPrice = parseInt(price?.replace(/[^0-9]/g, "") * 100);
    return ballroomPrice.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
  };

  const imageBallroom = () => {
    const url = ballroom.singleCardContent.cardPhotos[0].urlTemplate;
    return url.replace("{width}", "900").replace("{height}", "900");
  };

  return (
    <>
      <Link to="/detail">
        <div className="mx-2 w-52 lg:mb-0 mb-8 relative">
          <div>
            <img
              src={imageBallroom}
              className="w-[250px] h-[230px] bg-cover bg-no-repeat rounded-xl shadow-lg"
              alt={ballroom.singleCardContent.cardTitle.string.slice(4)}
            />
            <div className="flex flex-row justify-between">
              <div className="bg-white py-1.5 px-6 rounded-md absolute top-[10px] left-2">
                <p className="text-sm">
                  {ballroom.singleCardContent.cardTitle.string.slice(4)}
                </p>
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
                <h3 className="text-sm font-semibold">
                  {priceBallroom(
                    ballroom.singleCardContent.commerceInfo?.priceForDisplay
                      ?.string
                  )}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
