import {
  HEADLINE,
  IMAGE_1,
  SLUG,
  SOCIAL_SHARE_INFO,
  TYPE_TEXT_DECSCRIPTION,
  SINGLE_BLOCK_CONTENT,
  ARRAY_1,
} from "../constants"

export default {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: HEADLINE,
      title: "Blog Post Title",
      type: "string",
    },
    {
      name: SOCIAL_SHARE_INFO,
      title: "Social Share Information",
      description:
        "This allows for sharing thumbnails, titles, and descriptions. Fill this out!",
      type: "socialShareInfo",
    },
    {
      name: SLUG,
      title: "Post Path",
      description:
        "Click the generate button. But if the title is too long... make it shorter with the name keywords.",
      type: "slug",
      options: {
        source: HEADLINE,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: ARRAY_1,
      title: "Select Post Tags",
      description: "Keep it to two or three max. Focused posts.",
      type: "array",
      of: [{ type: "reference", to: { type: "postTag" } }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: IMAGE_1,
      title: "Feature Post Image",
      description: "This is your feature image. Try to make it... 1440x756.",
      type: "siteImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishDate",
      title: "Published Date",
      description: "Not going to use this yet. But it might be good to have.",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: SINGLE_BLOCK_CONTENT,
      title: "Blog Post Body",
      type: "blockContent",
    },
  ],
}
