import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import HotelList from "../components/HotelList";
import { Outlet } from "react-router-dom";
import { getBallroomDataAround } from '../hooks/index'
import Map from "../components/Map";

export default function ListHotelAroundYou() {

  const [ballroomsAround, setBallroomsAround] = useState([])
  const [coordinates, setCoordinates] = useState()
  const [bounds, setBounds] = useState({})
  
  console.log("coordinates: ", coordinates);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})
   })}, [])
  
   useEffect(() => {
    getBallroomDataAround(bounds.sw, bounds.ne)
    .then((data) => {
      setBallroomsAround(data);
    })
   }, [coordinates, bounds])
   

  return (
    <>
      <div className="flex flex-row justify-between h-200">
        <div className="w-1/2">
          <NavbarComponent></NavbarComponent>
          <div className="p-4">
            <HotelList
            ballroomsAround={ballroomsAround}
            ></HotelList>
          </div>
        </div>
        <Map 
         coordinates={coordinates}
         setCoordinates={setCoordinates}
         setBounds={setBounds}
         ballroomsAround={ballroomsAround}
        >
          {/* <h1 className="text-center text-2xl">Halo ini ntar tampilan maps</h1> */}
        </Map>
      </div>
      <FooterComponent></FooterComponent>
      <Outlet></Outlet>
    </>
  );
}
