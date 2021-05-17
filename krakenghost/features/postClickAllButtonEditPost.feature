Feature: Post Click All Button Edit Post

  @user1 @web
  Scenario: Post Click All Button Edit Post
    Given I set scenario "postClickAllButtonEditPost"
    Given I navigate to page "<GHOST_URL_SIGIN>"
    Then I enter "<GHOST_USER>" into input field having class name "email"
    Then I enter "<GHOST_PASSWORD>" into input field having class name "password"
    Then I click on element having css class "login"
    Then I click on element having css selector "a[href="#/posts/"]"
    Then I click on element having css selector "a[href="#/editor/post/"]"
    Then I enter "<GHOST_STRING_DEFAULT>" into input field having class name "gh-editor-title"
    Then I click on element having css selector "button"
    Then I click on element having css selector "a[href="#/posts/"]"