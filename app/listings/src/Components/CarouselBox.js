import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import PexpImg from "../assets/pexels-pixab.jpg";
/* import PexsImg from "../assets/pexels-sebastian.jpg"; */
import Flag from "../assets/den-prapor.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Carousel>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100 carousel"
              src={PexpImg}
              alt="PexpImg"
            />
            <Carousel.Caption>
              <h3 style={{ fontSize: "3vw" }}>Feel the freedom</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={6000}>
            <img className="d-block w-100 carousel" src={Flag} alt="Flag" />
            <Carousel.Caption>
              <h3 style={{ fontSize: "3vw" }}>
                Have a peaceful sky and a good day
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
