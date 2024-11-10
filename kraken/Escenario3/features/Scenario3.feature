Feature: Eliminar un Post

@user1 @web
Scenario: Eliminar un post - Escenario 3

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I login with "<USUARIO>" and "<PASSWORD>" - Escenario 3
  And I wait
  And I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait
  And I select delete post with title "<POST_ELIMINAR>"
  And I wait
  And I delete post
  And I wait
  And I click confirm delete button
  And I wait
  Then I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait
  And I should not see the post called "<POST_ELIMINAR>"
  And I wait