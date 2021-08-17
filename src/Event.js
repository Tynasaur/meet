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
        <h3 className="event-date">{event.start.dateTime}</h3>
        <h3 className="about-event">About event...</h3>
        {this.state.show === true && (
          <p className="event-details">
            {event.description}
            <br></br>
            <a className="calendar-link" href={event.htmlLink}>
              See Details on Google Calendar
            </a>
          </p>
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
      </div>
    );
  }
}

export default Event;
