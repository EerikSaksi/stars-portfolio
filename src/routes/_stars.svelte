<script>
	import IntersectionObserver from 'svelte-intersection-observer';

	import { onMount } from 'svelte';

	let element;
	let intersecting;

	let ParticlesComponent;
	let particlesContainer;
	onMount(async () => {
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
				value: 100
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
					minimumValue: 0.8
				},
				value: 1
			}
		}
	};

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;
	};
</script>

<div class="relative">
    <div class="absolute w-full h-1/2 flex justify-center items-center z-100">
		<p>Eerik Saksi</p>
        <p>Computing Science Student at University of Glasgow</p>
	</div>
	<IntersectionObserver
		{element}
		on:observe={(e) =>
			e.detail.isIntersecting ? particlesContainer.play() : console.log('paused')}
	>
		<div bind:this={element}>
			<svelte:component
				this={ParticlesComponent}
				options={particlesConfig}
				style="background: white"
			/>
		</div>
	</IntersectionObserver>
</div>

<style global>
	#tsparticles {
		background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(3, 37, 76, 1) 100%);
		height: 200vh;
        z-index: -1;
	}
</style>
