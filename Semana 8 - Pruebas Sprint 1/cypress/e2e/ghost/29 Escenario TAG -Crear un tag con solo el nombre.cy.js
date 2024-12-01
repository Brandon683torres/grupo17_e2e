import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';


describe('29 Escenario TAG -Crear un tag con solo el nombre', function () {
    const tagsPage = new TagsPage();
    const loginPage = new LoginPage();
	const name = 'Salud';

    beforeEach(() => {
        cy.clearCookies();
        cy.visit('http://localhost:2368/ghost/#/site');

        loginPage.loginAsAdmin();

    });

    it('29 Escenario TAG -Crear un tag con solo el nombre', () => {
        //Given
        tagsPage.visit()
        //When
        tagsPage.clickNewTagButton();
        tagsPage.tagNameInput(cy).type(name)
        tagsPage.submit(cy)
        //Then
        tagsPage.checkSubmitSuccess(cy)
    });

});
