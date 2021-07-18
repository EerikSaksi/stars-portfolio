<script>
	import IntersectionObserver from 'svelte-intersection-observer';
	import { onMount } from 'svelte';
	let element;
	import Pictures from './_pictures.svelte';

	let ParticlesComponent;
	onMount(async () => {
		import('svelte-particles').then((module) => {
			ParticlesComponent = module.default;
		});
	});

	let particlesConfig = {
		detectRetina: true,
		fpsLimit: 60,
		particles: {
			color: {
				value: '#ffffff'
			},
			lineLinked: {
				blink: false,
				color: '#000',
				consent: false,
				distance: 150,
				enable: false,
				opacity: 0,
				width: 0
			},
			rotate: {
				value: 0,
				random: false,
				direction: 'clockwise',
				animation: {
					enable: false,
					speed: 5,
					sync: false
				}
			},
			move: {
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200
				},
				bounce: false,
				direction: 'bottom',
				enable: true,
				outMode: 'out',
				random: true,
				speed: 30,
				straight: true
			},
			number: {
				density: {
					enable: true,
					area: 800
				},
				limit: 0,
				value: 200
			},
			opacity: {
				animation: {
					enable: false,
					minimumValue: 0.1,
					speed: 1,
					sync: false
				},
				random: false,
				value: 0.5
			},
			shape: {
				character: {
					fill: false,
					font: 'Verdana',
					style: '',
					value: '*',
					weight: '400'
				},
				image: [],
				polygon: {
					nb_sides: 5
				},
				stroke: {
					color: '#efefefee',
					width: 1
				},
				type: 'line'
			},
			size: {
				animation: {
					enable: false,
					minimumValue: 0.1,
					speed: 40,
					sync: false
				},
				random: false,
				value: 5
			}
		},
		polygon: {
			draw: {
				enable: false,
				lineColor: '#ffffff',
				lineWidth: 0.5
			},
			move: {
				radius: 10
			},
			scale: 1,
			type: 'none',
			url: ''
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
	<Pictures />
	<IntersectionObserver {element} on:observe={handleObserve} threshold={0.3}>
		<div bind:this={element}>
			<svelte:component
				this={ParticlesComponent}
				on:particlesLoaded={onParticlesLoaded}
				options={particlesConfig}
				style="background: white"
				id="rain"
			/>
		</div>
	</IntersectionObserver>
</div>

<style global>
	#rain {
		background: linear-gradient(180deg, rgba(3, 37, 76, 1) 0%, rgba(3, 37, 76, 1) 100%);
		height: 300vh;
		z-index: -1;
	}
</style>
