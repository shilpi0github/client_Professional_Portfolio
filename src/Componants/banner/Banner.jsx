import React from "react";
import LeftBanner from "./LeftBanner";
import { profile } from "../../assets/index";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full  pt-10 pb-20 flex  flex-col lgl:flex-row items-center  border-b-[1px] border-b-black darkMode" 
    >
      <LeftBanner />

      <div className="w-full xl:w-1/2 flex justify-center items-center">
        <img src={profile} alt="banner" className="w-[500px] h-[600px] z-10" />
        {/* <div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center "></div> */}
      </div>
      
    </section>
  );
};

export default Banner;
