Feature: Filter Posts By Tag - Escenario 7

@user1 @web
Scenario: Filter Posts By Tag - Escenario 7

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And   I login with "<USUARIO>" and "<PASSWORD>" - Escenario 7
  And   I wait
  When  I click on the Posts tab - Escenario 7
  And   I wait
  When  I click on the Filter Option
  And   I wait
  Then  I click on the Filtered Tag
  And   I wait



