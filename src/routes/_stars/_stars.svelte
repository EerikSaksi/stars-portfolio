<script>
	import Summary from './_summary.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	let CarouselWithTechnologies;
	let element;
	let intersecting;
	$: if (intersecting) {
		console.log('import');
		import('../_carousel/carousel_with_technologies.svelte').then((module) => {
			CarouselWithTechnologies = module.default;
		});
	}
	import { onMount } from 'svelte';

	let ParticlesComponent;
	onMount(() => {
		import('svelte-particles').then((module) => {
			ParticlesComponent = module.default;
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
	class="relative bg-black"
	style="height: 180vh; linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(3, 37, 76, 1) 100%)"
>
	<div class="absolute w-full">
		<Summary />
		<IntersectionObserver {element} bind:intersecting threshold={0.2} once={true}>
			<div bind:this={element} class="flex items-center" style="height: 80vh">
				<svelte:component this={CarouselWithTechnologies} />
			</div>
		</IntersectionObserver>
	</div>
	<svelte:component this={ParticlesComponent} options={particlesConfig} />
</div>

<style global>
	#tsparticles {
		background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(3, 37, 76, 1) 100%);
		height: 180vh;
		z-index: -1;
	}
</style>
