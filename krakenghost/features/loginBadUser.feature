Feature: Shared board connection

  @user1 @web
  Scenario: As a first user
    Given I navigate to page "<GHOST_URL_SIGIN>"
    Then I enter "iblancoc@uniandes.edu.co" into input field having class name "email"
    Then I enter "123" into input field having class name "password"
    Then I click on element having css class "login"