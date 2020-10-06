import { FaLink, FaRegCompass, FaExternalLinkAlt } from "react-icons/fa"
import CalloutBoxIcon from "../src/components/CalloutBoxIcon"
import YouTubeEmbedIcon from "../src/components/YouTubeEmbedIcon"
import PostImageIcon from "../src/components/PostImageIcon"
import TrailStatsIcon from "../src/components/TrailStatsIcon"
import CairnTipIcon from "../src/components/CairnTipIcon"

export default {
  name: "blockContent",
  title: "Rich Text Content",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 3", value: "h3" },
        { title: "Heading 4", value: "h4" },
      ],
      marks: {
        decorators: [{ title: "Strong", value: "strong" }],
        annotations: [
          {
            name: "internalPostLink",
            type: "object",
            title: "Internal Post Link",
            blockEditor: {
              icon: FaLink,
            },
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "What post do you want to link to?",
                to: [{ type: "blogPost" }],
              },
            ],
          },
          {
            name: "internalPageLink",
            type: "object",
            title: "Internal Page Link",
            blockEditor: { icon: FaRegCompass },
            fields: [
              {
                name: "pageUrl",
                title: "What page do you want to link to?",
                description: "Copy and paste only the part after the .com.",
                type: "string",
              },
            ],
          },
          {
            name: "externalLink",
            type: "object",
            title: "External Page Link",
            blockEditor: {
              icon: FaExternalLinkAlt,
            },
            fields: [
              {
                name: "externalUrl",
                title: "Where do you want to link to?",
                description: "Include the full url of the page.",
                type: "url",
              },
            ],
          },
        ],
      },
    },
    {
      name: "postImage",
      title: "Post Image",
      icon: PostImageIcon,
      type: "siteImage",
    },
    {
      name: "trailStats",
      title: "Trail Stats",
      icon: TrailStatsIcon,
      type: "trailStats",
    },
    {
      name: "cairnTip",
      title: "Cairn Tip",
      icon: CairnTipIcon,
      type: "cairnTip",
    },
    {
      name: "calloutBox",
      title: "calloutBox",
      icon: CalloutBoxIcon,
      type: "calloutBox",
    },
    {
      name: "youtube",
      title: "YouTube Embed",
      icon: YouTubeEmbedIcon,
      type: "youtube",
    },
  ],
}
