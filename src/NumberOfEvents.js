import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };
  handelInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });

    this.props.updateNumberOfEvents(event.target.value);
  };

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="NumberOfEvents">
        <label> Number of Events</label>
        <br></br>
        <input
          type="text"
          className="numberOfEvents"
          value={numberOfEvents}
          onChange={(e) => this.handelInputChanged(e)}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;
