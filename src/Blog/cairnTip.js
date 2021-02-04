import { SINGLE_BLOCK_CONTENT } from "../constants"

export default {
  name: "cairnTip",
  title: "Cairn Tip",
  type: "object",
  fields: [
    {
      name: SINGLE_BLOCK_CONTENT,
      title: "Enter Your Tip",
      description:
        "This is a tip about a trail... about the town... a helpful tip to help readers find their way.",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
  ],
}
