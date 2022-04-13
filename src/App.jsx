import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./views/HomePage";
import ListHotel from "./views/ListHotel";
import DetailPage from "./views/DetailPage";
require("aframe");
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<ListHotel />}></Route>
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
      {/* <a-scene>
        {" "}
        <a-sky
          src="https://raw.githubusercontent.com/aframevr/aframe/v1.0.4/examples/boilerplate/panorama/puydesancy.jpg"
          rotation="0 -130 0"
        ></a-sky>
        <a-text
          font="kelsonsans"
          value="Puy de Sancy, France"
          width="6"
          position="-2.5 0.25 -1.5"
          rotation="0 15 0"
        ></a-text>
      </a-scene> */}
    </>
  );
}

export default App;
