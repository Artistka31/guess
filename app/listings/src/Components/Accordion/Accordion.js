import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import FlipReact from "./FlipReact";

export default class AccordionS extends Component {
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
                    <h3 style={{ color: "black" }}>
                      {" "}
                      {`Play with me `}
                      {/*   ${(<Item item={this.state.login} />)} */}
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h2 style={{ fontFamily: "Arial", color: "red" }}>
                      Guess the object in the picture
                    </h2>
                    <FlipReact />
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
