import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('31. Create Valid Tag', function() 
{
  const tagsPage  = new TagsPage();
  const loginPage = new LoginPage();
   
  beforeEach(() => {
	  cy.clearCookies();
	  cy.visit('http://localhost:2368/ghost/#/site');
	   
    // Given: el usuario ha iniciado sesión como administrador
    loginPage.loginAsAdmin();
 
  });
  
  it('31. Create Valid Tag' , () => 
  {
	//Given
        tagsPage.visit()
	//when
	tagsPage.clickNewTagButton();
        tagsPage.tagNameInput(cy).type(faker.commerce.department())
        tagsPage.tagColor(cy).type(faker.internet.color().replace('#', ''))
        tagsPage.tagSlug(cy).type(faker.commerce.department())
        tagsPage.tagDescription(cy).type(faker.lorem.paragraph())
        tagsPage.submit(cy)
	//Then
        tagsPage.checkSubmitSuccess(cy)

        cy.wait(2000)
        cy.visit('http://localhost:2368/ghost/#/tags/');
    }); 
});