import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { useQuery } from "@apollo/client";
import { getLatestTransaction } from "../config/query";
import Modal from "../components/Modal";

const MyBookingPage = () => {
  const { data, loading, refetch } = useQuery(getLatestTransaction, {
    variables: {
      accessToken: localStorage.getItem("token"),
    },
  });

  const [modalOn, setModalOn] = useState(false);

  const formattedPrice = () => {
    return data?.latestUserTransactions?.price?.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (data && !loading) {
      localStorage.setItem("transactionId", data?.latestUserTransactions?.id);
    }
  }, [data, loading]);

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className="2xl:container 2xl:mx-auto py-14 px-4 md:px-6 xl:px-20">
        <div className="flex flex-col xl:flex-row justify-center items-center space-y-10 xl:space-y-0 xl:space-x-8">
          <div className="flex justify-center flex-col items-start w-full lg:w-9/12 xl:w-full ">
            <h3 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 w-full  md:text-left text-gray-800">
              My Booking Page
            </h3>
            <p className="text-base leading-none mt-4 text-gray-800">
              Paid using credit or debit card using <span className="font-semibold">Xendit</span>
            </p>
            <div className="flex justify-center items-center w-full mt-8  flex-col space-y-4 ">
              <div className="flex md:flex-row justify-start items-start md:items-center  border border-gray-200 w-full">
                <div className="w-40 md:w-32">
                  <img
                    className=""
                    src={data?.latestUserTransactions?.mainImg}
                    alt="hotel-ballroom"
                  />
                </div>
                <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                  <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                    <h3 className="text-lg md:text-xl  w-full font-semibold leading-6 md:leading-5  text-gray-800">
                      {data?.latestUserTransactions?.hotelName}
                    </h3>
                    <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                      <p className="text-sm leading-none text-gray-600">
                        Status:{" "}
                        <span className="text-gray-800">
                          {" "}
                          {data?.latestUserTransactions?.status}
                        </span>
                      </p>
                      <p className="text-sm leading-none text-gray-600">
                        Days: <span className="text-gray-800"> 1 full day</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-4 md:mt-0 md:justify-end items-center w-full ">
                    <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">
                      {formattedPrice()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start mt-8 xl:mt-10 space-y-10 w-full">
              <div className="flex justify-start items-start flex-col md:flex-row  w-full md:w-auto space-y-8 md:space-y-0 md:space-x-14 xl:space-x-8  lg:w-full">
                <div className="flex jusitfy-start items-start flex-col space-y-2">
                  <p className="text-base font-semibold leading-4 text-gray-800">Payment Method</p>
                  <p className="text-sm leading-5 text-gray-600">Payment with xendit</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 w-full">
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">Subtotal</p>
                    <p className="text-base leading-4 text-gray-600">{formattedPrice()}</p>
                  </div>
                  <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">Discount </p>
                    <p className="text-base leading-4 text-gray-600">-</p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-xl font-semibold leading-4 text-gray-800">Total</p>
                  <p className="text-xl font-semibold leading-4 text-gray-600">
                    {formattedPrice()}
                  </p>
                </div>
                <div>
                  <button
                    className="mt-7 py-5 focus:outline-none  focus:ring-offset-2  w-full text-base font-medium leading-4 bg-[#266c6b] hover:bg-[#0d423f] focus:ring-4 focus:ring-[#266c6b] text-white rounded-sm"
                    onClick={() => setModalOn(true)}
                  >
                    Verification
                  </button>
                  {modalOn && (
                    <Modal bookingData={data?.latestUserTransactions} setModalOn={setModalOn} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBookingPage;
