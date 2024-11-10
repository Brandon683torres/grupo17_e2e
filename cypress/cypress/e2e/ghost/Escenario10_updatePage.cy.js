import PagePage from './pages/PagePage';

describe('Escenario 10 - Update Page', function() {   
  it('Escenario 10 - Update Page', function() 
  {
    cy.log('Inicia Escenario 10 - Update Page');
    const pagePage = new PagePage();

    // Given: el usuario ha iniciado sesión como administrador

    pagePage.login();

    // When: el usuario se ha conectado a la página de Pages

    pagePage.visitPageList();

    // When: el usuario realiza la selección de una Page

    pagePage.selectPage();

    // When: el usuario actualiza la Page

    pagePage.updatePage()

    // Then: el usuario confirma 

    pagePage.clickButtonsUpdate()

    // Then: el usuario revisa resultado

    pagePage.visitPageList();
    cy.log('Finaliza Escenario 10 - Update Page');
  })
})
