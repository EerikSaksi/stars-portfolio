<script>
	import { onMount } from 'svelte';

	let ParticlesComponent;

	onMount(async () => {
		const module = await import('svelte-particles');
		ParticlesComponent = module.default;
	});

	let particlesConfig = {
		detectRetina: false,
		fpsLimit: 30,
		background: {
			opacity: 0
		},
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
				value: 400
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
					minimumValue: 0.5
				},
				value: 1
			}
		}
	};
</script>

<div class="relative">
	<svelte:component
		this={ParticlesComponent}
		id="tsparticles"
		options={particlesConfig}
		style="height: 150vh"
	/>
	<div
		style="background: linear-gradient(180deg, rgba(0,0,0) 80%, rgba(135,206,235,1) 100%); height: 100vh"
		class="absolute"
	/>
</div>

<style>
	#container {
		position: relative;
	}

	#tsparticles {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		padding: 0;
		margin: 0;
		z-index: 0; /* if you use -1 you have to set to `"window"` the interactivity.detectsOn property */
	}
</style>
