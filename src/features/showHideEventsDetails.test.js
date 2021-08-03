import React from "react";
import { mount } from "enzyme";
import App from "../App";
import Event from "../Event";
import { mockData } from "../mock-data";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/showHideEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppWrapper;
    given("user hasn’t expanded the event to see its details", () => {
      AppWrapper = mount(<App />);
    });

    when("the user opens the app", () => {});

    then("the user should see event information with details", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event-details")).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details.", ({
    given,
    when,
    then,
  }) => {
    let EventWrapper;
    given("the main page is open", () => {
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when("user clicks showMore button on a specific event", () => {
      EventWrapper.find(".showMore").simulate("click");
    });

    then(
      "the user should see the event details of said specified event",
      () => {
        EventWrapper = mount(<Event event={mockData[1]} />);
      }
    );
  });

  test("User can collapse an event to hide its details.", ({
    given,
    when,
    then,
  }) => {
    let EventWrapper;
    given("an event's details is expanded", () => {
      EventWrapper = mount(<Event event={mockData[1]} />);
      EventWrapper.setState({
        show: true,
      });
    });

    when("user clicks showLess button", () => {
      EventWrapper.find(".showLess").simulate("click");
    });

    then("the user should no longer see event details", () => {
      expect(EventWrapper.find(".event-details")).toHaveLength(0);
    });
  });
});
