import React, { useState, useEffect } from "react";
import HotelCard from "./HotelCard";

export default function HotelList({ballroomsAround}) {
  return (
    <>
      <div className="mx-auto container py-8 px-4 overflow-auto xl:h-[500px] 2xl:h-[800px]">
        <div className="grid grid-cols-2 items-center lg:justify-between justify-center gap-10">
          {/* Card 1 */}
          {ballroomsAround?.map((ballroom, i) => {
            return (
            <HotelCard
            ballroom={ballroom}
            >
              </HotelCard>
              )
          }) }
          {/* Card 1 Ends */}
        </div>
      </div>
    </>
  );
}
