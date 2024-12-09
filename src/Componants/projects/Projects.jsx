import React from "react";
import Title from "../Layouts/Title";
import ProjectCard from "./ProjectCard";

import { Ecommerce,projectFour,
  projectfive,
  projectSix,
  Projectseven,
  projecteight, } from "../../assets/index";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full class py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center  items-center">
        <Title
          title="Visit my Portfolio projects Section"
          desc="MY PROJECTS"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-y-14">
        <ProjectCard
          title="E-COMMERCE WEBSITE"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas laborum animi distinctio. Vitae voluptate cumque earum repellat. Suscipit, blanditiis."
          src={Ecommerce}
          githublink="#"
          url="#"

        />
        <ProjectCard
          title="CHAT APP"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas laborum animi distinctio. Vitae voluptate cumque earum repellat. Suscipit, blanditiis."
          src={Projectseven}
          githublink="#"
          url="#"
        />
        <ProjectCard
          title="TODO LIST"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas laborum animi distinctio. Vitae voluptate cumque earum repellat. Suscipit, blanditiis."
          src={projecteight}
          githublink="#"
          url="#"
        />
        <ProjectCard
          title="MOVIES API"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas laborum animi distinctio. Vitae voluptate cumque earum repellat. Suscipit, blanditiis."
          src={projectFour}
          githublink="#"
          url="#"
        />
      
        <ProjectCard
          title="MY PERSONAL BLOG WEBSITE"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas laborum animi distinctio. Vitae voluptate cumque earum repellat. Suscipit, blanditiis."
          src={projectSix}
          githublink="#"
          url="#"
        />
      
      </div>
    </section>
  );
};

export default Projects;
