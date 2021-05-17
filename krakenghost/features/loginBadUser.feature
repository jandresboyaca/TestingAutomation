Feature: Login Bad User

  @user1 @web
  Scenario: Login Bad User
    Given I set scenario "loginBadUser"
    Given I navigate to page "<GHOST_URL_SIGIN>"
    Then I enter "iblancoc@uniandes.edu.co" into input field having class name "email"
    Then I enter "123" into input field having class name "password"
    Then I click on element having css class "login"