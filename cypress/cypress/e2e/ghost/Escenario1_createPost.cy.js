import PostPage from './pages/PostPage';

describe('Escenario 1 - Create Post', function() 
{   
  it('Escenario 1 - Create Post', function() { 
    cy.log('Inicia Escenario 1 - Create Post');
    const postPage = new PostPage();

    // Given: el usuario ha iniciado sesión como administrador

    postPage.login();

    // When: el usuario se ha conectado a la página de Posts

    postPage.visitPost();

    // When: el usuario se ha opcion de crear Posts

    postPage.writePost(); 

    // Then: el usuario confirma y revisa resultado

    postPage.clickButtons();  
    cy.log('Termina Escenario 1 - Create Post');  
  })
})
