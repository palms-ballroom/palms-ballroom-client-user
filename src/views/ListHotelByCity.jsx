import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import HotelList from "../components/HotelList";
import { Outlet, useParams } from "react-router-dom";
import { getBallroomDataByCity } from "../hooks/index";
import MapByCity from "../components/MapByCity";

export default function ListHotelByCity() {
  const { city } = useParams();
  const [ballroomsByCity, setBallroomsByCity] = useState([]);
  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useState({});
  const [geoId, setGeoId] = useState('');

  useEffect(() => {
    if (city === "Jakarta") setCoordinates({ lat: -6.208835455195333, lng: 106.84558354912964 })
  }, [city])

  useEffect(() => {
    if (city === "Jakarta") setGeoId(294229);
    // getBallroomDataByCity(geoId, bounds.sw, bounds.ne)
    // .then((data) => {
      // setBallroomsByCity(data);
    // });

  }, [city, bounds, geoId]);

  return (
    <>
      <div className="flex flex-row justify-between h-200">
        <div className="w-1/2">
          <NavbarComponent></NavbarComponent>
          <div className="p-4">
            <HotelList
            ballrooms={ballroomsByCity}
            city={'true'}
            ></HotelList>
          </div>
        </div>
        <MapByCity 
         coordinates={coordinates}
         setCoordinates={setCoordinates}
         setBounds={setBounds}
         ballroomsByCity={ballroomsByCity}
        >
        </MapByCity>
      </div>
      <FooterComponent></FooterComponent>
      <Outlet></Outlet>
    </>
  );
}
