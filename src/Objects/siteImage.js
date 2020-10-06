import { ALT_TAG, IMAGE_1, TITLE_TAG } from "../constants"

export default {
  name: "siteImage",
  title: "Site Image",
  type: "object",
  fields: [
    {
      name: IMAGE_1,
      title: "Image",
      type: "image",
    },
    {
      name: ALT_TAG,
      title: "Image Alt Tag",
      description:
        "Describe what is in the image to somebody who can't see it.",
      type: "string",
    },
    {
      name: TITLE_TAG,
      title: "Image Title",
      description:
        "Give the title a title. This shows when the mouse overs the image.",
      type: "string",
    },
  ],
}
