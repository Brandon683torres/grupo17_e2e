import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';

describe('Escenario 09 - generacion con Correo Negativo', function() 
{ 
  const memberPage = new MembersPage();
  const loginPage = new LoginPage();


    it('Escenario 09 - generacion con Correo Negativo', function() { 


    	loginPage.loginAsAdmin();


	
	const campoNombre = 'Andres Toro' // prueba negativa

	const campoCorreo = 'Supercalifragilisticexpialidociousantidisestablishmentarianismhippopotomonstrosesquipedali@YOPMAIL.COM';

	memberPage.goToMembersPage(); 
	memberPage.createMember(campoNombre, campoCorreo); 

	}); 


});

