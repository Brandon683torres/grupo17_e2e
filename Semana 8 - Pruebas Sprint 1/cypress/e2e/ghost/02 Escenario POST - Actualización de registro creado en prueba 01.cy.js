import PostPage from './pages/PostPage';

describe('Escenario 02 - Actualización de Contenido de POST', function() {   
  it('Escenario 02 - Actualización de Contenido de POST', function() 
  {
    cy.log('02 - Actualización de Registro previamente incluido #00001');
    const postPage = new PostPage();

    // Given: el usuario ha iniciado sesión como administrador

    postPage.login();

    // When: el usuario se ha conectado a la página de Posts

    postPage.visitPostList();

    // And: el usuario realiza la selección de un Post

   let llave = "00001"

    postPage.selectPostInsertado(llave);

    // And: el usuario actualiza el Post

    // Incrusta Data como parte del contenido
    postPage.writePostDataEdit(llave, "\nAhora con dos lineas\n internas de texto adicionales\n"); 
    cy.wait(2500)

    postPage.clickButtons();  

    // Then: el usuario confirma y revisa resultado

    postPage.clickButtons();
    cy.log('Finaliza 02 - Actualización de Registro previamente incluido');
  })
})
