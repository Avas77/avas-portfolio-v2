"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="Avas77/avas-portfolio-v2"
      repoId="R_kgDOLlhiNg"
      category="General"
      categoryId="DIC_kwDOLlhiNs4CfVCH"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
}
