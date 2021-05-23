Feature: Staff Edit Slug and User Success pool de datos (pseudo) aleatorio dinámico

  Scenario Outline: Staff Edit Slug and User Success pool de datos (pseudo) aleatorio dinámico
    Given I navigate to Ghost page
    When I Sing In login
    And I click on element having link text Staff
    And I click on element having css button gh-btn gh-btn-green
    And I enter <EMAIL_USER> into input field having class name email ember-text-field gh-input ember-view
    And I click on element having css button gh-btn gh-btn-green gh-btn-icon ember-view
    And I expect to not be able to login
    And I click on element having link text Tags
    And I click on element having link text Staff
    And I click on element having article apps-card-app
    And I enter faker user-location concat id <ID>
    And I click on element having css button gh-btn gh-btn-blue gh-btn-icon ember-view
    Then Sing out

    Examples:
      | ID | EMAIL_USER |
      | 1 | prueba1@test.com |
      | 2 | prueba2@test.com |
      | 3 | prueba3@test.com |
      | 4 | prueba4@test.com |
      | 5 | prueba5@test.com |
      | 6 | prueba6@test.com |
      | 7 | prueba7@test.com |
      | 8 | prueba8@test.com |
      | 9 | prueba9@test.com |
      | 10 | prueba10@test.com |





