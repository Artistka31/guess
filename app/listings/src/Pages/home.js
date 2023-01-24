import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import Tinder from "../Components/TinderCard";
import { Container, Row, Col } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <Container fluid id="container">
          <Row className="justify-content-md-center">
            <Col md={4} xs={12}>
              <Tinder />
            </Col>
            <Col md={8} xs={12}>
              <CarouselBox />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
