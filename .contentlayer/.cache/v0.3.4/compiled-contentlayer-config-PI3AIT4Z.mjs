// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, "")
  }
};
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "string",
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    image: {
      type: "string"
    },
    computedFields
  }
}));
var contentlayer_config_default = makeSource({ contentDirPath: "content", documentTypes: [Blog] });
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-PI3AIT4Z.mjs.map
