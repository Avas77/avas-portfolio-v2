import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").pop(),
  },
};

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
    },
    series: {
      type: "string",
      required: false,
    },
    order: {
      type: "number",
      required: false,
    },
    draft: { type: "boolean", default: false },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "content/",
  documentTypes: [Blog],
});
