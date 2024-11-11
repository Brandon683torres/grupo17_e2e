import LoginPage from './pages/loginPage';
import PagesPage from './pages/pagesPage';

describe('Despublicar y eliminar una pagina', function() {
    const loginPage = new LoginPage();
    const pagesPage = new PagesPage();
    const pageTitle = 'Pagina video';

    beforeEach(() => {
        // Given: el usuario ha iniciado sesión como administrador
        loginPage.loginAsAdmin();
    });

    it('Verificar que la pagina exista', function() {
        // Given: el usuario está en la página de páginas publicadas
        pagesPage.visit();
        
        // When: el usuario verifica que la página exista
        pagesPage.getPageIdByTitle(pageTitle).then((id) => {
            if (id) {
                // Then: abre el modo de edición de la página, despublica y elimina
                pagesPage.edit(id);
				pagesPage.unpublishPage();
				pagesPage.deletePage();
				
            } else {
                cy.log(`La página con título "${pageTitle}" no se encontró.`);
            }
        });
        pagesPage.visit();
    });
});