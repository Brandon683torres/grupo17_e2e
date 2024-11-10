Feature: Eliminar un Member

@user1 @web
Scenario: Eliminar un Member - Escenario 17

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I login with "<USUARIO>" and "<PASSWORD>" - Escenario 17
  And I wait
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait
  And I select member page
  And I wait
  And I select member with name "<MEMBER_NAME>"
  And I wait
  And I click delete button
  And I wait
  And I should not see the member named "<MEMBER_NAME>"
  And I wait