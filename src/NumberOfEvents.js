import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };
  handelInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      return this.setState({
        infoText: "Please choose a number between 1 and 32",
        numberOfEvents: value,
      });
    } else {
      this.setState({ numberOfEvents: value,
         infoText: "" });

      this.props.updateNumberOfEvents(event.target.value);
    }
  };

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={this.state.infoText} ClassName="ErrorAlert" />
        <label> Number of Events</label>
        <br></br>
        <input
          type="text"
          className="EventsNumber"
          value={numberOfEvents}
          onChange={(e) => this.handelInputChanged(e)}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;
