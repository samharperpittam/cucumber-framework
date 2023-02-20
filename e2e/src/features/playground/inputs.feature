Feature: As a user I can interact with autocomplete inputs

    @smoke
    @regression
    Scenario: As a user I can interact and assert on autocomplete inputs
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        And I fill in the "movies" input with "The G"
        And I click the "the godfather" button
        And the "movies" should contain the value "The Godfather"
        And the "movies" should not contain the value "The Godfather: Part II"

    @dev
    @smoke
    @regression
    Scenario: As a user I can interact and assert on inputs
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        And the "outline required" should equal the value "Testing"
        Then the "outline disabled" should equal the value "Talks"
        And the "outlined read only" should equal the value "Hub"
        And the "outline required" should be enabled
        And the "outline disabled" should not be enabled 
        And I fill in the "outline required" input with "Testing Talks Online"
        And the "outline required" should equal the value "Testing Talks Online"


