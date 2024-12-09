import React, { useState } from "react";

import Title from "../Layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achivements from "./Achivements";
import Experence from "./Experence";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experenceData, setExperenceData] = useState(false);
  const [achivementData, setAchivementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center  items-center">
        <Title title="Visit my Experience Section" desc="resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
          <li onClick={() => setEducationData(true) &
          setSkillData(false) &
          setExperenceData(false) &
        setAchivementData(false)}

           className="resumeLi">
            Education
          </li>
          <li
            onClick={() => setEducationData(false) &
              setSkillData(true) &
              setExperenceData(false) &
            setAchivementData(false)}
            className="resumeLi"
          >
            Professional Skills
          </li>
          <li
            onClick={() => setEducationData(false) &
              setSkillData(false) &
              setExperenceData(true) &
            setAchivementData(false)}
            className="resumeLi"
          >
            Experience
          </li>
          <li onClick={() => setEducationData(false) &
          setSkillData(false) &
          setExperenceData(false) &
        setAchivementData(true)}className="resumeLi">
            Educaition
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experenceData && <Experence />}
      {achivementData && <Achivements />}
      {/* <Education />
     <Skills />
     <Achivements />
     <Experence /> */}
    </section>
  );
};

export default Resume;
