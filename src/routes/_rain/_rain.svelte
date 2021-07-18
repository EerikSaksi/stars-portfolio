<script>
	import IntersectionObserver from 'svelte-intersection-observer';
	import { onMount } from 'svelte';
	let element;

	let ParticlesComponent;
	onMount(async () => {
		import('svelte-particles').then((module) => {
			ParticlesComponent = module.default;
		});
	});

	let particlesConfig = {
		detectRetina: true,
		fpsLimit: 30,
		particles: {
			color: {
				value: ['#BD10E0', '#B8E986', '#50E3C2', '#FFD300', '#E86363']
			},
			move: {
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
				value: 100
			},
			shape: {
				character: {
					fill: false,
					font: 'Verdana',
					style: '',
					value: '*',
					weight: '400'
				},
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
			scale: 1
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

<div class="relative" style = "height: 200vh">
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
		background-image: url('/static/ground.webp'),
			linear-gradient(180deg, rgb(105, 105, 105, 1) 0%, rgba(192, 192, 192, 1) 100%);
		background-position: bottom;
		background-repeat: no-repeat;
		background-size: 100vw, auto;
		height: 200vh;
		z-index: -1;
	}
</style>
