Feature: As a user I expect to be able to create contacts

    @regression
    @smoke
    Scenario: As a user I expect to be able to create a new contact
    Given I am on the "home" page
    And I click the "create" button
    Then I am directed to the "create contact" page
    And the "create contact header" should contain the text "Create Contact"
    And I fill in the "name" input with "Sam"
    And I select the "Male" option from the "gender"
    And I fill in the "phone" input with "07484758400"
    And I fill in the "street" input with "123 Fake Street"
    And I fill in the "city" input with "Worcester"
    And I click the "save" button
    And I am directed to the "home" page
    And I fill in the "search" input with "Sam"
    And the "full name label" should contain the text "Name:"
    And the "name" should equal the text "Sam"
    And the "gender label" should contain the text "Gender:"
    And the "gender" should equal the text "Male"
    And the "address label" should contain the text "Address:"
    And the "address" should equal the text "123 Fake Street, Worcester"
    And the "edit" should be displayed
    And the "delete" should be displayed
    

