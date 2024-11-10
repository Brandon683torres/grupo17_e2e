Feature: Cambiar nombre a Member

@user1 @web
Scenario: Cambiar nombre a Member - Escenario 18

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I login with "<USUARIO>" and "<PASSWORD>" - Escenario 18
  And I wait
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait
  And I select member page
  And I wait
  And I select member with name "<MEMBER_NAME>"
  And I wait
  And I change member name with "<NEW_MEMBER_NAME>"
  And I wait
  And I should not see the member named "<MEMBER_NAME>"
  And I wait