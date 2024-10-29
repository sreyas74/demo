import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./CarouselBanner.module.css";
import SearchboxOpen from "./SearchboxOpen";
function CarouselBanner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <SearchboxOpen />
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className={style.CarouselBanner}
        prevIcon={false}
        nextIcon={false}
        controls={false}
        indicators={false}
        interval={3000}
      >
        <Carousel.Item
          className={style.CarouselItem}
          style={{ backgroundColor: "#FFF7E2" }}
        >
          <img
            src="https://github.com/sreyas74/trysample-/blob/main/bike1%20(1).jpg?raw=true"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item
          className={style.CarouselItem}
          style={{ backgroundColor: "#DDFFEC" }}
        >
          <img
            src="https://github.com/sreyas74/trysample-/blob/main/car%20and%20family.jpg?raw=true"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item
          className={style.CarouselItem}
          style={{ backgroundColor: "#DEF8FF" }}
        >
          <img
            src="https://raw.githubusercontent.com/sreyas74/trysample-/refs/heads/main/scooty.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselBanner;
