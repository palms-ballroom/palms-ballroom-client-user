import React from "react";
import HeaderComponent1 from "../components/HeaderComponent1";
import CityCard from "../components/CityCard";
import ExploreCard from "../components/ExploreCard";
import HeroComponent from "../components/HeroComponent";
import FooterComponent from "../components/FooterComponent";
export default function HomePage() {
  return (
    <div>
      <HeaderComponent1></HeaderComponent1>
      <HeroComponent></HeroComponent>
      <CityCard></CityCard>

      <ExploreCard></ExploreCard>
      <FooterComponent></FooterComponent>
    </div>
  );
}
