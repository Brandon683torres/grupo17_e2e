import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('44. Create a tag with passing long text to the name must fail', function() 
{
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  beforeEach(() => 
  {
     cy.clearCookies();
     cy.visit('http://localhost:2368/ghost/#/site');
     loginPage.loginAsAdmin();
  });

  it('44. Create a tag with passing long text to the name must fail' , () => 
  {
	//Given
        tagsPage.visit()
	//When
	tagsPage.clickNewTagButton();
        tagsPage.tagNameInput(cy).type(faker.lorem.words(100))     
        tagsPage.submit(cy)
	//Then
        tagsPage.checkIfFormError(cy)
        tagsPage.checkSubmitInvalid(cy)
  });
});