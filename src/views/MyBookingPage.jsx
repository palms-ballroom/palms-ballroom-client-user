import React from "react";
import HeaderComponent1 from "../components/HeaderComponent1";
import {useMutation} from "@apollo/client"
import {xenditPayment} from "../config/query"

import * as faceapi from "@vladmandic/face-api";

const MyBookingPage = () => {
  const [modelsLoaded, setModelsLoaded] = React.useState(false);
  const [captureVideo, setCaptureVideo] = React.useState(false);
  const [labeledDescriptor, setLabeledDescriptor] = React.useState([]);
  const [authStatus, setAuthStatus] = React.useState(false)

  const  [ xenditPay, {error, loading, data}]= useMutation(xenditPayment)
  const openNewTab = () => {
    window.open(data.createInvoice.data.invoice_url)
  }
  if(data) {
    openNewTab()
  }

  const videoRef = React.useRef();
  const videoHeight = 480;
  const videoWidth = 640;
  const canvasRef = React.useRef();

  React.useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + "/models";
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
      ]).then(async (_) => {
        setModelsLoaded(true);
        const img = await faceapi.fetchImage(
          "https://media-exp1.licdn.com/dms/image/C5603AQFMv0hTGP91Lg/profile-displayphoto-shrink_800_800/0/1527214801932?e=1655337600&v=beta&t=LdbbUlh7fplHWgbspNThceu5G2CtXruabtTLt3n__Zk"
        );
        const detections = await faceapi
          .detectSingleFace(img)
          .withFaceLandmarks()
          .withFaceDescriptor();
        const newLabeledDescriptor = new faceapi.LabeledFaceDescriptors(
          "Wika Silo",
          [detections.descriptor]
        );
        setLabeledDescriptor([...labeledDescriptor, newLabeledDescriptor]);
      });
    };
    loadModels();
  }, []);

  const startVideo = () => {
    setCaptureVideo(true);
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  const handleVideoOnPlay = () => {
    let detectedUserName = [];
    setInterval(async () => {
      if (canvasRef && canvasRef.current) {
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
          videoRef.current
        );
        const displaySize = {
          width: videoWidth,
          height: videoHeight,
        };
        new faceapi.matchDimensions(canvasRef.current, displaySize);

        const faceMatcher = new faceapi.FaceMatcher(labeledDescriptor, 0.5);

        //.findBestMatch(detections[0].descriptor)

        const detections = await faceapi
          .detectAllFaces(videoRef.current)
          .withFaceLandmarks()
          .withFaceDescriptors()
          .withFaceExpressions();
        //new faceapi.TinyFaceDetectorOptions())
        // console.log(detections);
        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );
        canvasRef &&
          canvasRef.current &&
          canvasRef.current
            .getContext("2d")
            .clearRect(0, 0, videoWidth, videoHeight);
        // console.log(resizedDetections);
        // console.log(resizedDetections);
        const results = resizedDetections.map((d) => {
          return faceMatcher.findBestMatch(d.descriptor);
        });
        detectedUserName.push(results[0]?.label);
        // console.log("masuk");
        // const results = new faceapi.FaceMatcher(labeledDescriptor, 0.6).findBestMatch(detections[0].descriptor);
        // console.log("keluar");
        results.forEach((result, i) => {
          const box = resizedDetections[i].detection.box;
          const drawBox = new faceapi.draw.DrawBox(box, {
            label: result.toString(),
          });
          drawBox.draw(canvasRef.current);
          canvasRef &&
            canvasRef.current &&
            faceapi.draw.drawFaceExpressions(
              canvasRef.current,
              resizedDetections
            );
        });
        console.log(detectedUserName);
      }
      if(detectedUserName.includes('Wika Silo')) {
        closeWebcam()
        setAuthStatus(true)
      }
    }, 1000);
  };

  const closeWebcam = () => {
    videoRef.current?.pause();
    videoRef.current?.srcObject.getTracks()[0].stop();
    setCaptureVideo(false);
  };

  

  const doXenditPayment = async () => {
    try {
      await xenditPay({
        variables: {
            customerId: 3,
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJQcm9taXNlSEBnbWFpbC5jb20iLCJyb2xlIjoiQ3VzdG9tZXIiLCJpYXQiOjE2NTAwNDA3MzB9.XnFxiNsoFgQGj7y7KlgBO49o7SYShpWGiWvyZw8YjD0",
            price: 500000   
      }
    })
    } catch (error) {
      console.log(error)
    }  
  }

  const btnPay = () => {
    if(authStatus) {
      return <button style={{marginLeft: 10}} onClick={() => doXenditPayment() } >Pay with xendit</button>
    }
  }

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
                    {
                      btnPay()
                    }
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
                    {
                      btnPay()
                    }
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
                {/* <div className="flex w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                  <button className="py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  w-full text-base font-medium leading-4 text-white bg-gray-800 hover:bg-black">
                    Track Your Order
                  </button>
                </div> */}

                <div>
                  <div style={{ textAlign: "center", padding: "10px" }}>
                    {captureVideo && modelsLoaded ? (
                      <button
                        onClick={closeWebcam}
                        style={{
                          cursor: "pointer",
                          backgroundColor: "green",
                          color: "white",
                          padding: "15px",
                          fontSize: "25px",
                          border: "none",
                          borderRadius: "10px",
                        }}
                      >
                        Close
                      </button>
                    ) : (
                      <button
                        onClick={startVideo}
                        style={{
                          cursor: "pointer",
                          backgroundColor: "green",
                          color: "white",
                          padding: "15px",
                          fontSize: "25px",
                          border: "none",
                          borderRadius: "10px",
                        }}
                      >
                         Face Scanning
                      </button>
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
                          <canvas
                            ref={canvasRef}
                            style={{ position: "absolute" }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div>loading...</div>
                    )
                  ) : (
                    <></>
                  )}
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
