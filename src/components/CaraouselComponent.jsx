import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = ({ images }) => {
  return (
    <Carousel  autoPlay={true} interval={10} className="w-52">
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
          <p className="legend">{`Legend ${index + 1}`}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
