<script>
	export let image;
	export let delay;
	let topOffset = Math.random() * 70;
</script>

<div
	class="asteroid h-20 md:h-32 w-20 md:w-32 flex justify-center items-center p-1 md:p-2 absolute bg-cover "
	style="animation-delay: {delay}s; top: {topOffset}px"
>
	<img src={image.src} alt={image.src} class="object-cover {image.classes ? image.classes : ''} z-10" />
</div>

<style>
	div {
        background-image: url('/static/asteroid.png');
		animation-name: left-to-right;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		transform: translateX(-100%);
		animation-duration: 4s;
        animation-delay: 2s;
	}
	@media (min-width: 768px) {
		div {
			animation-duration: 9s;
		}
	}
	@keyframes left-to-right {
		0% {
			transform: translateX(-100%);
		}
		70% {
			transform: translateX(calc(100vw + 100%));
		}
		100% {
			transform: translateX(calc(100vw + 100%));
		}
	}
</style>
