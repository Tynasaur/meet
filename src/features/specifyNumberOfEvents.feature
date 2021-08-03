Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 is the default number.
Given the events list has loaded and user hasn’t specified number of events
When the user opens the event list
Then the default number of events should be listed

Scenario: User can change the number of events they want to see.
Given user wants to specify number of events displayed
When the user changes the number of events
Then the user should see the number of events specified