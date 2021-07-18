<script>
  import Carousel from './carousel.svelte'
  let technologies = [
    {
      extraClasses: "grid-cols-2 grid-rows-2",
      images: [
        {
          src: "react.webp",
        },
        {
          src: "svelte.webp",
        },
        {
          src: "django.webp",
        },
        {
          src: "jquery.webp",
        },
      ],
    },
    {
      extraClasses: "grid-cols-2 grid-rows-2",
      images: [
        { src: "materialui.webp" },
        {
          src: "bootstrap.webp",
        },
        {
          src: "tailwind.webp",
          extraClasses: "col-span-full",
        },
      ],
    },
    {
      extraClasses: "grid-rows-1 grid-cols-2",
      images: [
        {
          src: "reactnative.webp",
        },
        {
          src: "expo.webp",
        },
      ],
    },
    {
      extraClasses: "grid-rows-2 grid-cols-2",
      images: [
        {
          src: "apollo.webp",
        },

        {
          src: "typegraphql.webp",
        },

        {
          src: "postgraphile.webp",
          extraClasses: "col-span-full",
        },
      ],
    },
    {
      extraClasses: "grid-cols-2 grid-rows-2",
      images: [
        {
          src: "postgres.webp",
        },
        {
          src: "sequelize.webp",
        },
        {
          src: "typeorm.webp",
        },
        {
          src: "sqlalchemy.webp",
        },
      ],
    },

    {
      extraClasses: "grid-cols-2 grid-rows-2",
      images: [
        {
          src: "pandas.webp",
        },
        {
          src: "scikit.webp",
        },
        {
          src: "spotlight.webp",
        },
        {
          src: "networkx.webp",
        },
      ],
    },

  ];

</script>
<Carousel {technologies}/>
