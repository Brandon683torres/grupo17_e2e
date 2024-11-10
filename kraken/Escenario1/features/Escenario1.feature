Feature: Crea nuevo Post - Escenario 1

@user1 @web
Scenario: Crea nuevo Post - Escenario 1

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And   I login with "<USUARIO>" and "<PASSWORD>" - Escenario 1
  And   I wait
  When  I click on the Posts tab - Escenario 1
  And   I wait
  And   I click on 'New Post' Button
  And   I wait
  And   I create a new post with "<POST_TITLE>" and "<POST_CONTENT>"
  And   I wait
  Then  I navigate to page "http://localhost:2368/ghost/#/posts"
  And   I wait
  And   I should see the new post edited called "<POST_TITLE>"
  And   I wait
