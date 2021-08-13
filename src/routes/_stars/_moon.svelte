<div
	class="moon absolute top-0 right-0 w-40 h-40 md:w-96 md:h-96 bg-contain grid grid-cols-2 place-items-center translate-x-1/4 -translate-y-1/4 p-6 pl-2 pb-4 md:p-24 md:pl-8 md:pb-8"
	alt="Moon"
>
	<a href="https://www.linkedin.com/in/eerik-saksi-b58324193/">
		<img src="linkedin.png" alt="Linkedin" />
	</a>
	<a href="https://github.com/eeriksaksi">
		<img src="github.png" alt="Github" />
	</a>
	<a href="mailto:saksi.eerik@gmail.com">
		<img src="gmail.png" alt="Github" />
	</a>
	<a href="tel:+44751968702">
		<img src="phone.png" alt="Github" />
	</a>
</div>

<style lang="postcss">
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

	img,
	svg {
		@apply w-10 md:w-24;
	}
</style>
