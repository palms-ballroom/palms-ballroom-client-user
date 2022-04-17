import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import ListHotel from "./views/ListHotel";
import DetailPage from "./views/DetailPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import MyBookingPage from "./views/MyBookingPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels/:city" element={<ListHotel />}></Route>
        <Route path="/detail/:hotelApiId" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/orderlist" element={<MyBookingPage />} />
      </Routes>
    </>
  );
}

export default App;
