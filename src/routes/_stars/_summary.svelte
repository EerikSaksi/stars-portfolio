<script>
	import Moon from './_moon.svelte';
</script>

<div class="w-full flex justify-center items-center overflow-hidden relative ">
	<Moon />
	<div class="flex flex-col justify-center items-center p-8 h-full w-full md:w-2/5 mt-16">
		<div class="section-container">
			<img alt="University of Glasgow" src="glasgow.svg" />
			<p>Computing MSci (ongoing)</p>
		</div>
		<div class="section-container">
			<img alt="UROS" src="uros.svg" />
			<p>Software Engineer Intern</p>
		</div>
		<div class="section-container">
			<img alt="Barclays" src="barclays.svg" />
			<p>Technology Developer Intern</p>
		</div>
		<div class="section-container">
			<img alt="Stat Buff" src="icon.svg" class="rounded-full p-4" />
			<p>Cross Platform Multiplayer App</p>
		</div>
	</div>
</div>

<style lang="postcss">
	h1 {
		@apply text-3xl md:text-4xl my-1 md:my-8 text-white text-center border-b-2;
	}
	p {
		@apply text-white text-base md:text-2xl text-right flex-grow;
	}
	img {
		@apply w-24 md:w-32 mr-2;
	}
	.section-container {
      @apply flex justify-between items-center w-full m-4 h-1/3;
	}
</style>
