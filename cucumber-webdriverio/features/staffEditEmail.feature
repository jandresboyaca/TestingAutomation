Feature: Staff Edit Slug pool de datos a-priori

  Scenario Outline: Staff Edit Slug pool de datos a-priori
    Given I navigate to Ghost page
    When I Sing In login
    And I click on element having link text Staff
    And I click on element having article apps-card-app
    And I enter <EMAIL> into input field by id user-email
    And I click on element having css button gh-btn gh-btn-blue gh-btn-icon ember-view
    Then Sing out

    Examples:
      | EMAIL  |
      | prueba1@test.com |
      | prueba2@test.com |
      | prueba3@test.com |
      | prueba4@test.com |
      | prueba5@test.com |
      | prueba6@test.com |
      | prueba7@test.com |
      | prueba8@test.com |
      | prueba9@test.com |
      | prueba10@test.com |
