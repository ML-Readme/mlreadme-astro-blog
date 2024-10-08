// ./src/sanity/lib/urlForImage.ts
import { sanityClient } from 'sanity:client';
import imageUrlBuilder from "@sanity/image-url";

export const imageBuilder = imageUrlBuilder(sanityClient);

type ImageUrlBuilder = ReturnType<typeof imageUrlBuilder>;

export type ImageSource = Parameters<ImageUrlBuilder["image"]>[0];

export function urlForImage(source: ImageSource) {
  return imageBuilder.image(source);
}

