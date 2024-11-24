import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('43. Create a tag with passing long text', function() 
{
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  beforeEach(() => 
  {
    cy.clearCookies();
    cy.visit('http://localhost:2368/ghost/#/site');
    loginPage.loginAsAdmin();
  });


  it('43. Create a tag with passing long text' , () => 
  {
	//Given
        tagsPage.visit()
	//When
	tagsPage.clickNewTagButton();
        tagsPage.tagNameInput(cy).type(faker.lorem.paragraph())     
        tagsPage.submit(cy)
	//Then
        tagsPage.checkSubmitSuccess(cy)
  });
});