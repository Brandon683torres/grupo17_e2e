import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('32. Create a tag without name must fail', function() 
{
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  const tagName = 'Nuevo Tag de Cypress';

  beforeEach(() => 
  {
	cy.clearCookies();
	cy.visit('http://localhost:2368/ghost/#/site');
	   
    // Given: el usuario ha iniciado sesión como administrador
    loginPage.loginAsAdmin();
  });
	
  it('32. Create a tag without name must fail' , () => 
  {
        tagsPage.visit()
	tagsPage.clickNewTagButton();
        tagsPage.tagDescription(cy).type(faker.lorem.paragraph())
        tagsPage.submit(cy)
        tagsPage.checkSubmitInvalid(cy)
        tagsPage.checkIfFormError(cy)
  });
});