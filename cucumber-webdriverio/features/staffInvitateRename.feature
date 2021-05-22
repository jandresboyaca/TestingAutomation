Feature: Staff Rename pool de datos a-priori

  Scenario Outline: Staff Rename pool de datos a-priori
    Given I navigate to Ghost page
    When I Sing In login
    And I click on element having link text Staff
    And I click on element having article apps-card-app
    And I enter <NAME> into input field having class name user-name ember-text-field gh-input ember-view
    And I click on element having css button gh-btn gh-btn-blue gh-btn-icon ember-view
    Then Sing out

    Examples:
      | NAME  |
      | Prueba1 |
      | Prueba2 |
      | Prueba3 |
      | Prueba4 |
      | Prueba5 |
      | Prueba6 |
      | Prueba7 |
      | Prueba8 |
      | Prueba9 |
      | Prueba10 |
