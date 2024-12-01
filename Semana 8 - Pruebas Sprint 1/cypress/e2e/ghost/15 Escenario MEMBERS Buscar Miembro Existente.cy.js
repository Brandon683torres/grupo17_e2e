import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';

describe('Escenario 05 - Buscar miembro con filtro', function() 
{ 
    const memberPage = new MembersPage();
    const loginPage = new LoginPage();
    	
	it('Escenario 05 - Buscar miembro con filtro', function() { 
	cy.wait(3000);
    	loginPage.loginAsAdmin();
	cy.wait(3000);

	const nombreBuscar = 'Chespirito';

	memberPage.goToMembersPage(); 
	memberPage.filterMember(nombreBuscar); 
	}); 


});
