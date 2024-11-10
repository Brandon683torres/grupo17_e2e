Feature: Modifica Tag - Escenario 12

@user1 @web
Scenario: Crea nuevo Tag - Escenario 12

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And   I login with "<USUARIO>" and "<PASSWORD>" - Escenario 12
  And   I wait
  When  I click on the Tags tab - Escenario 12
  And   I wait
  And   I search the tag "<TAG_NAME>"
  And   I wait
  And   I update the tag with new name "<NEW_TAG_NAME>"
  And   I wait
  Then  I navigate to page "http://localhost:2368/ghost/#/tags"
  And   I wait
