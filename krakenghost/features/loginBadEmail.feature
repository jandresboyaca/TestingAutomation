Feature: Login Bad Email

  @user1 @web
  Scenario: Login Bad Email
    Given I set scenario "loginBadEmail"
    Given I navigate to page "<GHOST_URL_SIGIN>"
    Then I enter "error" into input field having class name "email"
    Then I enter "123" into input field having class name "password"
    Then I click on element having css class "login"