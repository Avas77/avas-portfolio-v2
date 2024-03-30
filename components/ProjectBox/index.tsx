import Image from "next/image";
import React from "react";
import LiveButton from "../LiveButton";
import CodeButton from "../CodeButton";
import { projectInfo } from "@/constants/ProjectInfo";

type ProjectBoxProps = (typeof projectInfo)[0];

const ProjectBox = ({
  name,
  tech,
  description,
  imgPath,
  url,
}: ProjectBoxProps) => {
  return (
    <article className="border border-gray basis-[330px]">
      <Image src={imgPath} alt={`${name} Website`} width={330} height={201} />
      <section className="border border-gray p-2">
        <p className="text-gray">{tech}</p>
      </section>
      <section className="p-4 flex flex-col gap-4">
        <h3 className="text-2xl font-medium">{name}</h3>
        <p className="text-gray">{description}</p>
        <div className="flex gap-4">
          <LiveButton />
          <CodeButton />
        </div>
      </section>
    </article>
  );
};

export default ProjectBox;
