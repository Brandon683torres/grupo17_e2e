import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('34. Create a tag without color must pass', function() 
{
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();  

  beforeEach(() => 
  {
       cy.clearCookies();   
       cy.visit('http://localhost:2368/ghost/#/site');   
       loginPage.loginAsAdmin();
  });

    it('34. Create a tag without color must pass' , () => 
    {
	//Given
        tagsPage.visit()
	//When
	tagsPage.clickNewTagButton();
        tagsPage.tagNameInput(cy).type(faker.lorem.sentence())
        tagsPage.submit(cy)
	//Then
        tagsPage.checkSubmitSuccess(cy)
    });
});