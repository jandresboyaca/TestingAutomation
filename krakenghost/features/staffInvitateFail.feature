Feature: Staff invitation

  @user1 @web
  Scenario: As a user
    Given I navigate to page "http://localhost:3001/ghost/"
    Then I enter "c.castiblancoc@uniandes.edu.co" into input field having class name "email"
    Then I enter "1234567890*" into input field having class name "password"
    Then I click on element having css class "login"
    Then I click on element having css selector "a[href="#/staff/"]"
    Then I click on element having css selector "a[href="#/editor/staff/"]"
    Then I enter "New Kraken Testing" into button having class name "gh-btn-green"
    Then I enter "am.lopezr1@uniandes.edu.co" into input field having id "new-user-email"
    Then I click on button element having css class "gh-btn-green"
    Then I navigate to page "http://localhost:3001/ghost/#/staff"