import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';

describe('Escenario 08 - Actualizar Miembro Borde', function() 
{ 
    it('Escenario 08 - Actualizar Miembro Borde', function() { 

	const memberPage = new MembersPage();
	const loginPage = new LoginPage();

	// Given: el usuario ha iniciado sesión como administrador
    	loginPage.loginAsAdmin();
	
	const memberEmail = 'fdiazang@gmail.com'
	const memberName2 = 'Anticonstitutionalisticallychronobiologicalpseudohypoparathyroidismiconoclasticmorphophonemicscintillisticallypolymethylmethacrylatophysicochemicalthermodynamicallypluripotentiometricallypneumonoultramicroscopicsilicovolcanoconiosispositivelyelectromagnetosphericphilanthropomorphizationalneurophysiopathological' 


	// When 
	memberPage.goToMembersPage(); 
	memberPage.updateMember(memberEmail, memberName2); 
	// Then 
	}); 


});

