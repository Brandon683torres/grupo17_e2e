import PostPage from './pages/PostPage';

describe('Escenario 5 - Add Excerpt to Post', function() {   
  it('Escenario 5 - Add Tag to Post', function() 
  {
    cy.log('Inicia Escenario 5 - Add Excerpt  to Post');
    const postPage = new PostPage();

    // Given: el usuario ha iniciado sesión como administrador

    postPage.login();

    // When: el usuario se ha conectado a la página de Posts

    postPage.visitPostList();

    // When: el usuario realiza la selección de un Post

    postPage.selectPost();

    // When: el usuario cambia el valor del Excerpt

    postPage.addExcerptPost();

    // Then: el usuario confirma y revisa resultado

    postPage.publishExcerpt();
  })
})