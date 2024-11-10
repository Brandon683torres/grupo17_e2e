Feature: Add Excerpt to Post Draft

@user1 @web
Scenario: Add Excerpt to Post Draft - Escenario 5

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And   I login with "<USUARIO>" and "<PASSWORD>" - Escenario 5
  And   I wait
  When  I click on the Posts tab - Escenario 5
  And   I wait
  Then  I add a excerpt to post "<POST_MODIFICAR>"
  And   I wait
