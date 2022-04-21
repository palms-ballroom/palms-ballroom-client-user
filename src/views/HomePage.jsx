import React, { useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import CityCard from "../components/CityCard";
import ExploreCard from "../components/ExploreCard";
import HeroComponent from "../components/HeroComponent";
import FooterComponent from "../components/FooterComponent";
import HashLoader from "react-spinners/HashLoader";

export default function HomePage() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <HashLoader size={150} color={"#023d3a"} loading={loading} />
        </div>
      ) : (
        <>
          <HeaderComponent></HeaderComponent>
          <HeroComponent></HeroComponent>
          <CityCard></CityCard>
          <ExploreCard></ExploreCard>
          <FooterComponent></FooterComponent>
        </>
      )}
    </div>
  );
}
