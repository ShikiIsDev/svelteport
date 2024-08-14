import adapterStatic from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

export default {
    kit: {
        paths: {
            base: dev ? '' : '/svelteport',
        },
        adapter: adapterStatic(),
    }
};
