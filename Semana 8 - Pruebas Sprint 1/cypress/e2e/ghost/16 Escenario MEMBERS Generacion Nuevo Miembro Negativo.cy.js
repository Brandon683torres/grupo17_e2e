import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';

describe('Escenario 06 - generacion Nuevo Miembro Negativo', function() 
{ 
  const memberPage = new MembersPage();
  const loginPage = new LoginPage();


    it('Escenario 06 - generacion Nuevo Miembro Negativo', function() { 


    	loginPage.loginAsAdmin();


	
	const campoNombre = 'Supercalifragilisticexpialidociousantidisestablishmentarianismhippopotomonstrosesquipedaliophobiahexakosioihexekontahexaphobiaelectroencephalographicallypseudoantidisestablishmentarianismquattuordecillionthanticonstitutionalistanticonstitutionalismhyperphenomelaninconglatinatephilosophunculistantiestablishmentarianismphobiamononucleotidpseudohypoparathyroidism' // prueba negativa

	const campoCorreo = 'PERSONA@YOPMAIL.COM';

	memberPage.goToMembersPage(); 
	memberPage.createMember(campoNombre, campoCorreo); 

	}); 


});

