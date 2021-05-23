Feature: Staff Edit User escenario aleatorio

  Scenario Outline: Staff Edit User escenario aleatorio
    Given I navigate to Ghost page
    When I Sing In login
    And I click on element having link text Staff
    And I click on element having css button gh-btn gh-btn-green
    And I enter faker email ember-text-field gh-input ember-view concat class <ID>
    And I click on element having css button gh-btn gh-btn-green gh-btn-icon ember-view
    And I expect to not be able to login
    And I click on element having link text Tags
    And I click on element having link text Staff
    Then I expect to see REVOKE text in the button apps-configured-action red-hover
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
