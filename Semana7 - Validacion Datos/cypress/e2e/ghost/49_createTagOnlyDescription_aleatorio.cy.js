import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('49. Create a tag only having the description must fail', function() 
{
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  beforeEach(() => 
  {
     cy.clearCookies();
     cy.visit('http://localhost:2368/ghost/#/site');
     loginPage.loginAsAdmin();
  });

  it('49. Create a tag only having the description must fail' , () => 
  {
	//Given
        tagsPage.visit()
	//When
	tagsPage.clickNewTagButton();
        tagsPage.tagDescription(cy).type(faker.lorem.paragraph())
        tagsPage.submit(cy)
	//Then
        tagsPage.checkIfFormError(cy)
    });
});