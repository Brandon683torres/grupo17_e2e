Feature: Editar un Post Existente

@user1 @web
Scenario: Editar un Post - Escenario 2

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And   I login with "<USUARIO>" and "<PASSWORD>" - Escenario 2
  And   I wait
  When  I click on the Posts tab - Escenario 2
  And   I wait
  And   I select a post with title "<POST_MODIFICAR>"
  And   I wait
  And   I edit the selected post with value "<POST_VALUE>"
  And   I wait
  Then  I navigate to page "http://localhost:2368/ghost/#/posts"
  And   I wait
  And   I should see the new post edited called "<POST_MODIFICAR>"
  And   I wait
