import LoginPage from '../../pages/loginPage';
import SitePage from '../../pages/sitePage';

describe('Cambiar el color de fondo del sitio', function() {
  const loginPage = new LoginPage();
  const sitePage = new SitePage();
  const color = 'c48282';


  beforeEach(() => {
    // Given: el usuario ha iniciado sesión como administrador
    loginPage.loginAsAdmin();
  });

  
  it('Modificar color del sitio', function() {
	  // Given: el usuario esta en la pagina para cambiar el diseno
	  sitePage.editDesing();
	  
	  // When: el usuario modifica el color del fondo del sitio
	  sitePage.changeColorSite(color);
	  
	  
	  // Then: revisar el cambio del color
	  sitePage.homeSite();
	  cy.wait(1000);
	  
	  
  });
});