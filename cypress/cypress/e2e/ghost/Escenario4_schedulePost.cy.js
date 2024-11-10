import PostPage from './pages/PostPage';

describe('Escenario 4 - Schedule Post', function() {   
  it('Escenario 4 - Schedule Post', function() 
  {
    cy.log('Inicia Escenario 4 - Schedule Post');
    const postPage = new PostPage();

    // Given: el usuario ha iniciado sesión como administrador

    postPage.login();

    // When: el usuario se ha conectado a la página de Posts

    postPage.visitPostList(); 

  // When: el usuario escoge opción para programar Post

    postPage.clickSchedulePost();

    // When: el usuario actualiza el Post y republica

    postPage.republish();

    // Then: el usuario confirma y revisa resultado

    postPage.republishButtons();
    cy.log('Finaliza Escenario 4 - Schedule Post');
  })
})