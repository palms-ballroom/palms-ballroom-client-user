import React from "react";
import GoogleMapReact from "google-map-react";

export default function Map({ coordinates, setCoordinates, setBounds, ballrooms }) {
  const mapHandler = (e) => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
  };

  return (
    <div className="w-1/2 flex justify-center items-center xl:h-[720px] 2xl:h-[980px]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBqF-Y1hwU-rbdRJxChIsrzv7cm9TmmkRU" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={(e) => mapHandler(e)}
      >
        {ballrooms?.map((ballroom, index) => {
          return (
            <div
              key={index}
              lat={Number(ballroom.latitude)}
              lng={Number(ballroom.longitude)}
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                "&:hover": { zIndex: 2 },
              }}
            >
              <div className="relative max-w-sm min-w-[150px] bg-white shadow-md rounded-2xl pb-2 mx-1 my-3 cursor-pointer">
                <div className="overflow-x-hidden rounded-t-2xl relative">
                  <img
                    className="h-20 rounded-t-2xl w-full object-cover"
                    src={ballroom.photo && ballroom.photo.images.large.url}
                    alt={ballroom.name}
                  />
                </div>
                <div className="mt-4 pl-2 mb-2">
                  <div>
                    <p className="text-md font-semibold text-gray-900 mb-0">{ballroom.name}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
