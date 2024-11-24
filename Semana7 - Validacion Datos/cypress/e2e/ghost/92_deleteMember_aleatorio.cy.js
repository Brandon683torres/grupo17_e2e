import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('92. Delete Member - aleatorio', function() 
{ 
    it('92. Delete Member - aleatorio', function() 
    { 

	const memberPage = new MembersPage();
	const loginPage = new LoginPage();

	// Given: el usuario ha iniciado sesión como administrador
    	loginPage.loginAsAdmin();

	const memberName = faker.person.fullName() 
	const memberEmail = faker.internet.email() 

	// When 
	memberPage.goToMembersPage(); 
	memberPage.deleteMember(memberEmail); 

	// Then 
	// memberPage.verifyMemberCreation(memberName); 
     }); 
});

