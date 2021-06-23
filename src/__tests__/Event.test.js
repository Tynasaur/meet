import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";

describe("Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test("render single event", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("render event Title", () => {
    expect(EventWrapper.find(".details")).toHaveLength(1);
  });

  test("have a show detail button", () => {
    expect(EventWrapper.find(".details-btn")).toHaveLength(1);
  });

  test("render additional info when user clicks on 'details' button", () => {
    const changeState = EventWrapper.state({ showMore: true });
    EventWrapper.setState({ showHideDetails: false });
    EventWrapper.find(".details-btn").simulate("click", changeState);
    expect(EventWrapper.state("showHideDetails")).toBe(true);
  });
});
