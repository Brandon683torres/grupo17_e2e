import  MembersPage  from './pages/MembersPage'; 
import LoginPage from './pages/loginPage';


describe('Escenario 01 - Generación de un nuevo Member', function() 
{ 
  const memberPage = new MembersPage();
  const loginPage = new LoginPage();


    it('Escenario 01 - Generación de un nuevo Miembro', function() { 

	loginPage.loginAsAdmin();
	
	const memberName = "Fabian Diaz"
	const memberEmail = "fdiazang@gmail.com"

	memberPage.goToMembersPage(); 
	memberPage.createMember(memberName, memberEmail); 
	
	}); 


});

