import React from "react";
import BlockHeader from "../BlockHeader";
import Image from "next/image";
import Link from "next/link";
import ProjectBox from "../ProjectBox";
import { projectInfo } from "@/constants/ProjectInfo";

const Projects = () => {
  const mainProjects = projectInfo.slice(0, 3);

  return (
    <section className="mb-[106px]">
      <section className="flex justify-between">
        <BlockHeader title="projects" lineWidth={511} />
        <Link href={"/projects"} className="self-center">
          <Image
            src={"/assets/view-all.svg"}
            alt="view all btn"
            width={116}
            height={21}
          />
        </Link>
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
          />
        ))}
      </section>
    </section>
  );
};

export default Projects;
