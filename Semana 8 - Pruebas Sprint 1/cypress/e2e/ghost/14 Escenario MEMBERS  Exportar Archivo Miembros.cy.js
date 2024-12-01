import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';

describe('Escenario 04 - Exportar archivo miembros', function() 
{ 
    it('Escenario 04 - Exportar archivo miembros', function() { 

	const memberPage = new MembersPage();
  	const loginPage = new LoginPage();


    	loginPage.loginAsAdmin();

	memberPage.goToMembersPage(); 
	memberPage.exportMember(); 
	}); 


});

