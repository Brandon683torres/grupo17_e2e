import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('94. Export Members - aleatorio', function() 
{ 
    it('94. Export Members - aleatorio', function() 
    { 
	const memberPage = new MembersPage();
  	const loginPage = new LoginPage();

	// cy.wait(3000);
	   
    	// Given: el usuario ha iniciado sesión como administrador
    	loginPage.loginAsAdmin();
	
	const memberName = faker.person.fullName() 
	const memberEmail = faker.internet.email()

	// When 
	memberPage.goToMembersPage(); 
	memberPage.exportMember(); 
	// Then 
	//memberPage.verifyMemberCreation(memberName); 
    }); 
});

