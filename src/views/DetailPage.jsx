import React, { useEffect, useState } from "react";
import HeaderComponent1 from "../components/HeaderComponent1";
import HeadDetail from "../components/HeadDetail";
import ImagesPreview from "../components/ImagesPreview";
import { useParams } from "react-router-dom";
import { getBallroomById } from "../hooks";
const DetailPage = () => {

  const { hotelApiId } = useParams();
  const [hotel, setHotel] = useState(null);
  

  const formattedBallroomPrice = (price) => {
    if (!price) {
      return "Undisclosed";
    } else {
      const ballroomPrice = parseInt(price?.replace(/[^0-9]/g, "") * 100);
      const formatted = `Rp. ${ballroomPrice.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      })}`;
      return formatted;
    }
  }


  useEffect(() => {
    getBallroomById(hotelApiId)
    .then((data) => {
      console.log(data);
      setHotel(data);
    })
  }, [hotelApiId])


  return (
    hotel && (
    <>
      <HeaderComponent1></HeaderComponent1>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6">
        {/* <!-- Start title & tag --> */}
        <HeadDetail 
        hotelName={hotel[0].sections[2].name}
        hotelRanking={hotel[0].sections[2].rankingDetails.string}
        ></HeadDetail>

        {/* <!-- Start Preview Images --> */}
        <ImagesPreview hotelPhotos={hotel[0].sections[0].albumPhotos}></ImagesPreview>

        {/* <!-- Start Description --> */}
        <div className="flex flex-row 2xl:mt-10">
          <div className="flex flex-col mt-7">
            <h1 className="font-sub_title text-xl tracking-wider">Details</h1>
            <div className="flex flex-row gap-4">
              <div className="mt-5 bg-slate-100 py-6 w-24">
                <p className="text-gray-800 text-xs text-center">Price: {formattedBallroomPrice(hotel[0].sections[4].primaryOfferV2.displayPrice.string)} </p>
              </div>
              <div className="mt-5 bg-slate-100 py-6 w-24">
                <p className="text-gray-800 text-xs text-center">
                  Address : {hotel[0].sections[16].address.address}
                </p>
              </div>
              <div className="mt-5 bg-slate-100 py-6 w-24">
                <p className="text-gray-800 text-xs text-center">Rating: {hotel[0].sections[2].rating} </p>
              </div>
            </div>
            <div className="description mt-5 w-1/2">
              <p className="text-gray-800 text-xs font-sub_title font-semibold tracking-widest">
                About
              </p>
              <p className="text-gray-800 text-xs mt-3">
                {hotel[0].sections[10].about}
              </p>
            </div>
            <div className="description mt-5 w-1/2">
              <p className="text-gray-800 text-xs font-sub_title font-semibold tracking-widest">
                {hotel[0].sections[8].subtitle.string}
              </p>
              <p className="text-gray-800 text-xs mt-3">
                {hotel[0].sections[8].managementResponse}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <button className="bg-slate-200 shadow-lg py-2 px-36">
                View 3D Ballroom
              </button>
            </div>
          </div>
        </div>
      </div>
    </>)
  );
};

export default DetailPage;
