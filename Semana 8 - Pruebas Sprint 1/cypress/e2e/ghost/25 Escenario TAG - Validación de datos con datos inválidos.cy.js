import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';


describe('25 Escenario TAG - Validación de datos con datos inválidos', function () {
    const tagsPage = new TagsPage();
    const loginPage = new LoginPage();
    const name = 'Tecnologia';
    const color = 'FF5733';
    const descripcion = 'Computación en la nube, inteligencia artificial, aprendizaje automático, big data, ciberseguridad'
    

        beforeEach(() => {
            cy.clearCookies();
            cy.visit('http://localhost:2368/ghost/#/site');

            loginPage.loginAsAdmin();

        });

    it('25 Escenario TAG - Validación de datos con datos inválidos', () => {
        //Given
        tagsPage.visit()
        //When
        tagsPage.clickNewTagButton();
        tagsPage.tagColor(cy).type(descripcion)
        tagsPage.tagNameInput(cy).type(name)
        tagsPage.tagDescription(cy).type(descripcion)
        //Then
        tagsPage.checkSubmitInvalid(cy)
    });

});
