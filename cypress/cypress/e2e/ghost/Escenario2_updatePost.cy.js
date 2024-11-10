import PostPage from './pages/PostPage';

describe('Escenario 2 - Update Post', function() {   
  it('Escenario 2 - Update Post', function() 
  {
    cy.log('Inicia Escenario 2 - Update Post');
    const postPage = new PostPage();

    // Given: el usuario ha iniciado sesión como administrador

    postPage.login();

    // When: el usuario se ha conectado a la página de Posts

    postPage.visitPostList();

    // When: el usuario realiza la selección de un Post

    postPage.selectPost();

    // When: el usuario actualiza el Post

    postPage.updatePost()

    // Then: el usuario confirma y revisa resultado

    postPage.clickButtons();
    cy.log('Finaliza Escenario 2 - Update Post');
  })
})
