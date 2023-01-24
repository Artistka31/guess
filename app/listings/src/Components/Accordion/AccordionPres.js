import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container, Row, Col } from "react-bootstrap";
import FlipReactPres from "./FlipReactPres";

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
                /* defaultActiveKey="2" */ style={{
                  marginTop: "70px",
                }}
              >
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h3 style={{ color: "black" }}>Play with me</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h2 style={{ fontFamily: "Arial", color: "black" }}>
                      Which country's president do you see in the picture?
                    </h2>
                    <FlipReactPres />
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
