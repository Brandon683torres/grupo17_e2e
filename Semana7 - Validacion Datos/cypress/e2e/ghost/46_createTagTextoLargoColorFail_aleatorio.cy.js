import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('46. Create a tag with passing long text to the color must generate a form field error', function() 
{
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  beforeEach(() => 
  {
    cy.clearCookies();
    cy.visit('http://localhost:2368/ghost/#/site');
    loginPage.loginAsAdmin();
  });

  it('46. Create a tag with passing long text to the color must generate a form field error' , () => 
  {
        //Given
	tagsPage.visit()
	//When
	tagsPage.clickNewTagButton();
        tagsPage.tagNameInput(cy).type(faker.commerce.department())
        tagsPage.tagColor(cy).type(faker.lorem.text())
	//Then
        tagsPage.checkIfFormError(cy)
  });
});