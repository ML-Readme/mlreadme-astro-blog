/* lib/sanity/image.ts */
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "sanity:client";

type ImageUrlBuilder = ReturnType<typeof imageUrlBuilder>;

export type ImageSource = Parameters<ImageUrlBuilder["image"]>[0];

export const imageUrlFor = (source: ImageSource) =>
  imageUrlBuilder(sanityClient).image(source);

