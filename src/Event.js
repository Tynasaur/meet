import React, { Component } from "react";

class Event extends Component {
  state = {
    event: {},
    showHideDetails: false,
  };

  showHideDetailsButton = () => {
    if (this.state.showHideDetails === true) {
      this.setState({ showHideDetails: false });
    } else {
      this.setState({ showHideDetails: true });
    }
  };

  render() {
    const event = this.props;
    return (
      <div className="event">
        <h1 className="name">{event.summary}</h1>
        <h2 className="details">{event.description}</h2>
        <p className="locations">{event.location}</p>

        <button
          className="details-btn"
          onClick={() => this.showHideDetailsButton()}
        >
          {!this.state.showHideDetails ? "Show Details" : "Hide Details"}
        </button>
      </div>
    );
  }
}

export default Event;
