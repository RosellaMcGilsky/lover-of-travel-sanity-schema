import { ARRAY_1, HEADLINE, STRING_1, STRING_2 } from "../constants"

export default {
  name: "trailStats",
  title: "Trail Stats",
  type: "object",
  fields: [
    {
      name: HEADLINE,
      title: "Trail Name",
      description: "What is the offical name of the trail?",
      type: "string",
    },
    {
      name: STRING_1,
      title: "Trail Length",
      description: "The total length in miles for the trail one way.",
      type: "string",
    },
    {
      name: STRING_2,
      title: "Elevation Gain",
      description: "Total elevation gain of the trail.",
      type: "string",
    },
    {
      name: ARRAY_1,
      title: "Route Type",
      description: "The total length in miles for the trail one way.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { value: "Loop", title: "Loop" },
          { value: "Out and Back", title: "Out and Back" },
          { value: "Point to Point", title: "Point to Point" },
        ],
      },
    },
  ],
}
