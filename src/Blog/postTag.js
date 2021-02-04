import { FaTags } from "react-icons/fa"
import { STRING_1, STRING_2 } from "../constants"

export default {
  name: "postTag",
  title: "Blog Post Tags",
  icon: FaTags,
  type: "document",
  fields: [
    {
      name: STRING_1,
      title: "Title",
      description: "This is one or two words. Keep it short and descriptive.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: STRING_2,
      title: "Tag Color",
      description:
        "This is a HEX color code. Include the # mark. Example: (#f8f8f8)",
      type: "string",
    },
  ],
}
