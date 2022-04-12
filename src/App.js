import HeaderComponent from "./components/HeaderComponent";
import CityCard from "./components/CityCard";
import ExploreCard from "./components/ExploreCard";
import FooterComponent from "./components/FooterComponent";
import "./App.css";
require("aframe");
function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <CityCard></CityCard>
      <ExploreCard></ExploreCard>
      <FooterComponent></FooterComponent>
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
