Feature: Post Good Write Drafts Scheduled Published

  @user1 @web
  Scenario: Post Good Write Drafts Scheduled Published
    Given I set scenario "postGoodWriteDraftsScheduledPublished"
    Given I navigate to page "<GHOST_URL_SIGIN>"
    Then I enter "<GHOST_USER>" into input field having class name "email"
    Then I enter "<GHOST_PASSWORD>" into input field having class name "password"
    Then I click on element having css class "login"
    Then I click on element having css selector "a[href="#/posts/"]"
    Then I click on element having css selector "a[href="#/editor/post/"]"
    Then I enter "<GHOST_STRING_DEFAULT>" into input field having class name "gh-editor-title"
    Then I enter "<GHOST_STRING_DEFAULT>" into input field having class name "koenig-editor__editor"
    Then I click on element having css class "post-settings"
    Then I click on element having xpath "//button[@class='gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button']//span"
    Then I click on element having xpath "//button[@class='gh-btn gh-btn-red gh-btn-icon ember-view']//span"