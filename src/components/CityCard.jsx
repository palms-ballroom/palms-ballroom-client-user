import React from "react";
export default function CityCard() {
  return (
    <>
      <div className="bg-gray-100">
        <p className="text-3xl flex items-center font-sub_title pt-10 ml-2 pb-5 px-6">
          Inspirasi untuk perjalanan anda berikutnya
        </p>
        {/* Remove py-8 */}
        <div className="mx-auto container py-8 px-6">
          <div className="flex flex-wrap items-center lg:justify-evenly justify-center">
            {/* Card 1 */}
            <div className="mx-2 w-72 lg:mb-0 mb-8 hover:cursor-pointer">
              <div>
                <img
                  src="./assets/city/jakarta.svg"
                  className="w-full h-44 rounded-xl bg-cover shadow-lg p-5"
                />
              </div>
              <div className="p-2">
                <div className="flex items-center mt-5">
                  <h2 className="text-xl font-semibold">Jakarta</h2>
                </div>
              </div>
            </div>
            {/* Card 1 Ends */}
            {/* Card 2 */}
            <div className="mx-2 w-72 lg:mb-0 mb-8 hover:cursor-pointer">
              <div>
                <img
                  src="./assets/city/palembang.svg"
                  className="w-full h-44 rounded-xl bg-cover shadow-lg p-5"
                />
              </div>
              <div className="p-2">
                <div className="flex items-center mt-5">
                  <h2 className="text-xl font-semibold">Palembang</h2>
                </div>
              </div>
            </div>
            {/* Card 2 Ends */}
            {/* Card 3  */}
            <div className="mx-2 w-72 lg:mb-0 mb-8 hover:cursor-pointer">
              <div>
                <img
                  src="./assets/city/surabaya.svg"
                  className="w-full h-44 rounded-xl bg-cover shadow-lg p-5 mt-10"
                />
              </div>
              <div className="p-2">
                <div className="flex items-center">
                  <h2 className="text-xl font-semibold mt-5">Surabaya</h2>
                </div>
              </div>
            </div>
            {/* Card 3 Ends */}
            {/* Card 4  */}
            <div className="mx-2 w-72 lg:mb-0 mb-8 hover:cursor-pointer">
              <div>
                <img
                  src="./assets/city/bandung.svg"
                  className="w-full h-44 rounded-xl bg-cover shadow-lg p-5"
                />
              </div>
              <div className="p-2">
                <div className="flex items-center">
                  <h2 className="text-xl font-semibold mt-5">Bandung</h2>
                </div>
              </div>
            </div>
            {/* Card 4 Ends */}
            {/* Card 5  */}
            <div className="mx-2 w-72 lg:mb-0 mb-8 hover:cursor-pointer">
              <div>
                <img
                  src="./assets/city/jogja.svg"
                  className="w-full h-44 rounded-xl bg-cover shadow-lg p-5 mt-10"
                />
              </div>
              <div className="p-2">
                <div className="flex items-center">
                  <h2 className="text-xl font-semibold mt-5">Yogyakarta</h2>
                </div>
              </div>
            </div>
            {/* Card 5 Ends */}
          </div>
        </div>
      </div>
    </>
  );
}
