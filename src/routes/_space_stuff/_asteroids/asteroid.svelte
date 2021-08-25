<script>
  export let image;
  export let topOffset;
</script>
<div class="asteroid h-32 w-32 flex justify-center items-center p-4 absolute" style = "transform: translateY({topOffset}px)">
  <img src={image} alt={image}>
</div>

<style>
  div {
    background-image: url("static/asteroid.png");
    background-size: cover;
    animation-name: left-to-right;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @keyframes left-to-right {
    from {
      left: -128px
    }
    to {
      left: 100%
    }
  }

</style>
