import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('98. Update Member - aleatorio', function() 
{ 
    it('98. Update Member - aleatorio', function() { 

	const memberPage = new MembersPage();
	const loginPage = new LoginPage();

	// Given: el usuario ha iniciado sesión como administrador
    	loginPage.loginAsAdmin();
	
	const memberEmail = '@hotmail.com'
	const memberName2 = faker.person.fullName() 

	// When 
	memberPage.goToMembersPage(); 
	memberPage.updateMember(memberEmail, memberName2); 
	// Then 
	//memberPage.verifyMemberCreation(memberName); 
	}); 
});

