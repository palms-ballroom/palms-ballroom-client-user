import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import HotelCard from "../components/HotelCard";
export default function DetailPage() {
  return (
    <>
      <div className="flex flex-row justify-between h-200">
        <div className="w-1/2">
          <NavbarComponent></NavbarComponent>
          <HotelCard></HotelCard>
        </div>
        <div className="bg-blue-500 w-1/2 flex justify-center items-center">
          <h1 className="text-center text-2xl">Halo ini ntar tampilan maps</h1>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </>
  );
}
