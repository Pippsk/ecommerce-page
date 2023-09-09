import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./Carrousel.scss";

import img1 from "../../images/product-1.jpg";
import img2 from "../../images/product-2.jpg";
import img3 from "../../images/product-3.jpg";
import img4 from "../../images/product-4.jpg";

const Carrousel = () => {
  return (
    <div className="carousel_container">
      <Carousel>
        <Carousel.Item>
          <img src={img1} alt="" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={img2} alt="" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={img3} alt="" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={img4} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrousel;
