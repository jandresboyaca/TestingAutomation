Feature: Staff invitation

  @user1 @web
  Scenario: As a user
    Given I set scenario "staffInvitateSuccess"
    Given I navigate to page "<GHOST_URL_SIGIN>"
    Then I enter "<GHOST_USER>" into input field having class name "email"
    Then I enter "<GHOST_PASSWORD>" into input field having class name "password"
    Then I click on element having css class "login"
    Then I click on element having css selector "a[href="#/staff/"]"
    Then I click on element having xpath "//button[@class='gh-btn gh-btn-green']//span"
    Then I enter "am.lopezr1@uniandes.edu.co" into input field having id "new-user-email"
    Then I click on element having xpath "//button[@class='gh-btn gh-btn-green gh-btn-icon ember-view']//span"
    Then I click on element having css selector "a[href="#/staff/"]"