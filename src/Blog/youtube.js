import { STRING_1 } from "../constants"

export default {
  name: "youtube",
  title: "YouTube Embed",
  type: "object",
  fields: [
    {
      name: STRING_1,
      title: "YouTube Video Id",
      description:
        "Enter only the video id. The string after the ?v= (www.youtube.com/watch?v=IQQ8IK6nIB8) In this case the id is IQQ8IK6nIB8",
      type: "string",
    },
  ],
}
