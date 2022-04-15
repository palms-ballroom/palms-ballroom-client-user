import React from "react";
import HeaderComponent1 from "../components/HeaderComponent1";
const MyBookingPage = () => {
  return (
    <>
      <HeaderComponent1></HeaderComponent1>
      <div className="2xl:container 2xl:mx-auto py-14 px-4 md:px-6 xl:px-20">
        <div className="flex flex-col xl:flex-row justify-center items-center space-y-10 xl:space-y-0 xl:space-x-8">
          <div className="flex justify-center flex-col items-start w-full lg:w-9/12 xl:w-full ">
            <h3 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 w-full  md:text-left text-gray-800">
              My booking page
            </h3>
            <p className="text-base leading-none mt-4 text-gray-800">
              Paid using credit card ending with{" "}
              <span className="font-semibold">8822</span>
            </p>
            <div className="flex justify-center items-center w-full mt-8  flex-col space-y-4 ">
              <div className="flex md:flex-row justify-start items-start md:items-center  border border-gray-200 w-full">
                <div className="w-40 md:w-32">
                  <img
                    className=""
                    src="https://images.unsplash.com/photo-1549964336-96c968e00d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
                    alt="girl-in-red-dress"
                  />
                </div>
                <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                  <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                    <h3 className="text-lg md:text-xl  w-full font-semibold leading-6 md:leading-5  text-gray-800">
                      Ritz Carlton Hotel
                    </h3>
                    <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                      <p className="text-sm leading-none text-gray-600">
                        Size: <span className="text-gray-800"> Small</span>
                      </p>
                      <p className="text-sm leading-none text-gray-600">
                        Days: <span className="text-gray-800"> 2 days</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-4 md:mt-0 md:justify-end items-center w-full ">
                    <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">
                      $28.00
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row justify-start items-start md:items-center  border border-gray-200 w-full">
                <div className="w-40 md:w-32">
                  <img
                    className=""
                    src="https://media.istockphoto.com/photos/empty-training-dancehall-with-yellow-walls-and-dark-wooden-floo-picture-id477003926?b=1&k=20&m=477003926&s=170667a&w=0&h=0GUpwgOfyMKIiUwvDFSesEzs5uSzZPthbhz_tzAIMgA="
                    alt="girl-in-yellow-dress"
                  />
                </div>
                <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                  <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                    <h3 className="text-lg md:text-xl font-semibold leading-6 md:leading-5  text-gray-800">
                      Ritz Carlton Hotel
                    </h3>
                    <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                      <p className="text-sm leading-none text-gray-600">
                        Size: <span className="text-gray-800"> Small</span>
                      </p>
                      <p className="text-sm leading-none text-gray-600">
                        Days: <span className="text-gray-800"> 2 days</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-4 md:mt-0 md:justify-end items-center w-full ">
                    <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">
                      $28.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start mt-8 xl:mt-10 space-y-10 w-full">
              <div className="flex justify-start items-start flex-col md:flex-row  w-full md:w-auto space-y-8 md:space-y-0 md:space-x-14 xl:space-x-8  lg:w-full">
                <div className="flex jusitfy-start items-start flex-col space-y-2">
                  <p className="text-base font-semibold leading-4  text-gray-800">
                    Shipping Method
                  </p>
                  <p className="text-sm leading-5 text-gray-600">
                    Payment with xendit
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 w-full">
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-4 text-gray-600">$56.00</p>
                  </div>
                  <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Discount{" "}
                      <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">
                        STUDENT
                      </span>
                    </p>
                    <p className="text-base leading-4 text-gray-600">
                      -$28.00 (50%)
                    </p>
                  </div>
                  <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base leading-4 text-gray-600">$8.00</p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base font-semibold leading-4 text-gray-800">
                    Total
                  </p>
                  <p className="text-base font-semibold leading-4 text-gray-600">
                    $36.00
                  </p>
                </div>
                <div className="flex w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                  <button className="py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  w-full text-base font-medium leading-4 text-white bg-gray-800 hover:bg-black">
                    Track Your Order
                  </button>
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
