import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./views/HomePage";
import ListHotel from "./views/ListHotel";
import DetailPage from "./views/DetailPage";
import View from "./components/View";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import MyBookingPage from "./views/MyBookingPage.jsx";
require("aframe");
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<ListHotel />}></Route>
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/3d" element={<View />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/orderlist" element={<MyBookingPage />} />
      </Routes>
    </>
  );
}

export default App;
