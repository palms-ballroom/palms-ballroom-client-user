import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
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
import { createBooking, getLatestTransaction } from "../config/query";
import HashLoader from "react-spinners/HashLoader";
import Swal from "sweetalert2";

const DetailPage = () => {
  const { hotelApiId } = useParams();
  const [hotel, setHotel] = useState(null);
  const navigate = useNavigate();
  const [date, setDate] = React.useState(new Date());
  const [createBookingMutation, { data, loading }] = useMutation(createBooking, {
    onCompleted: (data) => {
      console.log("data oncompleted: ", data);
      navigate(`/orderlist/${localStorage.getItem("userId")}`);
    },
    awaitRefetchQueries: true,
    onQueryUpdated: (observableQuery, diff, lastDiff) => {
      console.log("observableQuery: ", observableQuery);
      console.log("diff: ", diff);
      console.log("lastDiff: ", lastDiff);
    },
    refetchQueries: [
      { query: getLatestTransaction, variables: { accessToken: localStorage.getItem("token") } },
    ],
  });

  // const { data, loading } = useQuery(getLatestTransaction, {
  //   variables: {
  //     accessToken: localStorage.getItem("token"),
  //   },
  // });

  // useMutaion ditaro dialem

  console.log("data 24 detail page: ", data);

  useEffect(() => {
    if (data && !loading && data.bookingBallroom === "create transaction complete") {
      Swal.fire({
        icon: "success",
        title: "Your reservation is complete",
        text: "Please proceed to payment",
        showConfirmButton: false,
        timer: 1500,
      });
      localStorage.removeItem("price");
      // navigate(`/orderlist/${localStorage.getItem("userId")}`);
    } else if (data && !loading && data.bookingBallroom === "Hotel not registered yet") {
      Swal.fire({
        icon: "error",
        title: "Sorry",
        text: "This hotel is not yet a partner with us.",
      });
    } else if (data && !loading && data.bookingBallroom === "This date is already booked") {
      Swal.fire({
        icon: "error",
        title: "Sorry",
        text: data.bookingBallroom,
      });
    }
  }, [data, loading, navigate]);

  const formattingDate = () => {
    const dateBooking =
      new Date(date).getFullYear() +
      "-" +
      new Date(date).getMonth() +
      "-" +
      new Date(date).getDate();
    return dateBooking;
  };

  const doCreateBooking = () => {
    createBookingMutation({
      variables: {
        customerId: localStorage.getItem("userId"),
        hotelApiId: hotelApiId,
        bookingDate: formattingDate(),
        name: hotelName(hotel[0].sections),
        accessToken: localStorage.getItem("token"),
        role: localStorage.getItem("role"),
      },
    });
  };

  const ballroomPrice = () => {
    const price = localStorage.getItem("price");
    return price;
  };

  useEffect(() => {
    getBallroomById(hotelApiId).then((data) => {
      setHotel(data);
    });
  }, [hotelApiId]);

  const hotelName = (array) => {
    const x = array.filter((el) => el.__typename === "AppPresentation_PoiOverview");
    const y = x[0].name;
    return y;
  };

  const hotelRanking = (array) => {
    const x = array.filter((el) => el.__typename === "AppPresentation_PoiOverview");
    const y = x[0]?.rankingDetails?.string;
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
    const y = x[0]?.subtitle?.string;
    return y;
  };

  const descriptionBtm = (array) => {
    const x = array.filter((el) => el.__typename === "AppPresentation_PoiHealthSafety");
    const y = x[0]?.managementResponse;
    return y;
  };

  const [loadingSpinner, setLoadingSpinner] = React.useState(true);

  useEffect(() => {
    setLoadingSpinner(true);
    setTimeout(() => {
      setLoadingSpinner(false);
    }, 4000);
  }, []);

  return (
    <>
      {loadingSpinner ? (
        <div className="flex justify-center items-center h-screen">
          <HashLoader size={150} color={"#023d3a"} loading={loadingSpinner} />
        </div>
      ) : (
        hotel && (
          <>
            <HeaderComponent></HeaderComponent>
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
                      <div className="w-full h-full text-5xl font-title">Details</div>
                    </div>
                    <div className="w-full py-5 h-44">
                      <div className="flex flex-row justify-evenly h-full w-full">
                        <div className="h-full w-44 flex flex-col border-2 border-[#023d3a] rounded-xl ">
                          <div className="h-1/3 w-full">
                            <FaMoneyBillWave
                              className="h-full w-12 pl-5 pt-5"
                              style={{ color: "#023d3a" }}
                            />
                          </div>
                          <div className="h-full w-full flex">
                            <div className="pl-5 flex items-center">{ballroomPrice()} </div>
                          </div>
                        </div>
                        <div className="h-full w-44 flex flex-col border-2 border-[#023d3a] rounded-xl ">
                          <div className="h-1/3 w-full">
                            <FaStreetView
                              className="h-full w-12 pl-5 pt-5"
                              style={{ color: "#023d3a" }}
                            />
                          </div>
                          <div className="h-full w-full flex">
                            <div className="px-5 flex items-center text-xs">
                              {hotelAddress(hotel[0].sections)}
                            </div>
                          </div>
                        </div>
                        <div className="h-full w-44 flex flex-col border-2 border-[#023d3a] rounded-xl ">
                          <div className="h-1/3 w-full">
                            <FaRegStar
                              className="h-full w-12 pl-5 pt-5"
                              style={{ color: "#023d3a" }}
                            />
                          </div>
                          <div className="h-full w-full flex">
                            <div className="pl-5 flex items-center">
                              {hotel[0].sections[2].rating}{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="description w-full pr-5">
                      <p className="text-gray-800 text-md font-sub_title font-semibold tracking-widest mb-2">
                        About
                      </p>
                      <p>{about(hotel[0].sections)}</p>
                    </div>
                    <div className="description mt-5 w-full pr-5">
                      <p className="text-gray-800 text-md font-sub_title font-semibold tracking-widest mb-3">
                        {descriptionTop(hotel[0].sections)}
                      </p>
                      <p>{descriptionBtm(hotel[0].sections)}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-full flex items-center justify-center mt-auto shadow-lg">
                      <Calendar date={date} setDate={setDate}></Calendar>
                    </div>
                    <div className="py-5 w-full pl-2 mt-4">
                      <button className="bg-[#e29566] shadow-lg py-2 w-full text-white font-semibold">
                        View 3D Ballroom
                      </button>
                    </div>
                    <div className="py-5 w-full pl-2">
                      <button
                        onClick={() => doCreateBooking()}
                        className="bg-[#266c6b] shadow-lg py-2 w-full text-white font-semibold"
                      >
                        Book Now!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FooterComponent></FooterComponent>
          </>
        )
      )}
    </>
  );
};

export default DetailPage;
