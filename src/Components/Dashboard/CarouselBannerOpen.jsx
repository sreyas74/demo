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
        interval={3000}
      >
        <Carousel.Item
          className={style.CarouselItem}
          style={{ backgroundColor: "#FFF7E2" }}
        >
          <img
            src="https://raw.githubusercontent.com/sreyas74/trysample-/6240c3b770ba49fb28459ed52541fa076d8793f1/a%20man%20ride%20a%20adventure%20bike%20at%20himalayas.jpg"
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
