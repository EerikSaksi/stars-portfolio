<script>
  import Carousel from './carousel.svelte'
  let technologies = [
    {
      extraClasses: "grid-cols-2 grid-rows-2",
      images: [
        {
          src: "react.svg",
        },
        {
          src: "svelte.svg",
        },
        {
          src: "django.svg",
        },
        {
          src: "jquery.svg",
        },
      ],
    },
    {
      extraClasses: "grid-cols-2 grid-rows-2",
      images: [
        { src: "materialui.svg" },
        {
          src: "bootstrap.svg",
        },
        {
          src: "tailwind.svg",
          extraClasses: "col-span-full",
        },
      ],
    },
    {
      extraClasses: "grid-rows-1 grid-cols-2",
      images: [
        {
          src: "reactnative.svg",
        },
        {
          src: "expo.svg",
        },
      ],
    },
    {
      extraClasses: "grid-rows-2 grid-cols-2",
      images: [
        {
          src: "apollo.svg",
        },

        {
          src: "typegraphql.svg",
        },

        {
          src: "postgraphile.svg",
          extraClasses: "col-span-full",
        },
      ],
    },
    {
      extraClasses: "grid-cols-2 grid-rows-2",
      images: [
        {
          src: "postgres.svg",
        },
        {
          src: "sequelize.svg",
        },
        {
          src: "typeorm.svg",
        },
        {
          src: "sqlalchemy.svg",
        },
      ],
    },

    {
      extraClasses: "grid-cols-2 grid-rows-2",
      images: [
        {
          src: "pandas.svg",
        },
        {
          src: "scikit.svg",
        },
        {
          src: "spotlight.svg",
        },
        {
          src: "networkx.svg",
        },
      ],
    },

  ];

</script>
<Carousel {technologies}/>
