<script>
  export let image;
  export let topOffset;
</script>
<div class="asteroid h-32 w-32 flex justify-center items-center p-4 absolute bg-cover z-100" style = "transform: translateY({topOffset}px)">
  <img src={image} alt={image}>
</div>

<style>
  div {
    background-image: url("static/asteroid.png");
    animation-name: left-to-right;
    animation-duration: 8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
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
