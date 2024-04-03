import React from "react";
import BlockHeader from "../BlockHeader";
import ProjectBox from "../ProjectBox";
import { projectInfo } from "@/constants/ProjectInfo";
import ViewAllButton from "../ViewAllButton";

const Projects = () => {
  const mainProjects = projectInfo.slice(0, 3);

  return (
    <section className="mb-[106px]">
      <section className="flex justify-between">
        <BlockHeader title="projects" classNames="w-[511px]" />
        <ViewAllButton />
      </section>
      <section className="flex mt-12 flex-wrap gap-4">
        {mainProjects.map((project) => (
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
    </section>
  );
};

export default Projects;
