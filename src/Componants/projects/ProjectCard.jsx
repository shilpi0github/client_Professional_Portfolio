import React from "react";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
const ProjectCard = ({ title, des, src ,  githublink }) => {
  return (
    <div
      className="w-full p-6 xl:px-12 h-auto xl:py-10 rou shadow-shadowOne
flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
    >
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          src={src}
          alt="{src}"
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
        />
      </div>
      <div className="w-full mt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-base uppercase text-designColor font-normal">{title}</h3>
          <div className="flex gap-2">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-500">
             <a href={githublink}><BsGithub /></a>
            </span>
            <span  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-500">
              <BsGlobe />
            </span>
          </div>
        </div>
        <div></div>
      </div>

      <div className="mt-4">
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
