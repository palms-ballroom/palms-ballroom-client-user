import React, { useEffect, useState } from "react";
import HeaderComponent1 from "../components/HeaderComponent1";
import { useQuery } from "@apollo/client";
import { getLatestTransaction } from "../config/query";
// import * as faceapi from "@vladmandic/face-api";

import Modal from "../components/Modal";

const MyBookingPage = () => {
  // const [modelsLoaded, setModelsLoaded] = React.useState(false);
  // const [captureVideo, setCaptureVideo] = React.useState(false);
  // const [labeledDescriptor, setLabeledDescriptor] = React.useState([]);
  // const [authStatus, setAuthStatus] = React.useState(false);
  // const [xenditPay, { error, loading, data }] = useMutation(xenditPayment);
  // const openNewTab = () => {
  //   window.open(data && data?.createInvoice.data?.invoice_url);
  // };

  const { data, loading, error } = useQuery(getLatestTransaction, {
    variables: {
      accessToken: localStorage.getItem("token"),
    },
  });
  console.log("data: ", data);

  const [modalOn, setModalOn] = useState(false);

  const formattedPrice = () => {
    return data?.latestUserTransactions.price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
  };

  useEffect(() => {
    if (data && !loading) {
      localStorage.setItem("transactionId", data.latestUserTransactions.id);
    }
  }, [data, loading]);

  // const videoRef = React.useRef();
  // const videoHeight = 480;
  // const videoWidth = 640;
  // const canvasRef = React.useRef();

  // React.useEffect(() => {
  //   const loadModels = async () => {
  //     const MODEL_URL = process.env.PUBLIC_URL + "/models";
  //     Promise.all([
  //       faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
  //       faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
  //       faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
  //       faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
  //       faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
  //     ]).then(async (_) => {
  //       setModelsLoaded(true);
  //       // pake localstorage image url
  //       const img = await faceapi.fetchImage(localStorage.getItem("imageUrl"));
  //       const detections = await faceapi
  //         .detectSingleFace(img)
  //         .withFaceLandmarks()
  //         .withFaceDescriptor();
  //       const newLabeledDescriptor = new faceapi.LabeledFaceDescriptors(
  //         localStorage.getItem("username"),
  //         [detections.descriptor]
  //       );
  //       setLabeledDescriptor([...labeledDescriptor, newLabeledDescriptor]);
  //     });
  //   };
  //   loadModels();
  // }, []);

  // const startVideo = () => {
  //   setCaptureVideo(true);
  //   navigator.mediaDevices
  //     .getUserMedia({ video: { width: 300 } })
  //     .then((stream) => {
  //       let video = videoRef.current;
  //       video.srcObject = stream;
  //       video.play();
  //     })
  //     .catch((err) => {
  //       console.error("error:", err);
  //     });
  // };

  // const handleVideoOnPlay = () => {
  //   let detectedUserName = [];
  //   setInterval(async () => {
  //     if (canvasRef && canvasRef.current) {
  //       canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
  //         videoRef.current
  //       );
  //       const displaySize = {
  //         width: videoWidth,
  //         height: videoHeight,
  //       };
  //       new faceapi.matchDimensions(canvasRef.current, displaySize);

  //       const faceMatcher = new faceapi.FaceMatcher(labeledDescriptor, 0.5);

  //       //.findBestMatch(detections[0].descriptor)

  //       const detections = await faceapi
  //         .detectAllFaces(videoRef.current)
  //         .withFaceLandmarks()
  //         .withFaceDescriptors()
  //         .withFaceExpressions();
  //       //new faceapi.TinyFaceDetectorOptions())
  //       // console.log(detections);
  //       const resizedDetections = faceapi.resizeResults(
  //         detections,
  //         displaySize
  //       );
  //       canvasRef &&
  //         canvasRef.current &&
  //         canvasRef.current
  //           .getContext("2d")
  //           .clearRect(0, 0, videoWidth, videoHeight);
  //       // console.log(resizedDetections);
  //       // console.log(resizedDetections);
  //       const results = resizedDetections.map((d) => {
  //         return faceMatcher.findBestMatch(d.descriptor);
  //       });
  //       detectedUserName.push(results[0]?.label);
  //       // console.log("masuk");
  //       // const results = new faceapi.FaceMatcher(labeledDescriptor, 0.6).findBestMatch(detections[0].descriptor);
  //       // console.log("keluar");
  //       results.forEach((result, i) => {
  //         const box = resizedDetections[i].detection.box;
  //         const drawBox = new faceapi.draw.DrawBox(box, {
  //           label: result.toString(),
  //         });
  //         drawBox.draw(canvasRef.current);
  //         canvasRef &&
  //           canvasRef.current &&
  //           faceapi.draw.drawFaceExpressions(
  //             canvasRef.current,
  //             resizedDetections
  //           );
  //       });
  //       console.log(detectedUserName);
  //     }
  //     // nanti pake localstorage username
  //     if (detectedUserName.includes(localStorage.getItem("username"))) {
  //       closeWebcam();
  //       setAuthStatus(true);
  //     }
  //   }, 1000);
  // };

  // const closeWebcam = () => {
  //   videoRef.current?.pause();
  //   videoRef.current?.srcObject.getTracks()[0].stop();
  //   setCaptureVideo(false);
  // };

  // {
  //   "transactionId": null,
  //   "hotelApiId": null,
  //   "accessToken": null,
  //   "price": null
  // }

  // const doXenditPayment = async () => {
  //   try {
  //     await xenditPay({
  //       variables: {
  //         hotelApiId: 10391433, // Nanti pake hasil fetch .price NANTI APUS KALO UDAH ADA THANKYOU NEXT
  //         transactionId: 8, // dari fetch .transactionId
  //         accessToken: localStorage.getItem("token"),
  //         price: 320000000, // Nanti pake hasil fetch .price
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const btnPay = () => {
  //   if (authStatus) {
  //     return (
  //       <button
  //         className="bg-[#266c6b] hover:bg-[#0d423f] focus:ring-4 focus:ring-blue-300 text-white px-6 py-2 shadow-md rounded-md"
  //         style={{ marginLeft: 10 }}
  //         onClick={() => doXenditPayment()}
  //       >
  //         Pay with xendit
  //       </button>
  //     );
  //   }
  // };

  return (
    <>
      <HeaderComponent1></HeaderComponent1>
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
                    src={data?.latestUserTransactions.mainImg}
                    alt="hotel-ballroom"
                  />
                </div>
                <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                  <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                    <h3 className="text-lg md:text-xl  w-full font-semibold leading-6 md:leading-5  text-gray-800">
                      {data?.latestUserTransactions.hotelName}
                    </h3>
                    <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                      <p className="text-sm leading-none text-gray-600">
                        Status:{" "}
                        <span className="text-gray-800">
                          {" "}
                          {data?.latestUserTransactions.status}
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
                    {/* {btnPay()} */}
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

                  {/* <div style={{ textAlign: "center", padding: "10px" }}>
                    {captureVideo && modelsLoaded ? (
                      <div className="flex w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                        <button
                          onClick={closeWebcam}
                          className="py-5 focus:outline-none  focus:ring-offset-2  w-full text-base font-medium leading-4 bg-[#266c6b] hover:bg-[#0d423f] focus:ring-4 focus:ring-[#266c6b] text-white rounded-md"
                        >
                          Close Face Scanning
                        </button>
                      </div>
                    ) : (
                      <div className="flex w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                        <button
                          onClick={startVideo}
                          className="py-5 focus:outline-none  focus:ring-offset-2  w-full text-base font-medium leading-4 bg-[#266c6b] hover:bg-[#0d423f] focus:ring-4 focus:ring-[#266c6b] text-white rounded-md"
                        >
                          Face Scanning
                        </button>
                      </div>
                    )}
                  </div>
                  {captureVideo ? (
                    modelsLoaded ? (
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "10px",
                          }}
                        >
                          <video
                            ref={videoRef}
                            height={videoHeight}
                            width={videoWidth}
                            onPlay={handleVideoOnPlay}
                            style={{ borderRadius: "10px" }}
                          />
                          <canvas ref={canvasRef} style={{ position: "absolute" }} />
                        </div>
                      </div>
                    ) : (
                      <div>loading...</div>
                    )
                  ) : (
                    <></>
                  )} */}
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
