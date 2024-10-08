export const prerender = false;

import { sanityClient } from 'sanity:client';
import groq from 'groq';
import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await sanityClient.fetch(
		groq`*[_type == "post"]`
	);
	
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/post/${post.slug}/`,
		})),
	});
}
