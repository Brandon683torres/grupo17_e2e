import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('45. Create a tag with passing long text to the color', function() 
{
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  beforeEach(() => 
  {
    cy.clearCookies();
    cy.visit('http://localhost:2368/ghost/#/site');
    loginPage.loginAsAdmin();
  });

  it('45. Create a tag with passing long text to the color' , () => 
  {
    //Given
    tagsPage.visit()
    //When
    tagsPage.clickNewTagButton();
    tagsPage.tagNameInput(cy).type(faker.commerce.department())   
    tagsPage.submit(cy)
    //Then
    tagsPage.checkSubmitSuccess(cy)
    tagsPage.checkIfFormError(cy)
  });
});