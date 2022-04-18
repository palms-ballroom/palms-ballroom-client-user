import React from "react";
import HotelCard from "./HotelCard";

export default function HotelList({ ballrooms }) {
  return (
    <>
      <div className="mx-auto container py-8 px-4 overflow-auto xl:h-[600px] 2xl:h-[900px]">
        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 items-center lg:justify-between justify-center gap-10">
          {/* Card 1 */}
          {ballrooms?.map((ballroom, i) => {
            return <HotelCard key={i} ballroom={ballroom}></HotelCard>;
          })}
          {/* Card 1 Ends */}
        </div>
      </div>
    </>
  );
}
