import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('97. Delete Member - aleatorio', function() 
{ 
    it('97. Delete Member - aleatorio', function() 
    { 
	const memberPage = new MembersPage();
	const loginPage = new LoginPage();

	// Given: el usuario ha iniciado sesión como administrador
    	loginPage.loginAsAdmin();

	const memberName = faker.person.fullName() 
	const memberEmail = '@hotmail.com' 

	// When 
	memberPage.goToMembersPage(); 
	memberPage.deleteMember(memberEmail); 
	// Then 
	//memberPage.verifyMemberCreation(memberName); 
	}); 

});

