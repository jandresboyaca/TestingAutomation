Feature: Staff Edit Slug Faker escenario aleatorio

  Scenario Outline: Staff Edit Slug Faker escenario aleatorio
    Given I navigate to Ghost page
    When I Sing In login
    And I click on element having link text Staff
    And I click on element having article apps-card-app
    And I enter faker user-slug concat id <ID>
    And I click on element having css button gh-btn gh-btn-blue gh-btn-icon ember-view
    Then Sing out

    Examples:
      | ID |
      | 1 |
      | 2 |
      | 3 |
      | 4 |
      | 5 |
      | 6 |
      | 7 |
      | 8 |
      | 9 |
      | 10 |

