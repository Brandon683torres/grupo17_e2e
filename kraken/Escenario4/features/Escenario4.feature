Feature: Schedule a Post Existente

@user1 @web
Scenario: Schedule a Post Existente - Escenario 4

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And   I login with "<USUARIO>" and "<PASSWORD>" - Escenario 4
  And   I wait
  When  I click on the Posts tab - Escenario 4
  And   I wait
  And   I select a post with title "<POST_SCHEDULE>"
  And   I wait
  And   I schedule the selected post 
  And   I wait
  Then  I navigate to page "http://localhost:2368/ghost/#/posts"
  And   I wait
  And   I should see the new post scheduled called "<POST_SCHEDULE>"
  And   I wait
