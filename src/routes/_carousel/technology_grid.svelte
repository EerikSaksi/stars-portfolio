<script>
  export let extraClasses = "grid-rows-1 grid-cols-2";
  export let images = [
    {
      src: "reactnative.webp",
    },
    {
      src: "expo.webp",
    },
  ];
</script>

<div class="grid w-full h-full {extraClasses} divide-black">
  {#each images as ic}
    <img
      alt="Technology"
      src={ic.src}
      class="m-4 object-contain w-3/4 h-3/4  place-self-center {ic.extraClasses ? ic.extraClasses : ''}" />
  {/each}
</div>
