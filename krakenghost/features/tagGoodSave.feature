Feature: Tags Board

  @user1 @web
  Scenario: Tags Board
    Given I navigate to page "<GHOST_URL_SIGIN>"
    Then I enter "<GHOST_USER>" into input field having class name "email"
    Then I enter "<GHOST_PASSWORD>" into input field having class name "password"
    Then I click on element having css class "login"
    Then I click on element having css selector "a[href="#/tags/"]"
    Then I click on element having css selector "a[href="#/tags/new/"]"
    Then I enter "<GHOST_STRING_DEFAULT>" into input field having id "tag-name"
    Then I enter "<GHOST_STRING_DEFAULT>" into input field having id "tag-slug"
    Then I enter "<GHOST_STRING_DEFAULT>" into input field having id "tag-description"
    Then I enter "<GHOST_STRING_DEFAULT>" into input field having id "meta-title"
    Then I enter "<GHOST_STRING_DEFAULT>" into input field having id "meta-description"
    Then I click on element having xpath "//button[@class='gh-btn gh-btn-blue gh-btn-icon ember-view']//span"