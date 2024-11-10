Feature: Crea nuevo Miembro - Escenario 16

@user1 @web
Scenario: Crea nuevo Miembro - Escenario 16

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And   I login with "<USUARIO>" and "<PASSWORD>" - Escenario 16
  And   I wait
  When  I click on the Members tab - Escenario 16
  And   I wait
  And   I click on 'New Member' Button
  And   I wait
  And   I create a new member with "<MEMBER_NAME>" and "<MEMBER_EMAIL>"
  And   I wait
  Then  I navigate to page "http://localhost:2368/ghost/#/members"
  And   I wait
  Then  I should see the new member called "<MEMBER_NAME>"
  And   I wait
