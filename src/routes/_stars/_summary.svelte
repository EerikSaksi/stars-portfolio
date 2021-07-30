<div class="w-full flex justify-center items-center" style="height: 100vh">
	<div class="flex flex-col justify-center items-center p-8 w-full md:w-2/5">
		<h1>Education</h1>
		<div class="section-container">
			<img alt="University of Glasgow" src="glasgow.svg" />
			<p>Computing MSci (ongoing)</p>
		</div>
		<h1 class="mb-2">Experience</h1>
		<div class="section-container">
			<img alt="UROS" src="uros.svg" />
			<p>Software Engineer Intern</p>
		</div>
		<div class="section-container">
			<img alt="Barclays" src="barclays.svg" />
			<p>Technology Developer Intern</p>
		</div>
		<h1>Projects</h1>
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
		@apply text-white text-base md:text-2xl text-right flex-grow ;
	}
	img {
		@apply w-24 md:w-32 mr-2;
	}
	.section-container {
		@apply flex justify-between items-center w-full m-4;
	}
</style>
