import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('42. Create a tag with this order: 1. Slug, 2. Delete slug, 3. Name', function() 
{
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  beforeEach(() => 
  {
    cy.clearCookies();
    cy.visit('http://localhost:2368/ghost/#/site');
    loginPage.loginAsAdmin();
  });

  it('42. Create a tag with this order: 1. Slug, 2. Delete slug, 3. Name' , () => 
  {
	//Given
        tagsPage.visit()
	//When
	tagsPage.clickNewTagButton();
        tagsPage.tagSlug(cy).type(faker.commerce.department()).focus().clear({force: true})
        tagsPage.tagNameInput(cy).type(faker.commerce.department())     
        tagsPage.submit(cy)
	//Then
        tagsPage.checkSubmitSuccess(cy)
    });
});