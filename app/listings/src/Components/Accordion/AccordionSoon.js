import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container, Row, Col } from "react-bootstrap";

export default class AccordionSoon extends Component {
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
                style={{
                  marginTop: "70px",
                }}
              >
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <h3 style={{ color: "black" }}>Play with me</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h2 style={{ fontFamily: "Arial", color: "blue" }}>
                      Uuuupss..
                    </h2>
                    {/*  <FlipReactSoon /> */}
                    <h3 style={{ color: "black" }}>Just believe me...</h3>
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
