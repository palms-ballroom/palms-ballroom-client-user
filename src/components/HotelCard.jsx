import React from "react";
import { useNavigate } from "react-router-dom";

export default function HotelCard({ ballroom }) {
  const navigate = useNavigate()

  const moveToDetail = () => {
    const price = priceBallroom(ballroom.price)
    localStorage.setItem("price", price);
    navigate(`/detail/${ballroom.location_id}`)
  }
  

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
      <button onClick={() => moveToDetail()}>
        <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8 relative">
          {ballroom.photo?.images.large.url ? (
            <img
              src={ballroom.photo?.images.large.url}
              className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
              alt={ballroom.name}
            />
          ) : (
            <img
              src={
                "https://media.istockphoto.com/photos/empty-convention-hall-center-with-stagethe-backdrop-for-exhibition-picture-id1344729946?b=1&k=20&m=1344729946&s=170667a&w=0&h=H7xH37FvoGCjT8BOpI-CuZMavR64AyQlyEWkToN08_U="
              }
              className="bg-gray-300 h-64 xl:w-52 w-full rounded-lg shadow-md bg-cover bg-center"
              alt={ballroom.name}
            />
          )}
          <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden absolute -bottom-10">
            <div className="py-2 text-center font-bold uppercase tracking-wide text-[#0d423f]">
              {ballroom.name}
            </div>
            <div
              className="flex items-center justify-center py-2 px-3
             bg-[#0d423f]
             "
            >
              <h1 className="text-white font-bold">
                {priceBallroom(ballroom.price)}
              </h1>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}
