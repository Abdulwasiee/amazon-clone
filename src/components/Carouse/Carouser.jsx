import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { images } from "./data";

function ImageCarousel() {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={3000}
      showStatus={false}
      showIndicators={false}
      showArrows={true}
      dynamicHeight={true}
      useKeyboardArrows={true}
      stopOnHover={true}
      swipeable={true}
      transitionTime={500}
    >
      {images.map((singleImage, index) => (
        <div key={index}>
          <img
            src={singleImage}
            alt={`Slide ${index + 1}`}
            className="fade-in-bottom"
          />
        </div>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
