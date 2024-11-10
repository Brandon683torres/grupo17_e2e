import PagePage from './pages/PagePage';

describe('Escenario 9 - Delete Page', function() {   
  it('Escenario 9 - Delete Page', function() 
  {
    cy.log('Inicia Escenario 9 - Delete Post');
    const pagePage = new PagePage();

    // Given: el usuario ha iniciado sesión como administrador

    pagePage.login();

    // When: el usuario se ha conectado a la página de Pages

    pagePage.visitPageList();

    // When: el usuario realiza la selección de un Page y borrar

    pagePage.clickDeletePage(); 

    // Then: el usuario confirma y revisa resultado

    pagePage.closeModal();  
    cy.log('Escenario 9 - Delete Page'); 
  })
})
