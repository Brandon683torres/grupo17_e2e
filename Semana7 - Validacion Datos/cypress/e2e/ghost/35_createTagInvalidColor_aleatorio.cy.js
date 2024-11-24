import TagsPage from './pages/TagsPage';
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('35. Enter invalid color must fail', function() {
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
   
  beforeEach(() => 
  {
     cy.clearCookies();
     cy.visit('http://localhost:2368/ghost/#/site')   
     loginPage.loginAsAdmin();   
  });

  it('35. Enter invalid color must fail' , () => 
  {
	//Given
        tagsPage.visit()
	//When
	tagsPage.clickNewTagButton();
        tagsPage.tagNameInput(cy).type(faker.lorem.sentence())
        tagsPage.tagColor(cy).type(faker.lorem.sentence())
        tagsPage.submit(cy)
	//Then
        tagsPage.checkIfFormError(cy)
    });    
});