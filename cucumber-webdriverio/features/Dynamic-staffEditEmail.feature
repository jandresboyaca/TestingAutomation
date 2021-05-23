Feature: Staff Edit Slug and Website pool de datos (pseudo) aleatorio dinámico

  Scenario Outline: Staff Edit Slug and Website pool de datos (pseudo) aleatorio dinámico
    Given I navigate to Ghost page
    When I Sing In login
    And I click on element having link text Staff
    And I click on element having article apps-card-app
    And I enter faker user-website concat id <ID>
    And I enter <EMAIL> into input field by id user-name
    And I click on element having css button gh-btn gh-btn-blue gh-btn-icon ember-view
    Then Sing out

    Examples:
      | EMAIL  | ID |
      | prueba11@test.com | 1 |
      | prueba12@test.com | 2 |
      | prueba13@test.com | 3 |
      | prueba14@test.com | 4 |
      | prueba15@test.com | 5 |
      | prueba16@test.com | 6 |
      | prueba17@test.com | 7 |
      | prueba18@test.com | 8 |
      | prueba19@test.com | 9 |
      | prueba20@test.com | 10 |
