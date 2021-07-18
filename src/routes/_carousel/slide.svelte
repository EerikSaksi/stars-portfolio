<script>
	export let dist;
</script>

<div
	style="transform: translate({(dist - 0.5) * 100}%) scale({4 /
		(4 + Math.abs(dist))}); background-color: rgba(255,255,255,0.7);"
	class="bg-white absolute inset-0 flex items-center justify-center text-5xl text-white w-11/12 md:w-1/3 rounded-xl transition-filter ease-in-out duration-1000 transform slide left-1/2 {3 <=
	Math.abs(dist)
		? 'hidden'
		: Math.abs(dist) == 1
		? 'shadow-md'
		: 'shadow-lg'} mb-4"
>
	<slot />
</div>
