import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';
import {faker} from '@faker-js/faker'

describe('96. Create Member - aleatorio', function() 
{ 
  const memberPage = new MembersPage();
  const loginPage = new LoginPage();

  it('96. Create Member - aleatorio', function() 
  { 
	// cy.wait(3000);
	   
    	// Given: el usuario ha iniciado sesión como administrador
    	loginPage.loginAsAdmin();

	const memberName = faker.internet.email()// prueba negativa
	const memberEmail = faker.person.fullName() // prueba negativa

	// When 
	memberPage.goToMembersPage(); 
	memberPage.createMember(memberName, memberEmail); 
	// Then 
	memberPage.verifyMemberCreation(memberName); 
	}); 
});

