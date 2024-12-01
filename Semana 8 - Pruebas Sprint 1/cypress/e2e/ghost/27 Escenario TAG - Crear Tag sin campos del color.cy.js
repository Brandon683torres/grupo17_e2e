import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';

describe('27 Escenario TAG - Crear Tag sin campos del color', function () {
    const tagsPage = new TagsPage();
    const loginPage = new LoginPage();
    const name = 'Tecnologia sin color';

    beforeEach(() => {
        cy.clearCookies();

        cy.visit('http://localhost:2368/ghost/#/site');

        loginPage.loginAsAdmin();

    });

    it('27 Escenario TAG - Crear Tag sin campos del color', () => {
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
