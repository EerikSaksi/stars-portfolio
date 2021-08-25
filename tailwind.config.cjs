const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
          height: {
            'h-screen-1/2': '50vh'
          }
        },
	},
	plugins: [],
};

module.exports = config;
