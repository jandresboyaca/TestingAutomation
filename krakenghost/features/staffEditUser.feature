Feature: Staff invitation Revoke

  @user1 @web
  Scenario: As a user
    Given I navigate to page "http://localhost:3001/ghost/"
    Then I enter "c.castiblancoc@uniandes.edu.co" into input field having class name "email"
    Then I enter "1234567890*" into input field having class name "password"
    Then I click on element having css class "login"
    Then I click on element having css selector "a[href="#/staff/"]"
    Then I click on first element having css selector "a[href="#revoke"]"