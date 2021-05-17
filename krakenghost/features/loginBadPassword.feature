Feature: Login Bad Password

  @user1 @web
  Scenario: Login Bad Password
    Given I set scenario "loginBadPassword"
    Given I navigate to page "<GHOST_URL_SIGIN>"
    Then I enter "<GHOST_USER>" into input field having class name "email"
    Then I enter "123" into input field having class name "password"
    Then I click on element having css class "login"