import LoginPage from './pages/loginPage';
import PagesPage from './pages/pagesPage';

describe('Editar una pag existente', function() {
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
        pagesPage.filterPublishedPages(); // Llama a la función para aplicar el filtro

        // When: el usuario verifica que la página exista
        pagesPage.getPageIdByTitle(pageTitle).then((id) => {
            if (id) {
                // Then: abre el modo de edición de la página
                pagesPage.edit(id);
				//cy.wait(4000);
                pagesPage.fillPagAdd('Bookmark', 'Coming soon', '');
                cy.wait(4000);
                pagesPage.updatePage();
            } else {
                cy.log(`La página con título "${pageTitle}" no se encontró.`);
                // Aquí puedes agregar acciones si la página no existe
            }
        });
        pagesPage.visit();
    });
});