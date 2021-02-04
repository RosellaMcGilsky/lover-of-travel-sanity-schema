import {
  BUTTON_TEXT,
  EXTERNAL_LINK,
  HEADLINE,
  SINGLE_BLOCK_CONTENT,
} from "../constants"

export default {
  name: "calloutBox",
  title: "Callout Box",
  type: "object",
  fields: [
    {
      name: HEADLINE,
      title: "Callout Headline",
      description:
        "Write a compelling headline to get people to read the callout box.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: SINGLE_BLOCK_CONTENT,
      title: "Enter Callout Content",
      description:
        "This is somethign important. It could be an affiliate product or something urgent about the topic you're talking about.",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: BUTTON_TEXT,
      title: "Button Text",
      description:
        "If you're promoting an affiliate product, enter button text and a button will show to help attract more clicks.",
      type: "string",
    },
    {
      name: EXTERNAL_LINK,
      title: "External Link",
      description:
        "This is the FULL link to wherever you're sending the read. Not used for inner-site links.",
      type: "url",
    },
  ],
}
