import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';


describe('24 Escenario TAG - Modificar Tag', function () {
    const tagsPage = new TagsPage();
    const loginPage = new LoginPage();
    const name = 'aaaaa';
    const name2 = 'Marketing modificado';
	const color = 'FF5733';
	const descripcion = 'Computación en la nube, inteligencia artificial, aprendizaje automático, big data, ciberseguridad'
	const slug = 'Marketing modificado'


    beforeEach(() => {
        cy.clearCookies();
        cy.visit('http://localhost:2368/ghost/#/site');

        // Given: el usuario ha iniciado sesión como administrador
        loginPage.loginAsAdmin();

    });

    it('24 Escenario TAG - Modificar Tag', () => {
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

        // Given: Existe un tag llamado "Marketing"
        tagsPage.visit();
        cy.wait(1000);
        tagsPage.selectTag(name);

        // When: Edita el nombre del tag
        tagsPage.fillTagName(name2);
        tagsPage.submit(cy);

    });

});
