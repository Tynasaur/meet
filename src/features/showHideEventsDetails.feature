Feature: Show/Hide an Event’s Details

Scenario: An event element is collapsed by default.
Given user hasn’t expanded the event to see its details
When the user opens the app
Then the user should see event information with details 

Scenario: User can expand an event to see its details.
Given the main page is open
When user clicks showMore button on a specific event
Then the user should see the event details of said specified event

Scenario: User can collapse an event to hide its details.
Given an event's details is expanded 
When user clicks showLess button
Then the user should no longer see event details