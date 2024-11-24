import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('89. Create Tag con Expresiones Regulares', function() 
{
  const tagsPage  = new TagsPage();
  const loginPage = new LoginPage();
   
  beforeEach(() => 
  {
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
        tagsPage.tagNameInput(cy).type(faker.helpers.fromRegExp('[a-d0-6]{2,8}'))
        tagsPage.tagColor(cy).type(faker.internet.color().replace('#', ''))
        tagsPage.tagSlug(cy).type(faker.helpers.fromRegExp('#{35}prueba expresiones [1-10]'))
        tagsPage.tagDescription(cy).type(faker.lorem.paragraph())
        tagsPage.submit(cy)
	//Then
        tagsPage.checkSubmitSuccess(cy)

        cy.wait(2000)
        cy.visit('http://localhost:2368/ghost/#/tags/');
    }); 
});