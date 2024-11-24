import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('40. Crear un nuevo Tag', function() 
{
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  beforeEach(() => 
  {
     cy.clearCookies();
     cy.visit('http://localhost:2368/ghost/#/site');
     loginPage.loginAsAdmin();  
  });

  it('40. Create a new tag with this order: 1. Slug, 2. Color, 3. Name, 4. Description' , () => 
  {
	//Given
        tagsPage.visit()
	//When
	tagsPage.clickNewTagButton();
        tagsPage.tagSlug(cy).type(faker.commerce.department())
        tagsPage.tagColor(cy).type(faker.internet.color().replace('#', ''))
        tagsPage.tagNameInput(cy).type(faker.commerce.department())
        tagsPage.tagDescription(cy).type(faker.lorem.paragraph())        
        tagsPage.submit(cy)
	//Then
        tagsPage.checkSubmitSuccess(cy)
    });
});