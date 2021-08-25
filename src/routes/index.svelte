<script>
	import Summary from './_summary.svelte';
	import Cloud from './_space_stuff/_cloud.svelte';
	let Asteroids;

	import { onMount } from 'svelte';

	let ParticlesComponent;
	onMount(() => {
		import('svelte-particles')
			.then((module) => {
				ParticlesComponent = module.default;
			})
			.then(() => import('./_space_stuff/_asteroids/asteroids.svelte'))
			.then((module) => {
				Asteroids = module.default;
			});
	});

	let particlesConfig = {
		detectRetina: false,
		fpsLimit: 30,
		interactivity: {
			detectsOn: 'canvas',
			events: {
				resize: true
			}
		},
		particles: {
			color: {
				value: '#fff'
			},
			number: {
				density: {
					enable: true,
					area: 1080
				},
				limit: 0,
				value: 150
			},
			opacity: {
				animation: {
					enable: true,
					minimumValue: 0.05,
					speed: 1,
					sync: false
				},
				random: {
					enable: true,
					minimumValue: 0.05
				},
				value: 1
			},
			shape: {
				type: 'circle'
			},
			size: {
				random: {
					enable: true,
					minimumValue: 0.9
				},
				value: 1.5
			}
		}
	};
</script>

<div
	class="relative bg-black overflow-y-hidden"
	style="height: 200vh; linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(3, 37, 76, 1) 100%)"
>
	<Cloud />
	<div class="absolute w-full h-full md:h-2/3">
		<Summary />
		<svelte:component this={Asteroids} />
	</div>
	<svelte:component this={ParticlesComponent} options={particlesConfig} />
</div>

<style global>
	#tsparticles {
		background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgb(25, 25, 112) 100%);
		height: 200vh;
		z-index: -1;
	}
	body {
		margin: 0;
		padding: 0;
	}
</style>
