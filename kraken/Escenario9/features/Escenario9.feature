Feature: Editar una Pagina Publicada

@user1 @web
Scenario: Editar una Pagina Publicada - Escenario 9

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And   I login with "<USUARIO>" and "<PASSWORD>" - Escenario 9
  And   I wait
  When  I click on the Pages tab - Escenario 9
  And   I wait
  And   I select a page with title "<PAGE_MODIFICAR>"
  And   I wait
  And   I edit the selected page with value "<PAGE_VALUE>"
  And   I wait
  Then  I navigate to page "http://localhost:2368/ghost/#/pages"
  And   I wait
  And   I should see the new page edited called "<PAGE_MODIFICAR>"
  And   I wait
