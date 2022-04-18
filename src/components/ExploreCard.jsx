import React from "react";

export default function ExploreCard() {
  return (
    <>
      <div className="flex flex-col relative bg-gray-50">
        <div className="bg-orange-50 w-3/5 xl:h-80 lg:h-64 md:h-56 sm:h-48 ">
          <p className="xl:text-2xl 2xl:text-3xl px-4 py-8 font-bold font-title relative left-10">
            Explore your city here!
          </p>
        </div>
        <div className="absolute flex left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-8 mt-7">
          <div className="sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-36 lg:w-36 xl:h-44 xl:w-44  px-2 ">
            <img
              src="https://images.unsplash.com/photo-1543143519-b2ee4b77524e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"
              className="h-full w-full flex items-center rounded-md shadow-xl bg-cover"
              alt="explore"
            />
          </div>
          <div className="sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-36 lg:w-36 xl:h-44 xl:w-44 px-2">
            <img
              src="https://images.unsplash.com/photo-1626044998489-47394f1c3c9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="h-full w-full flex items-center rounded-md shadow-xl bg-cover"
              alt="explore"
            />
          </div>
          <div className="sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-36 lg:w-36 xl:h-44 xl:w-44 px-2">
            <img
              src="https://images.unsplash.com/photo-1558998708-ed5f8eaf1af1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80"
              className="h-full w-full flex items-center rounded-md shadow-xl bg-cover"
              alt="explore"
            />
          </div>
          <div className="sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-36 lg:w-36 xl:h-44 xl:w-44 px-2">
            <img
              src="https://images.unsplash.com/photo-1606577583855-7887c860e755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              className="h-full w-full flex items-center rounded-md shadow-xl bg-cover"
              alt="explore"
            />
          </div>
        </div>
      </div>
    </>
  );
}
