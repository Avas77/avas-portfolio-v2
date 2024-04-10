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
        <BlockHeader
          title="projects"
          classNames="w-[340px] lg:w-[511px] hidden md:block"
        />
        <ViewAllButton classNames="hidden md:block" />
      </section>
      <section className="mt-12 gap-6 md:gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
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
      <div className="flex md:hidden mt-16 justify-end">
        <ViewAllButton />
      </div>
    </section>
  );
};

export default Projects;
