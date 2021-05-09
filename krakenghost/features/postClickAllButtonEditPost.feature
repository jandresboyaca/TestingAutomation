Feature: Shared board connection

  @user1 @web
  Scenario: As a first user
    Given I navigate to page "<GHOST_URL_SIGIN>"
    Then I enter "<GHOST_USER>" into input field having class name "email"
    Then I enter "<GHOST_PASSWORD>" into input field having class name "password"
    Then I click on element having css class "login"
    Then I click on element having css selector "a[href="#/posts/"]"
    Then I click on element having css selector "a[href="#/editor/post/"]"
    Then I enter "<GHOST_STRING_DEFAULT>" into input field having class name "gh-editor-title"
    Then I click on element having css selector "button"
    Then I click on element having css selector "a[href="#/posts/"]"

  @user2 @web
  Scenario: As a second user I wait for user 1 to say hi
    Given I wait for a signal containing "hi" for 60 seconds
    Given I navigate to page with the url stored in the variable
    Then I enter "Kraken2" into input field having id "nickName"
    Then I click on element having css selector "#joinBoard>button"
    Then I start a monkey with 8 events