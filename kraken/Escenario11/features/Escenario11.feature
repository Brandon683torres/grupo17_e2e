Feature: Crea nuevo Tag - Escenario 11

@user1 @web
Scenario: Crea nuevo Tag - Escenario 11

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And   I login with "<USUARIO>" and "<PASSWORD>" - Escenario 11
  And   I wait
  When  I click on the Tags tab - Escenario 11
  And   I wait
  And   I click on 'New Tag' Button
  And   I wait
  And   I create a new tag with "<TAG_NAME>" and "<TAG_DESCRIPTION>"
  And   I wait
  Then  I navigate to page "http://localhost:2368/ghost/#/tags"
  And   I wait
