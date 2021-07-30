<script>
	let technologies = [
		['react.svg', 'svelte.svg', 'django.svg',  'reactnative.svg', 'expo.svg'],
		['materialui.svg', 'bootstrap.svg', 'tailwind.svg'],
		['apollo.svg', 'typegraphql.svg', 'postgraphile.svg'],
		['postgres.svg', 'sequelize.svg', 'typeorm.svg', 'sqlalchemy.svg'],

		['pandas.svg', 'scikit.svg', 'spotlight.svg', 'networkx.svg']
	];
</script>

<div class="absolute w-full flex flex-col justify-center items-center bottom-0 " style = "height: 80vh">
	<div class="flex flex-col justify-center items-center p-8">
		{#each technologies as row}
			<div class="flex flex-row ">
				{#each row as technology}
					<div class="shadow-lg rounded-full m-2 p-3" >
						<img class="h-16" src={'techs/' + technology} alt="Technology" />
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>

