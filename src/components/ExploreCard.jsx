import React from "react";

export default function ExploreCard() {
  return (
    <>
      <div className="flex flex-row p-20 bg-gray-50">
        <div className="bg-orange-50 2xl:h-96 2xl:w-[800px] xl:h-80 xl:w-[800px]">
          <p className="xl:text-2xl 2xl:text-3xl px-4 py-16 font-bold font-title relative left-10">
            Explore your city here!
          </p>
        </div>
        <div className="flex flex-row justify-between items-center gap-8 absolute xl:top-[1730px] xl:left-44 2xl:top-[1720px] 2xl:left-[440px]">
          <img
            src="https://images.unsplash.com/photo-1543143519-b2ee4b77524e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"
            className="h-40 flex items-center rounded-md ml-8 shadow-lg bg-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1626044998489-47394f1c3c9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="w-40 h-40 flex items-center rounded-md ml-8 shadow-lg bg-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1558998708-ed5f8eaf1af1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80"
            className="w-40 h-40 flex items-center rounded-md shadow-lg bg-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1606577583855-7887c860e755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            className="w-40 h-40 flex items-center rounded-md shadow-lg bg-cover"
          />
        </div>
      </div>
    </>
  );
}
