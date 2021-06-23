import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: "",
  };
  handelInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="number"
          value={this.state.numberOfEvents}
          onChange={this.handelInputChanged}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;
