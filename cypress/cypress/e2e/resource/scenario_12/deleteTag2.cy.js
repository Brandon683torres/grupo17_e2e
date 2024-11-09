
import TagsPage from './pages/tagsPage';
import LoginPage from './pages/loginPage';

describe('Eliminar un tag existente', function() {
  const tagsPage = new TagsPage();

  beforeEach(() => {
    // Given: El usuario ha iniciado sesión y está en la página de tags
    cy.visit('http://localhost:2368/ghost/#/signin');
    cy.get('input[name="identification"]').type('bo.torres@uniandes.edu.co');  // Cambia por el correo del administrador
    cy.get('input[name="password"]').type('Bogota*2018');  // Cambia por la contraseña del administrador
    cy.get('button[type="submit"]').click();
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
    //tagsPage.verifyTagDoesNotExist(tagName);
  });
});
