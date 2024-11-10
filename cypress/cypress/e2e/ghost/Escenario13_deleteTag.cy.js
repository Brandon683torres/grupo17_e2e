import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';

describe('Eliminar un tag existente', function() {
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  

  beforeEach(() => {
    // Given: el usuario ha iniciado sesión como administrador
    loginPage.loginAsAdmin();

    // Given: el usuario está en la página de administración de posts
    tagsPage.visit();
  });

  it('Debería eliminar un tag', function() {
    const tagName = 'Nuevo Tag de Cypress'; // Cambia esto por el nombre del tag que quieres eliminar

    // Given: El usuario está en la página de tags y ve el tag 'Tag de prueba'
    cy.contains(tagName).should('be.visible');

    // When: El usuario hace clic en el tag para acceder a su página
    tagsPage.clickTag(tagName);

    // El usuario hace clic en el botón de eliminar tag
    tagsPage.clickDeleteButton();
	cy.wait(5000);

    // El usuario confirma la eliminación del tag
    tagsPage.confirmDelete();

    // Then: El tag debería eliminarse y no debería aparecer en la lista de tags
    cy.wait(3000);
    tagsPage.visit();
  });
});
