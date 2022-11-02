export const bestsellerCarouselSettings = {
  slidesToShow: 6,
  arrows: false,
  useTransform: false,
  swipeToSlide: true,

  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        lazyLoad: true,
      },
    },
  ],
};
