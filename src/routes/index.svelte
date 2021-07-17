<script>
	import Stars from './_stars.svelte';
</script>

<Stars />
<div
	class="overflow-x-hidden "
	style="height: 150vh; background:  linear-gradient(180deg, rgba(3, 37, 76, 1) 30%, rgba(15, 78, 147) 100%);"
>
  <img loading="lazy" alt="Cloud" src="clouds.png" class="full-width"  />
</div>

<style>
	.full-width {
		left: 40%;
		margin-left: -50vw;
		margin-right: -50vw;
		max-width: 120vw;
		position: relative;
		right: 60%;
		width: 120vw;
	}
</style>
