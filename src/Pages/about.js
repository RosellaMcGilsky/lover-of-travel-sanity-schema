import { FaSmile } from "react-icons/fa"
import { HEADLINE, SINGLE_BLOCK_CONTENT, SOCIAL_SHARE_INFO } from "../constants"

export default {
  name: "aboutPage",
  title: "About Page",
  icon: FaSmile,
  type: "document",
  fields: [
    {
      name: HEADLINE,
      title: "About Page Headline",
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
      name: SINGLE_BLOCK_CONTENT,
      title: "About Page Content",
      type: "blockContent",
    },
  ],
}
