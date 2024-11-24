import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('50. Create a new tag with this order: 1. Slug, 2. Description, 3. Name' , function() 
{
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  beforeEach(() => 
  {
    cy.clearCookies();
    cy.visit('http://localhost:2368/ghost/#/site');
    loginPage.loginAsAdmin();
  });

  it('50. Create a new tag with this order: 1. Slug, 2. Description, 3. Name' , () => 
  {
	//Given
        tagsPage.visit()
	//When
	tagsPage.clickNewTagButton();
        tagsPage.tagSlug(cy).type(faker.commerce.department())
        tagsPage.tagDescription(cy).type(faker.lorem.paragraph())
        tagsPage.tagNameInput(cy).type(faker.commerce.department()) 
        tagsPage.submit(cy)
	//Then
        tagsPage.checkSubmitSuccess(cy)
    });
});