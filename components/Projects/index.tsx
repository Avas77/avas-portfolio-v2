import React from "react";
import BlockHeader from "../BlockHeader";
import ViewAllButton from "../ViewAllButton";
import ProjectsBoxList from "../ProjectsBoxList";
import { clientApps } from "@/constants/ProjectInfo";

const Projects = () => {
  const mainProjects = clientApps.slice(0, 3);

  return (
    <section className="mb-[106px]">
      <section className="flex justify-between">
        <BlockHeader
          title="projects"
          classNames="w-[340px] lg:w-[511px] hidden md:block"
        />
        <ViewAllButton classNames="hidden md:block" />
      </section>
      <ProjectsBoxList projects={mainProjects} />
      <div className="flex md:hidden mt-16 justify-end">
        <ViewAllButton />
      </div>
    </section>
  );
};

export default Projects;
