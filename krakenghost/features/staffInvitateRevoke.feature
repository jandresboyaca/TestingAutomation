Feature: Staff Edit Ghost User

  @user1 @web
  Scenario: As a user
    Given I navigate to page "<GHOST_URL_SIGIN>"
    Then I enter "<GHOST_USER>" into input field having class name "email"
    Then I enter "<GHOST_PASSWORD>" into input field having class name "password"
    Then I click on element having css class "login"
    Then I click on element having css selector "a[href="#/staff/"]"
    Then I click on first element having css selector "a[href="#/staff/ghost"]"
    Then I enter "Ghost User" into input field having id "user-name"
    Then I click on button element having css class "gh-btn-blue"