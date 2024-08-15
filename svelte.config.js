import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

export default {
    kit: {
        paths: {
            base: dev ? '' : '/svelteport',  // Adjust the base path as needed
        },
        adapter: adapter({
            // default options, customize as needed
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
    }
};
