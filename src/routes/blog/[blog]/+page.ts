import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	if (params.blog === "one"){

	return {
		post: {
			title: 'blog one',
			content: " I am blog one content",
			image: "image.jpg"
		},
	};
	} else if (params.blog === "two"){

	return {
		post: {
			title: "blog two",
			content: 'I am blog two content'
		},
	};
	}
};