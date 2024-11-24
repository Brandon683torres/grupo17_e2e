import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {
    faker
}
from '@faker-js/faker'

describe('36. Enter invalid description must fail', function () 
{
    const tagsPage = new TagsPage();
    const loginPage = new LoginPage();
    
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('http://localhost:2368/ghost/#/site');

        loginPage.loginAsAdmin();

    });

    it('36. Enter invalid description must fail', () => 
    {
	//Given
        tagsPage.visit()
	//When
        tagsPage.clickNewTagButton();
        tagsPage.tagNameInput(cy).type(faker.lorem.sentence())
        tagsPage.tagDescription(cy).type(faker.lorem.words(100))
        tagsPage.submit(cy)
	//Then
        tagsPage.checkIfFormError(cy)
    });

});
