import React from "react";
/* import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button"; */
import FlipReact from "./FlipReact";

export default class Restart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "off",
      label: "Restart",
      isFlipped: /* Array(0).fill */ false,
    };

    this.press = this.press.bind(this);
  }
  press() {
    let className = this.state.class === "off" ? "on" : "off";
    this.setState({ class: className });
  }
  render() {
    return (
      <div>
        <FlipReact isFlipped={this.state.isFlipped[Array]} />
        <button onClick={this.press} className={this.state.class}>
          {this.state.label}
        </button>
      </div>
    );
  }
}
/* ReactDOM.createRoot(document.getElementById("app")) */
/* .render(<Restart />); */
