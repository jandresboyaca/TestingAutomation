Feature: Page Good Create

  @user1 @web
  Scenario: Page Good Create
    Given I set scenario "pageGoodCreate"
    Given I navigate to page "<GHOST_URL_SIGIN>"
    Then I enter "<GHOST_USER>" into input field having class name "email"
    Then I enter "<GHOST_PASSWORD>" into input field having class name "password"
    Then I click on element having css class "login"
    Then I click on element having css selector "a[href="#/pages/"]"
    Then I click on element having css selector "a[href="#/editor/page/"]"
    Then I enter "<GHOST_STRING_DEFAULT>" into input field having class name "gh-editor-title"
    Then I enter "<GHOST_STRING_DEFAULT>" into input field having class name "koenig-editor__editor"
    Then I click on element having css selector "button"