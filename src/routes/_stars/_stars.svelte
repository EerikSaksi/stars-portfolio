<script>
	import IntersectionObserver from 'svelte-intersection-observer';
	import Summary from './_summary.svelte';
	import StatBuff from './_stat_buff.svelte';
	import { onMount } from 'svelte';
	let element;

	let ParticlesComponent;
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
					minimumValue: 0.9
				},
				value: 1.5
			}
		}
	};

	let particlesContainer;
	let onParticlesLoaded = (event) => {
		particlesContainer = event.detail.particles;
	};
	function handleObserve(e) {
		if (particlesContainer) {
			console.log({ intersecting: e.detail.isIntersecting });
			e.detail.isIntersecting ? particlesContainer.play() : particlesContainer.pause();
		}
	}
</script>

<div class="relative">
    <Summary />
    <StatBuff/>
	<IntersectionObserver {element} on:observe={handleObserve} threshold={0.3}>
		<div bind:this={element}>
			<svelte:component
				this={ParticlesComponent}
				on:particlesLoaded={onParticlesLoaded}
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
