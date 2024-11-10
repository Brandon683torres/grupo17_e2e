import PagePage from './pages/PagePage';

describe('Escenario 8 - Create Page', function() 
{   
  it('Escenario 8 - Create Page', function() { 
    cy.log('Inicia Escenario 8 - Create Page');
    const pagePage = new PagePage();

    // Given: el usuario ha iniciado sesión como administrador

    pagePage.login();

    // When: el usuario se ha conectado a la página de Pages

    pagePage.visitPage();

  // When: el usuario realiza creación de Page

    pagePage.writePage(); 

    // Then: el usuario confirma y revisa resultado

    pagePage.clickButtons();  
    cy.log('Termina Escenario8 - Create Page');  
  })
})
