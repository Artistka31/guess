/* import TinderCard from "react-tinder-card"; */
import axios from "axios";
import { Component } from "react";
import { v4 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TinderCard from "react-tinder-card";

class Tinder extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      session_id: uuid(),
      login: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  async onSwipe(direction, listingId, sessionId) {
    this.setState({
      login: false,
    });

    if (direction === "left") {
      await axios.delete(`http://localhost:5000/listings/delete/${listingId}`);
    } else {
      await axios.post("http://localhost:5000/listings/recordSwipe", {
        id: listingId,
        session_id: sessionId,
        direction,
        login: "",
      });
    }
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Congratulations, you're aboard ${this.state.login}!`);
  }

  async componentDidMount() {
    const response = await axios.get(`http://localhost:5000/listings`);
    const json = await response.data;
    this.setState({ data: json });
  }

  render() {
    return (
      <div>
        <h1
          style={{
            color: "black",
            marginTop: "4em",
            fontFamily: "Fira Sans",
          }}
        >
          {`Welcome to the game ${this.state.login}`}
        </h1>
        <br />
        <h2
          style={{
            color: "blue",
            marginLeft: "2.3em",
            marginRight: "2.3em",
            marginTop: "30%",
          }}
        >
          Play with me. It's very simple. Click guess and make a choice.
        </h2>
        {this.state.data.map((listing) => (
          <TinderCard
            key={listing.login}
            onSwipe={(dir) => this.onSwipe(dir, listing._id)}
          >
            <div className="TinderCard">
              <p>How should I refer to you?</p>
              <div className="TinderCard-details">
                <h3
                  style={{
                    color: "white",
                    margin: "0.3em",
                  }}
                >
                  <input
                    value={this.state.login}
                    onChange={this.handleChange}
                    style={{
                      color: "black",
                      width: "100%",
                    }}
                  />
                </h3>
                <br />
                <div className="TinderCard-actions">
                  <button className="button" onClick={this.handleSignUp}>
                    Sign Me Up!
                  </button>
                </div>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    );
  }
}

export default Tinder;
