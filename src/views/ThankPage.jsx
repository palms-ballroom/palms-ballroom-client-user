import React from "react";

export default function ThankPage() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <img src="./assets/icon/sammy-done.png" alt="done" className="w-55 h-72" />
        </div>
        <div className="flex flex-col">
          <p className="text-3xl text-slate-800 font-title">Order successfully Placed!</p>
        </div>
        <div className="flex flex-col mt-3">
          <p>Your Order No: #023d3aAKLSH </p>
        </div>
        <div>
          <button className="bg-[#266c6b] py-2 mt-5 px-10 rounded-full text-slate-50">
            Back to home page
          </button>
        </div>
        <div className="mt-5 font-title text-xl text-center">
          <p>Thank you for your order, we will be processed your order!</p>
          <p>I'm glad you've join Palm Ballroom</p>
        </div>
      </div>
    </>
  );
}
