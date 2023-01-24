import React, { Component } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
/* import TinderCard from "../TinderCard"; */

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      session_id: uuid(),
      login: "",
    };
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
      });
    }
  }

  async componentDidMount() {
    const response = await axios.get(`http://localhost:5000/listings`);
    const json = await response.data;
    this.setState({ data: json });
  }
  render() {
    return (
      <div>
        {/*  {this.props.items.map((el) => (
          <Item key={el.id} item={el} />
        ))} */}
        {this.state.data.map((listing) => (
          <Item
            key={listing.name}
            /* value={el.target.value} */ item={listing}
          />
        ))}
      </div>
    );
  }
}
