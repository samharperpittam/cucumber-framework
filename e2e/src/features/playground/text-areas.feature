Feature: As a user i can interact with text areas

    @smoke
    @regression
    Scenario: As a user I can interact and assert on text areas
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        And the "text area" should contain the text "Testing Talks Hub has been established to teach the community how to build world class automation frameworks using the latest tooling."
        And I fill in the "text area" input with "learning to input to text areas"
        And the "text area" should contain the value "learning to input to text areas"