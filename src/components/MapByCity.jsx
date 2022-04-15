import React from "react";
import GoogleMapReact from "google-map-react";

export default function MapByCity({ coordinates, 
  setCoordinates, 
  setBounds, ballroomsByCity }) {
  console.log({ ballroomsByCity });

  const mapHandler = (e) => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
  };

  return (
    <div className="bg-[#023d3a] w-1/2 flex justify-center items-center xl:h-[620px] 2xl:h-[980px]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBqF-Y1hwU-rbdRJxChIsrzv7cm9TmmkRU" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => mapHandler(e)}
      >
        {/* {ballroomsByCity?.map((ballroom, index) => {
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
              <div
              className="w-[170px] h-[200px] rounded-lg shadow-2xl bg-white text-center flex flex-col"
              >
                <h1 className="text-sm p-2 flex-1">{ballroom.name}</h1>
                <img className="w-[150px] h-[130px] bg-cover rounded-md shadow-lg mx-auto mb-3"
                src={ballroom.photo && ballroom.photo.images.large.url}
                alt={ballroom.name}
                ></img>
              </div>
            </div>
          );
        })} */}
      </GoogleMapReact>
    </div>
  );
}
