import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('41. Create a tag with this order: 1. Name, 2. Delete name, 3 Name', function() 
{
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  beforeEach(() => 
  {
      cy.clearCookies();
      cy.visit('http://localhost:2368/ghost/#/site');
      loginPage.loginAsAdmin();
  });

  it('41. Create a tag with this order: 1. Name, 2. Delete name, 3 Name' , () => 
  {
	//Given
        tagsPage.visit()
	//When
	tagsPage.clickNewTagButton();
        tagsPage.tagNameInput(cy).type(faker.commerce.department())
        tagsPage.tagNameInput(cy).type(faker.commerce.department())     
        tagsPage.submit(cy)
	//Then
        tagsPage.checkSubmitSuccess(cy)
    }); 
});