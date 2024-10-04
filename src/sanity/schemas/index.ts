import type { SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContent"
import { postType } from "./postType"
import { tagType } from "./tagType"
import { citationType } from "./citationType"

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [blockContentType, tagType, postType, citationType],
};