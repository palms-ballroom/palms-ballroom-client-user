import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./views/HomePage";
import ListHotel from "./views/ListHotel";
import DetailPage from "./views/DetailPage";
import View from "./components/View";
require("aframe");
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<ListHotel />}></Route>
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/3d" element={<View />} />
      </Routes>
    </>
  );
}

export default App;
