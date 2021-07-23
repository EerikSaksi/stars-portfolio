<div class="w-full flex justify-center items-center" style="height: 100vh">
	<div class="flex flex-col justify-center items-center p-8 w-full md:w-2/5">
		<h1>Education</h1>
		<div class="section-container">
			<img alt="University of Glasgow" src="glasgow.webp" />
			<p>Computing MSci (ongoing)</p>
		</div>
		<h1>Experience</h1>
		<div class="section-container">
			<img alt="University of Glasgow" src="uros.webp" />
			<p>Software Engineer Intern</p>
		</div>
		<div class="section-container">
			<img alt="University of Glasgow" src="barclays.webp" />
			<p>Software Engineer Intern</p>
		</div>
		<h1>Projects</h1>
		<div class="section-container">
			<img alt="Stat Buff" src="icon.webp" class="rounded-full p-4" />
			<p>Cross Platform Multiplayer App</p>
		</div>
	</div>
</div>

<style lang="postcss">
	h1 {
		@apply text-3xl md:text-4xl mb-2 md:my-8 text-white text-center border-b-2; 
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
