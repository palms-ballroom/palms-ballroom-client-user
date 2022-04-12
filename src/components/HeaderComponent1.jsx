import React, { useState } from "react";
export default function HeaderComponent1() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  return (
    <>
      <div className="bg-gray-200 h-full w-full">
        {/* Code block starts */}

        {/* Start Web Responsive */}
        <nav className="bg-white shadow xl:block hidden p-5 lg:h-[800px] xl:h-[700px] bg-no-repeat bg-center bg-[url('https://img.freepik.com/free-vector/happy-tourists-choosing-hotel-booking-room-online-flat-illustration_74855-10811.jpg?t=st=1649761179~exp=1649761779~hmac=386a053b3f887fa1d8480fd277e92f5850985f60dcf44041144266f5301dab9f&w=996')]">
          <div className="flex flex-col items-end justify-end">
            <p className="text-4xl text-bold text-slate-800 absolute flex justify-center items-center lg:top-[50%] xl:top-[5%] xl:left-[50%] font-title">
              Palms
            </p>
            <p className="text-4xl text-bold text-slate-800 absolute flex justify-center items-center lg:top-[50%] xl:top-[5%] xl:left-[40%] mt-14 font-title">
              Get ballroom in your palm!
            </p>
            <div className="bg-[#eaf3fa] lg:top-1/2 xl:top-[40%] mt-[170px] xl:left-[31%] absolute rounded-full flex flex-row p-4 ">
              <p className="ml-2 flex items-center">
                <i className="fas fa-map-marker-alt text-slate-700"></i>
              </p>
              <div className="flex flex-col justify-center">
                <p className="text-xs text-stone-400 ml-1">&ensp;Location</p>
                <p className="text-xs ml-2 justify-center">
                  Where are you going?
                </p>
              </div>
              <hr className="border-[1px] border-black ml-2" />
              <p className="ml-4 flex items-center text-slate-700">
                <i className="fas fa-map-marker-alt"></i>
              </p>
              <div className="flex flex-col ml-2 justify-center">
                <p className="text-xs text-stone-400">&ensp;Location</p>
                <p className="text-xs ml-1 justify-center">
                  Where are you going?
                </p>
              </div>
              <p className="ml-4 flex items-center">
                <i className="fas fa-map-marker-alt text-slate-700"></i>
              </p>
              <div className="flex flex-col ml-2 justify-center">
                <p className="text-xs text-stone-400">&ensp;Location</p>
                <p className="text-xs ml-1">Where are you going?</p>
              </div>
              <div className="flex flex-row justify-center items-center bg-indigo-600 rounded-full px-7 py-2 ml-4 gap-2">
                <i className="fas fa-search text-zinc-200 text-xs"></i>
                <p className="text-zinc-200">Search</p>
              </div>
            </div>
          </div>
          <div className="mx-auto container px-6 py-2 xl:py-0">
            <div className="flex items-center justify-between">
              {/* Start logo */}
              <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                <div className="flex items-center">
                  <img src="assets/logo-palm.png" alt="Palm" className="w-28" />
                </div>
              </div>
              {/* End logo */}

              {/* Start Navbar */}
              <div className="flex">
                <div className="hidden xl:flex">
                  <a className="flex px-5 items-center py-6 text-sm leading-5 text-gray-800 hover:bg-opacity-100 focus:opacity-90 focus:outline-none transition duration-150 ease-in-out">
                    <span className="mr-2">
                      <i className="fas fa-hotel"></i>
                    </span>
                    Ballroom
                  </a>
                </div>
                {/* Start My profile */}
                <div className="hidden xl:flex items-center">
                  <div className="relative md:mr-6 my-2"></div>
                  <div className="ml-6 relative">
                    <div
                      className="flex items-center relative"
                      onClick={() => setProfile(!profile)}
                    >
                      {profile && (
                        <ul className="p-2 w-40 border-r bg-white absolute rounded right-0 shadow top-0 mt-16 ">
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-user"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={7} r={4} />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                              </svg>
                              <span className="ml-2">My Profile</span>
                            </div>
                          </li>
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                            <div className="flex items-center ml-1">
                              <i className="far fa-registered"></i>
                              <span className="ml-2">Register</span>
                            </div>
                          </li>
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                            <div className="flex items-center ml-1">
                              <i className="fas fa-sign-in-alt"></i>
                              <span className="ml-2">Login</span>
                            </div>
                          </li>
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-settings"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <circle cx={12} cy={12} r={3} />
                            </svg>
                            <span className="ml-2">Account Settings</span>
                          </li>
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                            <div className="flex items-center ml-1">
                              <i className="fas fa-sign-in-alt"></i>
                              <span className="ml-2">Logout</span>
                            </div>
                          </li>
                        </ul>
                      )}
                      <div className="cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                        <i className="fas fa-bars text-slate-30"></i>
                      </div>
                      <div className="ml-2 text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End My profile */}
              </div>
              {/* End Navbar */}
            </div>
          </div>
        </nav>
        {/* End Web Responsive */}

        {/* Start Mobile responsive */}
        <nav>
          <div className="py-4 px-6 w-full flex xl:hidden justify-between fixed top-0 z-40 bg-[url('https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] h-[250px] bg-cover bg-bottom">
            <div className="w-24">
              <img src="./assets/logo-palm.png" className="w-14" />
            </div>
            <div className="flex">
              <div
                id="menu"
                className="text-gray-800"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ""
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                )}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full xl:hidden h-full absolute z-40  transform  translate-x-0 "
                : "   w-full xl:hidden h-full absolute z-40  transform -translate-x-full"
            }
          >
            <div
              className="bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 z-40 fixed overflow-y-auto top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <img src="./assets/logo-palm.png" className="w-20" />
                        </div>
                        <div
                          id="cross"
                          className="text-gray-800"
                          onClick={() => setShow(!show)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m">
                      <a className="cursor-pointer">
                        <li className="text-gray-800 pt-10">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                              <i className="far fa-registered"></i>
                            </div>
                            <p className="text-indigo-700 xl:text-base text-base ml-3">
                              Register
                            </p>
                          </div>
                        </li>
                      </a>
                      <a className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                <i className="fas fa-sign-in-alt"></i>
                              </div>
                              <p className="text-gray-800 xl:text-base md:text-base text-base ml-3">
                                Login
                              </p>
                            </div>
                          </div>
                        </li>
                      </a>
                      <a className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                              <i className="fas fa-hotel"></i>
                            </div>
                            <p className="text-gray-800 xl:text-base md:text-base text-base ml-3">
                              Ballroom
                            </p>
                          </div>
                        </li>
                      </a>
                    </ul>
                  </div>
                  {/* Start Bottom Navbar */}
                  <div className="w-full pt-4">
                    <div className="flex justify-center mb-4 w-full">
                      <div className="relative w-full">
                        <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-search"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="#A0AEC0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={10} cy={10} r={7} />
                            <line x1={21} y1={21} x2={15} y2={15} />
                          </svg>
                        </div>
                        <input
                          className="bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2"
                          type="text"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                    <div className="border-t border-gray-300">
                      <div className="w-full flex items-center justify-between pt-1">
                        <div className="flex items-center">
                          <img
                            alt="profile-pic"
                            src="https://th.bing.com/th/id/OIP.HAlzz7_SUXjXKwsKkyBmJQHaHa?pid=ImgDet&rs=1"
                            className="w-6 h-6 rounded-md"
                          />
                          <p className=" text-gray-800 text-sm leading-4 ml-2">
                            Username
                          </p>
                        </div>
                        <ul className="flex">
                          <li className="cursor-pointer text-gray-800 pt-5 pb-3">
                            <div className="w-6 h-6 md:w-8 md:h-8">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-messages"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                              </svg>
                            </div>
                          </li>
                          <li className="cursor-pointer text-gray-800 pt-5 pb-3 pl-3">
                            <div className="w-6 h-6 md:w-8 md:h-8">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-bell"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                              </svg>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Bottom Navbar */}
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* End Mobile responsive */}

        {/* Code block ends */}
      </div>
    </>
  );
}
