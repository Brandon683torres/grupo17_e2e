// Schedule de POST incluido anteriormente - Estado Published 
// debe correrse Escenario 01 antes ( creación )

import PostPage from './pages/PostPage';

describe('09. Schedule de POST', function() {   
  it('09. Schedule de POST', function() 
  {
    cy.log('Inicia 09. Schedule de POST');
    const postPage = new PostPage();

    // Given: el usuario ha iniciado sesión como administrador

    postPage.login();

    // When: el usuario se ha conectado a la página de Posts

    postPage.visitPostList(); 

    // And: el usuario escoge opción para programar Post

    let titulo = '00001'

    postPage.clickSchedulePost(titulo);

    // And: el usuario actualiza el Post y republica

    postPage.republish();

    // Then: el usuario confirma y revisa resultado del proceso de Schedule

    postPage.republishButtons();
    cy.log('09. Schedule de POST');
  })
})