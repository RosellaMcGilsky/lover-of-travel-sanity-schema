import { HEADLINE, SLUG, TYPE_TEXT_DECSCRIPTION, IMAGE_1 } from "./constants"

export default {
  name: "socialShareInfo",
  title: "Social Share Block",
  type: "object",
  options: { collapsible: true },
  fields: [
    {
      name: HEADLINE,
      title: "Social Share Headline:",
      description: "A short but enticing headline to make people click.",
      type: "string",
    },
    {
      name: SLUG,
      title: "Social Share Slug:",
      description: "Check this against the real url on the site. Ask Dan.",
      type: "slug",
    },
    {
      name: TYPE_TEXT_DECSCRIPTION,
      title: "Social Share Description:",
      description:
        "A brief and really enticing description of the page or post to entice the click.",
      type: "text",
      rows: 5,
    },
    {
      name: IMAGE_1,
      title: "Social Share Image:",
      description:
        "This is the image for Facebook and Twitter. Dimensions: 1200x630.",
      type: "image",
    },
  ],
}
