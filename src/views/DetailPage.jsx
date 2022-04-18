import React, { useEffect, useState } from "react";
import HeaderComponent1 from "../components/HeaderComponent1";
import HeadDetail from "../components/HeadDetail";
import ImagesPreview from "../components/ImagesPreview";
import FooterComponent from "../components/FooterComponent";
import Calendar from "../components/Calendar";
import { useParams, useNavigate } from "react-router-dom";
import { getBallroomById } from "../hooks";

import { FaMoneyBillWave } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStreetView } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { createBooking } from "../config/query";

const DetailPage = () => {
  const { hotelApiId } = useParams();
  const [hotel, setHotel] = useState(null);
  const navigate = useNavigate();
  const [date, setDate] = React.useState(new Date());
  const [createBookingMutation, { data, error, loading,}] = useMutation(createBooking);

  useEffect(() => {
    if (data && !loading) {
      navigate("/orderlist/3"); //nanti pakai localStorage
    }
  }, [data, loading, navigate]);
  const formattingDate = () => {
    const dateBooking =
      new Date(date).getFullYear() +
      "-" +
      new Date(date).getMonth() +
      "-" +
      new Date(date).getDate();
    console.log(dateBooking);
    console.log(typeof dateBooking);
    return dateBooking;
  };
  const doCreateBooking = () => {
    createBookingMutation({
      variables: {
        customerId: "3", //nanti pakai localStorage
        hotelApiId: hotelApiId,
        bookingDate: formattingDate(), //nanti pakai calendar
        name: hotelName(hotel[0].sections),
        accessToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJXaWthU0BnbWFpbC5jb20iLCJyb2xlIjoiQ3VzdG9tZXIiLCJpYXQiOjE2NTAzMTA1MTB9.FWwB84CW17Uiq-girsHU-QQ94Vw9h_DT_JJKGtu29U4", //nanti dari localStorage
        role: "Customer", //nanti dari localStorage atau mau di hardcode??
      },
    });
  };

  const formattedBallroomPrice = (price) => {
    if (!price) {
      return "Undisclosed";
    } else {
      const ballroomPrice = parseInt(price?.replace(/[^0-9]/g, "") * 100);
      const formatted = `${ballroomPrice.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      })}`;
      return formatted;
    }
  };

  useEffect(() => {
    getBallroomById(hotelApiId).then((data) => {
      setHotel(data);
    });
  }, [hotelApiId]);

  const hotelName = (array) => {
    // console.log("array: ", array);
    const x = array.filter((el) => el.__typename === "AppPresentation_PoiOverview");
    // console.log("x: ", x);
    const y = x[0].name;
    // console.log("y: ", y);
    // console.log(poiOverview);
    return y;
  };

  const hotelRanking = (array) => {
    const x = array.filter((el) => el.__typename === "AppPresentation_PoiOverview");
    const y = x[0].rankingDetails.string;
    return y;
  };

  const hotelAddress = (array) => {
    const x = array.filter((el) => el.__typename === "AppPresentation_PoiLocation");
    const y = x[0].address.address;
    return y;
  };

  const about = (array) => {
    const x = array.filter((el) => el.__typename === "AppPresentation_PoiAbout");
    const y = x[0].about;
    return y;
  };

  const descriptionTop = (array) => {
    const x = array.filter((el) => el.__typename === "AppPresentation_PoiHealthSafety");
    const y = x[0].subtitle.string;
    return y;
  };

  const descriptionBtm = (array) => {
    const x = array.filter((el) => el.__typename === "AppPresentation_PoiHealthSafety");
    const y = x[0].managementResponse;
    return y;
  };

  return (
    hotel && (
      <>
        <HeaderComponent1></HeaderComponent1>
        <div className=" w-full flex flex-col 2xl:py-16 2xl:p-52 xl:px-20">
          <div className="w-full h-[600px] pb-5">
            <HeadDetail
              hotelName={hotelName(hotel[0].sections)}
              hotelRanking={hotelRanking(hotel[0].sections)}
            ></HeadDetail>
            <ImagesPreview hotelPhotos={hotel[0].sections[0].albumPhotos}></ImagesPreview>
          </div>
          <div className="w-full py-5">
            <div className="w-full h-full flex flex-row">
              <div className="w-2/3 h-full">
                <div className="w-full py-5 h-24 ">
                  <div className="w-full h-full text-5xl">Details</div>
                </div>
                <div className="w-full py-5 h-44">
                  <div className="flex flex-row justify-evenly h-full w-full">
                    <div className="h-full w-44 flex flex-col border-2 border-black rounded-xl ">
                      <div className="h-1/3 w-full">
                        <FaMoneyBillWave className="h-full w-12 pl-5 pt-5" />
                      </div>
                      <div className="h-full w-full flex">
                        <div className="pl-5 flex items-center">
                          {formattedBallroomPrice(
                            hotel[0].sections[4].primaryOfferV2?.displayPrice?.string
                          )}{" "}
                        </div>
                      </div>
                    </div>
                    <div className="h-full w-44 flex flex-col border-2 border-black rounded-xl ">
                      <div className="h-1/3 w-full">
                        <FaStreetView className="h-full w-12 pl-5 pt-5" />
                      </div>
                      <div className="h-full w-full flex">
                        <div className="px-5 flex items-center text-xs">
                          {hotelAddress(hotel[0].sections)}
                        </div>
                      </div>
                    </div>
                    <div className="h-full w-44 flex flex-col border-2 border-black rounded-xl ">
                      <div className="h-1/3 w-full">
                        <FaRegStar className="h-full w-12 pl-5 pt-5" />
                      </div>
                      <div className="h-full w-full flex">
                        <div className="pl-5 flex items-center">{hotel[0].sections[2].rating} </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="description w-full pr-5">
                  <p className="text-gray-800 text-xs font-sub_title font-semibold tracking-widest mb-2">
                    About
                  </p>
                  <p>{about(hotel[0].sections)}</p>
                </div>

                {/* <div className="w-full pr-5">{about(hotel[0].sections)}</div> */}
                <div className="description mt-5 w-full pr-5">
                  <p className="text-gray-800 text-xs font-sub_title font-semibold tracking-widest mb-3">
                    {descriptionTop(hotel[0].sections)}
                  </p>
                  <p>{descriptionBtm(hotel[0].sections)}</p>
                </div>
              </div>

              <div className="w-1/3 h-full">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-full flex items-center justify-center mt-auto shadow-lg">
                    <Calendar date={date} setDate={setDate}></Calendar>
                  </div>
                  <div className="py-5 w-full pl-2">
                    <button
                      onClick={() => doCreateBooking()}
                      className="bg-slate-200 shadow-lg py-2 w-full"
                    >
                      Add To Cart
                    </button>
                  </div>
                  <div className="py-5 w-full pl-2">
                    <button className="bg-slate-200 shadow-lg py-2 w-full">View 3D Ballroom</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent></FooterComponent>
        {/* <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6">

          <HeadDetail
            hotelName={hotelName(hotel[0].sections)}
            hotelRanking={hotelRanking(hotel[0].sections)}
          ></HeadDetail>

          <ImagesPreview
            hotelPhotos={hotel[0].sections[0].albumPhotos}
          ></ImagesPreview>

          <div className="flex flex-row 2xl:mt-10">
            <div className="flex flex-col mt-7">
              <h1 className="font-sub_title text-xl tracking-wider">Details</h1>
              <div className="flex flex-row gap-4">
                <div className="mt-5 bg-slate-100 py-6 w-24">
                  <p className="text-gray-800 text-xs text-center">
                    Price:{" "}
                    {formattedBallroomPrice(
                      hotel[0].sections[4].primaryOfferV2?.displayPrice?.string
                    )}{" "}
                  </p>
                </div>
                <div className="mt-5 bg-slate-100 py-6 w-24">
                  <p className="text-gray-800 text-xs text-center">
                    Address : {hotelAddress(hotel[0].sections)}
                  </p>
                </div>
                <div className="mt-5 bg-slate-100 py-6 w-24">
                  <p className="text-gray-800 text-xs text-center">
                    Rating: {hotel[0].sections[2].rating}{" "}
                  </p>
                </div>
              </div>
              <div className="description mt-5 w-1/2">
                <p className="text-gray-800 text-xs font-sub_title font-semibold tracking-widest">
                  About
                </p>
                <p className="text-gray-800 text-xs mt-3">
                  {about(hotel[0].sections)}
                </p>
              </div>
              <div className="description mt-5 w-1/2">
                <p className="text-gray-800 text-xs font-sub_title font-semibold tracking-widest">
                  {descriptionTop(hotel[0].sections)}
                </p>
                <p className="text-gray-800 text-xs mt-3">
                  {descriptionBtm(hotel[0].sections)}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Link to="/orderlist" className="py-5">
                <button className="bg-slate-200 shadow-lg py-2 px-36">
                  Add To Cart
                </button>
              </Link>
              <div className="py-5">
                <button className="bg-slate-200 shadow-lg py-2 px-36">
                  View 3D Ballroom
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </>
    )
  );
};

export default DetailPage;
