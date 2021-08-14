<div
	class="w-40 md:w-96 h-40 md:h-96 top-0 right-0 absolute  -translate-y-1/3 translate-x-1/4"
	alt="Moon"
>
	<img class="absolute min-w-full h-full moon" src="moon.png " alt="Moon" />
	<div class="relative">
		<div class="grid grid-cols-2 place-items-center p-6 pt-12 pr-12 md:p-28 md:pl-8 md:pb-4">
			<a href="https://www.linkedin.com/in/eerik-saksi-b58324193/">
				<img class="filter-none" src="linkedin.svg" alt="Linkedin" />
			</a>
			<a href="https://github.com/eeriksaksi">
				<img class="filter-none" src="github.svg" alt="Github" />
			</a>
			<a href="mailto:saksi.eerik@gmail.com">
				<img src="gmail.svg" alt="Github" />
			</a>
			<a href="tel:+44751968702">
				<img src="phone.svg" alt="Github" />
			</a>
		</div>
	</div>
</div>

<style lang="postcss">
	.moon {
		filter: brightness(1.2) drop-shadow(0 0 150px rgba(100, 100, 100, 1))
			drop-shadow(0 0 30px rgba(100, 100, 100, 1));
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
	a > img {
		filter: none;
	}
</style>
