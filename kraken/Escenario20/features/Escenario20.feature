Feature: Filter Tool - Escenario 20

@user1 @web
Scenario: Filter Tool - Escenario 20

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And   I login with "<USUARIO>" and "<PASSWORD>" - Escenario 20
  And   I wait
  When  I click on the Members tab - Escenario 20
  And   I wait
  When  I click on the Filter Tool
  And   I wait
  Then  I write the Filter
  And   I wait
  Then  I apply the Filter
  And   I wait


