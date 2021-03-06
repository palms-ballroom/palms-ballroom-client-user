import React, { useEffect } from "react";
import * as faceapi from "@vladmandic/face-api";
import { useMutation } from "@apollo/client";
import { xenditPayment } from "../config/query";

export default function Modal({ setModalOn, bookingData }) {
  const handleOKClick = () => {
    setModalOn(false);
  };
  const [modelsLoaded, setModelsLoaded] = React.useState(false);
  const [captureVideo, setCaptureVideo] = React.useState(false);
  const [labeledDescriptor, setLabeledDescriptor] = React.useState([]);
  const [authStatus, setAuthStatus] = React.useState(false);
  const [xenditPay, { loading, data }] = useMutation(xenditPayment);

  useEffect(() => {
    if (data && !loading) {
      window.open(data && data?.createInvoice.data?.invoice_url);
    }
  }, [data, loading]);

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
        const img = await faceapi.fetchImage(localStorage.getItem("imageUrl"));
        const detections = await faceapi
          .detectSingleFace(img)
          .withFaceLandmarks()
          .withFaceDescriptor();
        const newLabeledDescriptor = new faceapi.LabeledFaceDescriptors(
          localStorage.getItem("username"),
          [detections.descriptor]
        );
        setLabeledDescriptor([...labeledDescriptor, newLabeledDescriptor]);
      });
    };
    loadModels();
  }, [labeledDescriptor]);

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
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
        const displaySize = {
          width: videoWidth,
          height: videoHeight,
        };
        new faceapi.matchDimensions(canvasRef.current, displaySize);

        const faceMatcher = new faceapi.FaceMatcher(labeledDescriptor, 0.5);

        const detections = await faceapi
          .detectAllFaces(videoRef.current)
          .withFaceLandmarks()
          .withFaceDescriptors()
          .withFaceExpressions();

        const resizedDetections = faceapi.resizeResults(detections, displaySize);

        canvasRef &&
          canvasRef.current &&
          canvasRef.current.getContext("2d").clearRect(0, 0, videoWidth, videoHeight);

        const results = resizedDetections.map((d) => {
          return faceMatcher.findBestMatch(d.descriptor);
        });

        detectedUserName.push(results[0]?.label);

        results.forEach((result, i) => {
          const box = resizedDetections[i].detection.box;
          const drawBox = new faceapi.draw.DrawBox(box, {
            label: result.toString(),
          });

          drawBox.draw(canvasRef.current);

          canvasRef &&
            canvasRef.current &&
            faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
        });
      }

      if (detectedUserName.includes(localStorage.getItem("username"))) {
        closeWebcam();
        setAuthStatus(true);
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
          transactionId: bookingData.id,
          accessToken: localStorage.getItem("token"),
          price: bookingData.price,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const btnPay = () => {
    if (authStatus) {
      return (
        <button
          className="bg-[#266c6b] hover:bg-[#0d423f] focus:ring-4 focus:ring-blue-300 text-white px-6 py-2 shadow-md rounded-md"
          onClick={() => doXenditPayment()}
        >
          Pay with xendit
        </button>
      );
    }
  };

  return (
    <div className="bg-zinc-200 opacity-95 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center h-[750px] w-[750px] bg-white py-5 px-5 border-4 border-[#266c6b] rounded-sm">
          <div className="h-5/6 w-full">
            <div style={{ textAlign: "center", padding: "10px" }}>
              {captureVideo && modelsLoaded ? (
                <div className="flex w-full justify-center mb-2 items-center pt-1 md:pt-4  xl:pt-2 space-y-6 md:space-y-8 flex-col">
                  <button
                    onClick={closeWebcam}
                    className="py-5 focus:outline-none  focus:ring-offset-2  w-full text-base font-medium leading-4 bg-[#266c6b] hover:bg-[#0d423f] focus:ring-4 focus:ring-[#266c6b] text-white rounded-md"
                  >
                    Close Face Scanning
                  </button>
                </div>
              ) : (
                <div className="flex w-full justify-center mb-2 items-center pt-1 md:pt-4  xl:pt-2 space-y-6 md:space-y-8 flex-col">
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
            )}
          </div>
          <div className="h-1/6 w-full flex flex-col">
            <div className="h-1/2 w-full flex mt-2 justify-center items-center">{btnPay()}</div>
            <div className="h-1/2 w-full flex justify-center items-center">
              <button
                onClick={handleOKClick}
                className="rounded px-4 py-2  text-white bg-[#a9b1b8]"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
