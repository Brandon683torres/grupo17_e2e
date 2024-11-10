Feature: Eliminar una Pagina

@user1 @web
Scenario: Eliminar un post - Escenario 10

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I login with "<USUARIO>" and "<PASSWORD>" - Escenario 10
  And I wait
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait
  And I select delete page with title "<PAGE_ELIMINAR>"
  And I wait
  And I delete page
  And I wait
  And I click confirm delete button
  And I wait
  Then I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait
  And I should not see the post called "<PAGE_ELIMINAR>"
  And I wait