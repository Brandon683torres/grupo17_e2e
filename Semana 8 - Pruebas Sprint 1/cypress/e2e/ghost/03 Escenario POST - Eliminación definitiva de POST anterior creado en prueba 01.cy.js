import PostPage from './pages/PostPage';

describe('Escenario 03 - Eliminación automatizadas de POST incluido anteriormente', function() {   
  it('Escenario 3 - Delete Post', function() 
  {
    cy.log('03 - Eliminación automatizadas de POST incluido anteriormente');
    const postPage = new PostPage();

    // Given: el usuario ha iniciado sesión como administrador

    postPage.login();

    // When: el usuario se ha conectado a la página de Posts

    postPage.visitPostList();

    // And: el usuario realiza la selección de borrado de un Post

    var llave = '00001'

    postPage.clickDeletePost('00001');  

    // Then: el usuario confirma opción de borrado de Post

    cy.log('03 - Eliminación automatizadas de POST incluido anteriormente'); 
  })
})

