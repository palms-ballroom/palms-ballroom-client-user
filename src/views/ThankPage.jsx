import React from "react";
import { useNavigate } from "react-router-dom";

export default function ThankPage() {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
    localStorage.removeItem("transactionId");
  };

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
          <p>Your Order No: #{localStorage.getItem("transactionId")} </p>
        </div>
        <div>
          <button
            onClick={() => backToHome}
            className="bg-[#266c6b] py-2 mt-5 px-10 rounded-full text-slate-50"
          >
            Back to home page
          </button>
        </div>
        <div className="mt-5 font-title text-xl text-center">
          <p>Thank you for your order, we will be processed your order!</p>
          <p>I'm glad you've join Palms Ballroom</p>
        </div>
      </div>
    </>
  );
}
