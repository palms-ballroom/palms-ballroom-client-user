import React from 'react'
import GoogleMapReact from 'google-map-react'

export default function Map({coordinates, setCoordinates, setBounds, ballroomsAround}) {
  console.log({ballroomsAround});

  const mapHandler = (e) => {
    setCoordinates({lat: e.center.lat, lng: e.center.lng})
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
  }

  return (
    <div className="bg-[#023d3a] w-1/2 flex justify-center items-center xl:h-[620px] 2xl:h-[980px]">
    <GoogleMapReact
    bootstrapURLKeys={{key: 'AIzaSyBqF-Y1hwU-rbdRJxChIsrzv7cm9TmmkRU'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => mapHandler(e)}
    ></GoogleMapReact>
    </div>
  )
}
