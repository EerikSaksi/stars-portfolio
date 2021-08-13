<div class="moon absolute top-0 right-0 w-32 h-32 md:w-96 md:h-96 bg-contain" alt="Moon">
  <img src="linkedin.png" class="w-28" alt="Linkedin">
</div>


<style>
	.moon {
		filter: brightness(1.2) drop-shadow(0 0 150px rgba(100, 100, 100, 1))
			drop-shadow(0 0 30px rgba(100, 100, 100, 1));
		animation: moon 12s infinite;
        background-image: url(http://pngimg.com/uploads/moon/moon_PNG46.png);
	}
	@keyframes moon {
		0% {
			filter: brightness(1.4) drop-shadow(0 0 150px rgba(100, 100, 100, 1))
				drop-shadow(0 0 30px rgba(100, 100, 100, 1));
		}
		50% {
			filter: brightness(1) drop-shadow(0 0 120px rgba(100, 100, 100, 1))
				drop-shadow(0 0 10px rgba(100, 100, 100, 1));
		}
		100% {
			filter: brightness(1.4) drop-shadow(0 0 150px rgba(100, 100, 100, 1))
				drop-shadow(0 0 30px rgba(100, 100, 100, 1));
		}
	}
</style>
