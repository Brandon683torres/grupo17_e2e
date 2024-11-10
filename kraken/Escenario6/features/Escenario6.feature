Feature: Ordena Post Por Tiempo - Escenario 6

@user1 @web
Scenario: Ordena Post Por Tiempo - Escenario 6

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And   I login with "<USUARIO>" and "<PASSWORD>" - Escenario 6
  And   I wait
  When  I click on the Posts tab - Escenario 6
  And   I wait
  When  I click on the Order Tool
  And   I wait
  Then  I click on the Recently Updated
  And   I wait



