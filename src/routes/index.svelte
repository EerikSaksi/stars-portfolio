<script>
	import Stars from './_stars.svelte';
</script>

<Stars />
<div class="w-full overflow-hidden">
	<div
        class="flex flex-col h-full justify-between"
		style="width: 125vw; height: 500vh; background:  linear-gradient(180deg, rgba(3, 37, 76, 1) 0%, rgba(105,105,105, 1) 30%, rgba(220,220,220, 1) 100%);"
	>
      <img loading="lazy" alt="Cloud" src="clouds.png"   style = "transform: translateX(-5%)"  />
      <img loading="lazy" alt="Mountains" src="ground.png" />
    </div>
</div>
