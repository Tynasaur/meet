import React, { Component } from "react";

class Event extends Component {
  state = {
    show: false,
  };

  handleButton = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { event } = this.props;
    return (
      <div className="event">
        <h1 className="event-summary">{event.summary}</h1>
        <h2 className="event-locations">{event.location}</h2>
        <h3 className="Event-date">start: {event.start.dateTime}</h3>
        <h3>About event:</h3>
        {this.state.show === true && (
          <p className="event-details">{event.description}</p>
        )}
        {this.state.show === false && (
          <button className="showMore" onClick={() => this.handleButton()}>
            Show details
          </button>
        )}
        {this.state.show === true && (
          <button className="showLess" onClick={() => this.handleButton()}>
            Hide details
          </button>
        )}
        <br></br>
        <a href={event.htmlLink}>See Details on Google Calendar</a>
      </div>
    );
  }
}

export default Event;
