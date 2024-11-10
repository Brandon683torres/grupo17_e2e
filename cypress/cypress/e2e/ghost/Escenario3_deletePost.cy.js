import PostPage from './pages/PostPage';

describe('Escenario 3 - Delete Post', function() {   
  it('Escenario 3 - Delete Post', function() 
  {
    cy.log('Inicia Escenario 3 - Delete Post');
    const postPage = new PostPage();

  // Given: el usuario ha iniciado sesión como administrador

    postPage.login();

    // When: el usuario se ha conectado a la página de Posts

    postPage.visitPostList();

    // When: el usuario realiza la selección de borrado de un Post

    postPage.clickDeletePost(); 

    // Then: el usuario confirma opción de borrado de Post

    postPage.closeModal();  

    cy.log('Escenario 3 - Delete Post'); 
  })
})
