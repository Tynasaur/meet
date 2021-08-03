import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");
let AppWrapper;
defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number.", ({
    given,
    when,
    then,
  }) => {
    given(
      "the events list has loaded and user hasn’t specified number of events",
      () => {}
    );

    when("the user opens the event list", () => {
      AppWrapper = mount(<App />);
    });

    then("the default number of events should be listed", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
    });
  });

  test("User can change the number of events they want to see.", ({
    given,
    when,
    then,
  }) => {
    given("user wants to specify number of events displayed", () => {
      AppWrapper = mount(<App />);
    });

    when("the user changes the number of events", () => {
      AppWrapper.setState({ NumberOfEvents: 32, locations: "all" });
      const eventObject = { target: { value: 1 } };
      const NumberOfEventsComponent = AppWrapper.find(NumberOfEvents);
      NumberOfEventsComponent.find(".EventsNumber").simulate(
        "change",
        eventObject
      );
    });

    then("the user should see the number of events specified", () => {});
  });
});
