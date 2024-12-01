import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';


describe('26 Escenario TAG - Buscar Tag', function () {
    const tagsPage = new TagsPage();
    const loginPage = new LoginPage();
	const name = 'aaaaaa';
    const color = 'FF5733';
    const descripcion = 'Computación en la nube, inteligencia artificial, aprendizaje automático, big data, ciberseguridad'
	const slug = 'Tecnologia-slug';

    beforeEach(() => {
        cy.clearCookies();
        cy.visit('http://localhost:2368/ghost/#/site');

        // Given: el usuario ha iniciado sesión como administrador
        loginPage.loginAsAdmin();

    });

    it('26 Escenario TAG - Buscar Tag', () => {
        //Given
        tagsPage.visit()
        //when
        tagsPage.clickNewTagButton();
        tagsPage.tagNameInput(cy).type(name)
        tagsPage.tagColor(cy).type(color)
        tagsPage.tagSlug(cy).type(slug)
        tagsPage.tagDescription(cy).type(descripcion)
        tagsPage.submit(cy)
        //Then
        tagsPage.checkSubmitSuccess(cy)

        // Given
        tagsPage.visit();
        cy.wait(1000);
        tagsPage.selectTag(name);


    });

});
