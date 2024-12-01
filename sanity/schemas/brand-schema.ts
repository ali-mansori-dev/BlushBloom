import { defineField, defineType } from "sanity";

export const brand = defineType({
  name: "brands",
  title: "Brand",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "images",
      title: "Images",
      type: "image",
    },
  ],
});
