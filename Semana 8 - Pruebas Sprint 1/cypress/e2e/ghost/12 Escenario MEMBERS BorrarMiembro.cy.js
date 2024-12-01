import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';

describe('Escenario 02 - Borrar un miembro', function() 
{ 
    it('Escenario 02 - Borrar un miembro', function() { 

	const memberPage = new MembersPage();
	const loginPage = new LoginPage();

    	loginPage.loginAsAdmin();

	const Correo = '@gmail.com'

	memberPage.goToMembersPage(); 
	memberPage.deleteMember(Correo); 
	}); 


});

