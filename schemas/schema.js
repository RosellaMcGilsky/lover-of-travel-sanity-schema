// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// Document Types
import post from "../src/Blog/post"
import postTag from "../src/Blog/postTag"
import about from "../src/Pages/about"

// Object Tyeps

import cairnTip from "../src/Blog/cairnTip"
import calloutBox from "../src/Blog/calloutBox"
import trailStats from "../src/Blog/trailStats"
import youtube from "../src/Blog/youtube"
import blockContent from "../src/blockContent"
import socialShareInfo from "../src/socialShareInfo"
import siteImage from "../src/Objects/siteImage"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    post,
    postTag,
    about,
    siteImage,
    cairnTip,
    calloutBox,
    trailStats,
    youtube,
    blockContent,
    socialShareInfo,
  ]),
})
