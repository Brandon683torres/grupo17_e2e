Feature: Elimina Tag - Escenario 13

@user1 @web
Scenario: Crea nuevo Tag - Escenario 13

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And   I login with "<USUARIO>" and "<PASSWORD>" - Escenario 11
  And   I wait
  When  I click on the Tags tab - Escenario 13
  And   I wait
  And   I search the tag "<TAG_NAME>"
  And   I wait
  And   I delete the tag
  And   I wait
  Then  I navigate to page "http://localhost:2368/ghost/#/tags"
  And   I wait
