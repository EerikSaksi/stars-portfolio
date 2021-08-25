<div class="asteroid h-32 w-32 flex justify-center items-center p-4 absolute">
  <img src="apollo.svg" alt="Apollo">
</div>

<style>
  div {
    background-image: url("static/asteroid.png");
    background-size: cover;
    animation-name: left-to-right;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    left: -500px
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
