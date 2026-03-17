import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-static configured for GitHub Pages
		adapter: adapter({
			fallback: '404.html', // required for GitHub Pages
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH || ''
		}
	}
};

export default config;
