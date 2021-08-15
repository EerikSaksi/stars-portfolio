<div
	class="w-40 md:w-96 h-40 md:h-96 top-0 right-0 absolute  -translate-y-1/3 translate-x-1/4 flex justify-center items-center"
	alt="Moon"
>
	<img class="absolute min-w-full h-full moon" src="moon.png" alt="Moon" />
	<div class="relative">
		<div class="grid grid-cols-2 place-items-center mr-2 md:mr-6 mt-6 md:mt-20  md:mr-8 gap-2 md:gap-4">
			<a href="https://www.linkedin.com/in/eerik-saksi-b58324193/">
				<img src="linkedin.svg" alt="Linkedin" />
			</a>
			<a href="https://github.com/eeriksaksi">
				<img src="github.svg" alt="Github" />
			</a>
			<a href="mailto:saksi.eerik@gmail.com">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
					/>
				</svg>
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
		animation: moon 6s infinite;
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
		@apply w-8 md:w-20;
	}
</style>
