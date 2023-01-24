import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import FlipReactWeather from "./FlipReactWeather";

export default class AccordionWeather extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "100vw",
        }}
      >
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col>
              <Accordion
                /* defaultActiveKey="1"  */ style={{
                  marginTop: "70px",
                }}
              >
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h3 style={{ color: "black" }}>Play with me</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h2 style={{ fontFamily: "Arial", color: "blue" }}>
                      Guess what kind of weather the picture shows
                    </h2>
                    <FlipReactWeather />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
