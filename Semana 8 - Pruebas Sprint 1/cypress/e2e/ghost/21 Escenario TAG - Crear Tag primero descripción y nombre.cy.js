import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {
    faker
}
from '@faker-js/faker'

describe('21. Crear Tag primero descripción y nombre', function () {
    const tagsPage = new TagsPage();
    const loginPage = new LoginPage();
	const descripcion= 'Este tag esta relacionado con todos los temas de tecnologia'
	const nombre ='Tecnologia'

    beforeEach(() => {
        cy.clearCookies();
        cy.visit('http://localhost:2368/ghost/#/site');

        loginPage.loginAsAdmin();

    });

    it('21. Crear Tag primero descripción y nombre', () => {
        //Given
        tagsPage.visit()
        //When
        tagsPage.clickNewTagButton();
        tagsPage.tagDescription(cy).type(descripcion)
        tagsPage.tagNameInput(cy).type(nombre)
        tagsPage.submit(cy)
        //Then
        tagsPage.checkSubmitSuccess(cy)
    });

});