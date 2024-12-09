import React from "react";
import {HiArrowRight} from "react-icons/hi"
const Card = ({ title, des, icon }) => {
  return (
    <div
      className="w-full h-80 px-12 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group
    hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition0colors duration-100 group "
    >
    <div className="h-72 overflow-hidden ">
   <div className="flex h-full flex-col gap-8 translate-y-14 group-hover:translate-y-0 transition-transform duration-700">
   <div>
        <span className="text-5xl text-designColor"> {icon}</span>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-300">{title}</h2>
      </div>

      <div>
        <p className="base">{des}</p>
      </div>
      
      <div>
        <span className="text-2xl text-designColor">
          <HiArrowRight />
        </span>
      </div>
   </div>
    </div>

    </div>
  );
};

export default Card;
