import LoginPage from '../../pages/loginPage';
import PagesPage from '../../pages/pagesPage';

describe('Crear un nueva Pagina', function() {
  const loginPage = new LoginPage();
  const pagesPage = new PagesPage();
  const pageTitle = 'Pagina programada';


  beforeEach(() => {
    // Given: el usuario ha iniciado sesión como administrador
    loginPage.loginAsAdmin();
  });

  
  it('Crear pagina', function() {
	  // Given: el usuario esta en la pagina de paginas
	  pagesPage.visit();
	  
	  // When: el usuario crea una pagina
	  pagesPage.clickNewPagButton();
	  pagesPage.fillPagTitle(pageTitle);
	  cy.wait(1000);
	  pagesPage.fillPagAdd('div','','');
	  
	  
	  // Then: la pagina se programa la publicacion de la pagina
	  pagesPage.scheduledPage('2024-11-11','9:00');
	  cy.wait(1000);
	  
	  
  });
});