import React, { Component } from "react";
import Card from "react-bootstrap/Card";
/* import PexpImg from "../image/pexels-pixab.jpg"; */

export default class MyCard extends Component {
  render() {
    return (
      /*  <div> */
      <Card id="about">
        <Card.Body>
          <Card.Title>
            <h1>Nataliia Kozlovska</h1>
          </Card.Title>
          <Card.Subtitle className="mb-4">
            <h3 style={{ color: "#2070c5f7" }}>Web developer</h3>
          </Card.Subtitle>
          <Card.Text>
            The project was created to practice the React Material, Javacript,
            React-Bootstrap, Firebase hosting and Mongodb
          </Card.Text>
          <Card.Link
            href="https://www.facebook.com/"
            style={{ textDecoration: "underline" }}
          >
            FaceBook
          </Card.Link>
          <Card.Link
            href="https://www.instagram.com/_an.design_/"
            style={{ textDecoration: "underline" }}
          >
            Instagram
          </Card.Link>
        </Card.Body>
      </Card>
      /*   </div> */
    );
  }
}
