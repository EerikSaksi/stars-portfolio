<script>
	import { onMount } from 'svelte';
	import Slide from './slide.svelte';
	import TechnologyGrid from './technology_grid.svelte';

	const convertIndex = (index) => {
		if (index < 0) {
			return 6 + index;
		}
		return index % 6;
	};

	let activeIndex = -1;
	export let technologies;
	export let distances = Array(6);

	async function nextSlide() {
		activeIndex = (activeIndex + 1) % 6;
		const tempDistances = Array(6).fill(0);

		tempDistances[convertIndex(activeIndex - 1)] = -1;
		tempDistances[convertIndex(activeIndex - 2)] = -2;
		tempDistances[convertIndex(activeIndex - 3)] = -3;
		tempDistances[convertIndex(activeIndex + 1)] = 1;
		tempDistances[convertIndex(activeIndex + 2)] = 2;
		distances = tempDistances;
	}

	let ranges = [0, -1];
	onMount(() => {
		nextSlide();
		const usingPhone = window.matchMedia('(max-width: 640px)');
		function changeRanges(x) {
			if (x.matches) {
				ranges = [0, -1];
			} else {
				ranges = [1, -2];
			}
		}
		changeRanges(usingPhone);
		usingPhone.addListener(changeRanges);

		const interval = setInterval(() => nextSlide(), 3000);
		return () => clearInterval(interval);
	});
</script>

<div class="relative w-full overflow-x-hidden fade-in h-1/2">
	{#each technologies as technology, i}
		<Slide dist={distances[i]}>
			{#if distances[i] <= ranges[0] && ranges[1] <= distances[i]}
				<TechnologyGrid images={technology.images} extraClasses={technology.extraClasses} />
			{/if}
		</Slide>
	{/each}
</div>

<style>
	@keyframes slideInFromLeft {
		0% {
			width: 0%;
		}
		100% {
			width: 100%;
		}
	}
</style>
