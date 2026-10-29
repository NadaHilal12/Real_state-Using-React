
import React from "react";
import * as SliderModule from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider =
  SliderModule.default.default ?? SliderModule.default;

function AutoPlay({ masterpieces, rec }) {
  const settings = {
    dots: true,
    infinite: masterpieces.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-[80px] w-full overflow-hidden">
      {/* Section Title */}
      <div className="relative flex items-center justify-center">
        <p className="z-10 mb-6 max-w-3xl p-4 text-center text-2xl font-semibold leading-tight">
          Hand-Selected Masterpieces
        </p>

        <img
          src={rec}
          alt=""
          className="absolute w-auto pt-6"
        />
      </div>

      {/* Autoplay Slider */}
      <div className="px-10 pb-12">
        <Slider {...settings}>
          {masterpieces.map((item, i) => (
            <div key={i} className="px-3">
              <div className="cursor-pointer">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-64 w-full rounded-md object-cover shadow-md"
                />

                <p className="mt-3 text-sm font-semibold">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default AutoPlay;
