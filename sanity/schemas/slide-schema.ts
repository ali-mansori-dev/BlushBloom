import { defineField, defineType } from "sanity";

export const slide = defineType({
  name: "slides",
  title: "Slide",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    {
      name: "buttonUrl",
      title: "ButtonUrl",
      type: "string",
    },
    {
      name: "buttonText",
      title: "ButtonText",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "image",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
});
