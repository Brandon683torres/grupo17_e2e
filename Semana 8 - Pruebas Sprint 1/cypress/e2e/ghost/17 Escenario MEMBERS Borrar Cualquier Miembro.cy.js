import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';

describe('Escenario 7 - Borrar Cualquier Miembro', function() 
{ 
    it('Escenario 7 - Borrar Cualquier Miembro', function() { 

	const memberPage = new MembersPage();
	const loginPage = new LoginPage();

	
    	loginPage.loginAsAdmin();

	const memberEmail = '@' 

	memberPage.goToMembersPage(); 
	memberPage.deleteMember(memberEmail); 
	
	}); 


});

