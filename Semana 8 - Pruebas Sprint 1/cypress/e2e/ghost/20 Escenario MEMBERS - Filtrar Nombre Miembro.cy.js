import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';

describe('Escenario 10 - Filtrar', function() 
{ 
 
    it('Escenario 10 - Filtrar', function() { 

	const memberPage = new MembersPage();
  	const login = new LoginPage();
	login.loginAsAdmin();

	cy.wait(3000);
	   
    	// Given: el usuario ha iniciado sesión como administrador

	const nombreFiltro  = 'Fabian'

	// When 
	memberPage.goToMembersPage(); 
	memberPage.filterMember(nombreFiltro); 

	// Then 
	}); 


});

