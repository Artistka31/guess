import "./App.css";

import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
  render() {
    return (
      <Row>
        <Col sm="12">
          <div className="app">
            <Header />
          </div>
        </Col>
      </Row>
    );
  }
}

export default App;
