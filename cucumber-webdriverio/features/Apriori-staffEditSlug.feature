Feature: Staff Edit Slug pool de datos a-priori

  Scenario Outline: Staff Edit Slug pool de datos a-priori
    Given I navigate to Ghost page
    When I Sing In login
    And I click on element having link text Staff
    And I click on element having article apps-card-app
    And I enter <SLUG> into input field by id user-slug
    And I click on element having css button gh-btn gh-btn-blue gh-btn-icon ember-view
    Then Sing out

    Examples:
      | SLUG  |
      | slug1 |
      | slug2 |
      | slug3 |
      | slug4 |
      | slug5 |
      | slug6 |
      | slug7 |
      | slug9 |
      | slug10 |
      | slug11 |

