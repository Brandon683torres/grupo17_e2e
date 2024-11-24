import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('37. Create a new tag with this order: 1. Name, 2. Color, 3. Description, 4. Slug', function() 
{
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();

  beforeEach(() => 
  {
    cy.clearCookies();
    cy.visit('http://localhost:2368/ghost/#/site');
    loginPage.loginAsAdmin();
  });

  it('37. Create a new tag with this order: 1. Name, 2. Color, 3. Description, 4. Slug' , () => 
  {
        //Given
	tagsPage.visit()
	//When
	tagsPage.clickNewTagButton();
        tagsPage.tagNameInput(cy).type(faker.commerce.department())
        tagsPage.tagColor(cy).type(faker.internet.color().replace('#', ''))
        tagsPage.tagDescription(cy).type(faker.lorem.paragraph())
        tagsPage.tagSlug(cy).type(faker.commerce.department())
        tagsPage.submit(cy)
	//Then
        tagsPage.checkSubmitSuccess(cy)
    });
});