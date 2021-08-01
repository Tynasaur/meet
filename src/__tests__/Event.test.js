import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test("render single event", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("render event Title", () => {
    expect(EventWrapper.find(".event-summary")).toHaveLength(1);
  });

  test("render additional info when user clicks on 'showMore' button", () => {
    EventWrapper.setState({ show: false });
    EventWrapper.find(".showMore").simulate("click");
    expect(EventWrapper.state("show")).toEqual(true);
  });

  test("hide additional info when user clicks 'showLess' button", () => {
    EventWrapper.setState({ show: true });
    EventWrapper.find(".showLess").simulate("click");
    expect(EventWrapper.find(".event-details")).toHaveLength(0);
  })
});
