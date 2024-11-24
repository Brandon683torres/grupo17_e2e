import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('33. Create a tag without description must pass', function() 
{
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();  

  beforeEach(() => 
  {
     cy.clearCookies();
     cy.visit('http://localhost:2368/ghost/#/site');
     loginPage.loginAsAdmin();
  });

  it('33. Create a tag without description must pass' , () => {
	//Given
        tagsPage.visit()
	//When
	tagsPage.clickNewTagButton();
        tagsPage.tagNameInput(cy).type(faker.lorem.sentence())
        tagsPage.tagColor(cy).type(faker.internet.color().replace('#', ''))
        tagsPage.submit(cy)
	//Then
        tagsPage.checkSubmitSuccess(cy)
    });
});