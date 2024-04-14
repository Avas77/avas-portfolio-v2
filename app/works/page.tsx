import BlockHeader from "@/components/BlockHeader";
import PageHeader from "@/components/PageHeader";
import ProjectsBoxList from "@/components/ProjectsBoxList";
import { clientApps, personalApps } from "@/constants/ProjectInfo";
import React from "react";

const Works = () => {
  return (
    <section className="mt-[53px] px-6 md:px-8 xl:px-0">
      <PageHeader title="projects" description="List of my projects" />
      <section className="mt-[68px] mb-[187px] flex flex-col gap-[81px]">
        <section>
          <BlockHeader title="client-apps" classNames="hidden" />
          <ProjectsBoxList projects={clientApps} />
        </section>
        <section>
          <BlockHeader title="personal-apps" classNames="hidden" />
          <ProjectsBoxList projects={personalApps} />
        </section>
      </section>
    </section>
  );
};

export default Works;
