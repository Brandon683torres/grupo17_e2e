import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';

describe('Actualizar la descripción de un tag', function() {
  const tagsPage = new TagsPage();
  const tagName = 'Nuevo Tag de Cypress';
  const currentDateTime = new Date().toLocaleString();
  const loginPage = new LoginPage();
  

  beforeEach(() => {
    // Given: el usuario ha iniciado sesión como administrador
    loginPage.loginAsAdmin();

    // Given: el usuario está en la página de administración de posts
    tagsPage.visit();
  });

  it('Debería actualizar la descripción de un tag con la fecha y hora actuales', function() {
    // Given: El usuario está en la lista de tags
    tagsPage.visit();

    // When: El usuario selecciona un tag y actualiza su descripción con la fecha y hora actuales
    tagsPage.selectTag(tagName);
    tagsPage.updateTagDescription(`Descripción actualizada el ${currentDateTime}`);

    // Then: La descripción del tag debería actualizarse correctamente
	 cy.wait(1000);
	tagsPage.visit();
	// tagsPage.selectTag(tagName);
   
  });
});
