Feature: Shared board connection

  @user1 @web
  Scenario: As a first user
    Given I navigate to page "http://localhost:3002/ghost/"
    Then I enter "c.castiblancoc@uniandes.edu.co" into input field having class name "email"
    Then I enter "123" into input field having class name "password"
    Then I click on element having css class "login"

  @user2 @web
  Scenario: As a second user I wait for user 1 to say hi
    Given I wait for a signal containing "hi" for 60 seconds
    Given I navigate to page with the url stored in the variable
    Then I enter "Kraken2" into input field having id "nickName"
    Then I click on element having css selector "#joinBoard>button"
    Then I start a monkey with 8 events