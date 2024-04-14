import { Project } from "@/types/ProjectType";
import React from "react";
import ProjectBox from "../ProjectBox";

interface IProjectsBoxListProps {
  projects: Project[];
}

const ProjectsBoxList = ({ projects }: IProjectsBoxListProps) => {
  return (
    <section className="mt-12 gap-6 md:gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectBox
          key={project.id}
          id={project.id}
          name={project.name}
          description={project.description}
          imgPath={project.imgPath}
          tech={project.tech}
          url={project.url}
          github={project.github}
        />
      ))}
    </section>
  );
};

export default ProjectsBoxList;
