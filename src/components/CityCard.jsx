import React from "react";
import { Link } from "react-router-dom";
export default function CityCard() {
  return (
    <>
      <div className="bg-gray-100">
        <p className="text-3xl flex items-center font-sub_title pt-10 ml-2 pb-5 px-6">
          Inspirasi untuk acara anda berikutnya
        </p>
        {/* Remove py-8 */}
        <div className="mx-auto container py-8 px-6">
          <div className="flex flex-wrap items-center lg:justify-evenly justify-center gap-12 ">
            {/* Card 1 */}
            <Link to="/hotels">
              <div className="mx-3 w-72 lg:mb-0 mb-8 hover:cursor-pointer">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1538582709238-0a503bd5ae04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    className="w-full h-44 rounded-xl bg-cover shadow-lg hover:opacity-90"
                  />
                </div>
                <div className="p-2">
                  <div className="flex items-center mt-5">
                    <h2 className="xl:text-xl 2xl:text-3xl font-semibold">
                      Jakarta
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
            {/* Card 1 Ends */}
            {/* Card 2 */}
            <Link to="/hotels">
              <div className="mx-2 w-72 lg:mb-0 mb-8 hover:cursor-pointer">
                <div>
                  <img
                    src="https://media.istockphoto.com/photos/15th-july-martyrs-bridge-bosphorus-bridge-at-night-istanbul-turkey-picture-id821745776?k=20&m=821745776&s=612x612&w=0&h=eIjqRdMZe4sELm1A2ejC_WWV8BFsdRXkj34qbmAK1fc="
                    className="w-full h-44 rounded-xl bg-cover shadow-lg hover:opacity-90"
                  />
                </div>
                <div className="p-2">
                  <div className="flex items-center mt-5">
                    <h2 className="xl:text-xl 2xl:text-3xl font-semibold">
                      Palembang
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
            {/* Card 2 Ends */}
            {/* Card 3  */}
            <Link to="/hotels">
              <div className="mx-2 w-72 lg:mb-0 mb-8 hover:cursor-pointer">
                <div>
                  <img
                    src="https://media.istockphoto.com/photos/sunrise-at-the-bromo-volcano-mountain-in-indonesia-picture-id474625072?k=20&m=474625072&s=612x612&w=0&h=2tO5Uc3OyNzhmz9BhDoQUhCrr-WVoLOVbxwsdndJBCQ="
                    className="w-full h-44 rounded-xl bg-cover shadow-lg hover:opacity-90"
                  />
                </div>
                <div className="p-2">
                  <div className="flex items-center">
                    <h2 className="xl:text-xl 2xl:text-3xl font-semibold mt-5">
                      Surabaya
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
            {/* Card 3 Ends */}
            {/* Card 4  */}
            <Link to="/hotels">
              <div className="mx-2 w-72 lg:mb-0 mb-8 hover:cursor-pointer">
                <div>
                  <img
                    src="https://media.istockphoto.com/photos/vanadzor-cityarmenia-picture-id502576822?k=20&m=502576822&s=612x612&w=0&h=agfa5JNqMa1QzAbtc6JCgnsJei-CsXv9mAjnTxaAPCM="
                    className="w-full h-44 rounded-xl bg-cover shadow-lg hover:opacity-90"
                  />
                </div>
                <div className="p-2">
                  <div className="flex items-center">
                    <h2 className="xl:text-xl 2xl:text-3xl font-semibold mt-5">
                      Bandung
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
            {/* Card 4 Ends */}
            {/* Card 5  */}
            <Link to="/hotels">
              <div className="mx-2 w-72 lg:mb-0 mb-8 hover:cursor-pointer">
                <div>
                  <img
                    src="https://media.istockphoto.com/photos/prambanan-temple-in-yogyakarta-picture-id1342846900?k=20&m=1342846900&s=612x612&w=0&h=8gJPdVr2GY1RKi6_rBY0AgAnQdLuCAWy39IybKxmocw="
                    className="w-full h-44 rounded-xl bg-cover shadow-lg hover:opacity-90"
                  />
                </div>
                <div className="p-2">
                  <div className="flex items-center">
                    <h2 className="xl:text-xl 2xl:text-3xl font-semibold mt-5">
                      Yogyakarta
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
            {/* Card 5 Ends */}
          </div>
        </div>
      </div>
    </>
  );
}
