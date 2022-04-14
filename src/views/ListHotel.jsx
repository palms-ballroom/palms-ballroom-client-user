import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import HotelCard from "../components/HotelCard";
import { Outlet } from "react-router-dom";
export default function ListHotel() {
  return (
    <>
      <div className="flex flex-row justify-between h-200">
        <div className="w-1/2">
          <NavbarComponent></NavbarComponent>
          <div className="p-4">
            <HotelCard></HotelCard>
          </div>
        </div>
        <div className="bg-[#023d3a] w-1/2 flex h-64 justify-center items-center">
          <h1 className="text-center text-2xl">Halo ini ntar tampilan maps</h1>
        </div>
      </div>
      <FooterComponent></FooterComponent>
      <Outlet></Outlet>
    </>
  );
}
