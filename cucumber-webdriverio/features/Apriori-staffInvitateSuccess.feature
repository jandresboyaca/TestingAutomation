Feature: Staff Edit User Success pool de datos a-priori

  Scenario Outline: Staff Edit User Success pool de datos a-priori
    Given I navigate to Ghost page
    When I Sing In login
    And I click on element having link text Staff
    And I click on element having css button gh-btn gh-btn-green
    And I enter <EMAIL_USER> into input field having class name email ember-text-field gh-input ember-view
    And I click on element having css button gh-btn gh-btn-green gh-btn-icon ember-view
    And I expect to not be able to login
    And I click on element having link text Tags
    And I click on element having link text Staff
    Then I expect to see REVOKE text in the button apps-configured-action red-hover
    Then Sing out

    Examples:
      | EMAIL_USER  |
      | prueba21@test.com |
      | prueba22@test.com |
      | prueba24@test.com |
      | prueba25@test.com |
      | prueba26@test.com |
      | prueba27@test.com |
      | prueba28@test.com |
      | prueba29@test.com |
      | prueba30@test.com |
