<script>
	let technologies = [
		['react.webp', 'svelte.webp', 'django.webp',  'reactnative.webp', 'expo.webp'],
		['materialui.webp', 'bootstrap.webp', 'tailwind.webp'],
		['apollo.webp', 'typegraphql.webp', 'postgraphile.webp'],
		['postgres.webp', 'sequelize.webp', 'typeorm.webp', 'sqlalchemy.webp'],

		['pandas.webp', 'scikit.webp', 'spotlight.webp', 'networkx.png']
	];
</script>

<div class="absolute w-full flex flex-col justify-center items-center bottom-0 " style = "height: 80vh">
	<div class="flex flex-col justify-center items-center p-8">
		{#each technologies as row}
			<div class="flex flex-row ">
				{#each row as technology}
					<div class="shadow-lg rounded-full m-2 p-3" style = "" >
						<img class="h-16" src={'techs/' + technology} alt="Technology" />
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>

