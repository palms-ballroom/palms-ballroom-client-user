import React, { useEffect, useState } from "react";
import HeaderComponent1 from "../components/HeaderComponent1";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { createCustomer } from "../config/query";
import axios from "axios";

export default function LoginPage() {
  const [showpass, setShowPass] = useState(false);
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
    imageFile: "",
    address: "",
  });

  const navigate = useNavigate();

  const [createCustomerMutation, { error, loading, data }] = useMutation(createCustomer);

  useEffect(() => {
    if (data && !loading) {
      console.log(data);
      navigate("/login");
    }
  }, [data, loading]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleFile = (e) => {
    setForm({
      ...form,
      imageFile: e.target.files[0],
    });
    console.log(form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    let body = new FormData();
    body.append("image", form.imageFile);
    const response = await axios({
      method: "post",
      url: `https://api.imgbb.com/1/upload?key=d7f8ef6e35c6735dc7698da9e9d1192b&name=${form.username}`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: body,
    });
    console.log(response.data.data);
    createCustomerMutation({
      variables: {
        email: form.email,
        imageUrl: response.data.data.display_url,
        username: form.username,
        password: form.password,
        phoneNumber: form.phoneNumber,
        address: form.address,
      },
    });
  };

  return (
    <>
      <HeaderComponent1></HeaderComponent1>
      <div className="h-screen w-full bg-black relative">
        <img src="./assets/img/LoginBackground.png" className="w-full h-full bg-auto" alt="logo" />
        <div className="absolute top-[40%] transform translate-x-1/4 -translate-y-1/2 w-1/4">
          <p
            tabIndex={0}
            className="focus:outline-none text-xl font-extrabold leading-6 text-gray-800"
          >
            Register to your account
          </p>
          <p
            tabIndex={0}
            className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
          >
            You have account?
            <Link to="/login">
              <span className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer">
                {" "}
                Sign up here
              </span>
            </Link>
          </p>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="flex flex-row justify-center items-center gap-7 mt-5">
              <div className="w-1/2">
                <label htmlFor="email" className="text-sm font-medium leading-none text-gray-800">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  onChange={handleChange}
                  aria-labelledby="email"
                  type="email"
                  className="bg-[#e5f6f0] border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                  placeholder="e.g: john@gmail.com "
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="username"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  onChange={handleChange}
                  aria-labelledby="username"
                  type="username"
                  className="bg-[#e5f6f0] border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                  placeholder="e.g: john "
                />
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-7 mt-5">
              <div className="w-1/2">
                <label
                  htmlFor="phoneNumber"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handleChange}
                  aria-labelledby="phoneNumber"
                  type="phoneNumber"
                  className="bg-[#e5f6f0] border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                  placeholder="e.g: 0812-289X-XXX "
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="myInput" className="text-sm font-medium leading-none text-gray-800">
                  Password
                </label>
                <div className="relative flex items-center justify-center">
                  <input
                    id="myInput"
                    name="password"
                    onChange={handleChange}
                    type={showpass ? "text" : "password"}
                    className="bg-[#e5f6f0] border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  />
                  <div
                    onClick={() => setShowPass(!showpass)}
                    className="absolute right-0 mt-2 mr-3 cursor-pointer"
                  >
                    <div id="show">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                          fill="#71717A"
                        />
                      </svg>
                    </div>
                    <div id="hide" className="hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-eye-off"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#27272A"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1={3} y1={3} x2={21} y2={21} />
                        <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                        <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="username" className="text-sm font-medium leading-none text-gray-800">
                Address
              </label>
              <input
                id="address"
                name="address"
                onChange={handleChange}
                aria-labelledby="username"
                type="username"
                className="bg-[#e5f6f0] border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                placeholder="e.g: bogor"
              />
            </div>
            <div className="mt-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                for="user_avatar"
              >
                Upload your best photo!
              </label>
              <input
                name="imageFile"
                onChange={handleFile}
                className="block w-full text-sm text-gray-900 bg-[#e5f6f0] rounded border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 px-8 py-2"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              />
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">
                A profile picture is useful to confirm your payment
              </div>
            </div>
            <div className="mt-8">
              <button
                className="focus:ring-2 focus:ring-offset-2 focus:ring-[#266c6b] text-sm font-semibold leading-none text-white focus:outline-none 
                bg-[#0d423f] border rounded hover:bg-[#266c6b] py-4 w-full"
              >
                Create my account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
