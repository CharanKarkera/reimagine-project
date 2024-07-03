import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

const CarouselComponent = ({ images, md_images }) => {
  const sliderRef = useRef(null);
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const displayImages =
    isMediumScreen && md_images.length > 0 ? md_images : images;
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
    autoplaySpeed: 3000,
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
    <div className="w-full h-[300px] sm:h-[500px] overflow-hidden object-cover rounded-xl shadow-lg shadow-black ">
      <Slider ref={sliderRef} {...settings}>
        {displayImages.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-[300px] sm:h-[500px]  object-cover ivory"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
