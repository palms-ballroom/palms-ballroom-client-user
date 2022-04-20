import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import HotelList from "../components/HotelList";
import { Outlet, useParams } from "react-router-dom";
import { getBallroomData } from "../hooks/index";
import Map from "../components/Map";

import HashLoader from "react-spinners/HashLoader";

export default function ListHotel() {
  const { city } = useParams();
  const [ballrooms, setBallrooms] = useState([]);
  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    if (city === "Around") {
      navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      });
    } else if (city === "Jakarta") {
      setCoordinates({ lat: -6.1803278913190445, lng: 106.82813851892055 });
    } else if (city === "Bali") {
      setCoordinates({ lat: -8.670470825331023, lng: 115.21242641380833 });
    } else if (city === "Surabaya") {
      setCoordinates({ lat: -7.257596307368415, lng: 112.75167834379174 });
    } else if (city === "Bandung") {
      setCoordinates({ lat: -6.917495855299672, lng: 107.61898784417541 });
    } else if (city === "Yogyakarta") {
      setCoordinates({ lat: -7.795489277618111, lng: 110.36906830754828 });
    }
    // Jakarta Baru
    // -6.1803278913190445, 106.82813851892055
    // -8.670485142108955, 115.21239896877901
    // Denpasar
    // -8.670470825331023, 115.21242641380833
  }, [city]);

  useEffect(() => {
    getBallroomData(bounds.sw, bounds.ne).then((data) => {
      setBallrooms(data);
    });
  }, [bounds]);

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between h-200">
        <div className="w-1/2">
          <NavbarComponent></NavbarComponent>
          <div className="p-4">
            {loading ? (
              <div className="flex justify-center items-center h-screen">
                <HashLoader size={150} color={"#023d3a"} loading={loading} />
              </div>
            ) : (
              <>
                <HotelList ballrooms={ballrooms}></HotelList>
              </>
            )}
            {/* <HotelList ballrooms={ballrooms}></HotelList> */}
          </div>
        </div>
        <Map
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          ballrooms={ballrooms}
        ></Map>
      </div>
      <FooterComponent></FooterComponent>
      <Outlet></Outlet>
    </>
  );
}
