import React, { Component } from "react";
import MyCard from "../Components/MyCard";
import { Container, Row, Col } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <div
        id="div.about"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col>
              <MyCard />
              <h2 id="about.h2" style={{ marginTop: "10em" }}>
                Thank you for visiting!
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
