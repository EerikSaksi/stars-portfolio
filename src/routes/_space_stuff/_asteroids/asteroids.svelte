<script>
	import Asteroid from './asteroid.svelte';
	let images = [
		'apollo.svg',
		'bootstrap.svg',
		'django.svg',
		'expo.svg',
		'materialui.svg',
		'networkx.svg',
		'pandas.svg',
		'postgraphile.svg',
		'postgres.svg',
		'reactnative.svg',
		'react.svg',
		'scikit.svg',
		'sequelize.svg',
		'spotlight.svg',
		'svelte.svg',
		'tailwind.svg',
		'rust.svg',
		'actix.svg'
	];
</script>

<div class="relative w-full overflow-x-hidden h-32">
	<Asteroid image={images[0]} topOffset={0} />
</div>
