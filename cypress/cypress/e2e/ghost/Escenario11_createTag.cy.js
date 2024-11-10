import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';

describe('Crear un nuevo Tag', function() {
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  const tagName = 'Nuevo Tag de Cypress';
  

  beforeEach(() => {
    // Given: el usuario ha iniciado sesión como administrador
    loginPage.loginAsAdmin();

    // Given: el usuario está en la página de administración de posts
    tagsPage.visit();
  });


  it('Debería permitir crear un nuevo Tag', function() {
    // Given: el usuario está en la página de tags
    tagsPage.visit();

    // When: el usuario crea un nuevo tag con nombre y descripción
    tagsPage.clickNewTagButton();
    tagsPage.fillTagName(tagName);
    tagsPage.fillTagDescription('Descripción del nuevo tag de prueba.');

    // Then: el tag debería guardarse exitosamente y estar visible en la lista de tags
    tagsPage.saveTag();
	cy.wait(1000);
	tagsPage.visit();
  
  });
});