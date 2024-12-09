import React from "react";
import { Link } from "react-scroll";
import Title from "../Layouts/Title";
import Card from "./Card";
import { FaSquareWebAwesome } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineSyncProblem } from "react-icons/md";
const Features = () => {
  return (
    <section
      id="features"
      className="w-full  py-20  border-b-[1px] border-b-black"
    >
      <Title title="Features" desc="What I do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
        <Card
          title="Business Strategy"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis."
          icon={<FaBusinessTime />}
        />


        <Card
          title="Web Development"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis."
        icon={<FaReact />}
        />
        <Card
          title="Software Development"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis."
          icon={<GrCloudSoftware />}
        />
        <Card
          title="SEO"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis."
          icon={<IoBriefcaseOutline/>}
        />
        <Card
          title="Problem solving"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis."
          icon={<MdOutlineSyncProblem />}
        />
        <Card
          title="DSA"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis."
          icon={<FaSquareWebAwesome />}
        />
      </div>
    </section>
  );
};

export default Features;
