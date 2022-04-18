import React from "react";
import GoogleMapReact from "google-map-react";

export default function Map({
  coordinates,
  setCoordinates,
  setBounds,
  ballrooms,
}) {
  console.log({ ballrooms });

  const mapHandler = (e) => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
  };

  return (
    <div className="w-1/2 flex justify-center items-center xl:h-[620px] 2xl:h-[980px]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBqF-Y1hwU-rbdRJxChIsrzv7cm9TmmkRU" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={12}
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
              <div className="w-[170px] h-[200px] rounded-lg shadow-2xl bg-white text-center flex flex-col">
                <h1 className="text-sm p-2 flex-1">{ballroom.name}</h1>
                {ballroom.photo?.images.large.url ? (
                  <img
                    src={ballroom.photo && ballroom.photo.images.large.url}
                    alt={ballroom.name}
                  />
                ) : (
                  <img
                    src={
                      "https://media.istockphoto.com/photos/empty-convention-hall-center-with-stagethe-backdrop-for-exhibition-picture-id1344729946?b=1&k=20&m=1344729946&s=170667a&w=0&h=H7xH37FvoGCjT8BOpI-CuZMavR64AyQlyEWkToN08_U="
                    }
                    className="w-[150px] h-[130px] bg-cover rounded-md shadow-lg mx-auto mb-3"
                    alt={ballroom.name}
                  />
                )}
                {/* <img
                  className="w-[150px] h-[130px] bg-cover rounded-md shadow-lg mx-auto mb-3"
                  src={ballroom.photo && ballroom.photo.images.large.url}
                  alt={ballroom.name}
                ></img> */}
              </div>
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
