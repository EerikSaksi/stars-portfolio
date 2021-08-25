<script>
	import Asteroid from './asteroid.svelte';
	let imageRows = [
		[{ src: 'apollo.svg' }, { src: 'bootstrap.svg' }, { src: 'django.svg' }, { src: 'expo.svg' }],
		[
			{ src: 'materialui.svg', classes: 'p-2 md:p-4' },
			{ src: 'networkx.svg', classes: 'p-2 md:p-3' },
			{ src: 'pandas.svg' },
			{ src: 'postgraphile.svg' },
			{ src: 'rust.svg' }
		],
		[
			{ src: 'postgres.svg', classes: 'p-2 md:p-3' },
			{ src: 'reactnative.svg', classes: 'p-3 md:p-4' },
			{ src: 'react.svg', classes: 'p-2 md:p-3' },
			{ src: 'scikit.svg' },
			{ src: 'actix.svg' }
		],
		[
			{ src: 'sequelize.svg' },
			{ src: 'spotlight.svg' },
			{ src: 'svelte.svg', classes: 'p-3 md:p-5' },
			{ src: 'tailwind.svg' }
		]
	];
	let delays = [2, 5, 3, 1, 4];
</script>

],

<div class="relative w-full overflow-x-hidden h-full">
	{#each imageRows as row, i}
		<div class="absolute" style="top: {10 * i}%">
			{#each row as image, j}
				<Asteroid {image} delay={delays[i] + j * 1.75} />
			{/each}
		</div>
	{/each}
</div>
