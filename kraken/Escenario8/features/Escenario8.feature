Feature: Crea nueva Pagina - Escenario 8

@user1 @web
Scenario: Crea nueva Pagina - Escenario 8

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And   I login with "<USUARIO>" and "<PASSWORD>" - Escenario 8
  And   I wait
  When  I click on the Pages tab - Escenario 8
  And   I wait
  And   I click on 'New Page' Button
  And   I wait
  And   I create a new page with "<TITULO_PAGE>" and "<CONTENIDO_PAGE>"
  And   I wait
  Then  I navigate to page "http://localhost:2368/ghost/#/pages"
  And   I wait
  And   I should see the new page created called "<TITULO_PAGE>"
  And   I wait
