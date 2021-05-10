Feature: Page Board Settings

  @user1 @web
  Scenario: Page Board Settings
    Given I navigate to page "<GHOST_URL_SIGIN>"
    Then I enter "<GHOST_USER>" into input field having class name "email"
    Then I enter "<GHOST_PASSWORD>" into input field having class name "password"
    Then I click on element having css class "login"
    Then I click on element having css selector "a[href="#/pages/"]"
    Then I click on element having css selector "a[href="#/editor/page/"]"
    Then I enter "<GHOST_STRING_DEFAULT>" into input field having class name "gh-editor-title"
    Then I enter "<GHOST_STRING_DEFAULT>" into input field having class name "koenig-editor__editor"
    Then I click on element having css class "post-settings"
    Then I enter "UrlTestingKraken" into input field having id "url"
    Then I click on element having css class "close"
    Then I click on element having css selector "a[href="#/pages/"]"

  @user2 @web
  Scenario: As a second user I wait for user 1 to say hi
    Given I wait for a signal containing "hi" for 60 seconds
    Given I navigate to page with the url stored in the variable
    Then I enter "Kraken2" into input field having id "nickName"
    Then I click on element having css selector "#joinBoard>button"
    Then I start a monkey with 8 events