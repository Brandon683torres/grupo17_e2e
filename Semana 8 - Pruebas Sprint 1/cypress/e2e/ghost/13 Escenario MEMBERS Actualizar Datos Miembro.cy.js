import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';

describe('Escenario 03 - Actualizar datos miembro', function() 
{ 
    it('Escenario 03 - Actualizar datos miembro', function() { 

	const memberPage = new MembersPage();
	const loginPage = new LoginPage();

    	loginPage.loginAsAdmin();
	
	const CorreoActual = '@gmail.com'
	const NuevoNombre = 'Chompiras guanajuato'

	memberPage.goToMembersPage(); 
	memberPage.updateMember(CorreoActual, NuevoNombre); 
	}); 


});

