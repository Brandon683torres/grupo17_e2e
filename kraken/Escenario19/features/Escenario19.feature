Feature: Exporta Miembros - Escenario 19

@user1 @web
Scenario: Exporta Miembros - Escenario 19

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And   I login with "<USUARIO>" and "<PASSWORD>" - Escenario 19
  And   I wait
  When  I click on the Members tab - Escenario 19
  And   I wait
  When  I click on the Config Tool
  And   I wait
  Then  I export Members


