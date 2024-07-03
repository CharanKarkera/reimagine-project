import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CarouselComponent = ({ images }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Access slick methods through ref
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-[500px] h-[500px] bg-red-500">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-[500px] h-[500px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
